import {assets} from './assets.js';
import {sources, marketSources} from './radar-data.js';
import {getFeeds} from './feeds.js';

const cacheByFeed = new Map();
const pendingByFeed = new Map();
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (!['GET','HEAD'].includes(request.method)) return new Response(null,{status:405,headers:{Allow:'GET, HEAD'}});
    const staticFeed = url.pathname.match(/^\/radar-(live|market)\.json$/);
    if (url.pathname === '/api/radar' || staticFeed) {
      const market = (staticFeed?.[1] || url.searchParams.get('scope')) === 'market';
      const key = market ? 'market' : 'models';
      const cached = cacheByFeed.get(key);
      const now = Date.now();
      if (!cached || now >= cached.until || (url.searchParams.get('refresh') === '1' && now >= cached.minUntil)) {
        if (!pendingByFeed.has(key)) {
          const pending = getFeeds(market ? marketSources : sources).then(data=>{
            const hasFeeds = data.statuses.some(status=>status.ok);
            const fetchedAt = Date.now();
            cacheByFeed.set(key,{data, until:fetchedAt+(hasFeeds ? 600000 : 60000), minUntil:fetchedAt+30000});
          }).finally(()=>pendingByFeed.delete(key));
          pendingByFeed.set(key,pending);
        }
        await pendingByFeed.get(key);
      }
      const cache = cacheByFeed.get(key);
      return new Response(request.method==='HEAD' ? null : JSON.stringify(cache.data), {headers:{'content-type':'application/json; charset=utf-8','cache-control':'private, no-store'}});
    }
    const asset = Object.hasOwn(assets,url.pathname) ? assets[url.pathname] : null;
    if (!asset) return new Response('Seite nicht gefunden',{status:404});
    const body = asset.base64 ? Uint8Array.from(atob(asset.body),c=>c.charCodeAt(0)) : asset.body;
    return new Response(request.method==='HEAD' ? null : body,{headers:{'content-type':asset.type,'cache-control':'private, no-cache','x-content-type-options':'nosniff'}});
  }
};
