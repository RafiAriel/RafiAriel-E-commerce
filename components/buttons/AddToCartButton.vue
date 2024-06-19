<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    class="flex items-center gap-2 p-2 lg:p-4 bg-gray-300 rounded-full border-opacity-50"
    :class="[disabled ? 'opacity-50' : 'hover:bg-indigo-400 hover:text-white']"
  >
    <i class="fa-solid fa-cart-plus"></i>
    <div class="text-sm lg:text-base">ADD TO CART</div>
  </button>
</template>

<script scoped>
export default {
  name: "AddToCartButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
