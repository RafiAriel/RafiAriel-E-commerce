<template>
  <div>
    <i
      class="badge fa-solid fa-cart-shopping"
      :value="getUniqueProductQuantity"
    ></i>
  </div>
</template>

<script scoped>
import { mapGetters } from "vuex";
export default {
  name: "CartIcon",
  computed: {
    ...mapGetters({
      getUniqueProductQuantity: "cart/getUniqueProductQuantity",
    }),
  },
};
</script>

<style scoped>
.badge:after {
  content: attr(value);
  font-size: 12px;
  color: #fff;
  background: rgb(89, 90, 197);
  border-radius: 100%;
  padding: 4px 4px 4px 4px;
  position: relative;
  left: -7px;
  top: -12px;
}
</style>
