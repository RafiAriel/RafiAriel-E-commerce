import Vue from "vue";
export const state = () => ({
  cart: {
    products: {}, // contain key = product id, value = { product, amount, totalPrice}
    totalCartPrice: 0,
  },
});

export const getters = {
  getProducts(state) {
    return state.cart.products;
  },
  getUniqueProductQuantity(state) {
    return Object.keys(state.cart.products).length;
  },
  getTotalCartPrice(state) {
    return state.cart.totalCartPrice;
  },
};

export const mutations = {
  addProduct(state, product) {
    Vue.set(state.cart.products, product.id, product);
  },
  setTotalCartPrice(state, totalCartPrice) {
    state.cart.totalCartPrice = totalCartPrice;
  },
};

export const actions = {
  async getCurrentProductQuantity({ state }, productId) {
    return state.cart.products[productId]?.amount || 0;
  },
  async updateCart({ commit, state }, { product, amount = 0 }) {
    const newProduct = {
      ...product,
      amount: amount,
      totalPrice: product.price * amount,
    };

    commit("addProduct", newProduct);
    commit("setTotalCartPrice", state.totalCartPrice + newProduct.totalPrice);
  },
};
