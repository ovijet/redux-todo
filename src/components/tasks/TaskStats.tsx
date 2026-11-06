import { Card } from "@/components/ui/card";

export function TaskStats() {
  const stats = { byStatus: "", total: 0, byPriority: "" };

  const items: Array<{ label: string; value: number; tone: string }> = [
    { label: "Total", value: stats.total, tone: "text-foreground" },
    {
      label: "Pending",
      value: stats.byStatus["pending"],
      tone: "text-slate-600 dark:text-slate-300",
    },
    {
      label: "In Progress",
      value: stats.byStatus["in-progress"],
      tone: "text-blue-600 dark:text-blue-300",
    },
    {
      label: "Done",
      value: stats.byStatus["done"],
      tone: "text-emerald-600 dark:text-emerald-300",
    },
    {
      label: "High",
      value: stats.byPriority.high,
      tone: "text-red-600 dark:text-red-300",
    },
    {
      label: "Medium",
      value: stats.byPriority.medium,
      tone: "text-amber-600 dark:text-amber-300",
    },
    {
      label: "Low",
      value: stats.byPriority.low,
      tone: "text-emerald-600 dark:text-emerald-300",
    },
  ];

  return (
    <Card className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 lg:grid-cols-7">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {item.label}
          </span>
          <span className={`text-2xl font-semibold tabular-nums ${item.tone}`}>
            {item.value}
          </span>
        </div>
      ))}
    </Card>
  );
}
