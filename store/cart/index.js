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
  getTotalCartPrice(state) {
    return state.cart.totalCartPrice;
  },
};

export const mutations = {
  addProduct(state, product) {
    state.products[product.id] = product;
  },
  setTotalCartPrice(state, totalCartPrice) {
    state.totalCartPrice = totalCartPrice;
  },
};

export const actions = {
  updateCart({ commit, state }, product, amount) {
    const newProduct = {
      ...product,
      amount: amount,
      totalPrice: product.price * amount,
    };

    commit("addProduct", newProduct);
    commit("setTotalCartPrice", state.totalCartPrice + newProduct.totalPrice);
  },
};
