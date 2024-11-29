/*! For license information please see app-c01aa6eb.bundle.js.LICENSE.txt */
(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[942],{215:(t,r,e)=>{"use strict";e.d(r,{A:()=>d});var n=e(538),o=e(778);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new R(n||[]);return o(a,"_invoke",{value:P(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var y="suspendedStart",v="suspendedYield",d="executing",b="completed",m={};function g(){}function w(){}function O(){}var E={};l(E,u,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(N([])));L&&L!==e&&n.call(L,u)&&(E=L);var x=O.prototype=g.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==i(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function P(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?b:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=b,n.method="throw",n.arg=s.arg)}}}function S(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,S(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function F(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(i(r)+" is not iterable")}return w.prototype=O,o(x,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:w,configurable:!0}),w.displayName=l(O,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,l(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),l(x,f,"Generator"),l(x,u,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,R.prototype={constructor:R,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;F(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function c(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var r=function(t,r){if("object"!=i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==i(r)?r:r+""}function f(t,r,e){return r=y(r),function(t,r){if(r&&("object"==i(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(r,e||[],y(t).constructor):r.apply(t,e))}function l(t){var r="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(r){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return function(t,r,e){if(p())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var o=new(t.bind.apply(t,n));return e&&h(o,e.prototype),o}(t,arguments,y(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),h(e,t)},l(t)}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function h(t,r){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},h(t,r)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var v=function(t){function r(){var t;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),(t=f(this,r)).restaurants=[],t.isLoading=!0,t}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&h(t,r)}(r,t),e=r,i=[{key:"connectedCallback",value:function(){this.loadFavorites()}},{key:"loadFavorites",value:(l=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.renderLoading(),t.next=4,n.A.getAllRestaurants();case 4:this.restaurants=t.sent,this.isLoading=!1,this.render(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error loading favorites:",t.t0),this.renderError(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,9]])})),p=function(){var t=this,r=arguments;return new Promise((function(e,n){var o=l.apply(t,r);function i(t){c(o,e,n,i,a,"next",t)}function a(t){c(o,e,n,i,a,"throw",t)}i(void 0)}))},function(){return p.apply(this,arguments)})},{key:"renderLoading",value:function(){this.innerHTML='\n      <div class="loading-indicator">\n        <div class="loading-spinner"></div>\n        <p>Loading favorite restaurants...</p>\n      </div>\n    '}},{key:"renderError",value:function(t){this.innerHTML='\n      <div class="error-container">\n        <p>Failed to load favorite restaurants: '.concat(t.message,"</p>\n      </div>\n    ")}},{key:"renderEmptyFavorites",value:function(){this.innerHTML='\n      <div class="empty-favorites">\n        <h2>No Favorite Restaurants</h2>\n        <p>You haven\'t added any restaurants to your favorites yet.</p>\n        <a href="/" class="explore-link">Explore Restaurants</a>\n      </div>\n    '}},{key:"render",value:function(){this.isLoading||(this.restaurants.length?this.innerHTML='\n      <h2 class="favorite-list-title">Your Favorite Restaurants</h2>\n      <div class="restaurant-list">\n        '.concat(this.restaurants.map((function(t){var r;return'\n          <a href="#/detail/'.concat(t.id,'" \n             class="restaurant-card" \n             aria-label="').concat(t.name," restaurant in ").concat(t.city,'">\n            <img src="').concat(o.A.IMAGE_URL,"/").concat(t.pictureId,'" \n                 alt="').concat(t.name,'">\n            <div class="restaurant-info">\n              <h2>').concat(t.name,'</h2>\n              <div class="restaurant-meta">\n                <span class="city">📍 ').concat(t.city,'</span>\n                <span class="rating">⭐ ').concat(t.rating,"</span>\n              </div>\n              <p>").concat(null===(r=t.description)||void 0===r?void 0:r.substring(0,150),"...</p>\n            </div>\n          </a>\n        ")})).join(""),"\n      </div>\n    "):this.renderEmptyFavorites())}}],i&&u(e.prototype,i),s&&u(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,s,l,p}(l(HTMLElement));customElements.define("favorite-restaurant-list",v);const d=v},315:()=>{function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(r){var e=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==t(e)?e:e+""}function n(r,e,n){return e=c(e),function(r,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)}(r,i()?Reflect.construct(e,n||[],c(r).constructor):e.apply(r,n))}function o(t){var r="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(r){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return function(t,r,e){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var o=new(t.bind.apply(t,n));return e&&a(o,e.prototype),o}(t,arguments,c(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a(e,t)},o(t)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}function a(t,r){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},a(t,r)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(t){function e(){return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,e,arguments)}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&a(t,r)}(e,t),o=e,(i=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <footer>\n        <div class="footer-content">\n          <div class="footer-logo">\n            <h2>VANI RESTO</h2>\n            <p>Discover extraordinary culinary experiences</p>\n          </div>\n          <div class="footer-links">\n            <a href="#home">Home</a>\n            <a href="https://moch-avin.netlify.app/" target="_blank">About Us</a>\n            <a href="#favorite">Favorite</a>\n          </div>\n          <p class="copyright">&copy; 2024 VANI RESTO. All rights reserved.</p>\n        </div>\n      </footer>\n    '}}])&&r(o.prototype,i),c&&r(o,c),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,i,c}(o(HTMLElement));customElements.define("footer-bar",u)}}]);
//# sourceMappingURL=app-c01aa6eb.bundle.js.map