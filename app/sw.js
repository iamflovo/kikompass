// Service Worker: macht die App offline startfähig und auf dem Home-Bildschirm schnell.
// __VERSION__ wird beim Build ersetzt, damit neue Versionen den alten Cache ablösen.
const CACHE = 'ki-kompass-__VERSION__';
const SHELL = ['./','index.html','radar.js','radar-data.js','begriffe.js','radar.css','manifest.webmanifest','icon-192.png','icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key.startsWith('ki-kompass-') && key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request.mode === 'navigate' ? 'index.html' : stripQuery(request.url), response.clone());
    return response;
  } catch {
    return (await cache.match(request.mode === 'navigate' ? 'index.html' : stripQuery(request.url))) || Response.error();
  }
}

function stripQuery(value) {
  const url = new URL(value);
  url.search = '';
  return url.href;
}

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  // Seiten, Skripte und Feed-Daten: immer erst frisch laden, offline aus dem Cache.
  event.respondWith(networkFirst(request));
});
