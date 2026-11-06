import { SearchIcon, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SORT_LABEL = {
  newest: "Newest first",
  oldest: "Oldest first",
  priority: "By priority",
};

export function FiltersBar() {
  return (
    <Card className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search tasks…" className="pl-9" />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
        <Select value={status}>
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All priorities</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>

      <Button variant="ghost" size="sm">
        <XIcon className="size-4" /> Clear
      </Button>
    </Card>
  );
}
