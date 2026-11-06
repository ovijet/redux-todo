import type { RootState } from "@/redux/store";

export const selectFilters = (state: RootState) => state.filters;
export const selectPriorityFilter = (state: RootState) =>
  state.filters.priority;
export const selectQuery = (state: RootState) => state.filters.query;
export const selectSort = (state: RootState) => state.filters.sort;
export const selectStatus = (state: RootState) => state.filters.status;
