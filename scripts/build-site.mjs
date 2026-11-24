// Erzeugt die statische Version für GitHub Pages unter dist/site/.
// Die Live-Feeds werden hier einmal abgefragt und als radar-live.json / radar-market.json abgelegt.
// Mit --no-feeds entstehen leere Platzhalter (z. B. offline oder für schnelle Tests).
import {mkdir,readFile,writeFile,copyFile,rm} from 'node:fs/promises';
import {sources, marketSources} from '../app/radar-data.js';
import {getFeeds} from '../server/feeds.js';

const out = new URL('../dist/site/',import.meta.url);
const app = new URL('../app/',import.meta.url);
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});

for (const name of ['index.html','radar.js','radar-data.js','begriffe.js','zones.js','radar.css','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png']) {
  await copyFile(new URL(name,app),new URL(name,out));
}
const version = new Date().toISOString().replace(/\D/g,'').slice(0,14);
const worker = await readFile(new URL('sw.js',app),'utf8');
await writeFile(new URL('sw.js',out),worker.replaceAll('__VERSION__',version));
await writeFile(new URL('.nojekyll',out),'');

const skipFeeds = process.argv.includes('--no-feeds');
const empty = list => ({checkedAt:new Date().toISOString(), statuses:list.filter(s=>s.feed).map(({id})=>({id,ok:false})), items:[]});
for (const [scope,list] of [['live',sources],['market',marketSources]]) {
  const data = skipFeeds ? empty(list) : await getFeeds(list);
  await writeFile(new URL('radar-'+scope+'.json',out),JSON.stringify(data));
  console.log('radar-'+scope+'.json: '+data.items.length+' Meldungen, '+data.statuses.filter(s=>s.ok).length+'/'+data.statuses.length+' Feeds erreichbar');
}
console.log('Statische Seite liegt in dist/site/');
