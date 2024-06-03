<template>
  <div
    class="flex bg-gray-300 justify-between p-4 sticky top-0 border-b-2 border-indigo-400 border-opacity-50"
  >
    <div class="text-lg font-bold tracking-widest leading-loose">
      <NuxtLink to="/">HOME</NuxtLink>
    </div>

    <div class="flex justify-between gap-5">
      <NuxtLink to="/cart"> <CartIcon /> </NuxtLink>

      <NuxtLink to="/user"> <UserIcon /> </NuxtLink>
    </div>
  </div>
</template>

<script scoped>
import UserIcon from "../icons/UserIcon.vue";
import CartIcon from "../icons/CartIcon.vue";

export default {
  name: "Header",
  components: {
    UserIcon: UserIcon,
    CartIcon: CartIcon,
  },
};
</script>

<style scoped></style>
