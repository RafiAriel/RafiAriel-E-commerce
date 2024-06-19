<template>
  <div>
    <!-- sort by vue select -->
    <div class="grid grid-cols-12">
      <div class="col-span-7 lg:col-span-3 gap-3 p-4">
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

    <!-- grid grid-cols-2 gap-12 justify-items-center p-5 lg:p-9" -->
    <div ref="swiper" class="swiper overflow-x-hidden">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide"
          v-for="(product, index) in sortedProducts"
          :key="index"
        >
          <Product :product="product" />
        </div>
      </div>
      <div class="swiper-pagination pt-5"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

// vue-select
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

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
  mounted() {
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,
      centeredSlides: true,
      spaceBetween: 10,

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
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

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
