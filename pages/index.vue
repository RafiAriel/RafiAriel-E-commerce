<template>
  <div class="grid grid-cols-2 gap-12 justify-items-center p-5 lg:p-10">
    <div v-for="(product, index) in products" :key="index">
      <NuxtLink :to="`products/${product.id}`">
        <Product :product="product" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "../components/Product.vue";

export default {
  name: "IndexPage",
  components: {
    Product: Product,
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
    }),
  },
};
</script>
