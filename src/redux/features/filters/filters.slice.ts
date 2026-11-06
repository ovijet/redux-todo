import { createSlice } from "@reduxjs/toolkit";
import type { IFilterStatus } from "./filters.types";

const initialState: IFilterStatus = {
  query: "",
  priority: "all",
  status: "all",
  sort: "newest",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
    changePriorityFilter: (state, action) => {
      state.priority = action.payload;
    },
    changeStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    changeSortMode: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  changeQuery,
  changePriorityFilter,
  changeSortMode,
  changeStatusFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
