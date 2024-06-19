<template>
  <div>
    <div class="grid grid-cols-10">
      <div class="col-span-6 gap-3 p-4">
        <div class="text-base lg:text-xl font-bold">Sort by:</div>
        <v-select
          :options="sortOptions"
          :reduce="(title) => title.code"
          label="title"
          v-model="selectedSortValue"
          placeholder="options..."
        />
      </div>

      <div></div>
    </div>

    <div class="grid grid-cols-2 gap-12 justify-items-center p-5 lg:p-9">
      <div v-for="(product, index) in sortedProducts" :key="index">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

import { mapGetters } from "vuex";
import Product from "../components/Product.vue";

export default {
  name: "IndexPage",
  components: {
    Product: Product,
  },
  data() {
    return {
      selectedSortValue: "",
    };
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
    }),
    sortedProducts() {
      let sortedArray = JSON.parse(JSON.stringify(this.products));
      // without any filtering
      if (this.selectedSortValue == "") return sortedArray;

      // sort by top rated
      if (this.selectedSortValue == 3) {
        sortedArray = sortedArray.sort(function (p1, p2) {
          return -(p1.rating.rate - p2.rating.rate);
        });
      }
      // sort from lowest to highest
      if (this.selectedSortValue == 1 || this.selectedSortValue == 2) {
        sortedArray = sortedArray.sort(function (p1, p2) {
          return p1.price - p2.price;
        });
      }
      // if option of lowest to highest selected
      if (this.selectedSortValue == 1) {
        sortedArray = sortedArray.reverse();
      }
      return sortedArray;
    },
    sortOptions() {
      return [
        {
          code: 1,
          title: "Price (High to Low)",
        },
        {
          code: 2,
          title: "Price (Low to High)",
        },
        {
          code: 3,
          title: "Top Rated",
        },
      ];
    },
  },
};
</script>

<style scoped>
.v-select {
  @apply text-xs lg:text-lg;
}
</style>
