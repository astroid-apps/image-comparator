parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OO8d":[function(require,module,exports) {
"use strict";function e(e,t,n,i,o){var s,d,r=document.createElement("img");r.setAttribute("style","vertical-align:bottom;width:100%;"),r.setAttribute("src",n);var l=document.createElement("img");l.setAttribute("style","vertical-align:bottom;"),l.setAttribute("src",t);var a=document.createElement("div");a.setAttribute("style","position:absolute;z-index:1;top:0px;bottom:0px;left:0px;overflow:hidden;"),a.appendChild(l);var u=document.createElement("div");u.setAttribute("style","position:absolute;z-index:3;top:0px;height:100%;"),u.style.backgroundColor="#cccccc";var p=document.createElement("div");p.setAttribute("style","position:absolute;z-index:2;bottom:0px;padding:2px 2px 2px 2px;"),p.style.backgroundColor="#eeeeee",p.innerHTML=o;var c=document.createElement("div");c.setAttribute("style","position:absolute;z-index:4;bottom:0px;padding:2px;"),c.style.backgroundColor="#eeeeee",c.innerHTML=i;var v=document.createElement("div");v.setAttribute("style","position:absolute;z-index:5;top:0px;bottom:0px;left:0px;right:0px;");var m=0,g=function(e){e<0&&(e=0),e>s&&(e=s),a.style.width=e+"px",u.style.left=e-d/2+"px",p.getBoundingClientRect().width+e+d/2>s?(p.style.left=s-p.getBoundingClientRect().width+"px",p.style.zIndex=2,c.style.zIndex=4):p.style.left=e+d/2+"px",e-d/2-c.getBoundingClientRect().width<0?(c.style.right=s-c.getBoundingClientRect().width+"px",c.style.zIndex=2,p.style.zIndex=4):c.style.right=s-(e-d/2)+"px",m=e/s},h=function(e){g(e.pageX-b.getBoundingClientRect().left),e.preventDefault()};v.addEventListener("mousedown",function(e){v.style.cursor="w-resize",window.addEventListener("mousemove",h),h(e)}),window.addEventListener("mouseup",function(e){v.style.cursor="default",window.removeEventListener("mousemove",h)});var x=function e(t){1==t.touches.length?(g(t.touches[0].pageX-b.getBoundingClientRect().left),t.preventDefault(),v.addEventListener("touchmove",y,{passive:!1})):(v.removeEventListener("touchmove",y,{passive:!1}),v.removeEventListener("touchstart",e,{passive:!1}))},y=function(e){g(e.touches[0].pageX-b.getBoundingClientRect().left),e.preventDefault()};v.addEventListener("touchstart",x,{passive:!1}),v.addEventListener("touchend",function(e){1==e.touches.length&&v.addEventListener("touchstart",x,{passive:!1})});var b=document.getElementById(e);b.style.position="relative",b.appendChild(r);var f=function(e){s=r.width,l.style.width=s+"px",d=.01*s,u.style.width=d+"px",b.appendChild(a),b.appendChild(u),b.appendChild(p),b.appendChild(c),b.appendChild(v),g(s*e)};window.addEventListener("load",function(e){f(.5)}),window.addEventListener("resize",function(e){f(m)}),this.setImage=function(e,t,n,i){l.setAttribute("src",e),r.setAttribute("src",t),c.innerHTML=n,p.innerHTML=i}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageComparator=e;
},{}],"bBVv":[function(require,module,exports) {
"use strict";var a=require("./ImageComparator.js");window.ImageComparator=a.ImageComparator;
},{"./ImageComparator.js":"OO8d"}]},{},["bBVv"], null)
//# sourceMappingURL=comparator.js.map