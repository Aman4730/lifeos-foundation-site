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
<<<<<<< HEAD
      <div className="mx-auto max-w-[1450px] px-5 py-8 lg:px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
=======
      <div className="container-x py-10">
        <p className="text-center text-[13px] font-semibold tracking-[-0.005em] text-muted-soft">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
          Trusted &amp; loved by leading brands
        </p>
        <ul className="mt-8 grid grid-cols-3 items-center gap-8 sm:grid-cols-6">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-center gap-2 text-muted-soft transition-colors duration-200 hover:text-foreground"
            >
              <b.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              <span className="text-[15px] font-medium">{b.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}