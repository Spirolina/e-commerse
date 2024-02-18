import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItems } from "./fetchItems";

export const getProducts = createAsyncThunk("products/fetchItems", async () => {
  const response = await fetchItems();

  return response;
});
