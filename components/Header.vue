<template>
  <div
    ref="nav-bar"
    class="flex items-center bg-gray-300 justify-between p-4 sticky top-0 border-b-2 border-indigo-400 border-opacity-50 mb-20 transition-all"
  >
    <div
      class="text-lg font-bold tracking-widest leading-loose hover:text-indigo-400"
    >
      <NuxtLink to="/">HOME</NuxtLink>
    </div>
    <NuxtLink class="text-lg font-bold hover:text-indigo-400" to="/contact-me"
      >Contact Me</NuxtLink
    >

    <div class="flex justify-between gap-5">
      <NuxtLink to="/cart"> <CartIcon /> </NuxtLink>
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
  data() {
    return {
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      navbarHeight: 0,
      scrollYFromTop: 0,
    };
  },
  mounted() {
    this.navbarHeight = this.$el.offsetHeight;

    let scrollInterval = setInterval(() => {
      if (this.didScroll) {
        this.scrollYFromTop = scrollY;
        this.hasScrolled();
        this.didScroll = false;
      }
    }, 250);

    addEventListener("scroll", (event) => {
      this.didScroll = true;
    });
  },
  methods: {
    hasScrolled() {
      // Make sure they scroll more than delta px
      if (Math.abs(this.lastScrollTop - this.scrollYFromTop) <= this.delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.

      if (
        this.scrollYFromTop > this.lastScrollTop &&
        this.scrollYFromTop > this.navbarHeight
      ) {
        // Scroll Down
        this.$el.style.top = `-${this.navbarHeight}px`;
      } else {
        // Scroll Up
        if (
          this.scrollYFromTop + window.innerHeight <
          document.documentElement.scrollHeight
        ) {
          this.$el.style.top = "0px";
        }
      }
      this.lastScrollTop = this.scrollYFromTop;
    },
  },

  destroyed() {
    removeEventListener("scroll", () => {});
    clearInterval(this.scrollInterval);
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-indigo-400;
}
</style>
