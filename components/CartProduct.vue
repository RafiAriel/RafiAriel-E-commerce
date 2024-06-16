<template>
  <div class="relative grid grid-cols-2 gap-2">
    <img
      class="w-24 lg:w-48 h-24 lg:h-48 justify-self-center"
      :src="product.image"
    />
    <div class="flex flex-col gap-2 text-left">
      <div class="text-sm lg:text-base truncate font-bold">
        {{ product.title }}
      </div>
      <div class="font-bold text-lg text-red-600">
        {{ `$${product.totalPrice}` }}
      </div>
      <div>
        <Quantity v-model="productQuantity" />
      </div>
    </div>
    <button
      class="absolute top-0 right-0 hover: hover:text-indigo-400"
      @click="deleteProduct({ product })"
    >
      <XmarkIcon />
    </button>
  </div>
</template>

<script scoped>
import { mapActions } from "vuex";
import Quantity from "./Quantity.vue";
import XmarkIcon from "../icons/XmarkIcon.vue";
export default {
  name: "CartProduct",
  components: {
    Quantity: Quantity,
    XmarkIcon: XmarkIcon,
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
  methods: {
    ...mapActions("cart", ["updateCart", "deleteProduct"]),
  },
  watch: {
    productQuantity() {
      this.updateCart({
        product: this.product,
        quantity: this.productQuantity,
      });
    },
  },
};
</script>

<style scoped></style>
