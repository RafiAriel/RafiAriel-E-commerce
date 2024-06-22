<template>
  <div class="flex gap-2">
    <button @click="increase()">
      <i class="fa-solid fa-circle-plus hover:text-indigo-400"></i>
    </button>
    <input
      class="input-field w-12 h-12 text-lg rounded text-center"
      :value="quantity"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
    <button @click="decrease()" :disabled="disableDecreaseButton">
      <i
        class="fa-solid fa-circle-minus"
        :class="{
          'text-gray-400': disableDecreaseButton,
          'hover:text-indigo-400': !disableDecreaseButton,
        }"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  props: ["value"],
  data() {
    return {
      quantity: this.value,
    };
  },
  methods: {
    increase() {
      this.quantity++;
      this.$emit("input", this.quantity);
    },
    decrease() {
      if (this.quantity === 1) return;
      this.quantity--;
      this.$emit("input", this.quantity);
    },
  },
  computed: {
    disableDecreaseButton() {
      if (this.quantity > 1) return false;
      return true;
    },
  },
  watch: {
    value(newValue) {
      this.quantity = newValue;
    },
  },
};
</script>
