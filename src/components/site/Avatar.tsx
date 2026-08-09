import { cn } from "@/lib/utils";

const palettes = [
  ["#0A0A0A", "#3A3A3A"],
  ["#1C1C1C", "#4A4A4A"],
  ["#141414", "#5F6368"],
  ["#222222", "#6A6A6A"],
  ["#101010", "#454545"],
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
  const [from, to] = palettes[index % palettes.length] ?? palettes[0]!;
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