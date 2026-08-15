import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section id="pricing" className="scroll-mt-24">
<<<<<<< HEAD
      <div className="mx-auto max-w-[1450px] px-5 pb-16 lg:px-6">
=======
      <div className="container-x pb-16 lg:pb-24">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
        <Reveal>
          <div className="grid items-center gap-8 rounded-[14px] border border-border bg-surface-alt px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface">
                <Mail className="h-5 w-5 text-foreground" strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-foreground">
                  Get updates with LifeOS
                </h2>
                <p className="mt-1 text-[16px] leading-[1.55] text-muted-foreground">
                  New features, tips and inspiration in your inbox.
                </p>
              </span>
            </div>

            <form onSubmit={onSubmit} className="flex w-full items-center gap-2 lg:w-[340px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-[11px] border border-border bg-surface px-4 py-3 text-[16px] text-foreground outline-none transition-colors placeholder:text-muted-soft focus:border-foreground"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-[11px] bg-foreground text-background transition-all duration-[220ms] ease-[var(--ease-premium)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]"
              >
                {sent ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}