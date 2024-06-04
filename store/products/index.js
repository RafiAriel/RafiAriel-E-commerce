export const state = () => ({
  products: [],
});

export const getters = {
  getProducts(state) {
    return state.products;
  },
  isEmptyProducts(state) {
    !state.products.length;
  },
};

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export const actions = {
  async fetchProducts({ commit }) {
    let products = await this.$axios.$get("https://fakestoreapi.com/products");

    // shorting titles of the products
    products.forEach((product) => {
      product.title = product.title.split(" ").slice(0, 3).join(" ");
    });

    commit("setProducts", products);
  },
};
