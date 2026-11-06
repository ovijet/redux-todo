import type { RootState } from "@/redux/store";

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTotalCount = (state: RootState) => state.tasks.length;

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.find((item) => item.id === id);
