/**
 * Redux slice for managing the products state and fetching product data asynchronously
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state for the products
const initialState = {
  data: [], // Array of products
  fetchStatus: "", // Fetch status of product data
};

// Async thunk for fetching all products
const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
);

// Products slice with reducers and extra reducers for async thunk
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        // Set fetch status to "loading" when the async thunk is pending
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        // Update the products data and set fetch status to "success" when the async thunk is fulfilled
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        // Set fetch status to "error" when the async thunk is rejected
        state.fetchStatus = "error";
      });
  },
});

// Export the async thunk and reducer from the products slice
export { fetchAllProducts };
export default productsSlice.reducer;
