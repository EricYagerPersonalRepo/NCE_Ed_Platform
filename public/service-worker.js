// Inside public/service-worker.js
var appCacheFiles = [
    '/',
    '/index.html' // Adjust this list based on the static assets you want to cache
];
var appCache = 'appCache-v1';

addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(appCache).then((cache) => {
            return cache.addAll(appCacheFiles);
        })
    );
});

addEventListener('activate', (event) => {
    console.log('[Service Worker] Activate Event');
});

addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((networkResponse) => {
                return caches.open(appCache).then((cache) => {
                    if (event.request.method === 'GET') {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            });
        })
    );
});
