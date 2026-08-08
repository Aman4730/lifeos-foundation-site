import { cn } from "@/lib/utils";

const palettes = [
  ["#1f3a63", "#3f6ea8"],
  ["#6b4a2a", "#b7864d"],
  ["#2f5d4a", "#69a184"],
  ["#5a2f4a", "#a8698e"],
  ["#3a3f63", "#7b82b8"],
];

export function Avatar({
  name,
  className,
  index = 0,
}: {
  name: string;
  className?: string;
  index?: number;
}) {
  const [from, to] = palettes[index % palettes.length];
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white ring-2 ring-surface",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(140deg, ${from}, ${to})` }}
    >
      {initials}
    </span>
  );
}