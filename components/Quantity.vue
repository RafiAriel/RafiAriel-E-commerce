<template>
  <div class="flex gap-2">
    <button @click="increase()">
      <i class="fa-solid fa-circle-plus"></i>
    </button>
    <input
      class="w-26 text-center text-lg border-solid border-2 rounded border-gray-300"
      :value="value"
      @input="$emit('input', $event.target.value)"
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
  methods: {
    increase() {
      this.value++;
      this.$emit("input", this.value);
    },
    decrease() {
      if (this.value === 1) return;
      this.value--;
      this.$emit("input", this.value);
    },
  },
  computed: {
    disableDecreaseButton() {
      return this.value === 1;
    },
  },
};
</script>
