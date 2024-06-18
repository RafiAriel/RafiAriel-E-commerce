<template>
  <div class="grid grid-cols-1 gap-6 justify-items-center p-5 lg:p-9">
    <Product :product="chosenProduct" :productQuantity="productQuantity" />
    <!--TODO: there is a bug here. fix it-->
    <Quantity v-model="productQuantity" />
  </div>
</template>

<script>
import Product from "../../components/Product.vue";
import Quantity from "../../components/Quantity.vue";
export default {
  name: "product",
  components: {
    Product: Product,
    Quantity: Quantity,
  },
  async asyncData({ params, store }) {
    const products = store.getters["products/getProducts"];
    const chosenProduct = products.find((p) => p.id === Number(params.slug));
    let productQuantity = 1;
    return { chosenProduct, productQuantity };
  },
};
</script>
