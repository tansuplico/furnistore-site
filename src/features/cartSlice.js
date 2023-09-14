import { createSlice } from "@reduxjs/toolkit";

import itemsData from "../api/storeData";

const sessionCart = JSON.parse(
  sessionStorage.getItem("cart") || JSON.stringify([])
);

const initialState = {
  items: itemsData,
  cartItems: sessionCart,
  numOfItems: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload;
      const itemSelected = state.items.filter((d) => d.id === itemId);

      const stateItem = state.items.find((d) => d.id === itemId);

      if (state.cartItems.some((item) => item.id === itemId)) {
        const cartItemIndex = state.cartItems.findIndex(
          (item) => item.id === itemId
        );
        const cartItem = state.cartItems[cartItemIndex];
        cartItem.quantity += stateItem.quantity;
        stateItem.quantity = 1;
      } else {
        state.cartItems = [...state.cartItems, ...itemSelected];
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const findItem = state.items.find((d) => d.id === itemId);

      state.cartItems = state.cartItems.filter((cart) => cart.id !== itemId);
      findItem.quantity = 1;
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((d) => d.id === itemId);

      item.quantity++;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((d) => d.id === itemId);

      if (item.quantity < 2) {
        state.cartItems = state.cartItems.filter((cart) => cart.id !== itemId);
      } else {
        item.quantity--;
      }
    },
    increaseDisplay: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      item.quantity++;
    },
    decreaseDisplay: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item.quantity < 2) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increase,
  decrease,
  increaseDisplay,
  decreaseDisplay,
} = cartSlice.actions;

export default cartSlice.reducer;
