import { useCallback, useState } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { TaskList } from "@/components/tasks/TaskList";
import {
  TaskFormDialog,
  type DialogMode,
} from "@/components/tasks/TaskFormDialog";
import { TaskStats } from "@/components/tasks/TaskStats";
import { FiltersBar } from "@/components/filters/FiltersBar";

interface DialogState {
  open: boolean;
  mode: DialogMode;
  editingId: string | null;
}

const CLOSED_DIALOG: DialogState = {
  open: false,
  mode: "create",
  editingId: null,
};

function App() {
  const [dialog, setDialog] = useState<DialogState>(CLOSED_DIALOG);

  const openCreate = useCallback(() => {
    setDialog({ open: true, mode: "create", editingId: null });
  }, []);

  const openEdit = useCallback((id: string) => {
    setDialog({ open: true, mode: "edit", editingId: id });
  }, []);

  const closeDialog = useCallback(() => {
    setDialog((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <div className="min-h-screen bg-muted/40">
      <main className="container mx-auto max-w-3xl px-4 py-8 space-y-5">
        <header className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Redux Todo
            </h1>
            <p className="text-sm text-muted-foreground">
              State managed using Redux Toolkit
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={openCreate}>
              <PlusIcon className="size-4" />
              New Task
            </Button>
          </div>
        </header>

        <TaskStats />
        <FiltersBar />
        <TaskList onEdit={openEdit} />
      </main>

      <TaskFormDialog
        open={dialog.open}
        mode={dialog.mode}
        editingId={dialog.editingId}
        onClose={closeDialog}
      />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
