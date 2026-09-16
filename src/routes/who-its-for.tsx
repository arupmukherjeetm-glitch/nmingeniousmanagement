import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Layers3,
  PackageCheck,
  Radar,
  Store,
  Target,
  Users,
} from "lucide-react";

import { industries } from "@/lib/site-data";
import { Eyebrow, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/who-its-for/")({
  head: () => ({
    meta: [
      {
        title: "Who It's For | NM Ingenious",
      },
      {
        name: "description",
        content:
          "NM Ingenious helps FMCG, beauty, health, food, D2C, premium and challenger brands build reach, frequency and sell-out at the retail shelf.",
      },
      {
        property: "og:title",
        content: "Who It's For | NM Ingenious",
      },
      {
        property: "og:description",
        content:
          "If your brand needs reach and frequency at the shelf, NM Ingenious is built for you.",
      },
    ],
  }),
  component: WhoItsForPage,
});

function WhoItsForPage() {
  return (
    <>
      <HeroSection />
      <IndustrySection />
      <BrandStageSection />
      <ProblemSection />
      <EngagementSection />
      <FitSection />
      <FinalCtaSection />
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <div className="max-w-3xl">
            <Eyebrow>Who it's for</Eyebrow>

            <h1 className="mt-5 font-display text-[2.65rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.6rem]">
              If your brand needs{" "}
              <span className="text-coral">
                reach and frequency
              </span>{" "}
              at the shelf,{" "}
              <span className="text-coral">
                this is built for you.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Built for brands that need physical retail to work harder —
              from D2C businesses entering offline to established brands
              expanding stores, cities and shopper coverage.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Talk to NM Ingenious
              </Link>

              <span className="text-sm font-medium text-muted-foreground">
                Retail execution. Made measurable.
              </span>
            </div>
          </div>

          {/* RIGHT — PURPOSEFUL HERO VISUAL */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-sand p-6 sm:p-8 lg:p-10">
              {/* subtle background structure */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border-[28px] border-coral/10" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full border-[32px] border-brand/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Retail growth
                  </span>

                  <span className="size-2.5 rounded-full bg-coral" />
                </div>

                <div className="mt-10">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    The last three feet
                  </p>

                  <h2 className="mt-3 max-w-md font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl">
                    Turn{" "}
                    <span className="text-coral">
                      presence
                    </span>{" "}
                    into{" "}
                    <span className="text-coral">
                      purchase.
                    </span>
                  </h2>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  <HeroMetric
                    value="STORES"
                    label="Coverage"
                  />

                  <HeroMetric
                    value="PEOPLE"
                    label="Execution"
                  />

                  <HeroMetric
                    value="DATA"
                    label="Visibility"
                  />
                </div>

                <div className="mt-4 rounded-2xl bg-white p-5 shadow-[0_15px_45px_rgba(20,45,90,0.08)]">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Operating focus
                      </p>

                      <p className="mt-2 font-display text-lg font-extrabold text-foreground">
                        Reach × Frequency
                      </p>
                    </div>

                    <div className="h-12 w-28">
                      <div className="flex h-full items-end gap-1.5">
                        <span className="h-[35%] flex-1 rounded-t bg-coral/30" />
                        <span className="h-[50%] flex-1 rounded-t bg-coral/50" />
                        <span className="h-[68%] flex-1 rounded-t bg-coral/70" />
                        <span className="h-[82%] flex-1 rounded-t bg-coral" />
                        <span className="h-full flex-1 rounded-t bg-brand" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <HeroPill text="Store-level visibility" />
                  <HeroPill text="Field productivity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <p className="font-display text-[11px] font-extrabold tracking-[0.08em] text-foreground">
        {value}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function HeroPill({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-brand px-4 py-3">
      <p className="text-xs font-semibold text-white">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   INDUSTRIES
========================================================= */

function IndustrySection() {
  return (
    <section className="bg-sand py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>Built for your category</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-foreground lg:text-5xl">
            Different categories.{" "}
            <span className="text-coral">
              The same retail reality.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The product may change, but the operating challenge remains:
            getting the right people into the right stores often enough to
            create visibility, trial and sell-out.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={industry.title}>
              <Reveal delay={index * 50}>
                <IndustryCard
                  title={industry.title}
                  body={industry.body}
                />
              </Reveal>
            </div>
          ))}
        </div>

        {/* REAL CTA — no fake arrow */}
        <div className="mt-4 overflow-hidden rounded-2xl bg-brand-deep">
          <div className="grid items-center gap-8 px-7 py-8 sm:px-9 lg:grid-cols-[1fr_auto] lg:px-10">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-coral">
                Planning
              </p>

              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white lg:text-3xl">
                Reach and frequency{" "}
                <span className="text-coral">
                  planned properly.
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                Build a retail operating model around store coverage,
                shopper frequency and measurable execution.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-coral px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss your retail plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex min-h-[205px] h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,45,90,0.08)]">
      <div className="mt-auto">
        <h3 className="max-w-[210px] font-display text-xl font-extrabold leading-tight text-foreground">
          {title}
        </h3>

        <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   BRAND STAGES
========================================================= */

function BrandStageSection() {
  const stages = [
    {
      icon: PackageCheck,
      title: "D2C brands going physical",
      body:
        "You already have demand online. Now you need a repeatable operating model that converts awareness into availability, trial and purchase across physical retail.",
    },
    {
      icon: Store,
      title: "Brands expanding their footprint",
      body:
        "New cities, new channels or more stores require disciplined deployment. We build coverage plans around the stores and shoppers that matter.",
    },
    {
      icon: Radar,
      title: "Established brands under pressure",
      body:
        "When competition intensifies at the shelf, execution becomes measurable. We bring visibility, promoter productivity and store-level intelligence into one system.",
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Where we fit</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-foreground lg:text-5xl">
              Different growth stages.{" "}
              <span className="text-coral">
                One operating discipline.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you're entering offline retail or defending an
              established footprint, the operating questions are similar:
              where should we deploy, how often should we be present, and what
              happened in every store?
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.title}>
                  <Reveal delay={index * 70}>
                    <div className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-coral/30 hover:shadow-[0_18px_45px_rgba(20,45,90,0.08)] lg:p-8">
                      <div className="flex gap-6">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-coral-soft text-coral">
                          <Icon className="size-5" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-display text-xl font-extrabold text-foreground">
                            {stage.title}
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {stage.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEMS
========================================================= */

function ProblemSection() {
  const problems = [
    {
      icon: Store,
      title: "Availability",
      body:
        "Is the product actually present where the shopper expects to find it?",
    },
    {
      icon: Users,
      title: "Visibility",
      body:
        "Is your brand visible enough to compete for attention at the shelf?",
    },
    {
      icon: Target,
      title: "Conversion",
      body:
        "Is someone actively helping the shopper understand and choose the product?",
    },
    {
      icon: BarChart3,
      title: "Measurement",
      body:
        "Can you see what happened across stores instead of relying on anecdotes?",
    },
    {
      icon: CircleDollarSign,
      title: "Productivity",
      body:
        "Are field teams spending their time in the stores that matter most?",
    },
    {
      icon: Layers3,
      title: "Consistency",
      body:
        "Does the same standard of execution happen week after week?",
    },
  ];

  return (
    <section className="bg-brand-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>What we solve</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] lg:text-5xl">
            Offline growth gets difficult when execution becomes{" "}
            <span className="text-coral">
              invisible.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
            We turn the last three feet into an operating system — connecting
            people, stores, execution and reporting so teams can act on what is
            happening in the market.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="bg-brand-deep p-7 lg:p-8"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-8 font-display text-xl font-extrabold">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {problem.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ENGAGEMENT
========================================================= */

function EngagementSection() {
  const models = [
    {
      title: "Launch",
      body:
        "Build the initial offline footprint, deploy the right people and establish store-level reporting from day one.",
    },
    {
      title: "Scale",
      body:
        "Expand cities, stores and teams while maintaining the operating standards that made the first phase work.",
    },
    {
      title: "Optimise",
      body:
        "Use field intelligence to improve deployment, productivity, visibility and shopper conversion.",
    },
    {
      title: "Integrate",
      body:
        "Connect promoters, merchandising, activations, audits, workforce and reporting into one operating system.",
    },
  ];

  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <Eyebrow>How we engage</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-foreground lg:text-5xl">
              Start with the problem.{" "}
              <span className="text-coral">
                Build the system around it.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              You don't need to buy every service at once. We can start with a
              specific execution requirement and expand as your offline
              operation grows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {models.map((model, index) => (
              <div key={model.title}>
                <Reveal delay={index * 60}>
                  <div className="brand-box h-full p-7 lg:p-8">
                    <h3 className="font-display text-2xl font-extrabold text-foreground">
                      {model.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {model.body}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FIT
========================================================= */

function FitSection() {
  const fitPoints = [
    "You sell through general trade, modern trade, specialty retail or a mix.",
    "You need physical availability and visibility to translate into sell-out.",
    "You need trained people representing the brand at the point of purchase.",
    "You want store-level execution to be measurable rather than assumed.",
    "You are expanding offline and need a repeatable field operating model.",
    "You need one partner to coordinate people, execution and reporting.",
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Eyebrow>Is this you?</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-foreground lg:text-5xl">
              If the shelf matters to your growth,{" "}
              <span className="text-coral">
                let's make it measurable.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our model is designed around the practical realities of physical
              retail: people need to be present, stores need to be covered,
              execution needs to be consistent and leadership needs visibility.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Talk to NM Ingenious
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-coral-soft text-coral">
                <CheckCircle2 className="size-5" />
              </div>

              <h3 className="font-display text-lg font-extrabold text-foreground">
                Built for brands that need field execution
              </h3>
            </div>

            <div className="divide-y divide-border">
              {fitPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 py-5 first:pt-6 last:pb-2"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-coral" />

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCtaSection() {
  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-deep">
        <div className="relative px-7 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border-[45px] border-coral/10" />

          <div className="relative max-w-3xl">
            <Eyebrow>Ready to build the footprint?</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-white lg:text-5xl">
              Your brand deserves more than{" "}
              <span className="text-coral">
                presence.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
              Let's build a retail operating model that gives your teams the
              people, coverage and visibility they need to execute consistently.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-coral px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
