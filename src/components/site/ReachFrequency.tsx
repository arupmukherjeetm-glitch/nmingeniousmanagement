import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Sections";
import { Info } from "lucide-react";

const metrics = [
  {
    value: 2000,
    suffix: "+",
    label: "Outlets under active coverage",
    note: "Modern trade and general trade outlets on live programmes across client brands.",
  },
  {
    value: 185,
    suffix: "+",
    label: "Cities covered",
    note: "Metro, tier 1 and tier 2 clusters with supervisor presence.",
  },
  {
    value: 4,
    suffix: "×/month",
    label: "Standard visit frequency",
    note: "Baseline rhythm for an A-class outlet. B and C classes run 2× and 1× per month.",
  },
  {
    value: 96,
    suffix: "%",
    label: "Visit adherence",
    note: "Planned visits completed and geo-verified, trailing 12-month average across programmes.",
  },
];

const grid = [
  { cls: "A class", share: "20% of outlets", freq: "4 visits / month", reach: "~60% of category sell-out" },
  { cls: "B class", share: "35% of outlets", freq: "2 visits / month", reach: "~28% of category sell-out" },
  { cls: "C class", share: "45% of outlets", freq: "1 visit / month", reach: "~12% of category sell-out" },
];

/**
 * Reach & frequency module aimed at the activation manager: hard planning
 * numbers, a coverage grid and honest disclaimers about how they are derived.
 */
export function ReachFrequency() {
  return (
    <section className="bg-brand-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Reach & frequency
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight lg:text-5xl">
              Plan your coverage in numbers, not adjectives.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/65 lg:col-span-5">
            These are the planning inputs an activation manager needs before signing a deployment:
            how many outlets, how often, how many shoppers, and how reliably the visit actually
            happens.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <article className="h-full rounded-xl border border-white/12 bg-white/[0.04] p-8">
                <p className="font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-coral">
                  {m.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{m.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-white/12">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.06] font-display text-xs uppercase tracking-[0.16em] text-white/60">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold">Store class</th>
                <th scope="col" className="px-6 py-4 font-bold">Share of universe</th>
                <th scope="col" className="px-6 py-4 font-bold">Frequency</th>
                <th scope="col" className="px-6 py-4 font-bold">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {grid.map((g) => (
                <tr key={g.cls} className="border-t border-white/10">
                  <td className="px-6 py-4 font-display font-bold text-white">{g.cls}</td>
                  <td className="px-6 py-4 text-white/70">{g.share}</td>
                  <td className="px-6 py-4 text-white/70">{g.freq}</td>
                  <td className="px-6 py-4 text-white/70">{g.reach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex gap-4 rounded-xl border border-white/12 bg-white/[0.03] p-6">
          <Info className="mt-0.5 size-4 shrink-0 text-coral" />
          <div className="space-y-2 text-xs leading-relaxed text-white/55">
            <p>
              <strong className="font-semibold text-white/75">How to read these numbers.</strong>{" "}
              Outlet, city and adherence figures are aggregates across live and recently concluded
              programmes, not a guarantee for any single brand. Store-class shares and contribution
              bands are planning benchmarks drawn from FMCG and beauty categories and will shift by
              category, season and geography.
            </p>
            <p>
              Shopper reach depends on store footfall, category shelf position and campaign window.
              Committed reach and frequency for your brand are fixed only after the store universe
              is mapped and agreed in writing during the audit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
