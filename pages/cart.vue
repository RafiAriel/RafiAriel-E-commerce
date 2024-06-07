<template>
  <div
    class="flex flex-col gap-4 lg:gap-8 justify-center items-center text-center py-20 lg:py-30 font-bold text-xl lg:text-4xl bg-gray-300 bg-opacity-80"
  >
    <div>Your cart is empty</div>

    <NuxtLink to="/"> <ShopNowButton /> </NuxtLink>
  </div>
</template>

<script>
import ShopNowButton from "../components/buttons/ShopNowButton.vue";
export default {
  name: "Cart",
  components: {
    ShopNowButton: ShopNowButton,
  },
};
</script>
