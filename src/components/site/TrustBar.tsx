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
    <section className="border-y border-border bg-surface-alt">
      <div className="container-page py-12">
        <p className="eyebrow text-center text-subtle">
          Trusted &amp; loved by leading brands
        </p>
        <ul className="mt-8 grid grid-cols-3 items-center gap-8 sm:grid-cols-6">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-center gap-2 text-subtle transition-colors hover:text-ink"
            >
              <b.icon className="h-4 w-4" strokeWidth={1.6} />
              <span className="text-[15px] font-medium">{b.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}