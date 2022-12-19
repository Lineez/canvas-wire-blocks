(function(){"use strict";var e={755:function(e,t,n){var o=n(963),r=n(136),i=n(252);function u(e,t,n,o,r,u){var a=(0,i.up)("default-layer");return(0,i.wg)(),(0,i.j4)(a)}function a(e,t,n,o,r,u){var a=(0,i.up)("header-comp"),c=(0,i.up)("router-view"),s=(0,i.up)("footer-comp");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a),(0,i.Wm)(c),(0,i.Wm)(s)],64)}function c(e,t,n,o,r,u){return(0,i.wg)(),(0,i.iD)("footer")}var s=(0,i.aZ)({}),l=n(744);const f=(0,l.Z)(s,[["render",c]]);var h=f,d=(0,i.Uk)("Home"),b=(0,i.Uk)(" | "),p=(0,i.Uk)("About");function v(e,t,n,o,r,u){var a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("nav",null,[(0,i.Wm)(a,{to:"/"},{default:(0,i.w5)((function(){return[d]})),_:1}),b,(0,i.Wm)(a,{to:"/about"},{default:(0,i.w5)((function(){return[p]})),_:1})])])}var g=(0,i.aZ)({});const m=(0,l.Z)(g,[["render",v]]);var y=m,w=(0,i.aZ)({components:{FooterComp:h,HeaderComp:y}});const P=(0,l.Z)(w,[["render",a]]);var k=P,O=(0,i.aZ)({components:{DefaultLayer:k}});const j=(0,l.Z)(O,[["render",u]]);var x=j,B=n(205);(0,B.z)("".concat("/canvas-wire-blocks/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C={name:"focus",mounted:function(e){e.focus()}},E={name:"intersection",mounted:function(e,t){function n(e){e[0].isIntersecting&&t.value()}new IntersectionObserver(n.bind(this),{rootMargin:"0px",threshold:1}).observe(e)}},_=[C,E],A=n(119),M={class:"button-box"};function S(e,t,n,o,r,u){return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("canvas",{id:"canvas",width:"500",height:"500",onMousedown:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.mousedown&&e.mousedown.apply(e,t)}),onMousemove:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.mousemove&&e.mousemove.apply(e,t)}),onMouseup:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.mouseup&&e.mouseup.apply(e,t)}),onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.click&&e.click.apply(e,t)})},null,32),(0,i._)("div",M,[(0,i._)("button",{onClick:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.addRect&&e.addRect.apply(e,t)}),class:"button"},"add rect"),(0,i._)("button",{onClick:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.clearRect&&e.clearRect.apply(e,t)}),class:"button"},"clear rect"),(0,i._)("button",{onClick:t[6]||(t[6]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.clearLines&&e.clearLines.apply(e,t)}),class:"button"},"clear lines")])])}var Z,T,F,I=function(){function e(){}return Object.defineProperty(e,"draw",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,n,o,r){e.strokeStyle="red",e.beginPath(),e.moveTo(t,n),e.lineTo(o,r),e.stroke()}}),e}(),R=function(){function e(e,t,n){Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"radius",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"rectBounds",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endPoint",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.x=this.rectBounds.x,this.y=this.rectBounds.y,this.endPoint=null,this.update(this.x,this.y)}return Object.defineProperty(e.prototype,"update",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var n=this.rectBounds,o=n.width,r=n.height;"left"===this.position?(this.x=e,this.y=t+o/2):"right"===this.position?(this.x=e+o,this.y=t+o/2):"top"===this.position?(this.x=e+o/2,this.y=t):"bottom"===this.position&&(this.x=e+o/2,this.y=t+r)}}),Object.defineProperty(e.prototype,"draw",{enumerable:!1,configurable:!0,writable:!0,value:function(e){e.strokeStyle="white",e.lineWidth=5,e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.stroke(),e.fillStyle="green",e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fill(),this.endPoint&&I.draw(e,this.x,this.y,this.endPoint.x,this.endPoint.y)}}),Object.defineProperty(e.prototype,"getBounds",{enumerable:!1,configurable:!0,writable:!0,value:function(){return{x:this.x-1.5*this.radius,y:this.y-1.5*this.radius,width:3*this.radius,height:3*this.radius}}}),e}(),W=function(){function e(e,t,n,o){Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"points",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.points=[new R("left",10,this.getBounds()),new R("right",10,this.getBounds()),new R("top",10,this.getBounds()),new R("bottom",10,this.getBounds())]}return Object.defineProperty(e.prototype,"update",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var n=this;this.x=e-this.width/2,this.y=t-this.height/2,this.points.forEach((function(e){e.update(n.x,n.y)}))}}),Object.defineProperty(e.prototype,"draw",{enumerable:!1,configurable:!0,writable:!0,value:function(e){e.fillStyle="blue",e.fillRect(this.x,this.y,this.width,this.height),this.points.forEach((function(t){t.draw(e)}))}}),Object.defineProperty(e.prototype,"getBounds",{enumerable:!1,configurable:!0,writable:!0,value:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}}),Object.defineProperty(e.prototype,"getPoints",{enumerable:!1,configurable:!0,writable:!0,value:function(){return this.points}}),e}(),L={x:0,y:0},N=null,D=[],Y=null,q=(0,i.aZ)({mounted:function(){Z=document.getElementById("canvas"),T=Z.getContext("2d"),F=requestAnimationFrame(this.animate)},unmounted:function(){cancelAnimationFrame(F)},methods:{animate:function(e){e,T.clearRect(0,0,Z.width,Z.height),D.forEach((function(e){e.draw(T)})),F=requestAnimationFrame(this.animate)},addRect:function(){D.push(new W(Z.width*Math.random(),Z.height*Math.random(),100,100))},clearRect:function(){D=[]},clearLines:function(){D.forEach((function(e){e.getPoints().forEach((function(e){return e.endPoint=null}))}))},click:function(e){L.x=e.offsetX,L.y=e.offsetY;for(var t=0,n=D;t<n.length;t++)for(var o=n[t],r=0,i=o.getPoints();r<i.length;r++){var u=i[r];if(this.isIntersect(u.getBounds(),e.offsetX,e.offsetY)){if(!N)return void(N=u);if(N.x===u.x)return;return console.log("lastPoint",N),console.log("point",u),N.endPoint=u,void(N=null)}}},mousedown:function(e){for(var t=0,n=D;t<n.length;t++){var o=n[t];this.isIntersect(o.getBounds(),e.offsetX,e.offsetY)&&(Y=o)}},mousemove:function(e){Y&&Y.update(e.offsetX,e.offsetY)},mouseup:function(){Y&&(Y=null)},isIntersect:function(e,t,n){return!(t<e.x||t>e.x+e.width||n<e.y||n>e.y+e.height)}}});const X=(0,l.Z)(q,[["render",S]]);var H=X,U=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,807))}}],z=(0,A.p7)({history:(0,A.PO)("/canvas-wire-blocks/"),routes:U}),G=z,J=(0,o.ri)(x);_.forEach((function(e){J.directive(e.name,e)}));var K=(0,r.WB)();J.use(G).use(K).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.33e137fd.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-default-ts:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var h=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/canvas-wire-blocks/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkvue_default_ts"]=self["webpackChunkvue_default_ts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(755)}));o=n.O(o)})();
//# sourceMappingURL=app.5aadb520.js.map