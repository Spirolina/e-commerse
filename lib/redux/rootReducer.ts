/* Instruments */
import { counterSlice } from "./slices";
import { productsSlice } from "./slices/productsSlice";

export const reducer = {
  counter: counterSlice.reducer,
  products: productsSlice.reducer,
};
