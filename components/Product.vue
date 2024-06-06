<template>
  <div class="grid grid-cols-1 gap-2 lg:gap-4">
    <img
      class="w-24 lg:w-48 h-24 lg:h-48 justify-self-center"
      :src="product.image"
    />
    <div class="text-sm lg:text-base text-center truncate">
      {{ product.title }}
    </div>
    <StarRating :productId="product.id" :rating="product.rating.rate" />

    <div class="font-bold text-lg text-red-600">
      {{ `$${product.price}` }}
    </div>

    <div>
      <AddToCartButton />
    </div>
  </div>
</template>

<script scoped>
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
};
</script>

<style scoped></style>
