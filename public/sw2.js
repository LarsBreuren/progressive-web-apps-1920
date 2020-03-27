self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
            '/offline',
            '/css/minified/style.css',
            '/img/bg.jpg',
            '/img/favicon.ico',
            '/people',
        ]);
      })
    );
  });