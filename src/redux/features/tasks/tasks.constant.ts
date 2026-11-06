import type { TTaskPriority, TTaskStatus } from "./tasks.type";

export const TASK_STATUS: TTaskStatus[] = ["pending", "in-progress", "done"];
export const STATUS_LABEL: Record<TTaskStatus, string> = {
  pending: "Pending",
  "in-progress": "In Progress",
  done: "Done",
};

export const TASK_PRIORITIES: TTaskPriority[] = ["low", "medium", "high"];
export const PRIORITY_LABEL: Record<TTaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
