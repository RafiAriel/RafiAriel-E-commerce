<template>
  <div class="grid grid-cols-1 gap-2 lg:gap-4">
    <img
      class="w-24 lg:w-48 h-24 lg:h-48 justify-self-center"
      :src="product.image"
    />
    <div class="text-sm lg:text-base text-center truncate">
      {{ product.title }}
    </div>
    <div class="font-bold text-lg text-red-600">
      {{ `$${product.price}` }}
    </div>

    <!-- 
      https://www.w3schools.com/howto/howto_css_star_rating.asp
    -->
  </div>
</template>

<script scoped>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
