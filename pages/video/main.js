!function(){var e,t={759:function(e,t,a){"use strict";function n(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:{}}a.d(t,{$q:function(){return l}});const r="function"==typeof Proxy,o="devtools-plugin:setup";let i,s;class d{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const a={};if(e.settings)for(const t in e.settings){const n=e.settings[t];a[t]=n.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},a);try{const e=localStorage.getItem(n),t=JSON.parse(e);Object.assign(r,t)}catch(e){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(e){}r=e},now(){return void 0!==i||("undefined"!=typeof window&&window.performance?(i=!0,s=window.performance):"undefined"!=typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(i=!0,s=globalThis.perf_hooks.performance):i=!1),i?s.now():Date.now();var e}},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((a=>{this.targetQueue.push({method:t,args:e,resolve:a})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function l(e,t){const a=e,i=n(),s=n().__VUE_DEVTOOLS_GLOBAL_HOOK__,l=r&&a.enableEarlyProxy;if(!s||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new d(a,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(o,e,t)}},933:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".Header[data-v-0fc1e299]{background-color:#eff5f1;color:#273547;padding:10px 0}.Header__inner[data-v-0fc1e299]{margin-left:auto;margin-right:auto;width:100%;text-align:center;font-size:0}@media screen and (min-width: 1920px){.Header__inner[data-v-0fc1e299]{max-width:1600px}}@media screen and (min-width: 1280px)and (max-width: 1919px){.Header__inner[data-v-0fc1e299]{max-width:1400px}}@media screen and (min-width: 768px)and (max-width: 1279px){.Header__inner[data-v-0fc1e299]{padding-left:20px;padding-right:20px}}@media screen and (max-width: 767px){.Header__inner[data-v-0fc1e299]{padding-left:10px;padding-right:10px}}.Header__logo[data-v-0fc1e299]{display:inline-block;line-height:1;width:80px}",""]),t.default=i},5:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".Close[data-v-0fb7ba58]{display:flex;flex-direction:column;align-items:center}.Close__bars[data-v-0fb7ba58]{display:flex;flex-direction:column;justify-content:space-between;width:30px;height:20px;margin-bottom:5px}.Close__bars.light .Close__bar[data-v-0fb7ba58]{background-color:#eff5f1}.Close__bars.dark .Close__bar[data-v-0fb7ba58]{background-color:#273547}.Close__bar[data-v-0fb7ba58]{display:block;width:100%;height:4px;border-radius:5px}.Close__bar[data-v-0fb7ba58]:nth-child(1){transform:rotate(45deg) translate(6px, 7px)}.Close__bar[data-v-0fb7ba58]:nth-child(2){transform:rotate(-45deg) translate(4px, -5px)}.Close__memo[data-v-0fb7ba58]{line-height:1;font-size:0.75rem}",""]),t.default=i},708:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,'.Hamberger[data-v-5221a1c4]{display:flex;flex-direction:column;align-items:center}.Hamberger__bars[data-v-5221a1c4]{display:flex;flex-direction:column;justify-content:space-between;width:30px;height:20px;margin-bottom:5px}.Hamberger__bar[data-v-5221a1c4]{background-color:#eff5f1;display:block;width:100%;height:4px;border-radius:5px}.Hamberger__memo[data-v-5221a1c4]{line-height:1;font-size:0.75rem}.Hamberger__memo[data-v-5221a1c4]::before{content:"MENU"}.Hamberger.open .Hamberger__memo[data-v-5221a1c4]{color:#273547}.Hamberger.open .Hamberger__memo[data-v-5221a1c4]::before{content:"CLOSE"}.Hamberger.open .Hamberger__bar[data-v-5221a1c4]{background-color:#273547}.Hamberger.open .Hamberger__bar[data-v-5221a1c4]:nth-child(1){transform:rotate(45deg) translate(6px, 7px)}.Hamberger.open .Hamberger__bar[data-v-5221a1c4]:nth-child(2){opacity:0}.Hamberger.open .Hamberger__bar[data-v-5221a1c4]:nth-child(3){transform:rotate(-45deg) translate(4px, -5px)}',""]),t.default=i},23:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".PageTop[data-v-4139a87d]{display:flex;flex-direction:column;align-items:center;color:#273547}.PageTop__svg[data-v-4139a87d]{width:30px;height:30px;margin-bottom:-3px}.PageTop__memo[data-v-4139a87d]{font-size:0.75rem;font-weight:bold}",""]),t.default=i},280:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".DrawerMenu[data-v-36e8cd00]{position:relative;width:100%;height:100vh;background-color:#eff5f1;color:#273547;transition:transform .05s ease-in-out}.DrawerMenu.open[data-v-36e8cd00]{transform:translateX(-100%)}.DrawerMenu__inner[data-v-36e8cd00]{margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width: 1920px){.DrawerMenu__inner[data-v-36e8cd00]{max-width:1600px}}@media screen and (min-width: 1280px)and (max-width: 1919px){.DrawerMenu__inner[data-v-36e8cd00]{max-width:1400px}}@media screen and (min-width: 768px)and (max-width: 1279px){.DrawerMenu__inner[data-v-36e8cd00]{padding-left:20px;padding-right:20px}}@media screen and (max-width: 767px){.DrawerMenu__inner[data-v-36e8cd00]{padding-left:10px;padding-right:10px}}.DrawerMenu p[data-v-36e8cd00]{text-align:center;font-size:2rem;font-weight:bold;padding:20px 0}.DrawerMenu__close[data-v-36e8cd00]{position:absolute;right:20px;bottom:20px}",""]),t.default=i},899:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".Footer[data-v-4afcc9fd]{background-color:#0f0f0f;border-top:1px solid rgba(255,255,255,.2);display:flex;justify-content:center}.Footer__item[data-v-4afcc9fd]{width:25%}.Footer__item a[data-v-4afcc9fd]{display:flex;padding:5px 0;flex-direction:column;align-items:center;color:#f1f1f1}.Footer__item a[data-v-4afcc9fd]:hover{text-decoration:none}.Footer__icon[data-v-4afcc9fd]{width:23px;display:block}.Footer__icon svg[data-v-4afcc9fd]{width:100%}.Footer__icon path[data-v-4afcc9fd],.Footer__icon rect[data-v-4afcc9fd]{fill:#f1f1f1}.Footer__text[data-v-4afcc9fd]{font-size:0.75rem}",""]),t.default=i},976:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".Header[data-v-529b0426]{background-color:#0f0f0f;color:#f1f1f1;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.2)}.Header__inner[data-v-529b0426]{margin-left:auto;margin-right:auto;width:100%;text-align:center;font-size:0}@media screen and (min-width: 1920px){.Header__inner[data-v-529b0426]{max-width:1600px}}@media screen and (min-width: 1280px)and (max-width: 1919px){.Header__inner[data-v-529b0426]{max-width:1400px}}@media screen and (min-width: 768px)and (max-width: 1279px){.Header__inner[data-v-529b0426]{padding-left:20px;padding-right:20px}}@media screen and (max-width: 767px){.Header__inner[data-v-529b0426]{padding-left:10px;padding-right:10px}}.Header__logo[data-v-529b0426]{display:inline-block;line-height:1;width:80px}",""]),t.default=i},651:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".VideoCard__link[data-v-f477d926]:hover{opacity:.7;text-decoration:none}.VideoCard__thumbnail[data-v-f477d926]{position:relative;padding-bottom:56.25%}.VideoCard__thumbnail img[data-v-f477d926],.VideoCard__thumbnail video[data-v-f477d926]{border-radius:10px;position:absolute;height:100%;-o-object-fit:cover;object-fit:cover}@media screen and (max-width: 767px){.VideoCard__thumbnail img[data-v-f477d926],.VideoCard__thumbnail video[data-v-f477d926]{border-radius:0}}.VideoCard__thumbnail video[data-v-f477d926]{opacity:0}.VideoCard__thumbnail video.is-play[data-v-f477d926]{opacity:1}.VideoCard__title[data-v-f477d926]{margin-top:10px;padding-left:10px;padding-right:10px;color:#eff5f1;font-size:1.125rem}",""]),t.default=i},971:function(e,t,a){"use strict";a.r(t);var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".CategorySlide[data-v-ad454e7e]{display:flex;justify-content:center;gap:20px}.CategorySlide__item[data-v-ad454e7e]{cursor:pointer;padding:5px 10px;border-radius:5px;background-color:rgba(255,255,255,.1);color:#f1f1f1}.CategorySlide__item.active[data-v-ad454e7e]{background-color:#f1f1f1;color:#0f0f0f}",""]),t.default=i},314:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},601:function(e){"use strict";e.exports=function(e){return e[1]}},891:function(e,t,a){"use strict";var n=a(365),r=a(834),o=(0,r.y$)({state(){var e,t;return{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),menuOpen:!1,headerHeight:0,footerHeight:0,eleventyGlobalData:JSON.parse((null===(e=document.getElementById("eleventy-global-data"))||void 0===e?void 0:e.textContent)||"{}"),eleventyLocalData:JSON.parse((null===(t=document.getElementById("eleventy-local-data"))||void 0===t?void 0:t.textContent)||"{}"),currentPage:window.location.pathname}},getters:{touchOrClick:e=>e.isMobile?"touchstart":"click"},mutations:{toggleMenuOpen(e){e.menuOpen=!e.menuOpen},setHeaderHeight(e,t){e.headerHeight=t.height},setFooterHeight(e,t){e.footerHeight=t.height}},actions:{toggleMenuOpen(e){e.commit("toggleMenuOpen")},setHeaderHeight(e,t){e.commit("setHeaderHeight",t)},setFooterHeight(e,t){e.commit("setFooterHeight",t)}}});function i(e,t){(0,n.Ef)(e).use(o).mount(t)}const s={ref:"Header",class:"Header"},d={class:"Header__inner"},l={class:"Header__logo"},c={href:"/"},u=["src"];var p=(0,n.pM)({name:"VHeader",setup(){const e=(0,r.Pj)(),t=(0,n.KR)("https://cdn.tk-media-create.com"),a=(0,n.KR)();let o;const i=()=>{var t;e.dispatch("setHeaderHeight",{height:null===(t=a.value)||void 0===t?void 0:t.offsetHeight})};return(0,n.sV)((()=>{o=new ResizeObserver((()=>i())),o.observe(a.value)})),(0,n.hi)((()=>{o&&a.value&&o.unobserve(a.value)})),{baseUrl:t,Header:a,setHeaderHeight:i}}}),f=(a(242),a(409)),h=a.n(f),g=a(262);"function"==typeof h()&&h()(p);var v=(0,g.A)(p,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("header",s,[(0,n.Lk)("div",d,[(0,n.Lk)("h1",l,[(0,n.Lk)("a",c,[(0,n.Lk)("img",{src:e.baseUrl+"/logo/logo_transparent.png",alt:"T.K Media",width:"200"},null,8,u)])])])],512)}],["__scopeId","data-v-0fc1e299"]]);const _=[(0,n.Fv)('<div class="Hamberger__bars" data-v-5221a1c4><span class="Hamberger__bar" data-v-5221a1c4></span><span class="Hamberger__bar" data-v-5221a1c4></span><span class="Hamberger__bar" data-v-5221a1c4></span></div><span class="Hamberger__memo" data-v-5221a1c4></span>',2)];var m=(0,n.pM)({name:"VHamburger",setup(){const e=(0,r.Pj)(),t=(0,n.EW)((()=>e.getters.touchOrClick));return{isOpen:(0,n.EW)((()=>e.state.menuOpen)),touchOrClick:t,toggleMenuOpen:()=>e.dispatch("toggleMenuOpen")}}}),b=(a(63),a(992)),x=a.n(b);"function"==typeof x()&&x()(m);var w=(0,g.A)(m,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("button",{class:(0,n.C4)(["Hamberger",{open:e.isOpen}]),[(0,n.rU)(e.touchOrClick)]:t[0]||(t[0]=(...t)=>e.toggleMenuOpen&&e.toggleMenuOpen(...t))},_,16)}],["__scopeId","data-v-5221a1c4"]]);const y=[(0,n.Fv)('<svg class="PageTop__svg icon icon-tabler icons-tabler-outline icon-tabler-arrow-up" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-4139a87d><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-4139a87d></path><path d="M12 5l0 14" data-v-4139a87d></path><path d="M18 11l-6 -6" data-v-4139a87d></path><path d="M6 11l6 -6" data-v-4139a87d></path></svg><span class="PageTop__memo" data-v-4139a87d>TOP</span>',2)];var k=(0,n.pM)({name:"VPageTop",setup(){const e=(0,r.Pj)();return{onClick:()=>{!function(e,t=500){const a=document.querySelector(e);if(!a)return;const n=a.getBoundingClientRect().top,r=window.scrollY,o=n-r;let i=null;requestAnimationFrame((function e(a){null===i&&(i=a);const n=a-i,s=(d=n,l=r,c=o,(d/=t/2)<1?c/2*d*d+l:-c/2*(--d*(d-2)-1)+l);var d,l,c;window.scrollTo(0,s),n<t&&requestAnimationFrame(e)}))}("body")},touchOrClick:(0,n.EW)((()=>e.getters.touchOrClick))}}});a(0);var C=(0,g.A)(k,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("button",{class:"PageTop",[(0,n.rU)(e.touchOrClick)]:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},y,16)}],["__scopeId","data-v-4139a87d"]]);const H={class:"DrawerMenu__inner"},L={class:"DrawerMenu__links"},O=["href"],M=e=>((0,n.Qi)("data-v-0fb7ba58"),e=e(),(0,n.jt)(),e),E={class:"Close"},S=[M((()=>(0,n.Lk)("span",{class:"Close__bar"},null,-1))),M((()=>(0,n.Lk)("span",{class:"Close__bar"},null,-1)))],V=M((()=>(0,n.Lk)("span",{class:"Close__memo"},"CLOSE",-1)));var F=(0,n.pM)({name:"VClose",props:{appearance:{type:String,default:"light",validator:e=>["light","dark"].includes(e)}},setup(e){return{color:e.appearance}}});a(246);var j=(0,g.A)(F,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("button",E,[(0,n.Lk)("div",{class:(0,n.C4)(["Close__bars",e.color])},S,2),V])}],["__scopeId","data-v-0fb7ba58"]]),P=(0,n.pM)({name:"VDrawerMenu",components:{Close:j},setup(){const e=(0,r.Pj)(),t=(0,n.EW)((()=>e.state.menuOpen)),a=(0,n.EW)((()=>e.getters.touchOrClick));return{isOpen:t,pages:(0,n.EW)((()=>e.state.eleventyGlobalData.pages)),touchOrClick:a,closeMenu:()=>e.dispatch("toggleMenuOpen")}}});a(711);var A=(0,g.A)(P,[["render",function(e,t,a,r,o,i){const s=(0,n.g2)("Close");return(0,n.uX)(),(0,n.CE)("div",{class:(0,n.C4)(["DrawerMenu",{open:e.isOpen}])},[(0,n.Lk)("div",H,[(0,n.Lk)("ul",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.pages,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.meta.title,class:"DrawerMenu__link"},[(0,n.Lk)("a",{href:e.path},(0,n.v_)(e.meta.title),9,O)])))),128))])]),(0,n.bF)(s,{appearance:"dark",class:"DrawerMenu__close",[(0,n.rU)(e.touchOrClick)]:e.closeMenu},null,16)],2)}],["__scopeId","data-v-36e8cd00"]]);window.addEventListener("DOMContentLoaded",(function(){i(v,"#header"),i(w,"#menu-icon"),i(C,"#pagetop"),i(A,"#drawer-menu")})),window.addEventListener("load",(function(){const e=document.querySelector("#header");let t=e.offsetHeight,a=0;new ResizeObserver((a=>{for(const n of a)n.target===e&&(t=e.offsetHeight)})).observe(e),window.addEventListener("scroll",(()=>{const n=window.scrollY;e.style.top=n<a?"0":n>t?`-${t}px`:"0",a=n}))}));const T=e=>((0,n.Qi)("data-v-4afcc9fd"),e=e(),(0,n.jt)(),e),D={ref:"Footer",class:"Footer",role:"tablist"},I=T((()=>(0,n.Lk)("li",{class:"Footer__item",role:"tab"},[(0,n.Lk)("a",{href:"/video"},[(0,n.Lk)("span",{class:"Footer__icon"},[(0,n.Lk)("svg",{id:"_x32_",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},[(0,n.Lk)("g",null,[(0,n.Lk)("path",{class:"st0",d:"M451.679,161.238h-0.015L296.946,16.2C285.488,5.434,270.647-0.023,255.992,0\n      c-14.654-0.023-29.496,5.434-40.969,16.2L60.321,161.238c-12.078,11.317-18.924,27.144-18.924,43.694v247.174\n      c-0.016,16.463,6.737,31.584,17.542,42.351c10.758,10.805,25.88,17.55,42.351,17.542h309.42\n      c16.456,0.008,31.576-6.737,42.351-17.542c10.789-10.758,17.558-25.888,17.542-42.351V204.932\n      C470.603,188.368,463.741,172.556,451.679,161.238z M422.912,452.107c-0.015,3.446-1.335,6.341-3.586,8.623\n      c-2.282,2.251-5.185,3.571-8.615,3.578H308.993v-105.97H203.007v105.97H101.29c-3.446-0.015-6.349-1.327-8.631-3.57\n      c-2.251-2.282-3.571-5.186-3.571-8.631V204.932c0-3.384,1.382-6.59,3.85-8.896L247.655,50.991c2.391-2.236,5.278-3.284,8.336-3.299\n      c3.059,0.016,5.947,1.064,8.337,3.291l154.718,145.038v0.008c2.468,2.313,3.865,5.534,3.865,8.903V452.107z"})])])]),(0,n.Lk)("span",{class:"Footer__text"},"ホーム")])],-1))),U=T((()=>(0,n.Lk)("li",{class:"Footer__item",role:"tab"},[(0,n.Lk)("a",{href:"/video/short/"},[(0,n.Lk)("span",{class:"Footer__icon"},[(0,n.Lk)("svg",{id:"_x32_",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},[(0,n.Lk)("g",null,[(0,n.Lk)("path",{class:"st0",d:"M412.42,174.719l39.922,57.688h-45.156l-39.922-57.688h-57.109l39.938,57.688h-45.156l-39.922-57.688h-57.109\n\t\tl39.922,57.688h-45.141l-39.922-57.688h-57.109l39.922,57.688H100.42l-38.469-55.578L459.779,65.844l-4.484-16.047l-0.953-3.438\n\t\tl-6.203-22.203c-3.953-14.188-16.547-23.5-30.5-24.156l-21.656,62.641l-43.5,12.141l22.406-64.75l-55,15.344l-22.406,64.75\n\t\tl-43.484,12.125l22.406-64.75l-55.016,15.344l-22.406,64.766l-43.484,12.125L177.904,65l-55.016,15.344l-22.391,64.75l-43.5,12.125\n\t\tl22.406-64.75l-18.516,5.172c-17.703,4.938-28.063,23.297-23.125,41.016l6.203,22.188l-1.297,0.375l5.438,19.469l1.328-0.375\n\t\tv52.094v2.219v244.094c0,18.375,14.906,33.281,33.281,33.281h359.469c18.391,0,33.281-14.906,33.281-33.281V234.625v-2.219v-57.688\n\t\tH412.42z"})])])]),(0,n.Lk)("span",{class:"Footer__text"},"ショート")])],-1))),z=T((()=>(0,n.Lk)("li",{class:"Footer__item",role:"tab"},[(0,n.Lk)("a",{href:"/video/list"},[(0,n.Lk)("span",{class:"Footer__icon"},[(0,n.Lk)("svg",{id:"_x32_",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},[(0,n.Lk)("g",null,[(0,n.Lk)("path",{class:"st0",d:"M503.654,101.298h-43.289V58c0-4.61-3.727-8.338-8.329-8.338h-16.833c-4.602,0-8.347,3.728-8.347,8.338v43.298\n\t\th-43.289c-4.602,0-8.329,3.727-8.329,8.329v16.833c0,4.602,3.727,8.346,8.329,8.346h43.289v43.29c0,4.601,3.745,8.337,8.347,8.337\n\t\th16.833c4.602,0,8.329-3.736,8.329-8.337v-43.29h43.289c4.619,0,8.346-3.744,8.346-8.346v-16.833\n\t\tC512,105.026,508.273,101.298,503.654,101.298z"}),(0,n.Lk)("path",{class:"st0",d:"M500.836,239.74l-0.21-0.428l-0.28-0.394c-8.556-12.616-22.817-20.367-38.216-20.367H382.22l-12.633-36.115\n\t\tl-0.385,0.096c-8.836-19.204-27.839-32.178-49.519-32.178H144.986c-1.994-0.026-4.041-1.129-5.231-3.666l0.017,0.035\n\t\tc-8.592-18.889-27.314-31.329-48.224-31.329H46.474c-0.035,0-0.035-0.009-0.052-0.009c-15.118,0.009-29.134,7.489-37.743,19.702\n\t\tl-0.595,0.866l-0.123,0.376C2.748,144.22,0,153.355,0,162.611c0,4.768,0.736,9.571,2.188,14.243H2.17l0.018,0.035l0.017,0.061\n\t\tl0.018,0.062v0.017l76.115,247.645v0.035l0.332,1.033c6.912,21.801,27.121,36.587,49.973,36.587l272.719,0.009\n\t\tc19.72-0.009,37.48-11.102,46.404-28.268l0.437,0.141l57.516-152.178l0.07-0.201l0.017-0.062l0.018-0.035\n\t\tc1.838-5.196,2.73-10.62,2.73-15.992c0-9.098-2.625-18.136-7.717-25.984V239.74z M472.63,270.011l-55.03,145.58l-0.035,0.106\n\t\tc-2.432,6.859-8.941,11.443-16.203,11.443l-272.719-0.017c-7.506,0.017-14.156-4.848-16.412-12.004L35.783,166.382l0.017,0.043\n\t\tc-0.402-1.251-0.595-2.537-0.595-3.814c0-2.608,0.805-5.162,2.258-7.244l-0.018,0.017c2.223-3.114,5.547-4.786,8.994-4.786h45.11\n\t\tc6.754,0,13.106,4.007,16.185,10.735c6.649,14.602,21.12,24.217,37.253,24.217h174.697c8.294,0,15.906,5.486,18.653,14.156\n\t\tl0.07,0.21l8.994,25.678H207.733c-20.279,0-38.18,13.019-44.951,32.134l-35.608,102.904l26.596,9.204l35.573-102.781l-0.035,0.122\n\t\tc2.974-8.276,10.376-13.42,18.425-13.42h254.399c3.482,0,6.912,1.741,9.1,4.97c1.364,2.029,2.134,4.496,2.117,7.016\n\t\tC473.348,267.186,473.103,268.629,472.63,270.011z"})])])]),(0,n.Lk)("span",{class:"Footer__text"},"あとで見る")])],-1))),B={class:"Footer__item",role:"tab"},N=[T((()=>(0,n.Lk)("span",{class:"Footer__icon"},[(0,n.Lk)("svg",{id:"_x32_",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},[(0,n.Lk)("g",null,[(0,n.Lk)("rect",{y:"16",class:"st0",width:"512",height:"96"}),(0,n.Lk)("rect",{y:"208",class:"st0",width:"512",height:"96"}),(0,n.Lk)("rect",{y:"400",class:"st0",width:"512",height:"96"})])])],-1))),T((()=>(0,n.Lk)("span",{class:"Footer__text"},"メニュー",-1)))];var R=(0,n.pM)({name:"VFooter",setup(){const e=(0,r.Pj)(),t=(0,n.EW)((()=>e.getters.touchOrClick)),a=(0,n.KR)(),o=()=>{var t;e.dispatch("setFooterHeight",{height:null===(t=a.value)||void 0===t?void 0:t.offsetHeight})};let i;return(0,n.sV)((()=>{i=new ResizeObserver((()=>o())),i.observe(a.value)})),(0,n.hi)((()=>{i&&a.value&&i.unobserve(a.value)})),{Footer:a,setFooterHeight:o,touchOrClick:t,toggleMenuOpen:()=>e.dispatch("toggleMenuOpen")}}}),X=(a(1),a(491)),q=a.n(X);"function"==typeof q()&&q()(R);var W=(0,g.A)(R,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("ul",D,[I,U,z,(0,n.Lk)("li",B,[(0,n.Lk)("a",{href:"#",[(0,n.rU)(e.touchOrClick)]:t[0]||(t[0]=(...t)=>e.toggleMenuOpen&&e.toggleMenuOpen(...t))},N,16)])],512)}],["__scopeId","data-v-4afcc9fd"]]);const G={ref:"Header",class:"Header"},K={class:"Header__inner"},Q={class:"Header__logo"},J={href:"/"},$=["src"];var Y=(0,n.pM)({name:"VHeader",setup(){const e=(0,r.Pj)(),t=(0,n.KR)("https://cdn.tk-media-create.com"),a=(0,n.KR)();let o;const i=()=>{var t;e.dispatch("setHeaderHeight",{height:null===(t=a.value)||void 0===t?void 0:t.offsetHeight})};return(0,n.sV)((()=>{o=new ResizeObserver((()=>i())),o.observe(a.value)})),(0,n.hi)((()=>{o&&a.value&&o.unobserve(a.value)})),{baseUrl:t,Header:a,setHeaderHeight:i}}}),Z=(a(665),a(133)),ee=a.n(Z);"function"==typeof ee()&&ee()(Y);var te=(0,g.A)(Y,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("header",G,[(0,n.Lk)("div",K,[(0,n.Lk)("h1",Q,[(0,n.Lk)("a",J,[(0,n.Lk)("img",{src:e.baseUrl+"/logo/logo_transparent.png",alt:"T.K Media",width:"200"},null,8,$)])])])],512)}],["__scopeId","data-v-529b0426"]]);const ae={class:"VideoCard"},ne=["href"],re={class:"VideoCard__thumbnail"},oe=["src"],ie=["src"],se={class:"VideoCard__title"};var de=(0,n.pM)({name:"VideoCard",props:{vid:{type:String,required:!0},path:{type:String,required:!0},title:{type:String,required:!0},thumbnail:{type:String,required:!0}},setup(e){return{video:{vid:e.vid,title:e.title,path:e.path,thumbnail:e.thumbnail}}}});a(344);var le=(0,g.A)(de,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("div",ae,[(0,n.Lk)("a",{href:"/video/"+e.video.vid+"/",class:"VideoCard__link"},[(0,n.Lk)("div",re,[(0,n.Lk)("img",{src:e.video.thumbnail,alt:""},null,8,oe),(0,n.Lk)("video",{src:e.video.path,autoplay:"",loop:"",class:"is-play"},null,8,ie)]),(0,n.Lk)("h3",se,(0,n.v_)(e.video.title),1)],8,ne)])}],["__scopeId","data-v-f477d926"]]);const ce=e=>((0,n.Qi)("data-v-ad454e7e"),e=e(),(0,n.jt)(),e),ue={class:"CategorySlide",role:"tablist"},pe=[ce((()=>(0,n.Lk)("li",{class:"CategorySlide__item active",role:"tab"},"すべて",-1))),ce((()=>(0,n.Lk)("li",{class:"CategorySlide__item",role:"tab"},"料理",-1))),ce((()=>(0,n.Lk)("li",{class:"CategorySlide__item",role:"tab"},"街並み",-1))),ce((()=>(0,n.Lk)("li",{class:"CategorySlide__item",role:"tab"},"音楽",-1)))];var fe=(0,n.pM)({name:"CategorySlide",props:{current:{type:Number,required:!0}}});a(454);var he=(0,g.A)(fe,[["render",function(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("ul",ue,pe)}],["__scopeId","data-v-ad454e7e"]]);window.addEventListener("DOMContentLoaded",(()=>{i(te,"#header"),i(W,"#footer")})),i((0,n.pM)({name:"VContents",components:{VideoCard:le,CategorySlide:he},setup(){const e=function(){const e=(0,r.Pj)(),t=(0,n.EW)((()=>e.state.eleventyGlobalData)),a=(0,n.EW)((()=>e.state.headerHeight)),o=(0,n.EW)((()=>e.state.footerHeight)),i=(0,n.KR)(0),s=()=>{i.value=window.innerHeight-(a.value+o.value)};return(0,n.wB)([a,o],s),(0,n.sV)((()=>{window.addEventListener("resize",s)})),(0,n.hi)((()=>{window.removeEventListener("resize",s)})),{headerHeight:a,footerHeight:o,contentsMinHeight:i,eleventyGlobalData:t}}(),t=(0,r.Pj)().state.eleventyLocalData.videos;return Object.assign(Object.assign({},e),{videos:t})}}),"#contents")},262:function(e,t){"use strict";t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},409:function(){},992:function(){},491:function(){},133:function(){},242:function(e,t,a){var n=a(933);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("5538264a",n,!1,{})},246:function(e,t,a){var n=a(5);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("59d27890",n,!1,{})},63:function(e,t,a){var n=a(708);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("f05ada00",n,!1,{})},0:function(e,t,a){var n=a(23);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("22d9ad8a",n,!1,{})},711:function(e,t,a){var n=a(280);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("20f5f7c2",n,!1,{})},1:function(e,t,a){var n=a(899);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("3f99bef6",n,!1,{})},665:function(e,t,a){var n=a(976);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("8a628eec",n,!1,{})},344:function(e,t,a){var n=a(651);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("15140e9e",n,!1,{})},454:function(e,t,a){var n=a(971);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("ec2bfa64",n,!1,{})},534:function(e,t,a){"use strict";function n(e,t){for(var a=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):a.push(n[i]={id:i,parts:[s]})}return a}a.d(t,{A:function(){return h}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,l=!1,c=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,a,r){l=a,u=r||{};var i=n(e,t);return g(i),function(t){for(var a=[],r=0;r<i.length;r++){var s=i[r];(d=o[s.id]).refs--,a.push(d)}for(t?g(i=n(e,t)):i=[],r=0;r<a.length;r++){var d;if(0===(d=a[r]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete o[d.id]}}}}function g(e){for(var t=0;t<e.length;t++){var a=e[t],n=o[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(_(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var i=[];for(r=0;r<a.parts.length;r++)i.push(_(a.parts[r]));o[a.id]={id:a.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function _(e){var t,a,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(f){var r=d++;n=s||(s=v()),t=x.bind(null,n,r,!1),a=x.bind(null,n,r,!0)}else n=v(),t=w.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function x(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function w(e,t){var a=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(p,t.id),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={id:e,exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,d=0;d<a.length;d++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={984:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],d=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(d)var c=d(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self.webpackChunkmysite_cdn=self.webpackChunkmysite_cdn||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var r=n.O(void 0,[235,293],(function(){return n(891)}));r=n.O(r)}();