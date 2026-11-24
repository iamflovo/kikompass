// Bühnen für Werkzeuge, Betrieb und Wissen: jede Seite bekommt einen Kopf mit Kennzahlen
// und jeder Bereich sein eigenes Instrument (Werkzeugwand, Kettenblatt, Sternkarte).
(() => {
const NS = 'http://www.w3.org/2000/svg';
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text != null) n.textContent = text; if (cls) n.className = cls; return n; };
const svg = (tag, attrs = {}) => { const n = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
const go = page => document.querySelector(`.tabs [data-tab="${page}"]`)?.click();
const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// Leuchtfarben je Werkzeugkategorie (auf dunklem Grund)
const catColor = {'Allrounder':'#ff5d84','Apps & Code':'#7d8cff','Kreativ':'#ff9a3d','Agenten':'#b98cff','Recherche':'#3cc8f0','Business':'#3ddc97','Automation':'#ffd24a','Formulare':'#ff7ac0','Tests':'#a9b6c2'};
// Daten aus dem Hauptskript (globale Konstanten einer klassischen Seite)
const sources = {
  tools:() => typeof tools !== 'undefined' ? tools : [],
  selected:() => typeof selected !== 'undefined' ? selected : [],
  modelData:() => typeof modelData !== 'undefined' ? modelData : [],
  departmentData:() => typeof departmentData !== 'undefined' ? departmentData : [],
  flows:() => typeof flows !== 'undefined' ? flows : [],
};
const list = name => sources[name]?.() || [];

const BETRIEB = [['bereiche','Aufgabenfelder'],['meinjob','Mein Job'],['workflows','KI-Teams & ERP'],['ideen','Meine Ideen'],['roboter','Shop-Roboter']];

const pages = {
  tools:     {zone:'tools', tag:'Werkzeugwand', stats:() => [[list('tools').length,'Werkzeuge'],[new Set(list('tools').map(t => t[2])).size,'Kategorien'],[list('selected').length + '/3','im Vergleich']]},
  models:    {zone:'tools', tag:'Motorenprüfstand', stats:() => [[list('modelData').length,'Modelle'],[new Set(list('modelData').map(m => m[0].split(/\s[·\/]\s/)[0])).size,'Anbieter'],['24.11.','Stand']]},
  compare:   {zone:'tools', tag:'Direktvergleich', stats:() => [[list('selected').length + '/3','gewählt'],[list('tools').length,'zur Auswahl']]},
  wahlhilfe: {zone:'tools', tag:'Schnellwahl', stats:() => [[document.querySelectorAll('#wahlhilfe tbody tr').length,'Aufgaben'],['1','Klick zum Start']]},
  bereiche:  {zone:'bereiche', tag:'Gang 1 von 5', stats:() => [[list('departmentData').length,'Felder'],[list('tools').length,'Werkzeuge']]},
  meinjob:   {zone:'bereiche', tag:'Gang 2 von 5', stats:() => [[document.querySelectorAll('#meinjob .box, #meinjob .card').length,'Bausteine'],['7','Rollenfelder']]},
  workflows: {zone:'bereiche', tag:'Gang 3 von 5', stats:() => [[list('flows').length,'Abläufe'],[list('flows').reduce((n, f) => n + f[2].length, 0),'Schritte']]},
  ideen:     {zone:'bereiche', tag:'Gang 4 von 5', stats:() => [[document.querySelectorAll('#ideen .box').length,'Ideen'],['0','echte Kundendaten']]},
  roboter:   {zone:'bereiche', tag:'Gang 5 von 5', stats:() => [['Eko','Arbeitsname'],['24/7','erreichbar']]},
  start:     {zone:'start', tag:'Dein Einstieg', stats:() => [[(window.kompassBegriffe?.list || []).length,'Begriffe'],['3','Schritte']]},
  begriffe:  {zone:'start', tag:'Sternkarte', stats:() => { const b = window.kompassBegriffe?.list || []; return [[b.length,'Begriffe'],[new Set(b.map(x => x.bereich)).size,'Sternbilder'],[b.reduce((n, x) => n + x.prompts.length, 0),'Prompts']]; }},
  hermes:    {zone:'start', tag:'Agent im Eigenbau', stats:() => [['3','Bausteine'],['Teams','neu seit 20.11.']]},
};

// ---------- Instrumente ----------
function pegboard(page) {
  const tools = list('tools');
  const wrap = el('div', null, 'zi zi-peg');
  const cols = 7, gap = 26, r = 7;
  const rows = Math.ceil(tools.length / cols);
  const box = svg('svg', {viewBox:`0 0 ${cols * gap + 10} ${rows * gap + 10}`, role:'img', 'aria-label':'Werkzeugwand: jedes Licht ist ein Werkzeug'});
  tools.forEach((t, i) => {
    const x = 5 + gap / 2 + (i % cols) * gap, y = 5 + gap / 2 + Math.floor(i / cols) * gap;
    const c = catColor[t[2]] || '#fff';
    const peg = svg('g', {class:'peg', tabindex:'0', role:'button', style:`--c:${c};--d:${(i * 0.17) % 3}s`});
    const title = svg('title'); title.textContent = `${t[0]} · ${t[2]}`;
    peg.append(title, svg('circle', {cx:x, cy:y, r:r + 4, class:'peg-hole'}), svg('circle', {cx:x, cy:y, r, class:'peg-dot'}));
    const open = () => { go('tools'); setTimeout(() => window.openTool?.(t[0]), 60); };
    peg.addEventListener('click', open);
    peg.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    box.append(peg);
  });
  const scan = svg('rect', {x:0, y:0, width:18, height:rows * gap + 10, class:'peg-scan'});
  box.append(scan);
  const legend = el('div', null, 'peg-legend');
  const counts = {};
  for (const t of tools) counts[t[2]] = (counts[t[2]] || 0) + 1;
  for (const [cat, n] of Object.entries(counts)) {
    const b = el('button', null, 'peg-cat'); b.type = 'button';
    b.style.setProperty('--c', catColor[cat] || '#fff');
    b.append(el('i'), el('span', cat), el('b', String(n)));
    b.addEventListener('click', () => { go('tools'); setTimeout(() => document.querySelector(`#filters [data-filter="${CSS.escape(cat)}"]`)?.click(), 30); });
    legend.append(b);
  }
  wrap.append(box, legend);
  return wrap;
}

function chainring(page) {
  const idx = Math.max(0, BETRIEB.findIndex(([id]) => id === page));
  const wrap = el('div', null, 'zi zi-chain');
  const box = svg('svg', {viewBox:'-110 -110 220 220', role:'img', 'aria-label':`Kettenblatt mit fünf Armen, Gang ${idx + 1} von 5`});
  const teeth = 40, outer = 100, inner = 92;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2, a1 = ((i + 0.3) / teeth) * Math.PI * 2, a2 = ((i + 0.7) / teeth) * Math.PI * 2, a3 = ((i + 1) / teeth) * Math.PI * 2;
    const p = (r, a) => `${(r * Math.sin(a)).toFixed(2)},${(-r * Math.cos(a)).toFixed(2)}`;
    d += `${i ? 'L' : 'M'}${p(inner, a0)} L${p(outer, a1)} L${p(outer, a2)} L${p(inner, a3)} `;
  }
  const ring = svg('g', {class:'chain-ring', style:`transform:rotate(${-idx * 72}deg)`});
  ring.append(svg('path', {d:d + 'Z', class:'chain-teeth'}), svg('circle', {r:78, class:'chain-band'}));
  BETRIEB.forEach(([id], i) => {
    const arm = svg('g', {class:'chain-arm' + (i === idx ? ' on' : ''), transform:`rotate(${i * 72})`});
    arm.append(svg('path', {d:'M-9,-26 L-6,-70 Q0,-80 6,-70 L9,-26 Z'}), svg('circle', {cy:-68, r:6, class:'chain-bolt'}));
    const label = svg('text', {y:-46, 'text-anchor':'middle', 'dominant-baseline':'middle', class:'chain-no'});
    label.textContent = String(i + 1);
    arm.append(label);
    ring.append(arm);
  });
  ring.append(svg('circle', {r:28, class:'chain-hub'}));
  const center = svg('text', {y:1, 'text-anchor':'middle', 'dominant-baseline':'middle', class:'chain-center'});
  center.textContent = `${idx + 1}/5`;
  box.append(svg('circle', {r:106, class:'chain-halo'}), ring, center);
  const gears = el('div', null, 'chain-gears');
  BETRIEB.forEach(([id, name], i) => {
    const b = el('button', null, 'chain-gear' + (i === idx ? ' on' : '')); b.type = 'button';
    b.append(el('b', String(i + 1)), el('span', name));
    if (i === idx) b.setAttribute('aria-current', 'page');
    b.addEventListener('click', () => go(id));
    gears.append(b);
  });
  wrap.append(box, gears);
  return wrap;
}

function starmap(page) {
  const data = window.kompassBegriffe;
  const wrap = el('div', null, 'zi zi-stars');
  if (!data) return wrap;
  const groups = [...new Set(data.list.map(b => b.bereich))];
  const W = 300, H = 200, pos = new Map();
  data.list.forEach(b => {
    const gi = groups.indexOf(b.bereich), a = (gi / groups.length) * Math.PI * 2 - Math.PI / 2;
    const h = hash(b.name), rr = 12 + (h % 34), aa = ((h >> 6) % 628) / 100;
    pos.set(b.name, [W / 2 + Math.cos(a) * 92 + Math.cos(aa) * rr, H / 2 + Math.sin(a) * 62 + Math.sin(aa) * rr * 0.7]);
  });
  const box = svg('svg', {viewBox:`0 0 ${W} ${H}`, role:'img', 'aria-label':'Sternkarte: Begriffe als Sterne, verwandte Begriffe verbunden'});
  const lines = svg('g', {class:'star-lines'});
  const seen = new Set();
  for (const b of data.list) for (const v of b.verwandt || []) {
    const key = [b.name, v].sort().join('|');
    if (seen.has(key) || !pos.has(v)) continue;
    seen.add(key);
    const [x1, y1] = pos.get(b.name), [x2, y2] = pos.get(v);
    lines.append(svg('line', {x1, y1, x2, y2, style:`stroke:${data.farben[b.bereich]}`}));
  }
  box.append(lines);
  const today = dayPick(data.list);
  for (const b of data.list) {
    const [x, y] = pos.get(b.name), h = hash(b.name);
    const star = svg('g', {class:'star' + (b === today ? ' today' : ''), tabindex:'0', role:'button', style:`--c:${glow(data.farben[b.bereich])};--d:${(h % 40) / 10}s`});
    const t = svg('title'); t.textContent = `${b.name} · ${b.bereich}`;
    star.append(t, svg('circle', {cx:x, cy:y, r:b === today ? 4.2 : 1.6 + (h % 3) * 0.5}));
    const open = () => openBegriff(b);
    star.addEventListener('click', open);
    star.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    box.append(star);
  }
  const card = el('button', null, 'star-today'); card.type = 'button';
  card.style.setProperty('--c', glow(data.farben[today.bereich]));
  card.append(el('small', 'Begriff des Tages'), el('b', today.name), el('span', today.erklaerung.split(/(?<=\.)\s/)[0]));
  card.addEventListener('click', () => openBegriff(today));
  wrap.append(box, card);
  return wrap;
}
const dayPick = arr => arr[Math.floor(Date.now() / 864e5) % arr.length];
const glow = hex => ({'#b4234a':'#ff6b8f','#c25a12':'#ffa25a','#1f6f8b':'#4fd3ff','#4b5aa8':'#8f9dff','#7a3fa0':'#c79bff','#2e7d4f':'#4fe0a0'}[hex] || '#fff');
function openBegriff(b) { go('begriffe'); setTimeout(() => window.kompassBegriffe?.open(b), 60); }

const instruments = {tools:pegboard, bereiche:chainring, start:starmap};

// ---------- Köpfe bauen ----------
function headNodes(section) {
  const wrapper = section.querySelector(':scope > .sectionhead, :scope > .begriff-hero');
  const scope = wrapper ? (wrapper.querySelector(':scope > div:not(.zone-hero)') && wrapper.children.length === 1 ? wrapper.firstElementChild : wrapper) : section;
  const nodes = [];
  for (const n of [...scope.children]) {
    if (n.matches('.kicker, h2, .sub, p.sub, div.sub')) nodes.push(n); else if (nodes.length) break;
  }
  return {wrapper, nodes};
}

const heroes = new Map();
function build(id) {
  const section = document.getElementById(id);
  const conf = pages[id];
  if (!section || !conf) return null;
  const {wrapper, nodes} = headNodes(section);
  if (!nodes.length) return null;
  const hero = el('header', null, 'zone-hero');
  hero.dataset.zone = conf.zone;
  const copy = el('div', null, 'zone-copy');
  const kicker = nodes.find(n => n.matches('.kicker'));
  const area = kicker?.textContent.split('·')[0].trim();
  const tag = el('span', area && !conf.tag.startsWith(area) ? `${area} · ${conf.tag}` : conf.tag, 'zone-tag');
  kicker?.remove();
  nodes.splice(nodes.indexOf(kicker), kicker ? 1 : 0);
  copy.append(tag, ...nodes);
  const stats = el('div', null, 'zone-stats');
  const stage = el('div', null, 'zone-stage');
  hero.append(el('div', null, 'zone-glow'), copy, stage, stats);
  if (wrapper) wrapper.replaceWith(hero); else section.prepend(hero);
  heroes.set(id, {hero, stats, stage, conf});
  return heroes.get(id);
}

function refresh(id) {
  const h = heroes.get(id) || build(id);
  if (!h) return;
  h.stats.replaceChildren(...h.conf.stats().map(([v, l]) => { const s = el('div', null, 'zone-stat'); s.append(el('b', String(v)), el('span', l)); return s; }));
  h.stage.replaceChildren(instruments[h.conf.zone](id));
}

const themeColor = {radar:'#0b0710', tools:'#050a12', bereiche:'#0d0804', start:'#08061a'};
let current = null;
document.addEventListener('kompass:page', e => {
  current = e.detail.page;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor[e.detail.group] || '#150812');
  if (pages[current]) refresh(current);
});
// Kennzahlen (z. B. Vergleich) nach Klicks aktuell halten
document.addEventListener('click', e => {
  if (!pages[current] || !e.target.closest('[data-select], .tool-compare')) return;
  setTimeout(() => { const h = heroes.get(current); if (h) h.stats.replaceChildren(...h.conf.stats().map(([v, l]) => { const s = el('div', null, 'zone-stat'); s.append(el('b', String(v)), el('span', l)); return s; })); }, 0);
});
})();
