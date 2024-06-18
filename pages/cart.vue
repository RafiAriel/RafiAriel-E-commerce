<template>
  <div
    v-if="isEmptyProducts"
    class="flex flex-col gap-4 lg:gap-8 justify-center items-center text-center py-20 lg:py-30 font-bold text-xl lg:text-4xl bg-gray-300 bg-opacity-80"
  >
    <div>Your cart is empty</div>

    <NuxtLink to="/"> <ShopNowButton /> </NuxtLink>
  </div>
  <div v-else>
    <div class="flex flex-col gap-6 p-5 lg:p-9">
      <div class="text-xl lg:text-3xl font-bold">Your Cart</div>
      <div v-for="(product, index) in products" :key="index">
        <CartProduct :product="product" />
      </div>
    </div>
    <div class="fixed bottom-0 px-5 pt-5 pb-2 w-full lg:hidden">
      <hr class="bg-indigo-400" />
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <div>Subtotal</div>
          <div>${{ totalProductsPrice }}</div>
        </div>
        <div class="flex justify-between">
          <div>Shipping</div>
          <div>${{ shippingPrice }}</div>
        </div>
        <div class="flex justify-between font-bold">
          <div>Total Price</div>
          <div>${{ shippingPrice + totalProductsPrice }}</div>
        </div>
        <div class="flex gap-2 py-4 justify-center bg-yellow-300">
          <div class="text-xl font-bold">Place Order</div>
          <CircleRightButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopNowButton from "../components/buttons/ShopNowButton.vue";
import CircleRightButton from "../components/buttons/CircleRightButton.vue";

import CartProduct from "../components/CartProduct.vue";
export default {
  name: "Cart",
  components: {
    ShopNowButton: ShopNowButton,
    CartProduct: CartProduct,
    CircleRightButton: CircleRightButton,
  },
  computed: {
    ...mapGetters({
      products: "cart/getProducts",
      totalProductsPrice: "cart/getTotalCartPrice",
      shippingPrice: "cart/getShippingPrice",
    }),
    isEmptyProducts() {
      return !Object.keys(this.products).length;
    },
  },
};
</script>
