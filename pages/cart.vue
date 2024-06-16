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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopNowButton from "../components/buttons/ShopNowButton.vue";
import CartProduct from "../components/CartProduct.vue";
export default {
  name: "Cart",
  components: {
    ShopNowButton: ShopNowButton,
    CartProduct: CartProduct,
  },
  computed: {
    ...mapGetters({
      products: "cart/getProducts",
    }),
    isEmptyProducts() {
      return !Object.keys(this.products).length;
    },
  },
};
</script>
