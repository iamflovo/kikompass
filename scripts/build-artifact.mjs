// Bündelt die App zu einer einzigen HTML-Seite für ein Claude-Artifact (wie GTA- und Tape-to-Tape-Guide).
// Ausgabe: dist/artifact/ki-kompass.html plus radar-live.json und radar-market.json als Begleitdateien.
// Mit --no-feeds werden die Feeds nicht abgefragt (leere Platzhalter).
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {sources, marketSources} from '../app/radar-data.js';
import {getFeeds} from '../server/feeds.js';

const app = name => new URL('../app/'+name,import.meta.url);
const out = new URL('../dist/artifact/',import.meta.url);
await mkdir(out,{recursive:true});

const html = await readFile(app('index.html'),'utf8');
const css = await readFile(app('radar.css'),'utf8');
const icon = 'data:image/png;base64,'+(await readFile(app('icon-192.png'))).toString('base64');
const data = (await readFile(app('radar-data.js'),'utf8')).replace(/^export /gm,'');
let radar = await readFile(app('radar.js'),'utf8');
const begriffe = await readFile(app('begriffe.js'),'utf8');
const zones = await readFile(app('zones.js'),'utf8');

function replaceOnce(text, search, replacement) {
  if (!text.includes(search)) throw new Error('Nicht gefunden: '+search.slice(0,80));
  return text.replace(search, replacement);
}

// radar.js: Import entfernen (Daten stehen davor), Service Worker gibt es in Artifacts nicht,
// Feeds kommen aus den mitveröffentlichten JSON-Dateien.
radar = radar.replace(/^import .*?;\n/m,'');
radar = radar.replace(/\nif \('serviceWorker' in navigator\) \{[\s\S]*?\n\}\n/,'\n');
radar = replaceOnce(radar,"fetch('radar-'+scope+'.json'+query,","fetch('radar-'+scope+'.json',");

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
const title = head.match(/<title>[\s\S]*?<\/title>/)[0];

let headOut = head
  .replace(title,'')
  .replace(/<meta charset="utf-8">/,'')
  .replace(/<meta name="viewport"[^>]*>/,'');
headOut = replaceOnce(headOut,'<link rel="manifest" href="manifest.webmanifest">','');
headOut = replaceOnce(headOut,'<link rel="apple-touch-icon" href="icon-192.png"><link rel="icon" type="image/png" href="icon-192.png">',
  '<link rel="apple-touch-icon" href="'+icon+'"><link rel="icon" href="'+icon+'"><meta name="mobile-web-app-capable" content="yes">');
headOut = replaceOnce(headOut,'<link rel="stylesheet" href="radar.css">','<style>\n'+css+'\n</style>');

// Dunkle Farbwelt sofort setzen, bevor die Skripte laufen.
let bodyOut = '<script>document.body.dataset.zone="radar"</script>' + replaceOnce(body,'src="icon-192.png"','src="'+icon+'"');
bodyOut = replaceOnce(bodyOut,'<script src="begriffe.js"></script>','<script>\n'+begriffe+'\n</script>');
bodyOut = replaceOnce(bodyOut,'<script src="zones.js"></script>','<script>\n'+zones+'\n</script>');
bodyOut = replaceOnce(bodyOut,'<script type="module" src="radar.js"></script>',
  '<script type="module">\n'+data+'\n'+radar+'\n</script>');

// Kein doctype/html/head/body: das Artifact ergänzt das Gerüst beim Veröffentlichen.
await writeFile(new URL('ki-kompass.html',out), title+'\n'+headOut+'\n'+bodyOut+'\n');

const skipFeeds = process.argv.includes('--no-feeds');
const empty = list => ({checkedAt:new Date().toISOString(), statuses:list.filter(s=>s.feed).map(({id})=>({id,ok:false})), items:[]});
for (const [scope,list] of [['live',sources],['market',marketSources]]) {
  const feed = skipFeeds ? empty(list) : await getFeeds(list);
  await writeFile(new URL('radar-'+scope+'.json',out),JSON.stringify(feed));
  console.log('radar-'+scope+'.json: '+feed.items.length+' Meldungen');
}
console.log('Artifact-Seite liegt in dist/artifact/ki-kompass.html');
