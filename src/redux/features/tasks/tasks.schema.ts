import type { ITaskInput } from "./tasks.type";

export const taskFormDefaultValue: ITaskInput = {
  title: "",
  description: "",
  status: "pending",
  priority: "medium",
};
