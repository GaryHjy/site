(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,s,e){},174:function(t,s,e){},175:function(t,s,e){},176:function(t,s,e){},199:function(t,s,e){},201:function(t,s,e){"use strict";var i=e(173);e.n(i).a},203:function(t,s,e){"use strict";var i=e(174);e.n(i).a},205:function(t,s,e){"use strict";var i=e(175);e.n(i).a},207:function(t,s,e){"use strict";var i=e(176);e.n(i).a},210:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"index"},[e("div",{staticClass:"banner-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.banners,function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.img}})])})),t._v(" "),e("div",{staticClass:"swiper-pagination"})])]),t._v(" "),t._l(t.introductions,function(s,i){return e("div",{key:i,staticClass:"introduction center-bg",style:{backgroundImage:"url("+t.introductions[i].img+")"}},[e("div",{staticClass:"text black container text-center"},[e("div",{staticClass:"title-lg black"},[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"desc text-center subtitle font-n"},[t._v(t._s(s.desc))]),t._v(" "),s.centerImg?e("div",{staticClass:"img-group"},[e("img",{staticClass:"left-img",attrs:{src:s.leftImg}}),t._v(" "),e("img",{staticClass:"center-img",attrs:{src:s.centerImg,alt:""}}),t._v(" "),e("img",{staticClass:"right-img",attrs:{src:s.rightImg}})]):t._e(),t._v(" "),s.text?e("div",{staticClass:"intro-text font-l"},[t._v(t._s(s.text))]):t._e(),t._v(" "),s.content?e("div",{staticClass:"icons"},t._l(s.content,function(s,i){return e("div",{key:i,staticClass:"icon-group"},[e("img",{attrs:{src:s.icon,alt:""}}),t._v(" "),e("div",{staticClass:"icon-text font-m"},[t._v(t._s(s.text))])])})):t._e(),t._v(" "),s.buttonText?e("a",{staticClass:"button white is-large",attrs:{href:s.buttonURL}},[t._v(t._s(s.buttonText))]):t._e()])])}),t._v(" "),e("CoreAbility",{attrs:{coreAbility:t.coreAbility}}),t._v(" "),e("CoreServes",{attrs:{coreServes:t.coreServes}}),t._v(" "),e("IndexProduct",{attrs:{product:t.product}}),t._v(" "),e("div",{staticClass:"cooperation"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title title-lg black text-center"},[t._v(t._s(t.partner.title))]),t._v(" "),e("div",{staticClass:"customer"},[t._l(t.partner.contents,function(t,s){return e("div",{key:s,staticClass:"icon"},[e("img",{attrs:{src:t.logo,alt:""}})])}),t._v(" "),t._m(0)],2)])]),t._v(" "),e("div",{staticClass:"contact center-bg text-center",style:{backgroundImage:"url("+t.contact.img+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"title white"},[t._v(t._s(t.contact.moreInfo))]),t._v(" "),e("div",{staticClass:"text white"},[t._v(t._s(t.contact.info))])])])],2)};i._withStripped=!0;var a=e(2),n=e.n(a),c=e(19),r=e.n(c),l=e(7),o=e.n(l),v=(e(199),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"core-ability center-bg",style:{backgroundImage:"url("+t.coreAbility.img+")"}},[e("div",{staticClass:"text black container"},[e("div",{staticClass:"title-lg black"},[t._v(t._s(t.coreAbility.title))]),t._v(" "),e("div",{staticClass:"cards columns"},t._l(t.coreAbility.content,function(s,i){return e("div",{key:i,staticClass:"card column is-one-third"},[e("div",{staticClass:"card-title has-text-black"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"card-content font-n"},[t._v("\n          "+t._s(s.desc)+"\n        ")]),t._v(" "),e("img",{attrs:{src:s.img}})])}))])])});v._withStripped=!0;var d={name:"CoreAbility",props:{coreAbility:{type:Object}}},u=(e(201),e(18)),p=Object(u.a)(d,v,[],!1,null,null,null).exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"core-serves center-bg",style:{backgroundImage:"url("+t.coreServes.img+")"}},[e("div",{staticClass:"text white container"},t._l(t.coreServes.content,function(s,i){return e("div",{key:i,staticClass:"text white",class:[i%2==1?"second-block":"first-block"]},[e("div",{staticClass:"title-lg white"},[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"font-n",domProps:{innerHTML:t._s(s.desc)}}),t._v(" "),e("img",{class:[i%2==1?"second-img":"first-img"],attrs:{src:s.img,alt:s.title}})])}))])};_._withStripped=!0;var g={name:"CoreServes",props:{coreServes:{type:Object}}},m=(e(203),Object(u.a)(g,_,[],!1,null,null,null).exports),C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"product"},[e("div",{staticClass:"container"},[e("div",{staticClass:"apply"},[e("div",{staticClass:"title title-lg black"},[t._v(t._s(t.product.apply.title))]),t._v(" "),e("ul",{staticClass:"tabs"},t._l(t.product.apply.content,function(s,i){return e("li",{key:i,staticClass:"tab-box",class:{active:t.selected==i},on:{mouseenter:function(s){t.change(i)}}},[e("img",{attrs:{src:[t.selected==i?s.imgActived:s.img],alt:""}}),t._v(" "),e("div",{staticClass:"font-n"},[t._v("\n            "+t._s(s.label)+"\n          ")])])})),t._v(" "),e("div",{staticClass:"text box"},[t._v("\n        "+t._s(t.product.apply.content[t.selected].desc)+"\n      ")])]),t._v(" "),e("div",{staticClass:"spot"},[e("div",{staticClass:"title title-lg black"},[t._v(t._s(t.product.spot.title))]),t._v(" "),e("div",{staticClass:"cards columns"},t._l(t.product.spot.content,function(s,i){return e("div",{key:i,staticClass:"card column is-one-quarter"},[e("div",{staticClass:"card-header"},[e("img",{staticClass:"image",attrs:{src:s.img,alt:""}})]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"text center has-text-weight-bold font-l"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"text has-text-left black font-n"},[t._v(t._s(s.desc))])])])}))])]),t._v(" "),e("img",{staticClass:"bottom-img",attrs:{src:t.product.img,alt:""}})])};C._withStripped=!0;var b={name:"indexProduct",data:function(){return{selected:0}},props:{product:{type:Object}},methods:{change:function(t){this.selected=t}}},f=(e(205),{name:"index",components:{CoreAbility:p,CoreServes:m,IndexProduct:Object(u.a)(b,C,[],!1,null,null,null).exports},asyncData:function(){var t=o()(n.a.mark(function t(s){var e,i=s.app;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$axios.$get("http://dapi.deepexi.io:5002/mock/99/index");case 2:return e=t.sent,t.abrupt("return",r()({},e));case 4:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}(),data:function(){return{selected:0,swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},centeredSlides:!0}}},methods:{change:function(t){this.selected=t}}}),x=(e(207),Object(u.a)(f,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon"},[s("a",{staticClass:"font-n",attrs:{href:"/"}},[this._v("查看更多 >")])])}],!1,null,null,null));s.default=x.exports}}]);