import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ITask,
  ITaskInput,
  TInitialState,
  TTaskStatus,
} from "./tasks.type";

const initialState: TInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare: (input: ITaskInput) => {
        const task = {
          id: nanoid(),
          title: input.title.trim(),
          description: input.description.trim(),
          status: input.status,
          priority: input.priority,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        return { payload: task };
      },
      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
    },
    updateTask: (
      state,
      action: PayloadAction<{
        id: string;
        change: ITaskInput;
      }>,
    ) => {
      const { id, change } = action.payload;
      const task = state.find((item) => item.id === id);
      if (!task) return;
      Object.assign(task, change, { updatedAt: Date.now() });
    },
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: TTaskStatus }>,
    ) => {
      const { id, status } = action.payload;
      const task = state.find((item) => item.id === id);
      if (!task) return;
      task.status = status;
      task.updatedAt = Date.now();
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const task = state.find((item) => item.id === action.payload);
      if (!task) return;
      return state.filter((item) => item.id !== task.id);
    },
  },
});

export const { addTask, removeTask, updateStatus, updateTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
