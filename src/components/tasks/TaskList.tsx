import { TaskItem } from "./TaskItem";
import { Card } from "@/components/ui/card";
import {
  selectAllTasks,
  selectTotalCount,
} from "@/redux/features/tasks/tasks.selector";
import { useAppSelector } from "@/redux/hooks";
import { ClipboardListIcon, FilterIcon } from "lucide-react";

interface IProps {
  onEdit: (id: string) => void;
}

export function TaskList({ onEdit }: IProps) {
  const tasks = useAppSelector(selectAllTasks);
  const total = useAppSelector(selectTotalCount);
  const isFiltering = false;

  if (total === 0) {
    return (
      <Card className="flex flex-col items-center gap-2 px-6 py-12 text-center text-muted-foreground">
        <ClipboardListIcon className="size-8" />
        <p className="font-medium text-foreground">No tasks yet</p>
        <p className="text-sm">Click "New Task" to get started.</p>
      </Card>
    );
  }

  if (tasks.length === 0) {
    return (
      <Card className="flex flex-col items-center gap-2 px-6 py-12 text-center text-muted-foreground">
        <FilterIcon className="size-8" />
        <p className="font-medium text-foreground">No matches</p>
        <p className="text-sm">
          {isFiltering
            ? "Try clearing or adjusting the filters."
            : "Nothing matches the current view."}
        </p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem key={task.title} task={task} onEdit={onEdit} />
      ))}
    </div>
  );
}
