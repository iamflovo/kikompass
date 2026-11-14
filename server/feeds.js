const entities = {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '};

function plain(value) {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (_, code) => {
      if (!code.startsWith('#')) return entities[code] || ' ';
      const number = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1));
      return number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : ' ';
    }).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function field(item, tag) {
  return plain(item.match(new RegExp('<'+tag+'(?:\\s[^>]*)?>([\\s\\S]*?)<\\/'+tag+'>','i'))?.[1] || '');
}

function httpsLink(value, fallback) {
  try {
    const link = new URL(value, fallback);
    return value && link.protocol === 'https:' ? link.href : fallback;
  } catch { return fallback; }
}

export function parseFeed(body, source) {
  const results = [];
  if (source.kind === 'claude') {
    for (const match of body.matchAll(/^#{2,4} ([A-Z][a-z]+ \d{1,2}, \d{4})[^\n]*\n([\s\S]*?)(?=^#{2,4} |$(?![\s\S]))/gm)) {
      const date = new Date(match[1]);
      if (!Number.isFinite(date.valueOf())) continue;
      const line = match[2].split('\n').find(value => /^\s*[*-] /.test(value)) || '';
      const title = line.replace(/^\s*[*-] /,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/[*`]/g,'').trim();
      if (!title) continue;
      const day = date.toISOString().slice(0, 10);
      results.push({title:title.slice(0,220),url:source.url,date:day,provider:source.provider,source:source.label,language:source.language});
      if (results.length >= 8) break;
    }
    return results;
  }
  for (const match of body.matchAll(/<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi)) {
    const item = match[2], title = field(item,'title');
    const url = httpsLink(field(item,'link') || plain(item.match(/<link\b[^>]*\bhref=["']([^"']+)["']/i)?.[1] || ''), source.url);
    const date = new Date(field(item,'pubDate') || field(item,'published') || field(item,'updated'));
    if (!title || !Number.isFinite(date.valueOf())) continue;
    const searchText = [title,field(item,'description'),field(item,'summary'),field(item,'category')].join(' ');
    if (source.match && !source.match.test(searchText)) continue;
    results.push({title:title.slice(0,220),url,date:date.toISOString().slice(0,10),provider:source.provider,source:source.label,language:source.language});
    if (results.length >= 8) break;
  }
  return results;
}

export async function getFeeds(sources, read = fetch) {
  const responses = await Promise.all(sources.filter(source => source.feed).map(async source => {
    try {
      const response = await read(source.feed, {signal:AbortSignal.timeout(6500), redirect:'follow'});
      if (!response.ok) throw new Error('Quelle nicht erreichbar');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let body = '', bytes = 0;
      try {
        while (true) {
          const {done, value} = await reader.read();
          if (done) break;
          bytes += value.length;
          if (bytes > 4_000_000) throw new Error('Quelle zu groß');
          body += decoder.decode(value,{stream:true});
        }
        body += decoder.decode();
      } finally { await reader.cancel().catch(() => {}); }
      const items = parseFeed(body, source);
      if (!items.length && !(source.match && /<(item|entry)[\s>]/i.test(body))) throw new Error('Keine lesbaren Meldungen');
      return {id:source.id, ok:true, items};
    } catch { return {id:source.id, ok:false, items:[]}; }
  }));
  const statuses = responses.map(({id,ok})=>({id,ok}));
  const seen = new Set();
  const items = responses.flatMap(source=>source.items).filter(item=>{
    const key = item.provider+'|'+item.date+'|'+item.title;
    if (seen.has(key)) return false;
    seen.add(key); return true;
  }).sort((a,b)=>b.date.localeCompare(a.date));
  return {checkedAt:new Date().toISOString(), statuses, items};
}
