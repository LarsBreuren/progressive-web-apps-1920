const precacheVersion = 1;
const precacheName = 'precache-v' + precacheVersion;
const precacheFiles = [
  '/',
  '/offline',
  '/about',
  '/css/minified/style.css',
  '/img/bg.jpg',
  '/img/favicon.ico',
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installed');

  self.skipWaiting();

  e.waitUntil(
    caches.open(precacheName).then((cache) => {
      console.log('[ServiceWorker] Precaching files');
      return cache.addAll(precacheFiles);
    }) // end caches.open()
  ); // end e.waitUntil
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activated');

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((thisCacheName) => {

        if (thisCacheName.includes("precache") && thisCacheName !== precacheName) {
          console.log('[ServiceWorker] Removing cached files from old cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }

      }));
    }) // end caches.keys()
  ); // end e.waitUntil
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch event for ', e.request.url);

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {

      if(cachedResponse){
        return cachedResponse;
      }

      return caches.match("/offline");

      
    })
  );
});
