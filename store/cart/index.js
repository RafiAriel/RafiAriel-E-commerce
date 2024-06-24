import Vue from "vue";
export const state = () => ({
  cart: {
    products: {}, // contain key = product id, value = { product, quantity, totalPrice}
    shippingPrice: 10.0,
  },
});

export const getters = {
  getProducts(state) {
    return Object.fromEntries(
      Object.entries(state.cart.products).filter(
        ([key, value]) => Object.keys(value).length !== 0
      )
    );
  },
  getUniqueProductQuantity(state, getters) {
    return Object.keys(getters.getProducts).length;
  },
  getTotalCartPrice(state, getters) {
    let sum = 0.0;

    for (const productId in getters.getProducts) {
      const product = getters.getProducts[productId];
      sum += parseFloat(product.totalPrice);
    }
    return sum;
  },
  getShippingPrice(state) {
    return state.cart.shippingPrice;
  },
};

export const mutations = {
  addProduct(state, product) {
    Vue.set(state.cart.products, product.id, product);
  },
  removeProduct(state, product) {
    Vue.set(state.cart.products, product.id, {});
  },
  setTotalCartPrice(state, totalCartPrice) {
    state.cart.totalCartPrice = totalCartPrice;
  },
  setCart(state, cart) {
    state.cart = cart;
  },
  updateLocalStorageCart(state) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
};

export const actions = {
  async getCurrentProductQuantity({ state }, productId) {
    return state.cart.products[productId]?.quantity || 0;
  },
  async updateCart({ commit, state }, { product, quantity = 0 }) {
    const newProduct = {
      ...product,
      quantity: quantity,
      totalPrice: (product.price * quantity).toFixed(2),
    };

    commit("addProduct", newProduct);
    commit("setTotalCartPrice", state.totalCartPrice + newProduct.totalPrice);
    commit("updateLocalStorageCart");
  },
  async deleteProduct({ commit }, { product }) {
    commit("removeProduct", product);
    commit("updateLocalStorageCart");
  },
};
