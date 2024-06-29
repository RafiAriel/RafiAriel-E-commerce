(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,6,9,11],{318:function(t,e,r){"use strict";r.r(e);r(213);var n={name:"StarRating",props:{rating:{type:Number,required:!0},maxStars:{type:Number,required:!1,default:5},productId:{type:Number,required:!0}},computed:{getCurrentDay:function(){return(new Date).getDate()},getRating:function(){var t=this.getCurrentDay%2==1&&this.productId%2==1||this.getCurrentDay%2==0&&this.productId%2==0?10:0;return this.rating/this.maxStars*100/(10/this.maxStars)-t}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-yellow-400 text-base lg:text-2xl relative"},[t._l(t.maxStars,(function(i){return e("span",{key:"star".concat(i)},[t._v("☆")])})),t._v(" "),e("div",{staticClass:"absolute top-0 overflow-hidden",style:{width:t.getRating+"%"}},t._l(t.maxStars,(function(i){return e("span",{key:"starf".concat(i)},[t._v("★")])})),0)],2)}),[],!1,null,"864b5b36",null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);var n={name:"Quantity",props:["value"],data:function(){return{quantity:this.value}},methods:{increase:function(){this.quantity++,this.$emit("input",this.quantity)},decrease:function(){1!==this.quantity&&(this.quantity--,this.$emit("input",this.quantity))}},computed:{disableDecreaseButton:function(){return!(this.quantity>1)}},watch:{value:function(t){this.quantity=t}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-2"},[e("button",{on:{click:function(e){return t.increase()}}},[e("i",{staticClass:"fa-solid fa-circle-plus hover:text-indigo-400"})]),t._v(" "),e("input",{staticClass:"input-field w-12 h-12 text-lg rounded text-center",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),e("button",{attrs:{disabled:t.disableDecreaseButton},on:{click:function(e){return t.decrease()}}},[e("i",{staticClass:"fa-solid fa-circle-minus",class:{"text-gray-400":t.disableDecreaseButton,"hover:text-indigo-400":!t.disableDecreaseButton}})])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(31),r(39),r(55),r(56),r(29),r(15),r(30);var n=r(6),c=r(22),o=(r(32),r(213),r(75)),d=r(322);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={name:"Product",components:{StarRating:r(318).default,AddToCartButton:d.default},props:{product:{type:Object,required:!0},productQuantity:{type:Number,default:1}},methods:f(f({},Object(o.b)("cart",["getCurrentProductQuantity","updateCart"])),{},{addToCart:function(){var t=this;Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentProductQuantity(t.product.id);case 2:return r=e.sent,e.next=5,t.updateCart({product:t.product,quantity:r+t.productQuantity});case 5:case"end":return e.stop()}}),e)})))(),this.$router.push({name:"cart"})}})},y=r(24),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 gap-2 lg:gap-4"},[e("NuxtLink",{staticClass:"justify-self-center",attrs:{to:{name:"products-slug",params:{slug:t.product.id}}}},[e("img",{staticClass:"w-24 lg:w-48 h-24 lg:h-48 justify-self-center",attrs:{src:t.product.image}})]),t._v(" "),e("div",{staticClass:"text-sm lg:text-base text-center truncate"},[t._v("\n    "+t._s(t.product.title)+"\n  ")]),t._v(" "),e("StarRating",{attrs:{productId:t.product.id,rating:t.product.rating.rate}}),t._v(" "),e("div",{staticClass:"font-bold text-lg text-red-600"},[t._v("\n    "+t._s("$".concat(t.product.price))+"\n  ")]),t._v(" "),e("div",[e("AddToCartButton",t._b({attrs:{disabled:!t.productQuantity},on:{click:function(e){return e.preventDefault(),t.addToCart()}}},"AddToCartButton",t.$attrs,!1))],1)],1)}),[],!1,null,"310482c6",null);e.default=component.exports;installComponents(component,{StarRating:r(318).default})},322:function(t,e,r){"use strict";r.r(e);var n={name:"AddToCartButton",props:{disabled:{type:Boolean,default:!1}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("button",t._g(t._b({staticClass:"flex items-center gap-2 p-2 lg:p-4 bg-gray-300 rounded-full border-opacity-50",class:[t.disabled?"opacity-50":"hover:bg-indigo-400 hover:text-white"],attrs:{disabled:t.disabled}},"button",t.$attrs,!1),t.$listeners),[e("i",{staticClass:"fa-solid fa-cart-plus"}),t._v(" "),e("div",{staticClass:"text-sm lg:text-base"},[t._v("ADD TO CART")])])}),[],!1,null,"ea9524ae",null);e.default=component.exports},335:function(t,e,r){"use strict";var n=r(2),c=r(90).find,o=r(145),d="find",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(d)},342:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(32),r(335),r(213),r(15),r(321)),o=r(320),d={name:"product",components:{Product:c.default,Quantity:o.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.store,c=n.getters["products/getProducts"],o=c.find((function(p){return p.id===Number(r.slug)})),1,e.abrupt("return",{chosenProduct:o,productQuantity:1});case 5:case"end":return e.stop()}}),e)})))()}},l=r(24),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 gap-6 justify-items-center p-5 lg:p-9"},[e("Product",{attrs:{product:t.chosenProduct,productQuantity:t.productQuantity}}),t._v(" "),e("Quantity",{model:{value:t.productQuantity,callback:function(e){t.productQuantity=t._n(e)},expression:"productQuantity"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Product:r(321).default})}}]);