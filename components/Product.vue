<template>
  <div class="grid grid-cols-1 gap-2 lg:gap-4">
    <NuxtLink :to="`products/${product.id}`">
      <img
        class="w-24 lg:w-48 h-24 lg:h-48 justify-self-center"
        :src="product.image"
      />
    </NuxtLink>

    <div class="text-sm lg:text-base text-center truncate">
      {{ product.title }}
    </div>
    <StarRating :productId="product.id" :rating="product.rating.rate" />

    <div class="font-bold text-lg text-red-600">
      {{ `$${product.price}` }}
    </div>

    <div>
      <AddToCartButton @click.prevent="addToCart()" v-bind="$attrs" />
    </div>
  </div>
</template>

<script scoped>
import { mapActions } from "vuex";
import AddToCartButton from "./buttons/AddToCartButton.vue";
import StarRating from "./StarRating.vue";
export default {
  name: "Product",
  components: {
    StarRating: StarRating,
    AddToCartButton: AddToCartButton,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["getCurrentProductQuantity", "updateCart"]),

    addToCart() {
      (async () => {
        const currentQuantity = await this.getCurrentProductQuantity(
          this.product.id
        );
        await this.updateCart({
          product: this.product,
          amount: currentQuantity + 1,
        });
      })(); // invoke immediately
      // move to cart
      this.$router.push({ path: "cart" });
      // TODO: add loader - https://loading.io/css/
    },
  },
};
</script>

<style scoped></style>
