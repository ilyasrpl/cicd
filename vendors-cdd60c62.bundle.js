"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[997],{275:(e,t,n)=>{n.d(t,{A:()=>G});var r=n(125);const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined");const d=c("ArrayBuffer");const p=u("string"),y=u("function"),b=u("number"),g=e=>null!==e&&"object"==typeof e,m=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},h=c("Date"),w=c("File"),O=c("Blob"),D=c("FileList"),B=c("URLSearchParams"),[I,A,j,v]=["ReadableStream","Request","Response","Headers"].map(c);function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function L(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,F=e=>!f(e)&&e!==E;const P=(x="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>x&&e instanceof x);var x;const C=c("HTMLFormElement"),k=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),T=c("RegExp"),M=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},R="abcdefghijklmnopqrstuvwxyz",N="0123456789",V={DIGIT:N,ALPHA:R,ALPHA_DIGIT:R+R.toUpperCase()+N};const H=c("AsyncFunction"),K=(q="function"==typeof setImmediate,U=y(E.postMessage),q?setImmediate:U?(W=`axios@${Math.random()}`,_=[],E.addEventListener("message",(({source:e,data:t})=>{e===E&&t===W&&_.length&&_.shift()()}),!1),e=>{_.push(e),E.postMessage(W,"*")}):e=>setTimeout(e));var q,U,W,_;const z="undefined"!=typeof queueMicrotask?queueMicrotask.bind(E):"undefined"!=typeof process&&process.nextTick||K,G={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=i(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:g,isPlainObject:m,isReadableStream:I,isRequest:A,isResponse:j,isHeaders:v,isUndefined:f,isDate:h,isFile:w,isBlob:O,isRegExp:T,isFunction:y,isStream:e=>g(e)&&y(e.pipe),isURLSearchParams:B,isTypedArray:P,isFileList:D,forEach:S,merge:function e(){const{caseless:t}=F(this)&&this||{},n={},r=(r,o)=>{const s=t&&L(n,o)||o;m(n[s])&&m(r)?n[s]=e(n[s],r):m(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&y(t)?e[o]=(0,r.A)(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:M,freezeMethods:e=>{M(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:L,global:E,isContextDefined:F,ALPHABET:V,generateString:(e=16,t=V.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(g(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!f(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:H,isThenable:e=>e&&(g(e)||y(e))&&y(e.then)&&y(e.catch),setImmediate:K,asap:z}},602:(e,t,n)=>{n.d(t,{P2:()=>b});const r=(e,t)=>t.some((t=>e instanceof t));let o,s;const i=new WeakMap,a=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return i.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function l(e){u=e(u)}function f(e){return(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),p(this.request)}:function(...t){return p(e.apply(y(this),t))}}function d(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(i.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));i.set(e,t)}(e),r(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(p(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)}));return c.set(t,e),t}(e);if(a.has(e))return a.get(e);const t=d(e);return t!==e&&(a.set(e,t),c.set(t,e)),t}const y=e=>c.get(e);function b(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),a=p(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(p(i.result),e.oldVersion,e.newVersion,p(i.transaction),e)})),n&&i.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],h=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(h.get(t))return h.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!g.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&s.done]))[0]};return h.set(t,s),s}l((e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)})));const O=["continue","continuePrimaryKey","advance"],D={},B=new WeakMap,I=new WeakMap,A={get(e,t){if(!O.includes(t))return e[t];let n=D[t];return n||(n=D[t]=function(...e){B.set(this,I.get(this)[t](...e))}),n}};async function*j(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,A);for(I.set(n,t),c.set(n,y(t));t;)yield n,t=await(B.get(n)||t.continue()),B.delete(n)}function v(e,t){return t===Symbol.asyncIterator&&r(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&r(e,[IDBIndex,IDBObjectStore])}l((e=>({...e,get:(t,n,r)=>v(t,n)?j:e.get(t,n,r),has:(t,n)=>v(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=vendors-cdd60c62.bundle.js.map