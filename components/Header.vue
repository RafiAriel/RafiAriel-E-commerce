<template>
  <div class="flex bg-gray-300 justify-between p-4">
    <div></div>
    <div class="logo">
      <NuxtLink to="/">Home</NuxtLink>

      <!--replace it with actual logo. this is home-->
    </div>

    <div class="flex justify-between gap-2">
      <NuxtLink to="/temp">temp</NuxtLink>

      <!--find how to set css from nuxt - 'active' -->

      <div>
        user icon
        <!--replace it with actual icon-->
      </div>

      <div>
        cart icon

        <!--replace it with actual icon-->
      </div>

      <div>
        contact us icon

        <!--replace it with actual icon-->
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Header",
};
</script>
