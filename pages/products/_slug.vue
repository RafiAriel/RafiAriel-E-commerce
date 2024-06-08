<template>
  <div class="grid grid-cols-2 gap-12 justify-items-center p-5 lg:p-10">
    <Product :product="chosenProduct" />
  </div>
</template>

<script>
import Product from "../../components/Product.vue";

export default {
  name: "product",
  components: {
    Product: Product,
  },
  async asyncData({ params, store }) {
    const products = store.getters["products/getProducts"];
    const chosenProduct = products.find((p) => p.id === Number(params.slug));
    return { chosenProduct };
  },
};
</script>
