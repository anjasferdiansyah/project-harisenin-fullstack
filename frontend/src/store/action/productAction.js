// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch("/src/data/listProducts.json");
    const json = await response.json();
    return json
  } catch (error) {
    throw error;
  }
});
