if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Bt5bjeURIoSQD3jqI7e05/_buildManifest.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/Bt5bjeURIoSQD3jqI7e05/_ssgManifest.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/25.603d601a7967001848f5.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/365-1904924dd8415d9892c2.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/415-d1ed81c36b6db70996c2.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/831-7864d4587717cb93908b.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/851-d5e5ccc8dee9fdd34d8d.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/88-20cdee6b026549d25bbe.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/962-d9bafe54cc68a55c3647.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/main-b449f89ec2fd6b0ffe72.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/_app-8080a59960bf71105e9e.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/index-f29e82662c57179dbd5a.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/notes-6bbf769b52843eecdf0e.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/settings-0c8757f5291aa1dbe084.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/pages/soon-5d9729448b5f8c67479f.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/_next/static/chunks/webpack-33d40ebfaa7edfb4ec1f.js",revision:"Bt5bjeURIoSQD3jqI7e05"},{url:"/assets/annotations/BigDownArrow.webp",revision:"d06e5f19a2ffd6aedfeb5b8c57498f01"},{url:"/assets/annotations/Check.webp",revision:"470f2a050d06cdf44697062439edcff3"},{url:"/assets/annotations/Circle.webp",revision:"9ab222e0e2567ac78e34d6030f79b47a"},{url:"/assets/annotations/CircularArrow.webp",revision:"2c4f8c23fa2694006f4934887c49a14e"},{url:"/assets/annotations/CrossBox.webp",revision:"7501a21ee20030d50d102d5854718433"},{url:"/assets/annotations/Dots.webp",revision:"2f4fff93e7ee77fab1e55a177846cc0d"},{url:"/assets/annotations/Ellipse.webp",revision:"507d6722e2d77413d606ff43dbfa71f1"},{url:"/assets/annotations/Repeat.webp",revision:"f03cf596cb3fa9765d68ec8db09086a8"},{url:"/assets/annotations/Scribble.webp",revision:"5bfd338f8876546edf0c9a8530b867a5"},{url:"/assets/annotations/Sparkle.webp",revision:"8b5157369850e5514f1b7c80cd2da94c"},{url:"/assets/annotations/ThinStraightArrow.webp",revision:"547ed7953746f3e90ed1d644bfc71e7d"},{url:"/assets/annotations/Traced.webp",revision:"f48d04054ded325e9a97d134ded6f202"},{url:"/assets/annotations/TracedHigh.webp",revision:"4f671d37d41940b9a205548de81f1aac"},{url:"/assets/annotations/arrow-swirly.webp",revision:"875dd0d4d3ee4b822f071dfc0e25cdce"},{url:"/assets/annotations/down-swirly.webp",revision:"2edc001bb558776854d9868f9ced193a"},{url:"/assets/annotations/space/completely-free.webp",revision:"761400c532b0e463c2754b33261694c1"},{url:"/assets/annotations/space/easy-to-use.webp",revision:"03fe29ec69007adf97fa0d92244e2550"},{url:"/assets/annotations/space/no-auth-ads-analytics.webp",revision:"32275516d85c037eb9938fa658769c04"},{url:"/assets/annotations/space/personal-productivity.webp",revision:"e1a4d5064a35ec95b8a1988900733fb9"},{url:"/assets/annotations/space/simple.webp",revision:"62f92adbb0918ded6d2906b7a24ca5d3"},{url:"/assets/annotations/underline.webp",revision:"edd5a349a35eb4cd78683281a846bc12"},{url:"/assets/apple-touch-icon.png",revision:"b43d4319bfadbc95ad926801a481b6fc"},{url:"/assets/dinosaur.svg",revision:"7804a9afcd8c9af1103cb78346ef52c6"},{url:"/assets/favicon.ico",revision:"1ecf38ee6a7e11a1a71e983fc9b43ef5"},{url:"/assets/fonts/IndieFlower-Regular.eot",revision:"ade3f296bbf4dfb7b2546c9073e51d1a"},{url:"/assets/fonts/IndieFlower-Regular.woff2",revision:"1a196bfa96480dbbc90214a829e6b76e"},{url:"/assets/fonts/IndieFlower.ttf",revision:"7d7bf876afcae428964494ff865111eb"},{url:"/assets/fonts/IndieFlower.woff",revision:"2d3d31a1dcd316bfe97d6b644ecb2c6d"},{url:"/assets/icon-192x192.png",revision:"9022c61378aea64c2532ba53d11a2727"},{url:"/assets/icon-256x256.png",revision:"e184bfc1685f041dc6a1aaa01e92dec1"},{url:"/assets/icon-384x384.png",revision:"43777102a6fb985c1eb2084ed047a1cc"},{url:"/assets/icon-512x512.png",revision:"0b8c5b825e1ebe2a521b9544860591dc"},{url:"/assets/images/coming-soon.webp",revision:"7960e963d646e46a43e05e3d0e5eba79"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/Calender.svg",revision:"2299505661233e778e3050445c5ea9f6"},{url:"/icons/Dot.svg",revision:"242d0ed6943b758bf945c1e8ad0338d4"},{url:"/icons/External-Link.svg",revision:"36be4ebc33fcdf07af81b06d137bb2b5"},{url:"/icons/Gear.svg",revision:"617ce0868938ae08bcfa7591bb2f1542"},{url:"/icons/Half.svg",revision:"448e0d55021df2822a8405e5adb69e9d"},{url:"/icons/Plus.svg",revision:"4995a8610d08cb8d0cb35bb4906b9815"},{url:"/icons/Reader.svg",revision:"84b972a64cb71b76a116bed9f324eaac"},{url:"/icons/Timer.svg",revision:"68e66064736ebc7fc3ca9da2a85e8ab1"},{url:"/icons/Todo.svg",revision:"c770ea96e18106bd910ff3847c93bb01"},{url:"/manifest.json",revision:"9597891335b078b9ddeaf579c697eb0d"},{url:"/space.png",revision:"33197fac105dcb407cccdfa0cb6c99d7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
