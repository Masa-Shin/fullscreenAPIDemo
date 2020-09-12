!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var c,a,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";t.r(n);t(2);const r=document.documentElement,o=document.getElementById("video"),i=async(e=r)=>{e.requestFullscreen=e.requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.msRequestFullscreen||e.webkitEnterFullscreen;const n=e.requestFullscreen();if(n instanceof Promise)return await n.catch(e=>{alert(`フルスクリーンにできないようです: ${e.message} (${e.name})`)})},c=async()=>{document.exitFullscreen=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.msExitFullscreen;const e=document.exitFullscreen();if(e instanceof Promise)return await e.catch(e=>{alert(`フルスクリーンを解除できないようです: ${e.message} (${e.name})`)})},a=(e=r)=>{document.fullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement||document.msFullscreenElement?c():i(e)};document.getElementById("request_button").addEventListener("click",()=>{i()}),document.getElementById("exit_button").addEventListener("click",()=>{c()}),document.getElementById("toggle_button").addEventListener("click",()=>{a()}),document.getElementById("gopher_kun").addEventListener("click",e=>{a(e.target)}),document.getElementById("video").addEventListener("click",e=>{a(e.target)}),document.getElementById("video_request_button").addEventListener("click",()=>{i(o)}),document.fullscreenEnabled||document.webkitFullscreenEnabled||document.webkitCancelFullScreen||document.msFullscreenEnabled||alert("このブラウザでは一部のフルスクリーン機能が利用できません。")},function(e,n,t){var r=t(3),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function a(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],l=t[u]||0,s="".concat(u," ").concat(l);t[u]=l+1;var d=a(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:s,updater:b(f,n),references:1}),r.push(s)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function m(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function b(e,n){var t,r,o;if(n.singleton){var i=g++;t=p||(p=l(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);c[o].references--}for(var i=u(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}t=i}}}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r)()(!1);o.push([e.i,'body{font-family:"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif}.button_wrapper{margin:36px auto;text-align:center}.button{width:11rem;margin:auto auto 8px;padding:.25rem 0;color:#FFF;background-color:#333;border:1px solid #333;border-radius:16px;cursor:pointer}.gopher_kun_wrapper,.video_wrapper{margin:52px auto;text-align:center;font-size:20px}.gopher_kun{margin:auto;cursor:pointer}.gopher_kun:fullscreen{background:linear-gradient(red, orange, yellow, green, blue);background:conic-gradient(red, orange, yellow, green, blue)}.gopher_kun:-webkit-full-screen{background:linear-gradient(red, orange, yellow, green, blue);background:conic-gradient(red, orange, yellow, green, blue)}.gopher_kun:-ms-full-screen{background:linear-gradient(red, orange, yellow, green, blue);background:conic-gradient(red, orange, yellow, green, blue)}.license{font-size:12px}\n',""]),n.default=o}]);