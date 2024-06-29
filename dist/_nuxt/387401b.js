(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,7,9,10,11],{318:function(t,e,r){"use strict";r.r(e);r(213);var n={name:"StarRating",props:{rating:{type:Number,required:!0},maxStars:{type:Number,required:!1,default:5},productId:{type:Number,required:!0}},computed:{getCurrentDay:function(){return(new Date).getDate()},getRating:function(){var t=this.getCurrentDay%2==1&&this.productId%2==1||this.getCurrentDay%2==0&&this.productId%2==0?10:0;return this.rating/this.maxStars*100/(10/this.maxStars)-t}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-yellow-400 text-base lg:text-2xl relative"},[t._l(t.maxStars,(function(i){return e("span",{key:"star".concat(i)},[t._v("☆")])})),t._v(" "),e("div",{staticClass:"absolute top-0 overflow-hidden",style:{width:t.getRating+"%"}},t._l(t.maxStars,(function(i){return e("span",{key:"starf".concat(i)},[t._v("★")])})),0)],2)}),[],!1,null,"864b5b36",null);e.default=component.exports},319:function(t,e,r){"use strict";var n={name:"XmarkIcon"},c=r(24),component=Object(c.a)(n,(function(){return(0,this._self._c)("i",{staticClass:"fa-regular fa-circle-xmark"})}),[],!1,null,"5b781e89",null);e.a=component.exports},321:function(t,e,r){"use strict";r.r(e);var n={name:"SpinnerRing"},c=r(24),component=Object(c.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"w-12 h-12 rounded-full animate-spin border-4 border-solid border-sky-500 border-t-transparent"})}),[],!1,null,"38ecee6c",null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);r(31),r(39),r(55),r(56),r(29),r(15),r(30);var n=r(6),c=r(22),o=(r(32),r(213),r(75)),l=r(323);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={name:"Product",components:{StarRating:r(318).default,AddToCartButton:l.default},props:{product:{type:Object,required:!0},productQuantity:{type:Number,default:1}},methods:f(f({},Object(o.b)("cart",["getCurrentProductQuantity","updateCart"])),{},{addToCart:function(){var t=this;Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentProductQuantity(t.product.id);case 2:return r=e.sent,e.next=5,t.updateCart({product:t.product,quantity:r+t.productQuantity});case 5:case"end":return e.stop()}}),e)})))(),this.$router.push({name:"cart"})}})},v=r(24),component=Object(v.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 gap-2 lg:gap-4"},[e("NuxtLink",{staticClass:"justify-self-center",attrs:{to:{name:"products-slug",params:{slug:t.product.id}}}},[e("img",{staticClass:"w-24 lg:w-48 h-24 lg:h-48 justify-self-center",attrs:{src:t.product.image}})]),t._v(" "),e("div",{staticClass:"text-sm lg:text-base text-center truncate"},[t._v("\n    "+t._s(t.product.title)+"\n  ")]),t._v(" "),e("StarRating",{attrs:{productId:t.product.id,rating:t.product.rating.rate}}),t._v(" "),e("div",{staticClass:"font-bold text-lg text-red-600"},[t._v("\n    "+t._s("$".concat(t.product.price))+"\n  ")]),t._v(" "),e("div",[e("AddToCartButton",t._b({attrs:{disabled:!t.productQuantity},on:{click:function(e){return e.preventDefault(),t.addToCart()}}},"AddToCartButton",t.$attrs,!1))],1)],1)}),[],!1,null,"310482c6",null);e.default=component.exports;installComponents(component,{StarRating:r(318).default})},323:function(t,e,r){"use strict";r.r(e);var n={name:"AddToCartButton",props:{disabled:{type:Boolean,default:!1}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("button",t._g(t._b({staticClass:"flex items-center gap-2 p-2 lg:p-4 bg-gray-300 rounded-full border-opacity-50",class:[t.disabled?"opacity-50":"hover:bg-indigo-400 hover:text-white"],attrs:{disabled:t.disabled}},"button",t.$attrs,!1),t.$listeners),[e("i",{staticClass:"fa-solid fa-cart-plus"}),t._v(" "),e("div",{staticClass:"text-sm lg:text-base"},[t._v("ADD TO CART")])])}),[],!1,null,"ea9524ae",null);e.default=component.exports},325:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("0922c790",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r.r(e);var n={name:"SearchIcon"},c=r(24),o={name:"SearchBar",components:{SearchIcon:Object(c.a)(n,(function(){return(0,this._self._c)("i",{staticClass:"fa-solid fa-magnifying-glass"})}),[],!1,null,"6a27322c",null).exports,XmarkIcon:r(319).a},props:["value"],data:function(){return{searchValue:this.value}},methods:{deleteValue:function(){this.$emit("input","")}},watch:{value:function(t){this.searchValue=t}}},l=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("input",{staticClass:"input-field pl-8 rounded-md w-full py-2",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),t.searchValue?e("button",{staticClass:"absolute right-0 -translate-x-1/2 inset-y-0 flex items-center",on:{click:t.deleteValue}},[e("XmarkIcon")],1):t._e(),t._v(" "),e("div",{staticClass:"absolute left-0 translate-x-1/2 inset-y-0 flex items-center"},[e("SearchIcon")],1)])}),[],!1,null,null,null);e.default=l.exports},333:function(t,e,r){"use strict";r(325)},334:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".v-select[data-v-ae3503dc]{font-size:.75rem;line-height:1rem}@media (min-width:1024px){.v-select[data-v-ae3503dc]{font-size:1.125rem;line-height:1.75rem}}.swiper-slide[data-v-ae3503dc]{align-items:center;display:flex;justify-content:center}.view-button[data-v-ae3503dc]{height:2.5rem;width:2.5rem}@media (hover:hover) and (pointer:fine){.view-button[data-v-ae3503dc]:hover{--tw-text-opacity:1;color:#818cf8;color:rgba(129,140,248,var(--tw-text-opacity))}}.view-button[data-v-ae3503dc]:focus{--tw-text-opacity:1;color:#818cf8;color:rgba(129,140,248,var(--tw-text-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-color:rgba(129,140,248,var(--tw-ring-opacity));--tw-ring-opacity:0.5}",""]),n.locals={},t.exports=n},339:function(t,e,r){"use strict";r.r(e);r(31),r(55),r(56),r(30);var n=r(22),c=r(6),o=(r(39),r(76),r(29),r(15),r(91),r(32),r(338)),l=(r(331),r(336)),d=r(337),f=r(75),w=r(322),v=r(326),h=r(321),m={name:"SwiperViewIcon"},x=r(24),y=Object(x.a)(m,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col gap-2"},[t("i",{staticClass:"fa-solid fa-right-left"}),this._v(" "),t("i",{staticClass:"fa-regular fa-hand-spock"})])}],!1,null,"634359ac",null).exports,_={name:"GridIcon"},O=Object(x.a)(_,(function(){return(0,this._self._c)("i",{staticClass:"fa-solid fa-table-cells-large"})}),[],!1,null,"4be578cc",null).exports;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}o.a.use([l.a,d.a]);var j={name:"IndexPage",components:{Product:w.default,SwiperViewIcon:y,GridIcon:O,SearchBar:v.default,SpinnerRing:h.default},data:function(){return{swiper:null,searchValue:""}},asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return!1,t.abrupt("return",{showSpinnerRing:false});case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;addEventListener("load",(function(e){t.showSpinnerRing=!1})),this.initSwiper()},methods:S(S({},Object(f.d)(["setIsSwiperValue"])),{},{initSwiper:function(){this.swiper=new o.a(this.$refs.swiper,{modules:[l.a,d.a],spaceBetween:10,observer:!0,observeParents:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:3,spaceBetween:40}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}}),computed:S(S({},Object(f.c)({products:"products/getProducts",isSwiperView:"getIsSwiperView"})),{},{cProducts:function(){var t=this,e=JSON.parse(JSON.stringify(this.products));return this.searchValue?e.filter((function(e){return t.searchValue.toLowerCase().split(" ").every((function(t){return e.title.toLowerCase().includes(t)}))})):e}})},P=(r(333),Object(x.a)(j,(function(){var t=this,e=t._self._c;return e("div",[t.showSpinnerRing?e("div",{staticClass:"fixed top-1/2 left-1/2 -translate-x-1/2"},[e("SpinnerRing")],1):t._e(),t._v(" "),e("div",{class:[t.showSpinnerRing?"hidden":""]},[e("div",{staticClass:"flex gap-2"},[e("button",{staticClass:"view-button",class:{"text-indigo-400":!t.isSwiperView},on:{click:function(e){return t.setIsSwiperValue(!1)}}},[e("GridIcon")],1),t._v(" "),e("button",{staticClass:"view-button",class:{"text-indigo-400":t.isSwiperView},on:{click:function(e){return t.setIsSwiperValue(!0)}}},[e("SwiperViewIcon")],1),t._v(" "),e("SearchBar",{model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSwiperView&&t.cProducts.length,expression:"!isSwiperView && cProducts.length"}],staticClass:"mt-16 mb-10 px-5 lg:px-10"},[e("div",{staticClass:"grid grid-cols-2 gap-12 justify-items-center"},t._l(t.cProducts,(function(t,r){return e("div",{key:r},[e("Product",{attrs:{product:t}})],1)})),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isSwiperView&&t.cProducts.length,expression:"isSwiperView && cProducts.length"}],ref:"swiper",staticClass:"swiper mt-16 mb-10 overflow-x-hidden"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.cProducts,(function(t,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("Product",{attrs:{product:t}})],1)})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isSwiperView,expression:"isSwiperView"}],staticClass:"swiper-pagination pt-5"}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isSwiperView&&t.cProducts.length,expression:"isSwiperView && cProducts.length"}],staticClass:"swiper-button-prev"}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isSwiperView&&t.cProducts.length,expression:"isSwiperView && cProducts.length"}],staticClass:"swiper-button-next"})]),t._v(" "),t.cProducts.length?t._e():e("div",{staticClass:"text-center py-16 lg:py-24 mt-24 font-bold text-xl lg:text-4xl bg-gray-300 bg-opacity-80"},[t._v("\n      No Products Found\n    ")])])])}),[],!1,null,"ae3503dc",null));e.default=P.exports;installComponents(P,{SpinnerRing:r(321).default,Product:r(322).default})}}]);