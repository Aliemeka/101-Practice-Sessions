self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open("static")
        .then(cache =>{
            return cache.addAll(["./", "./css/style.css", "./assets/icons/android-chrome-192x192.png", "./assets/weather-icons/temp.svg"])
        })
    );
})



self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            return res || fetch(e.request);
        })
    )
})