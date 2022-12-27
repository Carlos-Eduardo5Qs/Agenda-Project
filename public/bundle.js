(()=>{"use strict";var n={186:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"\n",""]);const s=a},351:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"#register {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n    background-color: #ebebeb;\n    box-shadow: 1px 5px 3px rgba(0,0,0,0.75);\n}\n\n#sign-in-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 20px;\n    overflow: hidden;\n    width: 100%;\n    height: 80vh;\n}\n\n#sign-in-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width:50vw;\n    background-color: #3eb593;\n}\n\n#sign-in-content img {\n    width: 150px;\n    height: auto;\n    margin: 2.5rem 0rem;\n}\n\n#sign-in-content article {\n    text-align: center;\n    color: #f7f7f7;\n    line-height: 2.5rem;\n}\n\n#sign-in-content article h1 {\n    font-size: 3.5rem;\n}\n\n#sign-in-content article p {\n    color: #ebebeb;\n}\n\n#p-1 {\n    margin-top: 2rem;\n}\n\n#p-2 {\n    margin-bottom: 2rem;\n}\n\n#sign-in-content article a {\n    color: #f7f7f7;\n    border: 0.1rem solid #f7f7f7;\n    border-radius: 20px;\n    padding: 0.3rem 3rem;\n    text-transform: uppercase;\n}\n\n#sign-in-main {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 90%;\n    height: 100%;\n    background-color: #ffff;\n}\n\n#sign-in-main a {\n    position: relative;\n    top: 15%;\n}\n\n#sign-in-main h1 {\n    color: #3eb593;\n}\n\n#sign-in-main form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#sign-up-container input{\n    width: 300px;\n    height: 40px;\n    background-color: #ebebeb;\n    border: none;\n    padding: 1.5rem;\n}\n\n#sign-up-container input::placeholder {\n    color: #7a7a7a;\n}\n\n#sign-up-container button {\n    background-color: #3eb593;\n    border: none;\n    color: #ffff;\n    padding: 1.2rem 5rem;\n    border-radius: 20px;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n",""]);const s=a},113:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap);"]),a.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    font-size: 2rem;\n    font-family: 'Open Sans', sans-serif;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n.center {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n#bg-menu {\n    background-color: #323837;\n    color: #ffff;\n    padding: 1rem;\n}\n\n#container-title {\n    padding: 2rem 0;\n}\n\n#container {\n    padding: 1rem; \n    text-align: center; \n}\n\n#container h1{\n    font-size: 4rem;\n    padding: 1rem;\n}\n\n#nav-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#menu-nav {\n    display: flex;\n    align-items: center;\n    gap: 3rem;\n    list-style: none;\n}\n\n#menu-nav a {\n    color: #ffff;\n}\n\n#error {\n    background-color: #ffa3a3;\n    max-width: 700px;\n    height: 7vh;\n    margin: 2rem auto;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #780b16;\n}\n\n#table-client {\n    margin: 0 auto;\n    border-collapse: collapse;\n}\n\n#table-client td {\n    padding: 1.5rem 3rem;\n    border-top: 0.2rem solid #b3b3b3;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(113),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var g=t(186),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var b=t(351),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals})()})();