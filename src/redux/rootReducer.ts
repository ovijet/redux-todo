import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasks.slice";
import filtersReducer from "./features/filters/filters.slice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
