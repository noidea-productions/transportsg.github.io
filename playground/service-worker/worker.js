self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/playground/service-worker/goat.txt',
                '/playground/service-worker/index.html',
                '/playground/service-worker/index.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
