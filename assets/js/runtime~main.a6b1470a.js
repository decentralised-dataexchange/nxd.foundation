(()=>{"use strict";var e,t,r,o,n,a={},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=a,u.c=i,e=[],u.O=(t,r,o,n)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],n=e[f][2];for(var i=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(u.O).every((e=>u.O[e](r[d])))?r.splice(d--,1):(i=!1,n<a&&(a=n));if(i){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,o,n]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);u.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,u.d(n,a),n},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>"assets/js/"+({16:"1e3a43e4",195:"c4f5d8e4"}[e]||e)+"."+{16:"7bde0c24",195:"2c85da38",972:"9ee7d739"}[e]+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="nxd-foundation:",u.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var c=l[f];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+r){i=c;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),d&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",u.gca=function(e){return e={"1e3a43e4":"16",c4f5d8e4:"195"}[e]||e,u.p+u.u(e)},(()=>{var e={303:0,532:0};u.f.j=(t,r)=>{var o=u.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=u.p+u.u(t),i=new Error;u.l(a,(r=>{if(u.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],d=r[2],l=0;if(a.some((t=>0!==e[t]))){for(o in i)u.o(i,o)&&(u.m[o]=i[o]);if(d)var f=d(u)}for(t&&t(r);l<a.length;l++)n=a[l],u.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return u.O(f)},r=self.webpackChunknxd_foundation=self.webpackChunknxd_foundation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();