<template>
  <div v-if="showSpinnerRing" class="fixed top-1/2 left-1/2 -translate-x-1/2">
    <SpinnerRing />
  </div>
  <div
    v-else-if="isEmptyProducts"
    class="flex flex-col gap-4 lg:gap-8 justify-center items-center text-center py-20 lg:py-30 mt-24 font-bold text-xl lg:text-4xl bg-gray-300 bg-opacity-80"
  >
    <div>Your cart is empty</div>

    <NuxtLink to="/"> <ShopNowButton /> </NuxtLink>
  </div>
  <div v-else class="lg:grid lg:grid-cols-2 gap-6">
    <div class="grid grid-cols-1 gap-7 p-5 lg:p-9">
      <div class="text-xl lg:text-3xl font-bold">Your Cart</div>
      <div v-for="(product, index) in products" :key="index">
        <CartProduct :product="product" />
      </div>
    </div>
    <div class="px-5 pt-5 pb-2 w-full lg:fixed lg:bottom-0 lg:w-1/2 lg:right-0">
      <div class="text-xl lg:text-3xl font-bold py-1 lg:py-3">
        Order Summary
      </div>
      <HorizontalLine />
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <div>Subtotal</div>
          <div>${{ totalProductsPrice.toFixed(2) }}</div>
        </div>
        <div class="flex justify-between">
          <div>Shipping</div>
          <div>${{ shippingPrice }}</div>
        </div>
        <div class="flex justify-between font-bold">
          <div>Total Price</div>
          <div>${{ (shippingPrice + totalProductsPrice).toFixed(2) }}</div>
        </div>
        <button
          class="flex gap-2 items-center py-4 justify-center bg-yellow-300"
          @click="isCheckoutButtonClicked = true"
        >
          <div class="text-xl font-bold">Checkout</div>
          <CircleRightButton />
        </button>

        <div
          v-if="isCheckoutButtonClicked"
          class="py-2 text-red-500 font-bold text-center"
        >
          The site is in advanced stages of development, this stage will be in
          the next version
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopNowButton from "../components/buttons/ShopNowButton.vue";
import CircleRightButton from "../components/buttons/CircleRightButton.vue";
import HorizontalLine from "../components/lines/HorizontalLine.vue";
import CartProduct from "../components/CartProduct.vue";
import SpinnerRing from "../components/SpinnerRing.vue";
export default {
  name: "Cart",
  components: {
    ShopNowButton: ShopNowButton,
    CartProduct: CartProduct,
    CircleRightButton: CircleRightButton,
    HorizontalLine: HorizontalLine,
    SpinnerRing: SpinnerRing,
  },
  async asyncData() {
    let showSpinnerRing = false;
    let isCheckoutButtonClicked = false;
    if (process.server) {
      showSpinnerRing = true;
    }
    return {
      showSpinnerRing,
      isCheckoutButtonClicked,
    };
  },
  mounted() {
    addEventListener("load", (event) => {
      this.showSpinnerRing = false;
    });
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
