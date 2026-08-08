import { Bell, CheckSquare, ChevronRight, Calendar, Receipt, Wallet, Dumbbell } from "lucide-react";
import focusImage from "@/assets/focus.jpg";
import { Avatar } from "./Avatar";

const stats = [
  { icon: CheckSquare, value: "6", label: "Tasks\nToday" },
  { icon: Calendar, value: "3", label: "Events\nToday" },
  { icon: Receipt, value: "2", label: "Bills\nDue" },
  { icon: Wallet, value: "₹2,450", label: "Spent\nToday" },
];

const plan = [
  { time: "10:00 AM", title: "Team Meeting", color: "#3b6fa0" },
  { time: "01:30 PM", title: "Client Call", color: "#c9a84c" },
  { time: "06:00 PM", title: "Workout", color: "#5a8a5c" },
];

const tasks = [
  { icon: CheckSquare, title: "Review PRD Document", sub: "Work" },
  { icon: Receipt, title: "Investor Deck", sub: "Work" },
  { icon: Dumbbell, title: "Gym", sub: "Health" },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-gold-soft/20 blur-3xl" />
      <div className="rounded-[2.6rem] border border-navy/80 bg-navy p-[0.42rem] shadow-[var(--shadow-phone)] transition-transform duration-700 lg:rotate-[-6deg] lg:hover:rotate-[-3deg]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-surface">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-navy" />
          <div className="flex items-center justify-between px-5 pt-2.5 text-[10px] font-medium text-navy">
            <span>9:41</span>
            <span className="tracking-tight opacity-70">••• ᯤ ▮</span>
          </div>

          <div className="space-y-3 px-4 pb-5 pt-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
              <div className="min-w-0">
                <p className="font-display text-[15px] font-semibold text-navy">
                  Good Morning, Raj 👋
                </p>
                <p className="text-[10px] text-muted-foreground">Here's your brief for today.</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <Avatar name="Raj" className="h-6 w-6 text-[9px]" index={0} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-alt p-2.5">
              <p className="mb-2 text-[10px] font-medium text-navy">Daily Brief</p>
              <div className="grid grid-cols-4 gap-1.5">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-surface px-1.5 py-2 text-center">
                    <s.icon className="mx-auto mb-1 h-3 w-3 text-gold" />
                    <p className="text-[11px] font-semibold leading-none text-navy">{s.value}</p>
                    <p className="mt-1 whitespace-pre-line text-[7.5px] leading-tight text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img
                src={focusImage}
                alt="Sunrise over mountains"
                width={1024}
                height={576}
                className="h-24 w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/35" />
              <div className="absolute inset-0 flex flex-col justify-end p-2.5">
                <p className="text-[7px] uppercase tracking-[0.18em] text-white/70">
                  Focus of the day
                </p>
                <p className="text-[11px] font-medium leading-tight text-white">
                  Focus on progress,
                  <br />
                  not perfection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border bg-surface p-2.5">
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[9px] font-medium text-navy">Today's Plan</p>
                  <span className="text-[7px] text-gold">View all</span>
                </div>
                <ul className="space-y-1.5">
                  {plan.map((p) => (
                    <li
                      key={p.title}
                      className="flex items-center gap-1.5 rounded-md bg-surface-alt px-1.5 py-1"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="min-w-0 flex-1 truncate text-[7.5px] text-muted-foreground">
                        <span className="text-navy">{p.time}</span> {p.title}
                      </span>
                      <ChevronRight className="h-2.5 w-2.5 shrink-0 text-muted-foreground" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface p-2.5">
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[9px] font-medium text-navy">Tasks</p>
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-gold text-[8px] text-navy">
                    +
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {tasks.map((t) => (
                    <li
                      key={t.title}
                      className="flex items-center gap-1.5 rounded-md bg-surface-alt px-1.5 py-1"
                    >
                      <t.icon className="h-2.5 w-2.5 shrink-0 text-navy/60" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[7.5px] text-navy">{t.title}</span>
                        <span className="block text-[6.5px] text-muted-foreground">{t.sub}</span>
                      </span>
                      <ChevronRight className="h-2.5 w-2.5 shrink-0 text-muted-foreground" />
                    </li>
                  ))}
                </ul>
                <p className="mt-1.5 text-[7px] text-muted-foreground">+ 2 more tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}