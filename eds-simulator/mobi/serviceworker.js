let cacheName = 'mobitec-eds';
let controlledURLs = [
    '/eds-simulator/mobi/controller/icu-data/fonts.js',
    '/eds-simulator/mobi/controller/icu-data/sbst.js',
    '/eds-simulator/mobi/controller/icu-data/smrt.js',
    '/eds-simulator/mobi/controller/icu-data/ttsg.js',
    '/eds-simulator/mobi/controller/icu602-inner.css',
    '/eds-simulator/mobi/controller/icu602-inner.html',
    '/eds-simulator/mobi/controller/icu602-inner.js',
    '/eds-simulator/mobi/controller/icu602.css',
    '/eds-simulator/mobi/controller/icu602.html',
    '/eds-simulator/mobi/controller/icu602.js',
    '/eds-simulator/mobi/front/front.css',
    '/eds-simulator/mobi/front/front.js',
    '/eds-simulator/mobi/front/index.html',
    '/eds-simulator/mobi/front-flipdot/front.css',
    '/eds-simulator/mobi/front-flipdot/front.js',
    '/eds-simulator/mobi/front-flipdot/index.html',
    '/eds-simulator/mobi/resources/cross.svg',
    '/eds-simulator/mobi/resources/house.svg',
    '/eds-simulator/mobi/resources/tick.svg',
    '/eds-simulator/mobi/eds-renderer.js',
    '/eds-simulator/mobi/index.html',
    '/eds-simulator/mobi/mobi.css',
    '/eds-simulator/mobi/mobi.js'
];

self.addEventListener('install', event => {
    console.log('[mobitec]: service worker installed');

    event.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(controlledURLs);
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('[mobitec]: fetching resource', event.request.url);

    event.respondWith(fromCache(event.request));

    event.waitUntil(updateCache(event.request));
});

function fromCache(request) {
    return caches.open(cacheName).then(cache => {
        return fetch(request).catch(() => {
            return cache.match(request);
        }).then(response => {
            return response;
        });
    });
}

function updateCache(request) {
    return caches.open(cacheName).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response.clone()).then(() => {
                return response;
            });
        });
    });
}
