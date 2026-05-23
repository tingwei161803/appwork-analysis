/* AppWorks Portfolio Atlas — service worker.
   Cache-first for static assets, network-first for HTML to pick up updates. */
const CACHE = 'aw-atlas-v3';
const PRECACHE = [
  './',
  './index.html',
  './assets/styles.css',
  './assets/app.js',
  './data/portfolio.js',
  './data/portfolio-details.js',
  './data/chapters.js',
  './data/demo-day.js',
  './data/why-we-invested.js',
  './data/competitors.js',
  './data/jamie-quotes.js',
  './site.webmanifest',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Skip cross-origin CDN; network only.
  if (url.origin !== location.origin) return;

  // HTML: network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }
  // Static: cache-first
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      if (res.ok) caches.open(CACHE).then((c) => c.put(req, copy));
      return res;
    }))
  );
});
