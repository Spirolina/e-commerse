import type { ReduxState } from "@/lib/redux";

export const selectItems = (state: ReduxState) => state.products.items;
export const selectItem = (state: ReduxState, id: number) =>
  state.products.items.find((item) => item.id === id);
export const selectStatus = (state: ReduxState) => state.products.status;
export const selectCategories = (state: ReduxState) =>
  state.products.categories;
export const selectFrom = (state: ReduxState) => state.products.from;
export const selectTo = (state: ReduxState) => state.products.to;
export const selectSortBy = (state: ReduxState) => state.products.sortBy;
export const selectRating = (state: ReduxState) => state.products.rating;
export const selectFilteredItems = (state: ReduxState) =>
  state.products.filteredItems;
