import {mkdir,readFile,writeFile,copyFile} from 'node:fs/promises';

const dir = new URL('../dist/server/',import.meta.url);
await mkdir(dir,{recursive:true});
const contentTypes = {
  'index.html':'text/html; charset=utf-8',
  'radar.js':'text/javascript; charset=utf-8',
  'radar-data.js':'text/javascript; charset=utf-8',
  'begriffe.js':'text/javascript; charset=utf-8',
  'radar.css':'text/css; charset=utf-8',
  'manifest.webmanifest':'application/manifest+json',
  'icon-192.png':'image/png',
  'icon-512.png':'image/png',
  'sw.js':'text/javascript; charset=utf-8'
};
const version = new Date().toISOString().replace(/\D/g,'').slice(0,14);
const assets = {};
for (const [name,type] of Object.entries(contentTypes)) {
  const base64 = type.startsWith('image/');
  assets[name==='index.html' ? '/' : '/'+name] = {
    type, base64,
    body:(await readFile(new URL('../app/'+name,import.meta.url),base64 ? 'base64' : 'utf8'))
  };
  if (name==='sw.js') assets['/sw.js'].body = assets['/sw.js'].body.replaceAll('__VERSION__',version);
}
await writeFile(new URL('assets.js',dir),'export const assets = '+JSON.stringify(assets)+';\n');
for (const [directory,name] of [['server','index.js'],['server','feeds.js'],['app','radar-data.js']]) {
  await copyFile(new URL('../'+directory+'/'+name,import.meta.url),new URL(name,dir));
}
const manifestDir = new URL('../dist/.openai/',import.meta.url);
await mkdir(manifestDir,{recursive:true});
try { await copyFile(new URL('../.openai/hosting.json',import.meta.url),new URL('hosting.json',manifestDir)); }
catch (error) { if (error.code!=='ENOENT') throw error; }
