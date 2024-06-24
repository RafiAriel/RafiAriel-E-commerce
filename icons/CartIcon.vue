<template>
  <div>
    <i
      class="badge fa-solid fa-cart-shopping"
      :value="uniqueProductQuantity"
    ></i>
  </div>
</template>

<script scoped>
export default {
  name: "CartIcon",
  data() {
    return {
      uniqueProductQuantity: "",
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.uniqueProductQuantity = Object.keys(
        this.$store.getters["cart/getProducts"]
      ).length;
    }, 500);
  },
  destroyed() {
    clearInterval(this.interval);
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
