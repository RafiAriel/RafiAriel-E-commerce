<template>
  <div class="relative">
    <input
      class="border-2 pl-8 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 leading-tight focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      placeholder="Search..."
    />
    <button
      v-if="searchValue"
      class="absolute right-0 -translate-x-1/2 inset-y-0 flex items-center"
      @click="deleteValue"
    >
      <XmarkIcon />
    </button>

    <div class="absolute left-0 translate-x-1/2 inset-y-0 flex items-center">
      <SearchIcon />
    </div>
  </div>
</template>

<script>
import SearchIcon from "../../icons/SearchIcon.vue";
import XmarkIcon from "../../icons/XmarkIcon.vue";
export default {
  name: "SearchBar",
  components: {
    SearchIcon: SearchIcon,
    XmarkIcon: XmarkIcon,
  },
  props: ["value"],
  data() {
    return {
      searchValue: this.value,
    };
  },
  methods: {
    deleteValue() {
      this.$emit("input", "");
    },
  },
  watch: {
    value(newValue) {
      this.searchValue = newValue;
    },
  },
};
</script>
