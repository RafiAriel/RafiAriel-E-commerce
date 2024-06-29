<template>
  <div>
    <div v-if="showSpinnerRing" class="fixed top-1/2 left-1/2 -translate-x-1/2">
      <SpinnerRing />
    </div>
    <div :class="[showSpinnerRing ? 'hidden' : '']">
      <div class="flex gap-2">
        <button
          class="view-button"
          :class="{ 'text-indigo-400': !isSwiperView }"
          @click="setIsSwiperValue(false)"
        >
          <GridIcon />
        </button>
        <button
          class="view-button"
          :class="{ 'text-indigo-400': isSwiperView }"
          @click="setIsSwiperValue(true)"
        >
          <SwiperViewIcon />
        </button>

        <SearchBar v-model="searchValue" />
      </div>

      <div
        v-show="!isSwiperView && cProducts.length"
        class="mt-16 mb-10 px-5 lg:px-10"
      >
        <div class="grid grid-cols-2 gap-12 justify-items-center">
          <div v-for="(product, index) in cProducts" :key="index">
            <Product :product="product" />
          </div>
        </div>
      </div>
      <div
        v-show="isSwiperView && cProducts.length"
        ref="swiper"
        class="swiper mt-16 mb-10 overflow-x-hidden"
      >
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            class="swiper-slide"
            v-for="(product, index) in cProducts"
            :key="index"
          >
            <Product :product="product" />
          </div>
        </div>
        <div v-show="isSwiperView" class="swiper-pagination pt-5"></div>
        <div
          v-show="isSwiperView && cProducts.length"
          class="swiper-button-prev"
        ></div>
        <div
          v-show="isSwiperView && cProducts.length"
          class="swiper-button-next"
        ></div>
      </div>
      <div
        v-if="!cProducts.length"
        class="text-center py-16 lg:py-24 mt-24 font-bold text-xl lg:text-4xl bg-gray-300 bg-opacity-80"
      >
        No Products Found
      </div>
    </div>
  </div>
</template>

<script>
// swiper
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

// vuex
import { mapGetters, mapMutations } from "vuex";

// components
import Product from "../components/Product.vue";
import SearchBar from "../components/fields/SearchBar.vue";
import SpinnerRing from "../components/SpinnerRing.vue";

// icons
import SwiperViewIcon from "../icons/SwiperViewIcon.vue";
import GridIcon from "../icons/GridIcon.vue";

export default {
  name: "IndexPage",
  components: {
    Product: Product,
    SwiperViewIcon: SwiperViewIcon,
    GridIcon: GridIcon,
    SearchBar: SearchBar,
    SpinnerRing: SpinnerRing,
  },
  data() {
    return {
      swiper: null,
      searchValue: "",
    };
  },
  async asyncData() {
    let showSpinnerRing = false;
    if (process.server) {
      showSpinnerRing = true;
    }
    return {
      showSpinnerRing,
    };
  },
  mounted() {
    addEventListener("load", (event) => {
      this.showSpinnerRing = false;
    });
    this.initSwiper();
  },
  methods: {
    ...mapMutations(["setIsSwiperValue"]),
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        // parameters
        spaceBetween: 10,
        observer: true,
        observeParents: true,

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
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
      isSwiperView: "getIsSwiperView",
    }),
    cProducts() {
      let products = JSON.parse(JSON.stringify(this.products));

      if (this.searchValue) {
        return products.filter((item) => {
          return this.searchValue
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      }

      return products;
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
.view-button {
  @apply w-10 h-10 hover:text-indigo-400 focus:text-indigo-400 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50;
}
</style>
