if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}})).then(e=>{const s=t(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-ff0258e0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"5c6d57d724d4d7b23d205f3408e2b49b"},{url:"/static/css/2.6a7a5488.chunk.css",revision:"849d819296eec2205478b018bb3a9cef"},{url:"/static/js/2.7a52f2ae.chunk.js",revision:"23ae0811cfbaccca21ae51bc454e2e64"},{url:"/static/js/2.7a52f2ae.chunk.js.LICENSE.txt",revision:"13c495534befacf2a3d5f4616250eeed"},{url:"/static/js/main.4b941d53.chunk.js",revision:"2cfebb4e6e93e548e5d81673c5c55b11"},{url:"/static/js/runtime-main.78f66867.js",revision:"2ad7cad066d18a03b7f7cdc40109bf15"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
