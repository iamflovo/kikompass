// Zeigt dist/site so an, wie GitHub Pages es ausliefert: statisch und in einem Unterordner.
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const types = {html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',json:'application/json; charset=utf-8',webmanifest:'application/manifest+json',png:'image/png'};
const base = '/ki-kompass/';
const port = Number(process.env.PORT || 4180);
createServer(async (req,res)=>{
  const path = new URL(req.url,'http://x').pathname;
  if (!path.startsWith(base)) { res.writeHead(302,{location:base}); return res.end(); }
  const file = path.slice(base.length) || 'index.html';
  if (file.includes('..')) { res.writeHead(400); return res.end(); }
  try {
    const body = await readFile(new URL('../dist/site/'+file,import.meta.url));
    res.writeHead(200,{'content-type':types[file.split('.').pop()] || 'application/octet-stream'});
    res.end(body);
  } catch { res.writeHead(404); res.end('Nicht gefunden'); }
}).listen(port,'127.0.0.1',()=>console.log('Pages-Vorschau: http://127.0.0.1:'+port+base));
