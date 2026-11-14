import './build.mjs';
import {createServer} from 'node:http';
const {default:app} = await import('../dist/server/index.js');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);
createServer(async (req,res)=>{
  try {
    const response = await app.fetch(new Request(new URL(req.url,'http://'+host+':'+port),{method:req.method}));
    res.writeHead(response.status,Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch {
    res.writeHead(500); res.end('Fehler beim Laden.');
  }
}).listen(port,host,()=>console.log('KI-Kompass: http://'+host+':'+port));
