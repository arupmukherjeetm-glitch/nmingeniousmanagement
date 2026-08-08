import { ArrowRight, Globe, PackageCheck, Store, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Sections";

const rails = [
  {
    icon: Globe,
    title: "Start with the demand you already have",
    body: "We read your ecommerce and quick-commerce data first — which pincodes buy, which SKUs repeat, which packs move. That map decides which cities and store clusters you enter, so offline starts where your shopper already exists.",
  },
  {
    icon: Store,
    title: "Borrow our field organisation",
    body: "You do not hire a single field employee. Promoters, merchandizers, supervisors, payroll and statutory compliance sit on our books, deployed under your brand standard from day one.",
  },
  {
    icon: PackageCheck,
    title: "Make the shelf behave like a product page",
    body: "Facings, planogram compliance, price and offer visibility, stock availability and a trained human at the shelf together do the job your product page, reviews and retargeting did online.",
  },
  {
    icon: TrendingUp,
    title: "Prove per store, then scale",
    body: "A pilot cluster runs for 8 to 12 weeks with sell-out measured per outlet per week. Stores that do not pay for themselves are dropped, the winning profile is cloned city by city.",
  },
];

const ladder = [
  { phase: "Phase 01", weeks: "Weeks 1–3", label: "Cluster selection & store universe mapping" },
  { phase: "Phase 02", weeks: "Weeks 4–12", label: "Pilot deployment with weekly sell-out tracking" },
  { phase: "Phase 03", weeks: "Quarter 2", label: "Clone the winning store profile across cities" },
  { phase: "Phase 04", weeks: "Ongoing", label: "Steady-state coverage, frequency and reporting" },
];

/**
 * Offline Expansion: how an online-first brand uses our field model to grow
 * in physical stores without building an offline organisation.
 */
export function OfflineExpansion() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Offline expansion
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Online-first brands don't need a retail team. They need a retail engine.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-5">
            Your growth online was built on data, iteration and attribution. We run offline the same
            way — a rented field organisation, a measured pilot and a per-store P&L before you commit
            to scale.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {rails.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <article className="brand-box h-full p-8">
                <span
                  className="inline-flex size-12 items-center justify-center rounded-lg text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-extrabold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-4">
          {ladder.map((l) => (
            <div key={l.phase} className="brand-box p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-coral">
                {l.phase}
              </p>
              <p className="mt-3 font-display text-base font-extrabold text-foreground">
                {l.weeks}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/request-an-audit"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-display text-sm font-bold text-primary-foreground"
          >
            Plan my offline entry <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
