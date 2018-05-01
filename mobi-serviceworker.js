self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v2').then(cache => {
            return cache.addAll([
                '/eds/mobi.html',
                '/eds/mobi.css',
                '/eds/mobi.js',
                '/controllers/icu602.html',
                '/controllers/icu602.css',
                '/controllers/icu602.js',
                '/controllers/icu602-inner.html',
                '/controllers/icu602-inner.css',
                '/controllers/icu602-inner.js',,
                '/displays/mobi/eds-renderer.js',
                '/displays/mobi/front/index.html',
                '/displays/mobi/front/front.css',
                '/displays/mobi/front/front.js',
                '/displays/mobi/front-flipdot/index.html',
                '/displays/mobi/front-flipdot/front.css',
                '/displays/mobi/front-flipdot/front.js',
                '/resources/cross.svg',
                '/resources/house.svg',
                '/resources/tick.svg',
                '/controllers/icu-data/smrt.js',
                '/controllers/icu-data/sbst.js',
                '/controllers/icu-data/ttsg.js',
                '/controllers/icu-data/fonts.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});
