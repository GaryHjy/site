(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{167:function(t,s,i){},178:function(t,s,i){},180:function(t,s,i){"use strict";var a=i(167);i.n(a).a},184:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"index"},[i("div",{staticClass:"banner-swiper"},[i("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[i("div",{staticClass:"swiper-wrapper"},t._l(t.banners,function(t){return i("div",{key:t.id,staticClass:"swiper-slide"},[i("img",{attrs:{src:t.img}})])})),t._v(" "),i("div",{staticClass:"swiper-pagination"})])]),t._v(" "),t._l(t.introductions,function(s,a){return i("div",{key:a,staticClass:"introduction",style:{backgroundImage:"url("+t.introductions[a].img+")"}},[i("div",{staticClass:"text black container"},[i("div",{staticClass:"title black"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"desc center font-n"},[t._v(t._s(s.desc))]),t._v(" "),s.centerImg?i("div",{staticClass:"img-group"},[i("img",{staticClass:"left-img",attrs:{src:s.leftImg}}),t._v(" "),i("img",{staticClass:"center-img",attrs:{src:s.centerImg,alt:""}}),t._v(" "),i("img",{staticClass:"right-img",attrs:{src:s.rightImg}})]):t._e(),t._v(" "),s.text?i("div",{staticClass:"intro-text font-l"},[t._v(t._s(s.text))]):t._e(),t._v(" "),s.content?i("div",{staticClass:"icons"},t._l(s.content,function(s,a){return i("div",{key:a,staticClass:"icon-group"},[i("img",{attrs:{src:s.icon,alt:""}}),t._v(" "),i("div",{staticClass:"icon-text font-m"},[t._v(t._s(s.text))])])})):t._e(),t._v(" "),s.buttonText?i("a",{staticClass:"button white is-large",attrs:{href:s.buttonURL}},[t._v(t._s(s.buttonText))]):t._e()])])}),t._v(" "),i("div",{staticClass:"core-ability",style:{backgroundImage:"url("+t.coreAbility.img+")"}},[i("div",{staticClass:"text black container"},[i("div",{staticClass:"title black"},[t._v(t._s(t.coreAbility.title))]),t._v(" "),i("div",{staticClass:"cards columns"},t._l(t.coreAbility.content,function(s,a){return i("div",{key:a,staticClass:"card column is-one-third"},[i("div",{staticClass:"card-title has-text-black"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"card-content font-n"},[t._v("\n            "+t._s(s.desc)+"\n          ")]),t._v(" "),i("img",{attrs:{src:s.img}})])}))])]),t._v(" "),i("div",{staticClass:"core-serves",style:{backgroundImage:"url("+t.coreServes.img+")"}},[i("div",{staticClass:"text white container"},t._l(t.coreServes.content,function(s,a){return i("div",{key:a,staticClass:"text white",class:[a%2==1?"second-block":"first-block"]},[i("div",{staticClass:"title white"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"font-n",domProps:{innerHTML:t._s(s.desc)}}),t._v(" "),i("img",{class:[a%2==1?"second-img":"first-img"],attrs:{src:s.img,alt:s.title}})])}))]),t._v(" "),i("div",{staticClass:"product"},[i("div",{staticClass:"container"},[i("div",{staticClass:"apply"},[i("div",{staticClass:"title black"},[t._v(t._s(t.product.apply.title))]),t._v(" "),i("ul",{staticClass:"tabs"},t._l(t.product.apply.content,function(s,a){return i("li",{key:a,staticClass:"tab-box",class:{active:t.selected==a},on:{click:function(s){t.change(a)}}},[i("img",{attrs:{src:[t.selected==a?s.imgActived:s.img],alt:""}}),t._v(" "),i("div",{staticClass:"font-n"},[t._v("\n              "+t._s(s.label)+"\n            ")])])})),t._v(" "),i("div",{staticClass:"text box"},[t._v("\n          "+t._s(t.product.apply.content[t.selected].desc)+"\n        ")])]),t._v(" "),i("div",{staticClass:"spot"},[i("div",{staticClass:"title black"},[t._v(t._s(t.product.spot.title))]),t._v(" "),i("div",{staticClass:"cards columns"},t._l(t.product.spot.content,function(s,a){return i("div",{key:a,staticClass:"card column is-one-quarter"},[i("div",{staticClass:"card-header"},[i("img",{staticClass:"image",attrs:{src:s.img,alt:""}})]),t._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"text center has-text-weight-bold font-l"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"text has-text-left black font-n"},[t._v(t._s(s.desc))])])])}))])]),t._v(" "),i("img",{staticClass:"bottom-img",attrs:{src:t.product.img,alt:""}})]),t._v(" "),i("div",{staticClass:"cooperation"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title black"},[t._v(t._s(t.partner.title))]),t._v(" "),i("div",{staticClass:"customer"},[t._l(t.partner.contents,function(t,s){return i("div",{key:s,staticClass:"icon"},[i("img",{attrs:{src:t.logo,alt:""}})])}),t._v(" "),t._m(0)],2)])]),t._v(" "),i("div",{staticClass:"contact",style:{backgroundImage:"url("+t.contact.img+")"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"title white"},[t._v(t._s(t.contact.moreInfo))]),t._v(" "),i("div",{staticClass:"text white"},[t._v(t._s(t.contact.info))])])])],2)};a._withStripped=!0;var e=i(2),c=i.n(e),n=i(19),r=i.n(n),l=i(7),o=i.n(l),v=(i(178),{name:"index",data:function(){return{selected:0,swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},centeredSlides:!0}}},asyncData:function(){var t=o()(c.a.mark(function t(s){var i,a=s.app;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$axios.$get("http://dapi.deepexi.io:5002/mock/99/index");case 2:return i=t.sent,t.abrupt("return",r()({},i));case 4:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}(),methods:{change:function(t){this.selected=t}}}),d=(i(180),i(18)),_=Object(d.a)(v,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon"},[s("a",{staticClass:"font-n",attrs:{href:"/"}},[this._v("查看更多 >")])])}],!1,null,null,null);s.default=_.exports}}]);