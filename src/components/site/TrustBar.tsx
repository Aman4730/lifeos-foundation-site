import { Apple, Bot, Chrome, CreditCard, Grid2x2, NotebookPen } from "lucide-react";

const brands = [
  { name: "Apple", icon: Apple },
  { name: "Google", icon: Chrome },
  { name: "Microsoft", icon: Grid2x2 },
  { name: "Notion", icon: NotebookPen },
  { name: "stripe", icon: CreditCard },
  { name: "ChatGPT", icon: Bot },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface-alt/60">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Trusted &amp; loved by leading brands
        </p>
        <ul className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-center gap-2 text-navy/55 transition-colors hover:text-navy"
            >
              <b.icon className="h-4 w-4" strokeWidth={1.8} />
              <span className="text-sm font-medium">{b.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}