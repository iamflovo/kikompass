import {editorialDate, releases, sources, marketNews, marketSources, germanSource} from './radar-data.js';

const select = id => document.getElementById(id);
const element = (tag,text,cls) => {
  const result = document.createElement(tag);
  if (text) result.textContent = text;
  if (cls) result.className = cls;
  return result;
};
const formatDate = date => new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin'}).format(new Date(date));
const safeUrl = value => {
  try { const url = new URL(value); return url.protocol==='https:' ? url.href : null; }
  catch { return null; }
};
const keyOf = item => [item.provider,item.date,item.title].join('|');
let saved = new Map();
try { saved = new Map(JSON.parse(localStorage.getItem('ki-radar-saved') || '[]')); } catch {}
const liveFeeds = {live:null,market:null};
let view = 'brief';

function link(text,href) {
  const a = element('a',text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}

function sourceActions(url, originalUrl = url, knownGerman = false) {
  const actions = element('div',null,'radar-source-actions');
  if (!safeUrl(originalUrl)) return actions;
  const german = knownGerman ? {kind:'original'} : germanSource(url);
  if (german?.kind === 'original') {
    actions.append(link('Deutschsprachige Quelle ↗',originalUrl));
    return actions;
  }
  actions.append(link('Originalquelle ↗',originalUrl));
  if (german) {
    const translated = link(german.kind === 'edition' ? 'Deutsche Fassung ↗' : 'Auf Deutsch lesen ↗',german.url);
    if (german.kind === 'machine') {
      translated.title = 'Maschinelle Übersetzung über Google Übersetzer';
      translated.setAttribute('aria-label','Auf Deutsch lesen · maschinelle Übersetzung über Google');
    }
    actions.append(translated);
  }
  return actions;
}

document.querySelectorAll('#radar [data-radar-panel="grok"] a, #radar [data-radar-panel="sales"] a').forEach(anchor=>{
  const actions = sourceActions(anchor.href);
  const original = actions.querySelector('a');
  if (original) original.textContent = anchor.textContent;
  anchor.replaceWith(actions);
});

function newsCard(item) {
  const node = element('article',null,'card');
  const meta = element('div',null,'radar-meta');
  meta.append(element('span',item.provider,'badge'),element('span',formatDate(item.date),'radar-date'));
  if (item.type) meta.append(element('span',item.type,'badge'));
  node.append(meta,element('h3',item.title));
  if (item.status) node.append(element('p',item.status,'radar-date'));
  if (item.summary) node.append(element('p',item.summary));
  if (item.impact) {
    const check = element('details',null,'radar-check');
    check.append(element('summary','Praxis-Check für den Betrieb'),element('p',item.impact,'radar-impact'));
    node.append(check);
  }
  if (item.source) node.append(element('p',item.source,'radar-date'));
  const footer = element('div',null,'card-actions');
  if (safeUrl(item.url)) footer.append(sourceActions(item.url,item.originalUrl,item.language==='de'));
  const key = keyOf(item);
  const button = element('button',saved.has(key) ? 'Gemerkt ✓' : 'Merken','button');
  button.type = 'button';
  button.setAttribute('aria-pressed',String(saved.has(key)));
  button.addEventListener('click',()=>{
    if (saved.has(key)) saved.delete(key); else saved.set(key,item);
    try { localStorage.setItem('ki-radar-saved',JSON.stringify([...saved])); } catch {}
    if (view==='saved') { renderProviderOptions(); render(); }
    else {
      button.textContent = saved.has(key) ? 'Gemerkt ✓' : 'Merken';
      button.setAttribute('aria-pressed',String(saved.has(key)));
    }
  });
  footer.append(button);
  node.append(footer);
  return node;
}

const feedPanels = {
  live:{button:'radar-refresh',status:'radar-live-status',list:'radar-source-list',sources},
  market:{button:'radar-market-refresh',status:'radar-market-status',list:'radar-market-sources',sources:marketSources}
};

function renderCards(id,items,empty) {
  select(id).replaceChildren(...(items.length ? items.map(newsCard) : [element('p',empty,'notice')]));
}

function render() {
  const query = select('radar-search').value.toLowerCase().trim();
  const provider = select('radar-provider').value;
  const type = select(view==='market' ? 'radar-market-type' : 'radar-type').value;
  const match = item => (!provider || item.provider===provider)
    && [item.title,item.summary,item.impact,item.provider,item.source].filter(Boolean).join(' ').toLowerCase().includes(query);
  const refined = items => items.filter(item=>match(item)&&(!type || item.type===type));
  if (view==='market') {
    renderCards('radar-market-news',refined(marketNews),'Keine passenden Meldungen im Marktbriefing.');
    const items = liveFeeds.market?.items || [];
    renderCards('radar-market-live',type ? [] : items.filter(match),
      type ? 'Der Themenfilter gilt für das redaktionelle Marktbriefing.' : liveFeeds.market ? 'Keine passenden Live-Meldungen. Die Pressequellen findest du unten.' : '');
  }
  if (view==='live') renderCards('radar-live-news',(liveFeeds.live?.items||[]).filter(match),liveFeeds.live ? 'Keine passenden Live-Meldungen. Die Quellen findest du unten.' : '');
  if (view==='brief') renderCards('radar-news',refined([...releases].sort((a,b)=>b.date.localeCompare(a.date))),'Keine passenden Meldungen.');
  if (view==='saved') renderCards('radar-saved',[...saved.values()].filter(match),'Keine passenden Meldungen in deiner Merkliste.');
}

async function refresh(scope,force) {
  const panel = feedPanels[scope];
  const status = select(panel.status);
  const button = select(panel.button);
  button.disabled = true;
  status.textContent = 'Quellen werden abgefragt …';
  try {
    // Lokal liefert der Server live, auf GitHub Pages ist es der zuletzt von der Action erzeugte Stand.
    const query = force ? '?refresh=1&t='+Date.now() : '';
    const response = await fetch('radar-'+scope+'.json'+query,{cache:'no-store',signal:AbortSignal.timeout(12000)});
    if (!response.ok) throw new Error('Feed nicht verfügbar');
    const data = await response.json();
    liveFeeds[scope] = data;
    const ok = data.statuses.filter(source=>source.ok).length;
    status.textContent = 'Letzter Abruf: '+new Date(data.checkedAt).toLocaleString('de-DE',{timeZone:'Europe/Berlin'})+' Uhr · '+ok+' von '+data.statuses.length+' Feeds erreichbar.';
  } catch {
    status.textContent = 'Live-Abruf momentan nicht verfügbar. Das Briefing und die Quellenlinks bleiben zugänglich.';
  } finally {
    button.disabled = false;
    renderSources(scope);
    render();
  }
}

function renderSources(scope) {
  const panel = feedPanels[scope];
  select(panel.list).replaceChildren(...panel.sources.map(source=>{
    const item = element('li');
    const state = liveFeeds[scope]?.statuses.find(status=>status.id===source.id);
    item.append(element('strong',source.label),document.createTextNode(source.feed
      ? ' · '+(state ? state.ok ? 'abgerufen' : 'Abruf fehlgeschlagen' : 'noch nicht abgerufen')
      : ' · Direktlink'),sourceActions(source.url,source.url,source.language==='de'));
    return item;
  }));
}

function renderProviderOptions() {
  const dropdown = select('radar-provider');
  const previous = dropdown.value;
  const dataset = view==='market' ? [...marketNews,...marketSources] :
    view==='saved' ? [...saved.values()] : [...releases,...sources];
  const names = [...new Set(dataset.map(item=>item.provider))].sort();
  dropdown.replaceChildren(element('option',view==='market' ? 'Alle Quellen' : 'Alle Anbieter'));
  dropdown.firstElementChild.value = '';
  for (const name of names) {
    const option = element('option',name);
    option.value = name;
    dropdown.append(option);
  }
  dropdown.value = names.includes(previous) ? previous : '';
}

// Aktiven Reiter in einer wischbaren Zeile ganz sichtbar halten, mit etwas Luft zum Rand.
function keepVisible(tab) {
  const row = tab.parentElement;
  if (!row || row.scrollWidth <= row.clientWidth) return;
  const box = row.getBoundingClientRect(), item = tab.getBoundingClientRect();
  if (item.left < box.left + 16) row.scrollLeft -= box.left + 16 - item.left;
  else if (item.right > box.right - 28) row.scrollLeft += item.right - box.right + 28;
}

function setView(next) {
  view = next;
  select('radar-controls').hidden = !['brief','live','saved','market'].includes(view);
  select('radar-type').hidden = view!=='brief';
  select('radar-hot').hidden = view!=='brief';
  select('radar-market-type').hidden = view!=='market';
  renderProviderOptions();
  document.querySelectorAll('[data-radar-view]').forEach(button=>{
    const active = button.dataset.radarView===view;
    button.classList.toggle('on',active);
    button.setAttribute('aria-pressed',String(active));
    if (active) keepVisible(button);
  });
  document.querySelectorAll('[data-radar-panel]').forEach(panel=>{panel.hidden=panel.dataset.radarPanel!==view;});
  render();
  const panel = feedPanels[view];
  if (panel && !liveFeeds[view] && !select(panel.button).disabled) void refresh(view,false);
}

select('radar-editorial-date').textContent = 'Redaktioneller Stand: '+formatDate(editorialDate);
select('radar-market-date').textContent = 'Marktbriefing · Stand '+formatDate(editorialDate);
for (const [scope,panel] of Object.entries(feedPanels)) {
  select(panel.button).addEventListener('click',()=>void refresh(scope,true));
  renderSources(scope);
}
for (const id of ['radar-search','radar-provider','radar-type','radar-market-type']) select(id).addEventListener('input',render);
document.querySelectorAll('[data-radar-view]').forEach(button=>button.addEventListener('click',()=>{
  const next = button.dataset.radarView;
  if (next==='market' && location.hash!=='#markt') history.pushState(null,'','#markt');
  else if (next!=='market' && location.hash==='#markt') history.replaceState(null,'','#radar');
  setView(next);
}));

const navigation = document.querySelector('.tabs');
const subpages = [...navigation.querySelectorAll('[data-tab]')];
const primary = [...navigation.querySelectorAll('[data-nav-target]')];
const sections = [...document.querySelectorAll('main > .section')];

function showPage(page, scroll = false) {
  const subpage = subpages.find(tab=>tab.dataset.tab===page);
  const group = subpage?.closest('[data-nav-section]').dataset.navSection || 'radar';
  for (const button of primary) {
    const active = button.dataset.navTarget===group;
    button.classList.toggle('active',active);
    if (active) button.setAttribute('aria-current','true');
    else button.removeAttribute('aria-current');
  }
  for (const section of navigation.querySelectorAll('[data-nav-section]')) {
    section.hidden = section.dataset.navSection!==group;
  }
  for (const tab of subpages) {
    const active = tab.dataset.tab===page;
    tab.classList.toggle('active',active);
    if (active) {
      tab.setAttribute('aria-current','page');
      // In der wischbaren Unternavigation den aktiven Reiter sichtbar halten.
      keepVisible(tab);
    }
    else tab.removeAttribute('aria-current');
  }
  for (const section of sections) section.classList.toggle('active',section.id===page);
  if (scroll && window.scrollY > document.querySelector('.kompass-header').offsetHeight) {
    window.scrollTo({top:document.querySelector('.kompass-header').offsetHeight,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
}

function navigate(page) {
  const hash = '#'+page;
  if (location.hash!==hash) history.pushState(null,'',hash);
  showPage(page,true);
  if (page==='radar') setView('brief');
}

function restorePage() {
  const page = location.hash.slice(1);
  if (page==='markt') {
    showPage('radar');
    setView('market');
    return;
  }
  if (subpages.some(tab=>tab.dataset.tab===page)) showPage(page);
  else { showPage('radar'); setView('brief'); }
}

navigation.addEventListener('click',event=>{
  const button = event.target.closest('[data-nav-target],[data-tab]');
  if (button) navigate(button.dataset.navTarget || button.dataset.tab);
});
window.addEventListener('popstate',restorePage);
window.addEventListener('hashchange',restorePage);
document.querySelector('[data-market-shortcut]').addEventListener('click',event=>{
  event.preventDefault();
  if (location.hash!=='#markt') history.pushState(null,'','#markt');
  showPage('radar',true);
  setView('market');
});

// ===== Kompass: Trend der Woche und heißeste Meldungen =====
const axes = [
  {key:'agent', label:'Agenten', angle:0, types:['Agent']},
  {key:'model', label:'Modelle', angle:90, types:['Modell','Chips & Infrastruktur']},
  {key:'rules', label:'Sicherheit & Regeln', short:'Regeln', angle:180, types:['Forschung','Politik & Regulierung']},
  {key:'biz', label:'Produkte & Business', short:'Business', angle:270, types:['Vertrieb','Produkt','Unternehmen & Markt']},
];
const axisOf = item => axes.find(axis=>axis.types.includes(item.type)) || axes[3];
const daysAgo = date => Math.round((new Date(editorialDate) - new Date(date)) / 864e5);
const svgNode = (tag, attrs) => {
  const node = document.createElementNS('http://www.w3.org/2000/svg',tag);
  for (const [key,value] of Object.entries(attrs)) node.setAttribute(key,value);
  return node;
};

function renderPulse() {
  const recent = [...releases,...marketNews].filter(item=>daysAgo(item.date) >= 0 && daysAgo(item.date) <= 7);
  const weights = Object.fromEntries(axes.map(axis=>[axis.key,0]));
  let x = 0, y = 0;
  for (const item of recent) {
    const weight = (item.hot ? 2 : 1) * (1 - daysAgo(item.date) / 10);
    const axis = axisOf(item);
    weights[axis.key] += weight;
    const rad = axis.angle * Math.PI / 180;
    x += Math.sin(rad) * weight; y += Math.cos(rad) * weight;
  }
  const angle = (Math.atan2(x, y) * 180 / Math.PI + 360) % 360;
  const leader = axes.reduce((best,axis)=>weights[axis.key] > weights[best.key] ? axis : best, axes[0]);
  const total = Object.values(weights).reduce((a,b)=>a+b,0) || 1;

  const dial = select('pulse-dial');
  for (let i = 0; i < 72; i++) {
    const major = i % 18 === 0, mid = i % 6 === 0;
    const rad = i * 5 * Math.PI / 180, r1 = major ? 80 : mid ? 84 : 87, r2 = 91;
    dial.append(svgNode('line',{x1:100+Math.sin(rad)*r1, y1:100-Math.cos(rad)*r1, x2:100+Math.sin(rad)*r2, y2:100-Math.cos(rad)*r2, class: major ? 'tick major' : mid ? 'tick mid' : 'tick'}));
  }
  for (const r of [30,52,74]) dial.append(svgNode('circle',{cx:100, cy:100, r, class:'ring'}));
  for (const axis of axes) {
    const rad = axis.angle * Math.PI / 180;
    const label = svgNode('text',{x:100+Math.sin(rad)*68, y:100-Math.cos(rad)*68+3, class: axis===leader ? 'axis lead' : 'axis'});
    label.textContent = axis.short || axis.label;
    dial.append(label);
  }
  // Jede Meldung als Punkt: Richtung = Thema, Abstand zur Mitte = Alter.
  recent.forEach((item,index)=>{
    const axis = axisOf(item);
    const spread = ((index * 37) % 50) - 25;
    const rad = (axis.angle + spread) * Math.PI / 180;
    const r = 22 + daysAgo(item.date) * 7.5;
    const dot = svgNode('circle',{cx:100+Math.sin(rad)*r, cy:100-Math.cos(rad)*r, r: item.hot ? 3.2 : 2, class: item.hot ? 'blip hot' : 'blip'});
    dot.style.animationDelay = (index * .13 % 2.4) + 's';
    dial.append(dot);
  });

  const needle = select('pulse-needle');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{ needle.style.transform = `rotate(${angle}deg)`; }));
  select('pulse-stand').textContent = 'Kompass · Stand ' + formatDate(editorialDate);
  const heading = select('pulse-heading');
  heading.textContent = 'Die Nadel zeigt diese Woche auf ';
  heading.append(element('em',leader.label));
  const hot = recent.filter(item=>item.hot).length;
  select('pulse-meta').textContent = `${recent.length} Meldungen in 7 Tagen, ${hot} davon heiß. Je näher ein Punkt an der Mitte, desto frischer.`;
  const bars = select('pulse-bars');
  for (const axis of axes) {
    const share = Math.round(weights[axis.key] / total * 100);
    const row = element('div',null,'pulse-bar' + (axis===leader ? ' lead' : ''));
    const track = element('span',null,'pulse-track');
    const fill = element('i');
    fill.style.setProperty('--w', share + '%');
    track.append(fill);
    row.append(element('span',axis.short || axis.label,'pulse-bar-label'),track,element('b',share + ' %'));
    bars.append(row);
  }
}

const typeTone = {Agent:'violet', Modell:'indigo', Vertrieb:'green', Produkt:'amber', Forschung:'teal', 'Politik & Regulierung':'slate', 'Unternehmen & Markt':'rose', 'Chips & Infrastruktur':'orange'};

function renderHotDeck() {
  const items = [...releases,...marketNews].filter(item=>item.hot).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10);
  const deck = select('hotdeck'), dots = select('hot-dots');
  items.forEach((item,index)=>{
    const card = element('button',null,'hot-card tone-' + (typeTone[item.type] || 'rose'));
    card.type = 'button';
    card.setAttribute('role','listitem');
    const top = element('div',null,'hot-top');
    top.append(element('span',String(index+1).padStart(2,'0'),'hot-num'));
    if (daysAgo(item.date) <= 1) top.append(element('span','Neu','hot-new'));
    top.append(element('span',item.type,'hot-type'));
    const flames = element('span',null,'hot-heat');
    const heat = Math.max(1, 3 - Math.floor(daysAgo(item.date) / 2));
    flames.setAttribute('aria-label',`Hitze ${heat} von 3`);
    for (let i = 0; i < 3; i++) flames.append(element('i',null,i < heat ? 'on' : ''));
    const body = element('div',null,'hot-body');
    body.append(element('span',item.provider + ' · ' + formatDate(item.date),'hot-meta'),element('h4',item.title),element('p',item.impact || item.summary));
    const foot = element('div',null,'hot-foot');
    foot.append(flames,element('span','Details','hot-more'));
    card.append(top,body,foot);
    card.addEventListener('click',()=>openHot(item));
    deck.append(card);
    dots.append(element('i'));
  });
  const update = () => {
    const cards = [...deck.children];
    const center = deck.scrollLeft + deck.clientWidth / 2;
    let active = 0, best = Infinity;
    cards.forEach((card,index)=>{ const d = Math.abs(card.offsetLeft - deck.offsetLeft + card.offsetWidth / 2 - center); if (d < best) { best = d; active = index; } });
    [...dots.children].forEach((dot,index)=>dot.classList.toggle('on',index===active));
    select('hot-hint').textContent = `${active+1} / ${cards.length}`;
  };
  deck.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
  update();
}

function openHot(item) {
  const dialog = select('hot-dialog'), body = select('hot-dialog-body');
  body.replaceChildren();
  const head = element('div',null,'begriff-dialog-head');
  const titleBox = element('div');
  titleBox.append(element('span',item.provider + ' · ' + formatDate(item.date) + (item.type ? ' · ' + item.type : ''),'hot-dialog-meta'),element('h3',item.title));
  if (item.status) titleBox.append(element('p',item.status,'begriff-alias'));
  const close = element('button','✕','begriff-close');
  close.type = 'button';
  close.setAttribute('aria-label','Schließen');
  close.addEventListener('click',()=>dialog.close());
  head.append(titleBox,close);
  body.append(head,element('p',item.summary,'begriff-lead'));
  if (item.impact) {
    const block = element('section',null,'hot-impact');
    block.append(element('h4','Was heißt das für dich?'),element('p',item.impact));
    body.append(block);
  }
  const actions = sourceActions(item.url, item.url, item.language==='de');
  actions.classList.add('hot-actions');
  body.append(actions);
  dialog.showModal();
}

renderPulse();
renderHotDeck();
restorePage();

// Detail-Blätter am Handy nach unten wischen, um sie zu schließen.
let sheetDrag = null;
document.addEventListener('touchstart',event=>{
  const dialog = event.target.closest('dialog.begriff-dialog[open]');
  if (!dialog || !matchMedia('(max-width: 780px)').matches) return;
  const body = dialog.querySelector('.begriff-dialog-body');
  if (dialog.scrollTop > 0 || (body && body.scrollTop > 0)) return;
  sheetDrag = {dialog, start:event.touches[0].clientY, dy:0};
},{passive:true});
document.addEventListener('touchmove',event=>{
  if (!sheetDrag) return;
  sheetDrag.dy = Math.max(0, event.touches[0].clientY - sheetDrag.start);
  sheetDrag.dialog.style.transform = sheetDrag.dy ? `translateY(${sheetDrag.dy}px)` : '';
},{passive:true});
document.addEventListener('touchend',()=>{
  if (!sheetDrag) return;
  const {dialog, dy} = sheetDrag;
  sheetDrag = null;
  dialog.style.transform = '';
  if (dy > 110) dialog.close();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load',()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
}
