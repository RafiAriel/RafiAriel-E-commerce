export const state = () => ({
  isSwiperView: true,
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("products/fetchProducts");
  },
};

export const getters = {
  getIsSwiperView(state) {
    return state.isSwiperView;
  },
};

export const mutations = {
  setIsSwiperValue(state, newValue) {
    state.isSwiperView = newValue;
  },
};
