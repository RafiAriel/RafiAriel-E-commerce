<template>
  <div class="grid grid-cols-2 gap-2">
    <img
      class="w-24 lg:w-48 h-24 lg:h-48 justify-self-center"
      :src="product.image"
    />
    <div class="flex flex-col gap-2 text-left">
      <div class="text-sm lg:text-base truncate font-bold">
        {{ product.title }}
      </div>
      <div class="font-bold text-lg text-red-600">
        {{ `$${product.price}` }}
      </div>
      <div>
        <Quantity v-model="productQuantity" />
      </div>
    </div>
  </div>
</template>

<script scoped>
import Quantity from "./Quantity.vue";
export default {
  name: "CartProduct",
  components: {
    Quantity: Quantity,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      productQuantity: this.product.quantity,
    };
  },
};
</script>

<style scoped></style>
