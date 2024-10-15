const CACHE_NAME = 'dynamic-asset-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  const isCSSOrJS = requestUrl.pathname.endsWith('.css') || requestUrl.pathname.endsWith('.js');
console.log(event);
  if (isCSSOrJS) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

async function staleWhileRevalidate(request) {
  try {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        const fetchPromise = fetch(request)
            .then(networkResponse => {
                console.log(request, networkResponse.clone());
                cache.put(request, networkResponse.clone());
                return networkResponse;
            })
            .catch(error => {
                console.error('Fetch failed; returning cached response instead.', error);
            });
        return cachedResponse || fetchPromise;
    } catch (error_1) {
        console.error('Both cache and network failed', error_1);
        return new Response('An error occurred', { status: 500, statusText: 'Failed to fetch resource' });
    }
}