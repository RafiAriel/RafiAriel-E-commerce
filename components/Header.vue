<template>
  <div class="flex bg-gray-300 justify-between p-4">
    <div class="text-lg font-bold tracking-widest leading-loose">
      <NuxtLink to="/">HOME</NuxtLink>
    </div>

    <div class="flex justify-between gap-2">
      <NuxtLink to="/temp">temp</NuxtLink>

      <div>
        cart icon

        <!--replace it with actual icon-->
      </div>

      <div>
        contact us icon

        <!--replace it with actual icon-->
      </div>
      <div>
        user icon
        <User />

        <!--replace it with actual icon-->
      </div>
    </div>
  </div>
</template>

<script scoped>
import User from "../icons/User.vue";
export default {
  name: "Header",
  components: {
    User: User,
  },
};
</script>

<style scoped></style>
