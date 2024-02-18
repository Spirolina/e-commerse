import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";

const initialState: ProductSliceState = {
  items: [],
  status: "idle",
  error: null,
  categories: null,
  from: null,
  to: null,
  sortBy: null,
  rating: null,
  filteredItems: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCategories: (state, action: PayloadAction<any[]>) => {
      state.categories = action.payload;
    },
    setFrom: (state, action: PayloadAction<number | null>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<number | null>) => {
      state.to = action.payload;
    },
    setSortBy: (state, action: PayloadAction<any>) => {
      state.sortBy = action.payload;
    },
    setRating: (state, action: PayloadAction<any>) => {
      state.rating = action.payload;
    },
    resetFilters: (state) => {
      state.categories = null;
      state.rating = null;
      state.from = 0;
      state.to = 0;
      state.sortBy = null;
      state.filteredItems = null;
    },
    filterItems: (state) => {
      state.filteredItems = state.items
        .filter((item) => {
          if (state.categories && state.categories.length > 0) {
            const categories = state.categories.map(
              (category) => category.value,
            );
            if (!categories.includes(item.category)) {
              return false;
            }
          }
          if (state.from && state.to) {
            if (item.price < state.from || item.price > state.to) {
              return false;
            }
          }
          if (state.rating) {
            if (item.rating.rate <= Number(state.rating.value)) {
              return false;
            }
          }
          return true;
        })
        .sort((a, b) => {
          if (state.sortBy) {
            if (state.sortBy.value === "price") {
              return a.price - b.price;
            }
            if (state.sortBy.value === "rating") {
              return a.rating.rate - b.rating.rate;
            }
            if (state.sortBy.value === "review") {
              return a.rating.count - b.rating.count;
            }
          }
          return 0;
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      });
  },
});

export interface Select {
  value: string;
  label: string;
}

export interface ProductSliceState {
  items: any[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
  categories: Select[] | null;
  from: number | null;
  to: number | null;
  sortBy: Select | null;
  rating: Select | null;
  filteredItems?: any[] | null;
}

export const {
  addItem,
  removeItem,
  setItems,
  setCategories,
  setFrom,
  setTo,
  setSortBy,
  resetFilters,
  setRating,
  filterItems,
} = productsSlice.actions;
