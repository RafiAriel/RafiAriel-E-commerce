export const state = () => ({
  cart: {
    products: [
      {
        product: [],
        amount: 0,
        totalPrice: 0,
      },
    ],
    totalCartPrice: 0,
  },
});

export const getters = {
  getProducts(state) {
    return state.products;
  },

  getTotalCartPrice(state) {
    return state.totalCartPrice;
  },
};

export const mutations = {
  addProduct(state, product) {
    state.products.push(product);
  },
  setTotalCartPrice(state, totalCartPrice) {
    state.totalCartPrice = totalCartPrice;
  },
};

export const actions = {
  addProductToCart({ commit, state }, product, amount) {
    const newProduct = {
      ...product,
      amount: amount,
      totalPrice: product.price * amount,
    };

    commit("addProduct", newProduct);
    commit("setTotalCartPrice", state.totalCartPrice + newProduct.totalPrice);
  },
};
