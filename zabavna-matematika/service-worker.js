const CACHE = 'zabavna-matematika-v12';
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./audio/fx_hello.mp3", "./audio/fx_kolko.mp3", "./audio/fx_vijhdash.mp3", "./audio/fx_prebroi.mp3", "./audio/fx_neka_sabirame.mp3", "./audio/fx_neka_izvajdame.mp3", "./audio/fx_kade_poveche.mp3", "./audio/fx_it0.mp3", "./audio/fx_it1.mp3", "./audio/fx_it2.mp3", "./audio/fx_it3.mp3", "./audio/fx_it4.mp3", "./audio/fx_it5.mp3", "./audio/fx_it6.mp3", "./audio/fx_it7.mp3", "./audio/fx_it8.mp3", "./audio/fx_it9.mp3", "./audio/fx_it10.mp3", "./audio/fx_it11.mp3", "./audio/fx_how_much.mp3", "./audio/fx_plus.mp3", "./audio/fx_minus.mp3", "./audio/fx_n0.mp3", "./audio/fx_n1.mp3", "./audio/fx_n2.mp3", "./audio/fx_n3.mp3", "./audio/fx_n4.mp3", "./audio/fx_n5.mp3", "./audio/fx_n6.mp3", "./audio/fx_n7.mp3", "./audio/fx_n8.mp3", "./audio/fx_n9.mp3", "./audio/fx_n10.mp3", "./audio/fx_praise1.mp3", "./audio/fx_praise2.mp3", "./audio/fx_praise3.mp3", "./audio/fx_retry.mp3", "./audio/fx_level_up.mp3", "./audio/fx_lv1.mp3", "./audio/fx_lv2.mp3", "./audio/fx_lv3.mp3", "./audio/fx_lv4.mp3", "./audio/fx_lv5.mp3"];

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
