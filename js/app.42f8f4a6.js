(function(){"use strict";var t={977:function(t,e,n){var i=n(963),o=n(136),s=n(252);function r(t,e,n,i,o,r){const a=(0,s.up)("default-layer");return(0,s.wg)(),(0,s.j4)(a)}function a(t,e,n,i,o,r){const a=(0,s.up)("header-comp"),u=(0,s.up)("router-view"),c=(0,s.up)("footer-comp");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a),(0,s.Wm)(u),(0,s.Wm)(c)],64)}function u(t,e,n,i,o,r){return(0,s.wg)(),(0,s.iD)("footer")}var c=(0,s.aZ)({}),l=n(744);const h=(0,l.Z)(c,[["render",u]]);var d=h;const f=(0,s.Uk)("Home"),p=(0,s.Uk)(" | "),m=(0,s.Uk)("About");function g(t,e,n,i,o,r){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",null,[(0,s.Wm)(a,{to:"/"},{default:(0,s.w5)((()=>[f])),_:1}),p,(0,s.Wm)(a,{to:"/about"},{default:(0,s.w5)((()=>[m])),_:1})])])}var v=(0,s.aZ)({});const w=(0,l.Z)(v,[["render",g]]);var y=w,b=(0,s.aZ)({components:{FooterComp:d,HeaderComp:y}});const x=(0,l.Z)(b,[["render",a]]);var k=x,O=(0,s.aZ)({components:{DefaultLayer:k}});const S=(0,l.Z)(O,[["render",r]]);var P=S,_=n(205);(0,_.z)("/canvas-wire-blocks/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var M={name:"focus",mounted(t){t.focus()}},E={name:"intersection",mounted(t,e){function n(t){t[0].isIntersecting&&e.value()}new IntersectionObserver(n.bind(this),{rootMargin:"0px",threshold:1}).observe(t)}},C=[M,E],L=n(119),A=n(577);const B={class:"button-box"},j=["onClick"],z=(0,s._)("div",{class:"description"},[(0,s._)("ul",null,[(0,s._)("li",null,"Use context menu to action"),(0,s._)("li",null,"Add / Drag / Wire / Delete rect"),(0,s._)("li",null,"Add / Wire / Delete lines"),(0,s._)("li",null,"Randomize rect size (for new added)")])],-1);function R(t,e,n,i,o,r){return(0,s.wg)(),(0,s.iD)("main",null,[(0,s._)("canvas",{id:"canvas",width:"500",height:"500",onMousedown:e[0]||(e[0]=(...e)=>t.mousedown&&t.mousedown(...e)),onMousemove:e[1]||(e[1]=(...e)=>t.mousemove&&t.mousemove(...e)),onMouseup:e[2]||(e[2]=(...e)=>t.mouseup&&t.mouseup(...e)),onContextmenu:e[3]||(e[3]=(...e)=>t.contextmenu&&t.contextmenu(...e))},null,32),(0,s._)("div",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.items,(t=>((0,s.wg)(),(0,s.iD)("button",{key:t.name,onClick:t.action,class:"button"},(0,A.zw)(t.name),9,j)))),128))]),z])}class D{static draw(t,e,n,i,o){t.strokeStyle="red",t.beginPath(),t.moveTo(e,n),t.lineTo(i,o),t.stroke()}}class T{position;radius;rectBounds;x;y;endPoint;isSelect;constructor(t,e,n){this.position=t,this.radius=e,this.rectBounds=n,this.x=this.rectBounds.x,this.y=this.rectBounds.y,this.endPoint=null,this.isSelect=!1,this.update(this.x,this.y)}update(t,e){const{width:n,height:i}=this.rectBounds;"left"===this.position?(this.x=t,this.y=e+i/2):"right"===this.position?(this.x=t+n,this.y=e+i/2):"top"===this.position?(this.x=t+n/2,this.y=e):"bottom"===this.position&&(this.x=t+n/2,this.y=e+i)}draw(t){t.strokeStyle=this.isSelect?"orange":"white",t.lineWidth=5,t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.stroke(),t.fillStyle=this.isSelect?"yellow":"green",t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fill(),this.endPoint&&D.draw(t,this.x,this.y,this.endPoint.x,this.endPoint.y)}getBounds(){return{x:this.x-1.5*this.radius,y:this.y-1.5*this.radius,width:3*this.radius,height:3*this.radius}}}class Z{x;y;width;height;points;constructor(t,e,n,i){this.x=t,this.y=e,this.width=n,this.height=i,this.points=[new T("left",10,this.getBounds()),new T("right",10,this.getBounds()),new T("top",10,this.getBounds()),new T("bottom",10,this.getBounds())]}update(t,e){this.x=t-this.width/2,this.y=e-this.height/2,this.points.forEach((t=>{t.update(this.x,this.y)}))}draw(t){t.fillStyle="blue",t.fillRect(this.x,this.y,this.width,this.height),this.points.forEach((e=>{e.draw(t)}))}getBounds(){return{x:this.x,y:this.y,width:this.width,height:this.height}}getPoints(){return this.points}getIsAnyPointSelect(){return!!this.points.find((t=>t.isSelect))}}function W(t,e,n){return!(e<t.x||e>t.x+t.width||n<t.y||n>t.y+t.height)}var F,I;(function(t){t[t["left"]=0]="left",t[t["middle"]=1]="middle",t[t["right"]=2]="right"})(F||(F={})),function(t){t["addRect"]="add rect"}(I||(I={}));const N={closeMenuAfterAction:!0,cssClass:"contextmenu"};class H{items;_options;list;_isMenuOpen;options;constructor(t,e){this.items=t,this._options=e,this._isMenuOpen=!1,this.options=Object.assign(N,this._options)}get isMenuOpen(){return this._isMenuOpen}set isMenuOpen(t){this._isMenuOpen=t,this.list?.classList.toggle("open",t)}create(t,e){const{cssClass:n}=this.options;this.list=this.generateElement({element:"ul",classes:[n],styles:{top:t+"px",left:e+"px"}}),this.list.addEventListener("click",this.onClick.bind(this));const i=this.items.map((t=>this.generateElement({element:"li",elementOptions:t,classes:[`${n}__item`]})));return this.list.append(...i),this.isMenuOpen=!0,this.list}onClick(t){const e=t.target,n=Array.prototype.indexOf.call(e.parentNode?.children,e);n<0||(this.items[n].action(),this.options?.closeMenuAfterAction&&(this.isMenuOpen=!1))}generateElement(t){const{element:e,elementOptions:n,classes:i,styles:o}=t,s=document.createElement(e);return n&&(s.innerText=n.name),i&&s.classList.add(...i),o&&this.updateStyles(s,o),s}updateStyles(t,e){for(const[n,i]of Object.entries(e))t.style.setProperty(n,i)}updatePosition(t,e){if(!this.list)throw new Error("List must be defined");this.updateStyles(this.list,{top:t+"px",left:e+"px"})}remove(){if(!this.list)throw new Error("List must be defined");this.list.removeEventListener("click",this.onClick),this.list.remove()}}let Y,U,X,q=null,K=[],$=null;const G=100;let J,Q=!1;var V=(0,s.aZ)({data(){return{items:[{name:"add rect",action:()=>this.addRect()},{name:"clear rect",action:()=>this.clearRect()},{name:"clear lines",action:()=>this.clearLines()},{name:"randomize rect size (toggle (for new added))",action:()=>this.randomizeRectSize()}]}},mounted(){Y=document.getElementById("canvas"),U=Y.getContext("2d")},unmounted(){this.stopLoop(),J?.remove()},methods:{animate(t){console.log("call loop"),U.clearRect(0,0,Y.width,Y.height),K.forEach((t=>{t.draw(U)})),t&&this.startLoop()},randomizeRectSize(){Q=!Q},getRectSize(){return Q?G*(.5*Math.random()+.5):G},startLoop(t=!1){X=requestAnimationFrame(this.animate.bind(this,t))},stopLoop(){cancelAnimationFrame(X)},addRect(){K.push(new Z((Y.width-G)*Math.random(),(Y.height-G)*Math.random(),this.getRectSize(),this.getRectSize())),this.startLoop()},clearRect(){K=[],this.startLoop()},clearLines(){K.forEach((t=>{t.getPoints().forEach((t=>t.endPoint=null))})),this.startLoop()},onPointClick(t,e){return q?q.isSelect===e.getIsAnyPointSelect()?(q.isSelect=!1,t.isSelect=!0,void(q=t)):(q.endPoint=t,q.isSelect=!1,void(q=null)):(t.isSelect=!0,void(q=t))},mousedownHandler(t){const{offsetX:e,offsetY:n}=t;for(let i=K.length-1;i>-1;i--){const t=K[i];for(const i of t.getPoints())if(W(i.getBounds(),e,n))return void this.onPointClick(i,t);if(W(t.getBounds(),e,n))return void($=t)}q&&(q.isSelect=!1,q=null),J?.isMenuOpen&&(J.isMenuOpen=!1)},mousedown(t){t.button!==F.right&&(this.mousedownHandler(t),this.startLoop())},mousemove(t){$&&($.update(t.offsetX,t.offsetY),this.startLoop())},mouseup(t){t.button!==F.right&&$&&($=null)},contextmenu(t){if(t.preventDefault(),!J)return J=new H(this.items),void document.body.append(J.create(t.offsetY,t.offsetX));J.isMenuOpen||(J.isMenuOpen=!0),J.updatePosition(t.offsetY,t.offsetX)}}});const tt=(0,l.Z)(V,[["render",R]]);var et=tt;const nt=[{path:"/",name:"home",component:et},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,807))}],it=(0,L.p7)({history:(0,L.PO)("/canvas-wire-blocks/"),routes:nt});var ot=it;const st=(0,i.ri)(P);C.forEach((t=>{st.directive(t.name,t)}));const rt=(0,o.WB)();st.use(ot).use(rt).mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,s){if(!i){var r=1/0;for(l=0;l<t.length;l++){i=t[l][0],o=t[l][1],s=t[l][2];for(var a=!0,u=0;u<i.length;u++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(a=!1,s<r&&(r=s));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[i,o,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.4cca7d97.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-default-ts:";n.l=function(i,o,s,r){if(t[i])t[i].push(o);else{var a,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var h=c[l];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==e+s){a=h;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+s),a.src=i),t[i]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(f);var o=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/canvas-wire-blocks/"}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var s=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=s);var r=n.p+n.u(e),a=new Error,u=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,o[1](a)}};n.l(r,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,r=i[0],a=i[1],u=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(e&&e(i);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},i=self["webpackChunkvue_default_ts"]=self["webpackChunkvue_default_ts"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(977)}));i=n.O(i)})();
//# sourceMappingURL=app.42f8f4a6.js.map