export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("products/fetchProducts");
  },
};
