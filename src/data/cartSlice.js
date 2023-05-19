/**
 * Redux slice for managing the cart state
 */

import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  cartProductIds: [], // Array of cart product IDs
};

// Cart slice with reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer function to add a product to the cart
    addToCart: (state, action) => {
      state.cartProductIds = [...state.cartProductIds, action.payload];
    },
    // Reducer function to remove a product from the cart
    removeFromCart: (state, action) => {
      state.cartProductIds = state.cartProductIds.filter(
        (id) => id !== action.payload
      );
    },
    // Reducer function to clear all items from the cart
    clearAllItems: (state) => {
      state.cartProductIds = initialState.cartProductIds;
    },
  },
});

// Export the actions and reducer from the cart slice
export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
