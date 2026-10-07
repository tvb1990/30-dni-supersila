const CACHE = 'zabavna-matematika-v6';
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./audio/intro_count.mp3?v=6", "./audio/intro_add.mp3?v=6", "./audio/intro_sub.mp3?v=6", "./audio/intro_compare.mp3?v=6", "./audio/praise1.mp3?v=6", "./audio/praise2.mp3?v=6", "./audio/praise3.mp3?v=6", "./audio/retry.mp3?v=6", "./audio/hello.mp3?v=6", "./audio/how_much.mp3?v=6", "./audio/plus.mp3?v=6", "./audio/minus.mp3?v=6", "./audio/level_up.mp3?v=6", "./audio/n0.mp3?v=6", "./audio/n1.mp3?v=6", "./audio/n2.mp3?v=6", "./audio/n3.mp3?v=6", "./audio/n4.mp3?v=6", "./audio/n5.mp3?v=6", "./audio/n6.mp3?v=6", "./audio/n7.mp3?v=6", "./audio/n8.mp3?v=6", "./audio/n9.mp3?v=6", "./audio/n10.mp3?v=6", "./audio/lv1.mp3?v=6", "./audio/lv2.mp3?v=6", "./audio/lv3.mp3?v=6", "./audio/lv4.mp3?v=6", "./audio/lv5.mp3?v=6"];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});
