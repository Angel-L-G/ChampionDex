parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qzA3":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function r(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var r=i(e,"string");return"symbol"==t(r)?r:r+""}function i(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=exports.default=r(function t(e){n(this,t),this.id=e.key,this.name=e.name,this.title=e.title,this.blurb=e.blurb,this.tags=e.tags,this.type=e.partype,this.stats=e.stats,this.image=e.image.full});
},{}],"d59U":[function(require,module,exports) {
module.exports="/ChampionDex/Mage.15896daf.png";
},{}],"LhrN":[function(require,module,exports) {
module.exports="/ChampionDex/Assassin.1cd3f753.png";
},{}],"y0dg":[function(require,module,exports) {
module.exports="/ChampionDex/Tank.a9847aa4.png";
},{}],"Fw1R":[function(require,module,exports) {
module.exports="/ChampionDex/Support.257eccdc.png";
},{}],"WG1L":[function(require,module,exports) {
module.exports="/ChampionDex/Marksman.aae4a02c.png";
},{}],"mYKs":[function(require,module,exports) {
module.exports="/ChampionDex/Fighter.53068e9c.png";
},{}],"QdeU":[function(require,module,exports) {
"use strict";var t=c(require("./classes/Champion")),n=c(require("../assets/Mage.png")),e=c(require("../assets/Assassin.png")),r=c(require("../assets/Tank.png")),o=c(require("../assets/Support.png")),a=c(require("../assets/Marksman.png")),i=c(require("../assets/Fighter.png"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){u=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var a=n&&n.prototype instanceof w?n:w,i=Object.create(a.prototype),c=new P(r||[]);return o(i,"_invoke",{value:M(t,e,c)}),i}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",g="executing",m="completed",y={};function w(){}function b(){}function x(){}var L={};f(L,i,function(){return this});var E=Object.getPrototypeOf,k=E&&E(E(I([])));k&&k!==e&&r.call(k,i)&&(L=k);var T=x.prototype=w.prototype=Object.create(L);function _(t){["next","throw","return"].forEach(function(n){f(t,n,function(t){return this._invoke(n,t)})})}function j(t,n){function e(o,a,i,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==s(f)&&r.call(f,"__await")?n.resolve(f.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):n.resolve(f).then(function(t){l.value=t,i(l)},function(t){return e("throw",t,i,c)})}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new n(function(n,o){e(t,r,n,o)})}return a=a?a.then(o,o):o()}})}function M(n,e,r){var o=p;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=d(n,e,r);if("normal"===u.type){if(o=r.done?m:v,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function O(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,O(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=d(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(s(n)+" is not iterable")}return b.prototype=x,o(T,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},_(j.prototype),f(j.prototype,c,function(){return this}),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(T),f(T,l,"Generator"),f(T,i,function(){return this}),f(T,"toString",function(){return"[object Generator]"}),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;C(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function l(t,n,e,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var a=t.apply(n,e);function i(t){l(a,r,o,i,c,"next",t)}function c(t){l(a,r,o,i,c,"throw",t)}i(void 0)})}}var h=[];function d(t){var c;switch(t){case"Mage":c=n.default;break;case"Assassin":c=e.default;break;case"Tank":c=r.default;break;case"Support":c=o.default;break;case"Marksman":c=a.default;break;case"Fighter":c=i.default;break;default:c=""}return c}function p(t){var n=document.getElementById("modal"),e=h[t],r=d(e.tags[0]),o='\n        <div class="modalTag">\n            <div class="text modalTagText">'.concat(e.tags[0],'</div>\n            <img class="modalTagImg" src="').concat(r,'"></img>\n        </div>\n    ');e.tags.length>1&&(r=d(e.tags[1]),o+='\n            <div class="modalTag">\n                <div class="text modalTagText">'.concat(e.tags[1],'</div>\n                <img class="modalTagImg" src="').concat(r,'"></img>\n            </div>          \n        ')),n.innerHTML='\n    <div class="modalContainer">\n        <div class="modalHeader">\n            <img class="modalImg" src="https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/'.concat(e.image,'" alt="').concat(e.name,'">\n            \n            <div class="modalLeftHeader">\n                <div class="modalHeaderContainer">\n                    <h1 class="text modalName">').concat(e.name,'</h1>\n                    <h3 class="text modalTittle">').concat(e.title,'</h3>\n                </div>\n                \n                <div class="modalTagContainer">\n                    ').concat(o,'\n                </div>\n            </div>\n        </div>\n\n        <div class="modalBodyContainer">\n            <div class="text modalType">').concat(e.type,'</div>\n\n            <div class="text modalTextBody">').concat(e.blurb,'</div>\n\n            <button class="text modalbtn" onclick="closeModal()">Cerrar</button>\n        </div>\n    </div>\n    '),n.classList.add("active")}function v(){document.getElementById("modal").classList.remove("active")}function g(){return m.apply(this,arguments)}function m(){return(m=f(u().mark(function n(){var e,r,o;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json").then(function(){var t=f(u().mark(function t(n){var e;return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:return e=t.sent.data,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}()).catch(function(t){console.log(t.json())});case 2:for(r in e=n.sent)o=new t.default(e[r]),h.push(o);y(h);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function y(t){var n=document.getElementById("container");for(var e in t){var r=t[e],o=document.createElement("div");o.classList.add("championCard");var a="";a=r.tags.length>1?'\n                <div class="tagsConatiner">\n                    <p class="text tag"><strong>'.concat(r.tags[0],'</strong></p>\n                    <p class="text tag"><strong>').concat(r.tags[1],'</strong></p>\n                    <button class="btn tag" onclick="openModal(').concat(e,')">Ver Mas</button>\n                </div>                \n            '):'\n                <div class="tagsConatiner">\n                    <p class="text tag"><strong>'.concat(r.tags[0],'</strong></p>\n                    <button class="btn tag" onclick="openModal(').concat(e,')">Ver Mas</button>\n                </div>                \n            '),o.innerHTML='\n            <div class="championCardHeader">\n                <img class="champPic" src="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/'.concat(r.image,'" alt="').concat(r.name,'">\n                <div class="championCardHeaderTittle">\n                    <h2 class="text">').concat(r.name,'</h2>\n                    <h3 class="text">').concat(r.type,'</h3>\n                </div>\n            </div>\n            <h4 class="text ">').concat(r.title,'</h4>\n            <p class="text textBody">').concat(r.blurb,"</p>\n            ").concat(a,"\n        "),n.appendChild(o)}}window.openModal=p,window.closeModal=v,g();
},{"./classes/Champion":"qzA3","../assets/Mage.png":"d59U","../assets/Assassin.png":"LhrN","../assets/Tank.png":"y0dg","../assets/Support.png":"Fw1R","../assets/Marksman.png":"WG1L","../assets/Fighter.png":"mYKs"}]},{},["QdeU"], null)
//# sourceMappingURL=/ChampionDex/app.856eb08e.js.map