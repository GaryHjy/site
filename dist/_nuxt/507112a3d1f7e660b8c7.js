(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=126},142:function(t,e,n){"use strict";var r=n(39);n.n(r).a},143:function(t,e,n){"use strict";var r=n(40);n.n(r).a},144:function(t,e,n){},146:function(t,e,n){"use strict";var r=n(41);n.n(r).a},147:function(t,e,n){"use strict";var r=n(42);n.n(r).a},148:function(t,e,n){"use strict";var r=n(43);n.n(r).a},149:function(t,e,n){"use strict";var r=n(44);n.n(r).a},150:function(t,e,n){"use strict";var r=n(45);n.n(r).a},171:function(t,e,n){"use strict";n.r(e);n(66),n(51),n(52);var r=n(21),o=n.n(r),i=(n(34),n(55),n(106),n(6)),a=n.n(i),s=(n(108),n(109),n(81),n(28),n(60),n(82),n(113),n(125),n(0)),u=(n(87),n(126)),c=u.keys();function l(t){var e=u(t);return e.default||e}var f={},p=!0,h=!1,d=void 0;try{for(var v,m=c[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var x=v.value;f[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){h=!0,d=t}finally{try{p||null==m.return||m.return()}finally{if(h)throw d}}var g=f,y=(n(127),n(128),n(129),n(131),n(133),n(134),n(137),n(22)),_=n.n(y),w=function(){return{}};function b(t){return t.then(function(t){return t.default||t})}function C(t,e){var n=t.options.data||w;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function k(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function E(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all(E(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=k(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function T(t){return A.apply(this,arguments)}function A(){return(A=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",_()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,e){return S.apply(this,arguments)}function S(){return(S=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/deepexi-official-pc/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=I(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,T(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,T(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function j(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function q(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?M:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=i[c.name||"pathMatch"],f=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===p?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=L.exec(t));){var u=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var f=t[i],p=n[2],h=n[3],d=n[4],v=n[5],m=n[6],x=n[7];a&&(r.push(a),a="");var g=null!=p&&null!=f&&f!==p,y="+"===m||"*"===m,_="?"===m||"*"===m,w=n[2]||s,b=d||v;r.push({name:h||o++,prefix:p||"",delimiter:w,optional:_,repeat:y,partial:g,asterisk:!!x,pattern:b?B(b):x?".*":"[^"+U(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function P(t,e){var n={},r=_()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var z=n(94),H=n.n(z),J=n(63),K=function(){return b(n.e(3).then(n.bind(null,225)))},G=function(){return b(n.e(4).then(n.bind(null,227)))},F=function(){return b(n.e(5).then(n.bind(null,226)))},Q=function(){return b(n.e(6).then(n.bind(null,224)))},X=function(){return b(n.e(2).then(n.bind(null,223)))};s.a.use(J.a),window.history.scrollRestoration="manual";var V=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var Y=n(95),W=n.n(Y).a,Z={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,l={};tt.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};et.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(i))});var p=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),p)return p.call(i,t)};var h=[t("router-view",r)];return o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:l,on:f},h)}},tt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],et=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],nt={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},rt={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},ot=(n(142),n(4)),it=Object(ot.a)(rt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);it.options.__file="nuxt-error.vue";var at=it.exports,st={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||q(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:Z,NuxtError:at}},ut={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ct=(n(143),Object(ot.a)(ut,void 0,void 0,!1,null,null,null));ct.options.__file="nuxt-loading.vue";var lt=ct.exports,ft=(n(144),n(145),{name:"official-menu",props:{list:{type:Array,default:function(){return[]}},loginHref:{type:String,default:""}},data:function(){return{isActive:0,menuList:"",loginUrl:""}},methods:{goto:function(t,e){null!=t&&(this.$router.push({path:t}),this.isActive=e)}}}),pt=(n(146),Object(ot.a)(ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("h1",{staticClass:"fl"},[t._v("\n    DEEPEXI Services\n  ")]),t._v(" "),n("ul",{staticClass:"menu-list fr"},[t._l(t.list,function(e,r){return n("li",{key:r,class:{active:t.isActive===r},on:{click:function(n){t.goto(e.path,r)}}},[n("span",[t._v(t._s(e.text))]),t._v(" "),e.children?n("ul",{staticClass:"item-children"},t._l(e.children,function(e,o){return n("li",{key:o,on:{click:function(n){n.stopPropagation(),t.goto(e.path,r)}}},[n("div",{staticClass:"item-children-icon"},[n("img",{attrs:{src:e.icon}})]),t._v(" "),n("div",{staticClass:"item-children-content"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])}),0):t._e()])}),t._v(" "),n("li",[n("a",{staticClass:"default-btn",attrs:{href:t.loginUrl}},[t._v("注册/登录")])])],2)])},[],!1,null,null,null));pt.options.__file="official-menu.vue";var ht=pt.exports,dt={name:"official-footer",props:{footerData:{type:Object,default:function(){return{}}}}},vt=(n(147),Object(ot.a)(dt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"official-footer"},[n("div",{staticClass:"official-footer-links container"},[n("div",{staticClass:"official-footer-links-left"},t._l(t.footerData.list,function(e,r){return n("dl",{key:r},[n("dt",[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"links-line"}),t._v(" "),t._l(e.links,function(e,r){return n("dd",{key:r},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.content))])])})],2)}),0),t._v(" "),n("div",{staticClass:"official-footer-links-right"},[n("div",{staticClass:"footer-logo"},[n("img",{attrs:{src:t.footerData.logoUrl}})]),t._v(" "),n("div",{staticClass:"footer-content"},[n("div",{staticClass:"footer-wechat"},[n("img",{attrs:{src:t.footerData.wechat}})]),t._v(" "),n("div",t._l(t.footerData.linkRight,function(e,r){return n("p",{key:r},[t._v(t._s(e))])}),0)])])]),t._v(" "),n("div",{staticClass:"official-footer-copyright"},[n("div",{staticClass:"blogroll-links"},[t._l(t.footerData.blogroll,function(e,r){return n("a",{key:r,attrs:{href:e.url}},[t._v(t._s(e.text))])}),t._v(" "),n("a",[t._v("友情链接")])],2),t._v(" "),n("div",{staticClass:"copyright-content"},[t._v("\n      "+t._s(t.footerData.copyright)+"\n    ")])])])},[],!1,null,null,null));vt.options.__file="official-footer.vue";var mt=vt.exports,xt={name:"official-goback",data:function(){return{offsetTop:0,show:!1}},mounted:function(){window.addEventListener("scroll",this.handleGoBackScroll),this.offsetTop=this.$refs.goback.offsetTop},destroyed:function(){window.removeEventListener("scroll",this.handleGoBackScroll)},methods:{handleGoBackScroll:function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>=window.innerHeight-this.offsetTop?this.show=!0:this.show=!1},handleGoBack:function(){var t=this;this.timer=setInterval(function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n=Math.ceil(e/10);scrollBy(0,-n),e<=0&&clearInterval(t.timer)},10)}}},gt=(n(148),Object(ot.a)(xt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"goback",staticClass:"official-goback"},[e("div",{staticClass:"official-goback-img",class:{show:this.show},on:{click:this.handleGoBack}},[e("img",{attrs:{src:"https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services-official/pc/common/goback-icon.png"}})])])},[],!1,null,null,null));gt.options.__file="official-goback.vue";var yt=gt.exports,_t={name:"official-advisory",props:{phone:{type:String,default:""}},data:function(){return{isActive:!1,timer:""}},methods:{openDialog:function(){clearTimeout(this.timer),this.isActive=!0},closeDialog:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.isActive=!1},1e3)}}},wt=(n(149),Object(ot.a)(_t,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"official-advisory",class:{active:t.isActive},on:{mousemove:t.openDialog,mouseout:t.closeDialog}},[n("img",{attrs:{src:"https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services-official/pc/common/zixun.png"}}),t._v(" "),n("div",{staticClass:"official-advisory-content"},[n("h3",[t._v("\n      产品咨询电话\n    ")]),t._v(" "),n("p",[t._v(t._s(t.phone))]),t._v(" "),n("i",{staticClass:"icon-close",on:{click:function(e){t.isActive=!1}}})])])},[],!1,null,null,null));wt.options.__file="official-advisory.vue";var bt=wt.exports,Ct=n(64),kt={components:{OfficialMenu:ht,OfficialFooter:mt,OfficialGoback:yt,OfficialAdvisory:bt},data:function(){return{footerData:{},phoneData:"",menuData:{}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.$axios(Ct.a).then(function(e){t.footerData=e.data.footerData,t.phoneData=e.data.advisory.phone,t.menuData=e.data.menu}).catch(function(t){console.log(t)})}}},$t=(n(150),Object(ot.a)(kt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"official"},[n("official-menu",t._b({},"official-menu",t.menuData,!1)),t._v(" "),n("nuxt"),t._v(" "),n("official-footer",{attrs:{footerData:t.footerData}}),t._v(" "),n("official-goback"),t._v(" "),n("official-advisory",{attrs:{phone:t.phoneData}})],1)},[],!1,null,null,null));$t.options.__file="default.vue";for(var Et={_default:$t.exports},Rt={head:{title:"DEEPEXI Services",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],link:[{rel:"icon",type:"image/x-icon",href:"https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/favicon32x32.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&Et["_"+t]||(t="default"),this.layoutName=t,this.layout=Et["_"+t],this.layout},loadLayout:function(t){return t&&Et["_"+t]||(t="default"),Promise.resolve(Et["_"+t])}},components:{NuxtLoading:lt}},Tt=n(65),At=n.n(Tt),Dt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,i=void 0;try{for(var a,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},St=["request","delete","get","head","options","post","put","patch"],Ot=function(){var t=St[jt];Dt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},jt=0;jt<St.length;jt++)Ot();var qt=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=At.a.create(n);!function(t){for(var e in Dt)t[e]=Dt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var i=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=i,t.defaults.onDownloadProgress=i}(r),t.$axios=r,e("axios",r)},Pt=n(96),Nt=n.n(Pt);s.a.use(Nt.a),s.a.component(W.name,W),s.a.component(Z.name,Z),s.a.component(nt.name,nt),s.a.component(st.name,st),s.a.use(H.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Lt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Mt(){return(Mt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new J.a({mode:"history",base:"/deepexi-official-pc/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:V,routes:[{path:"/product/dae",component:K,name:"product-dae"},{path:"/product/dag",component:G,name:"product-dag"},{path:"/product/das",component:F,name:"product-das"},{path:"/product/ddp",component:Q,name:"product-ddp"},{path:"/",component:X,name:"index"}],fallback:!1});case 2:return n=t.sent,r=_()({router:n,nuxt:{defaultTransition:Lt,transitions:[Lt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Lt,{name:t}):Object.assign({},Lt,t):Lt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?N(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Rt),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=j(n.options.base),i=n.resolve(a).route),t.next=8,D(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof qt){t.next=12;break}return t.next=12,qt(r.context,u);case 12:0,t.next=16;break;case 16:t.next=19;break;case 19:return t.abrupt("return",{app:r,router:n});case 20:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Ut,Bt,It=[],zt=window.__NUXT__||{};function Ht(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Jt(t,e,n){return Kt.apply(this,arguments)}function Kt(){return(Kt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Ut.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?P(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Gt(t,e){return zt.serverRendered&&e&&C(t,e),t._Ctor=t,t}function Ft(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():O(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Qt(t,e,n){return Xt.apply(this,arguments)}function Xt(){return(Xt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,l,f,p,h,d,v,m,x,g,y,_,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return It=e===n?[]:$(n,o=[]).map(function(t,e){return q(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,r(t))},t.next=7,D(Ut,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=Ut.nuxt.dateErr,this._hadError=!!Ut.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,Ft.call(this,c,Ut.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof at.layout?at.layout(Ut.context):at.layout);case 18:return l=t.sent,t.next=21,Ft.call(this,c,Ut.context,l);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return Ut.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Ht(c,e,n)),t.prev=27,t.next=30,Ft.call(this,c,Ut.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!Ut.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(Ut.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Ft.call(this,c,Ut.context,f);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!Ut.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:p=!0,t.prev=46,h=!0,d=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(h=(x=m.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(Ut.context);case 58:if(p=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,v=t.t0;case 70:t.prev=70,t.prev=71,h||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(p){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=q(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==It[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=O(t.options.asyncData,Ut.context).then(function(e){C(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var l=t.options.fetch(Ut.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,y));case 97:return It=[],b=y,s.a.config.errorHandler&&s.a.config.errorHandler(b),"function"==typeof(_=at.layout)&&(_=_(Ut.context)),t.next=103,this.loadLayout(_);case 103:this.error(y),this.$nuxt.$emit("routeChanged",e,n,y),r(!1);case 106:case"end":return t.stop()}var b},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Vt(t,e){E(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Yt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?at.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Ut.context)),this.setLayout(e)}function Wt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=$(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Yt.call(n,t)})}function Zt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Bt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function te(){return(te=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Ut=e.app,Bt=e.router,t.next=4,Promise.all((c=void 0,c=j((u=Bt).options.base,u.options.mode),E(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=Gt(k(e),zt.data?zt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(Ut),o=zt.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Zt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Ht(n,Bt.currentRoute)),It=Bt.currentRoute.matched.map(function(t){return q(t.path)(Bt.currentRoute.params)})),r.$loading={},zt.error&&r.error(zt.error),Bt.beforeEach(Jt.bind(r)),Bt.beforeEach(Qt.bind(r)),Bt.afterEach(Vt),Bt.afterEach(Wt.bind(r)),!zt.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:Qt.call(r,Bt.currentRoute,Bt.currentRoute,function(t){if(!t)return Vt(Bt.currentRoute,Bt.currentRoute),Yt.call(r,Bt.currentRoute),void i();Bt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return Mt.apply(this,arguments)}().then(function(t){return te.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},64:function(t,e,n){"use strict";n.d(e,"f",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"e",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"b",function(){return c});var r="http://yapi.deepexi.io:5002/mock/781",o=r+"/index",i=r+"/common",a=r+"/product/ddp",s=r+"/product/dag",u=r+"/product/das",c=r+"/product/dae"},97:function(t,e,n){t.exports=n(171)}},[[97,7,1,8]]]);