<template>
  <div class="flex gap-2">
    <button @click="increase()">
      <i class="fa-solid fa-circle-plus"></i>
    </button>
    <input
      class="w-14 h-14 text-center text-lg border-solid border-2 rounded border-gray-300"
      :value="quantity"
      @input="$emit('input', $event.target.quantity)"
      type="text"
    />
    <button @click="decrease()" :disabled="disableDecreaseButton">
      <i class="fa-solid fa-circle-minus"></i>
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
      return this.quantity === 1;
    },
  },
};
</script>
