const CACHE='dump-chase-v2';
const HOST_STYLE=`<style id="hostPhotoFix">
.host-photo{display:block;width:min(100%,260px);height:260px;aspect-ratio:1/1;object-fit:cover;margin:0 auto;border-radius:16px;image-rendering:auto;backface-visibility:hidden;-webkit-font-smoothing:antialiased}
@media(max-width:700px){.host-photo{width:100%;height:auto;max-width:320px}}
</style>`;
async function transform(r){const t=await r.text();return new Response(t.replace('</head>',HOST_STYLE+'</head>'),{headers:{'Content-Type':'text/html; charset=utf-8'}})}
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);const r=await fetch('./index.html');await c.put('./index.html',await transform(r));await c.addAll(['./','./manifest.webmanifest','./icon.svg','./dump-chase-logo.png']);self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'||new URL(e.request.url).pathname.endsWith('/index.html')){e.respondWith(caches.match('./index.html').then(r=>r||fetch(e.request).then(transform)))}else{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))))}});