<template>
  <div class="text-yellow-400 text-base lg:text-2xl relative">
    <span v-for="i in maxStars" :key="`star${i}`">&star;</span>
    <div
      class="absolute top-0 overflow-hidden"
      :style="{ width: getRating + '%' }"
    >
      <span v-for="i in maxStars" :key="`starf${i}`">&starf;</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      required: false,
      default: 5,
    },
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getCurrentDay() {
      return new Date().getDate();
    },
    getRating() {
      const ratingDecrease =
        this.getCurrentDay % 2 === 1 && this.productId % 2 === 1 ? 10 : 0;
      return ((this.rating / this.maxStars) * 100) / 2 - ratingDecrease;
    },
  },
};
</script>

<style scoped></style>
