let cacheName = "Jogo da velha";
let filesToCache = ["/","/index.html", "/css/css.css","/js/imc.js",];

self.addEventListener("install",(e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);

        })
    );
});

self.addEventListener("fetch",(e)=>{
    e.respondWith(
        caches.match(e.request).then((response) =>{
            return response || fetch(e.request);

        })
    );
});


