(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=130},146:function(t,e,n){"use strict";var r=n(41);n.n(r).a},147:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},148:function(t,e,n){"use strict";var r=n(42);n.n(r).a},149:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},152:function(t,e,n){"use strict";var r=n(43);n.n(r).a},153:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'.menu-bar{position:fixed;top:0;right:0;left:0;background-color:#29292b;z-index:1000}.menu-bar .navbar-item{padding:0}.menu-bar .navbar-item:first-child{width:15.47vw;background-color:red;margin-left:4.27vw}.menu-bar .navbar-item img{max-height:3vh}.menu-bar .navbar-separator{width:3.73vw;display:flex;align-items:center;justify-content:center}.menu-bar .navbar-separator:before{content:"";display:block;width:.27vw;height:3.08vh;background-color:#b8b8b8}.menu-bar .navbar-burger{color:#fff}',""])},154:function(t,e,n){"use strict";var r=n(44);n.n(r).a},155:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".menu-list-layer{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1000}.menu-list-content{width:50%;height:100%;position:fixed;z-index:2000;top:0;right:-50%;opacity:.8;overflow-y:auto;transition:all .2s linear}.menu-list-content.show{right:0;opacity:1}.menu-list-item{height:8.8vh;line-height:8.8vh;font-size:4vw;border-bottom:.27vw solid #4d4d50;background-color:#29292b}.menu-list-item a{height:100%;color:#fff;display:flex;align-items:center;padding-left:5.73vw}.menu-list-item a:hover{background-color:rgba(0,0,0,.05);color:#fff}.menu-list-item:last-child{height:7.57vh;display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(90deg,#39c4f9,#795dfa);border-bottom:none}.menu-list-item:last-child:hover{opacity:.8}",""])},156:function(t,e,n){"use strict";var r=n(45);n.n(r).a},157:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"",""])},158:function(t,e,n){"use strict";var r=n(46);n.n(r).a},159:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".main{padding-top:3.25rem}",""])},178:function(t,e,n){"use strict";n.r(e);n(68),n(53),n(54);var r=n(24),o=n.n(r),i=(n(36),n(57),n(106),n(7)),a=n.n(i),s=(n(108),n(109),n(31),n(83),n(112),n(63),n(82),n(117),n(129),n(0)),u=(n(88),n(130)),c=u.keys();function l(t){var e=u(t);return e.default||e}var f={},h=!0,p=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){var x=m.value;f[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){p=!0,d=t}finally{try{h||null==v.return||v.return()}finally{if(p)throw d}}var g=f,y=(n(131),n(132),n(133),n(135),n(137),n(138),n(141),n(25)),b=n.n(y),w=function(){return{}};function _(t,e){var n=t.options.data||w;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function k(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function E(t){return Promise.all(k(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function R(t){return T.apply(this,arguments)}function T(){return(T=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:return t.abrupt("return",b()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){return S.apply(this,arguments)}function S(){return(S=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=z(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,R(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,R(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function j(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function D(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function M(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?P:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=i[c.name||"pathMatch"],f=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(f=s(l[h]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=L.exec(t));){var u=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var f=t[i],h=n[2],p=n[3],d=n[4],m=n[5],v=n[6],x=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,y="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||s,_=d||m;r.push({name:p||o++,prefix:h||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!x,pattern:_?U(_):x?".*":"[^"+N(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function O(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function q(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var I=n(95),B=n.n(I),H=n(66),J=function(){return n.e(2).then(n.bind(null,200)).then(function(t){return t.default||t})};s.a.use(H.a),window.history.scrollRestoration="manual";var K=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var F=n(96),Q=n.n(F).a,X={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,l={};V.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};W.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(i))});var h=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(i,t)};var p=[t("router-view",r)];return o.keepAlive&&(p=[t("keep-alive",{props:o.keepAliveProps},p)]),t("transition",{props:l,on:f},p)}},V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],W=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Y={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},G={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(146),n(4)),tt=Object(Z.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);tt.options.__file="nuxt-error.vue";var et=tt.exports,nt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||M(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:X,NuxtError:et}},rt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(n(148),Object(Z.a)(rt,void 0,void 0,!1,null,null,null));ot.options.__file="nuxt-loading.vue";var it=ot.exports,at=(n(150),{name:"MenuBar"}),st=(n(152),Object(Z.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar menu-bar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"#"}}),t._v(" "),n("span",{staticClass:"navbar-separator"}),t._v(" "),t._m(0),t._v(" "),n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.$emit("showMenu")}}},[n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}})])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("img",{attrs:{src:"https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services-official/logo/logo-white-font.svg"}})])}],!1,null,null,null));st.options.__file="menu-bar.vue";var ut=st.exports,ct=document.getElementsByTagName("body")[0],lt={name:"MenuList",props:{menuList:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1}},watch:{show:function(t){ct.style.height=t?"100vh":"",ct.style.overflow=t?"hidden":""}}},ft=(n(154),Object(Z.a)(lt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"menu-list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menu-list-layer",on:{click:function(e){t.$emit("hideMenu")}}}),t._v(" "),n("ul",{staticClass:"menu-list-content",class:t.show?"show":""},[t._l(t.menuList,function(e,r){return n("li",{key:r,staticClass:"menu-list-item"},[n("a",{attrs:{href:e.href}},[t._v(t._s(e.content))])])}),t._v(" "),n("li",{staticClass:"menu-list-item"},[t._v("立即体验")])],2)])},[],!1,null,null,null));ft.options.__file="menu-list.vue";var ht=ft.exports,pt=n(67),dt={name:"Menu",components:{MenuBar:ut,MenuList:ht},data:function(){return{menu:pt.d,showMenuList:!1}},methods:{handlerHideMenuList:function(){this.showMenuList=!1},handlerShowMenuList:function(){this.showMenuList=!0}}},mt=(n(156),Object(Z.a)(dt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-container"},[e("menu-bar",{on:{showMenu:this.handlerShowMenuList}}),this._v(" "),e("menu-list",{attrs:{"menu-list":this.menu.list,show:this.showMenuList},on:{hideMenu:this.handlerHideMenuList}})],1)},[],!1,null,null,null));mt.options.__file="index.vue";var vt={components:{Menu:mt.exports}},xt=(n(158),Object(Z.a)(vt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Menu"),this._v(" "),e("section",{staticClass:"main"},[e("nuxt")],1)],1)},[],!1,null,null,null));xt.options.__file="default.vue";for(var gt={_default:xt.exports},yt={head:{title:"DEEPEXI Services",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],link:[{rel:"icon",type:"image/x-icon",href:"https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/favicon32x32.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&gt["_"+t]||(t="default"),this.layoutName=t,this.layout=gt["_"+t],this.layout},loadLayout:function(t){return t&&gt["_"+t]||(t="default"),Promise.resolve(gt["_"+t])}},components:{NuxtLoading:it}},bt=n(97),wt=n.n(bt),_t={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,i=void 0;try{for(var a,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},Ct=["request","delete","get","head","options","post","put","patch"],$t=function(){var t=Ct[kt];_t["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},kt=0;kt<Ct.length;kt++)$t();var Et=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=wt.a.create(n);!function(t){for(var e in _t)t[e]=_t[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var i=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=i,t.defaults.onDownloadProgress=i}(r),t.$axios=r,e("axios",r)};s.a.component(Q.name,Q),s.a.component(X.name,X),s.a.component(Y.name,Y),s.a.component(nt.name,nt),s.a.use(B.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Rt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Tt(){return(Tt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new H.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:K,routes:[{path:"/",component:J,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:Rt,transitions:[Rt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Rt,{name:t}):Object.assign({},Rt,t):Rt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?q(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},yt),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=D(n.options.base),i=n.resolve(a).route),t.next=8,A(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof Et){t.next=12;break}return t.next=12,Et(r.context,u);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var At,St,jt=[],Dt=window.__NUXT__||{};if(Object.assign(s.a.config,{silent:!0,performance:!1}),!s.a.config.$nuxt){var Mt=s.a.config.errorHandler;s.a.config.errorHandler=function(t,e,n){var r=null;if("function"==typeof Mt){for(var o=arguments.length,i=new Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];r=Mt.apply(void 0,[t,e,n].concat(i))}if(!0===r)return r;if(e&&e.$root){var u=Object.keys(s.a.config.$nuxt).find(function(t){return e.$root[t]});u&&e.$root[u].error&&"render function"!==n&&e.$root[u].error(t)}if("function"==typeof Mt)return r;console.error(t.message||t)},s.a.config.$nuxt={}}function Ot(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function qt(t,e,n){return Lt.apply(this,arguments)}function Lt(){return(Lt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!At.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?O(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,E(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Pt(t,e){return Dt.serverRendered&&e&&_(t,e),t._Ctor=t,t}function Nt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():j(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Ut(t,e,n){return zt.apply(this,arguments)}function zt(){return(zt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,l,f,h,p,d,m,v,x,g,y,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return jt=e===n?[]:$(n,o=[]).map(function(t,e){return M(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,r(t))},t.next=7,A(At,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=At.nuxt.dateErr,this._hadError=!!At.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,Nt.call(this,c,At.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof et.layout?et.layout(At.context):et.layout);case 18:return l=t.sent,t.next=21,Nt.call(this,c,At.context,l);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return At.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Ot(c,e,n)),t.prev=27,t.next=30,Nt.call(this,c,At.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!At.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(At.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Nt.call(this,c,At.context,f);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!At.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:h=!0,t.prev=46,p=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(p=(x=v.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(At.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:p=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,p||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=M(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==jt[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=j(t.options.asyncData,At.context).then(function(e){_(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var l=t.options.fetch(At.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,y));case 97:return jt=[],C=y,s.a.config.errorHandler&&s.a.config.errorHandler(C),"function"==typeof(b=et.layout)&&(b=b(At.context)),t.next=103,this.loadLayout(b);case 103:this.error(y),this.$nuxt.$emit("routeChanged",e,n,y),r(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function It(t,e){k(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Bt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?et.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(At.context)),this.setLayout(e)}function Ht(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=$(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Bt.call(n,t)})}function Jt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),St.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Kt(){return(Kt=a()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return At=e.app,St=e.router,t.next=4,Promise.all((u=void 0,u=D((i=St).options.base,i.options.mode),k(i.match(u),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=Pt(C(e),Dt.data?Dt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.a(At),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Jt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Ot(n,St.currentRoute)),jt=St.currentRoute.matched.map(function(t){return M(t.path)(St.currentRoute.params)})),r.$loading={},Dt.error&&r.error(Dt.error),St.beforeEach(qt.bind(r)),St.beforeEach(Ut.bind(r)),St.afterEach(It),St.afterEach(Ht.bind(r)),!Dt.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:Ut.call(r,St.currentRoute,St.currentRoute,function(t){if(!t)return It(St.currentRoute,St.currentRoute),Bt.call(r,St.currentRoute),void o();St.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var i,u},t,this)}))).apply(this,arguments)}s.a.config.$nuxt.$nuxt=!0,function(t){return Tt.apply(this,arguments)}().then(function(t){return Kt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},41:function(t,e,n){var r=n(147);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("45b1ddea",r,!0,{})},42:function(t,e,n){var r=n(149);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("fd547dac",r,!0,{})},43:function(t,e,n){var r=n(153);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("a4da2bba",r,!0,{})},44:function(t,e,n){var r=n(155);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("5b57d317",r,!0,{})},45:function(t,e,n){var r=n(157);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("0405b923",r,!0,{})},46:function(t,e,n){var r=n(159);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("51c32f12",r,!0,{})},67:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var r={list:[{content:"DevOps平台",href:"#"},{content:"产品结构",href:"#"},{content:"DevOps规范与实践",href:"#"},{content:"核心能力与价值",href:"#"},{content:"开发平台DDP",href:"#"},{content:"应用引擎DAE",href:"#"},{content:"水滴市场DAS",href:"#"},{content:"开发平台DDP",href:"#"},{content:"水滴市场DAS",href:"#"},{content:"产品部署",href:"#"},{content:"专家咨询",href:"#"},{content:"试用客户",href:"#"},{content:"关于滴普",href:"#"}]},o={headerContent:{title:"产品结构"},list:[{iconUrl:"",title:"DDP 滴普开发平台",subhead:"打造线上线下自动化研发体系"},{iconUrl:"",title:"DAE 滴普应用引擎",subhead:"打造智能化业务运维，业务可视化"},{iconUrl:"",title:"DAS 滴普水滴市场",subhead:"打造平台生态，拥抱合作伙伴"}]},i={headerContent:{title:"产品部署"},cardlist:[{title:"SaaS版",iconUrl:"",subhead:"价格优惠，注册即可用，适合中小型企业或团队",contentList:["性价比","快速获取升级功能","专业运营支持"]},{title:"企业私有部署版",iconUrl:"",subhead:"企业私有部署，安全保障，适合规模较大的企业级团队",contentList:["快速部署","全程技术支持","保证数据安全"]}]},a={headerContent:{title:"专家咨询"},list:[{title:"定制化需求研发",content:"由专业工程研发团队对接个性化需求开发，快速高效"},{title:"进阶培训",content:"包括工具使用，团队赋能，DevOps实践及规范，技术架构等"},{title:"落地咨询",content:"专家顾问现场指导产品落地，结合具体项目，将DEEPEXI平台各产品落入合适节点，提供项目环节产品相关的支持答疑"},{title:"高阶顾问",content:"开发技术架构顾问提供互联网架构咨询，项目经理提供DevOps实操指导"}]},s={headerContent:{title:"关于滴普"},logoUrl:"",content:"滴普科技（全称：北京滴普科技有限公司 & 南京滴普科技有限公司），核心业务是面向企业提供数字化服务平台，提供基于互联网架构的IT系统搭建和开发实施服务。核心产品：EXI平台架构，旨在打造基于AI的企业中台，把业务中台、数据中台和AI中台在企业内部全场景打通，提供智能营销、智慧供应链和智能制造等解决方案。",copyright:"Copyright © ".concat((new Date).getFullYear()," 滴普科技 版权所有")}},98:function(t,e,n){t.exports=n(178)}},[[98,3,1,4]]]);