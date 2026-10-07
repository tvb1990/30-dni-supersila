const CACHE = 'zabavna-matematika-v10';
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./audio/hello.mp3?v=10", "./audio/kolko.mp3?v=10", "./audio/vijhdash.mp3?v=10", "./audio/prebroi.mp3?v=10", "./audio/neka_sabirame.mp3?v=10", "./audio/neka_izvajdame.mp3?v=10", "./audio/kade_poveche.mp3?v=10", "./audio/it0.mp3?v=10", "./audio/it1.mp3?v=10", "./audio/it2.mp3?v=10", "./audio/it3.mp3?v=10", "./audio/it4.mp3?v=10", "./audio/it5.mp3?v=10", "./audio/it6.mp3?v=10", "./audio/it7.mp3?v=10", "./audio/it8.mp3?v=10", "./audio/it9.mp3?v=10", "./audio/it10.mp3?v=10", "./audio/it11.mp3?v=10", "./audio/how_much.mp3?v=10", "./audio/plus.mp3?v=10", "./audio/minus.mp3?v=10", "./audio/n0.mp3?v=10", "./audio/n1.mp3?v=10", "./audio/n2.mp3?v=10", "./audio/n3.mp3?v=10", "./audio/n4.mp3?v=10", "./audio/n5.mp3?v=10", "./audio/n6.mp3?v=10", "./audio/n7.mp3?v=10", "./audio/n8.mp3?v=10", "./audio/n9.mp3?v=10", "./audio/n10.mp3?v=10", "./audio/praise1.mp3?v=10", "./audio/praise2.mp3?v=10", "./audio/praise3.mp3?v=10", "./audio/retry.mp3?v=10", "./audio/level_up.mp3?v=10", "./audio/lv1.mp3?v=10", "./audio/lv2.mp3?v=10", "./audio/lv3.mp3?v=10", "./audio/lv4.mp3?v=10", "./audio/lv5.mp3?v=10"];

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
