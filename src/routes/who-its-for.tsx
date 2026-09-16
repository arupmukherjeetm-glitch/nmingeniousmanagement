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
   ONLY HERO H1 USES MULTICOLOR
========================================================= */

function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT */}
          <div className="max-w-4xl">
            <Eyebrow>Who it's for</Eyebrow>

            <h1 className="mt-5 max-w-4xl font-display text-[2.8rem] font-extrabold leading-[1.01] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.65rem]">
              If your brand needs{" "}
              <span className="text-coral">
                reach and frequency
              </span>{" "}
              at the shelf,{" "}
              <span className="text-brand">
                this is built for you.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Built for brands that need physical retail to work harder —
              from D2C businesses entering offline to established brands
              expanding stores, cities and shopper coverage.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Talk to NM Ingenious
              </Link>

              <span className="text-sm text-muted-foreground">
                Retail execution, made measurable.
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:block">
            <div className="border-l-2 border-coral pl-8">
              <p className="font-display text-4xl font-extrabold leading-tight tracking-[-0.035em] text-foreground">
                The last three feet{" "}
                <span className="text-foreground">
                  matter.
                </span>
              </p>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                The moment where your brand meets the store, the shopper and
                the purchase decision.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-4">
                <MiniHeroStat
                  value="Stores"
                  label="Coverage"
                />

                <MiniHeroStat
                  value="People"
                  label="Execution"
                />

                <MiniHeroStat
                  value="Data"
                  label="Visibility"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniHeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="font-display text-sm font-extrabold text-foreground">
        {value}
      </p>

      <div className="mt-1 h-0.5 w-6 bg-coral" />

      <p className="mt-2 text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   INDUSTRIES
   ALL HEADINGS BLACK
========================================================= */

function IndustrySection() {
  return (
    <section className="bg-sand py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <Eyebrow>Built for your category</Eyebrow>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              Different categories. The same retail reality.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Whether you're selling food, beauty, health or a premium
            proposition, physical retail still comes down to availability,
            visibility, people and consistent execution.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={industry.title}>
              <Reveal delay={index * 40}>
                <IndustryCard
                  title={industry.title}
                  body={industry.body}
                />
              </Reveal>
            </div>
          ))}
        </div>

        {/* REAL CTA */}
        <div className="mt-3">
          <Reveal delay={200}>
            <div className="overflow-hidden rounded-2xl bg-brand-deep">
              <div className="grid items-center gap-6 px-7 py-7 sm:px-9 lg:grid-cols-[1fr_auto] lg:px-10 lg:py-8">
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-coral">
                    Planning
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white lg:text-3xl">
                    Reach and frequency planned properly.
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                    Build coverage around the stores, shoppers and markets
                    that matter most.
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
          </Reveal>
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
    <div className="flex min-h-[175px] h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(20,45,90,0.08)]">
      <div className="mt-auto">
        <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">
          {title}
        </h3>

        <p className="mt-2.5 max-w-[250px] text-sm leading-relaxed text-muted-foreground">
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
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <Eyebrow>Where we fit</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              Different growth stages. One operating discipline.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you're entering offline retail or defending an
              established footprint, the operating questions remain similar:
              where should we deploy, how often should we be present and what
              happened in every store?
            </p>
          </div>

          <div className="space-y-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.title}>
                  <Reveal delay={index * 60}>
                    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-coral/30 hover:shadow-[0_18px_45px_rgba(20,45,90,0.08)] lg:p-7">
                      <div className="flex gap-5">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-coral-soft text-coral">
                          <Icon className="size-5" />
                        </div>

                        <div>
                          <h3 className="font-display text-xl font-extrabold text-foreground">
                            {stage.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
   BLUE CONTAINER — KEEP BLUE
   HEADINGS INSIDE IT STAY WHITE
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
    <section className="bg-brand-deep py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>What we solve</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white lg:text-5xl">
            Offline growth gets difficult when execution becomes invisible.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
            We turn the last three feet into an operating system — connecting
            people, stores, execution and reporting so teams can act on what is
            happening in the market.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
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

                <h3 className="mt-7 font-display text-xl font-extrabold text-white">
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
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <Eyebrow>How we engage</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              Start with the problem. Build the system around it.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              You don't need to buy every service at once. Start with the
              execution requirement that matters now and expand as your
              operation grows.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {models.map((model, index) => (
              <div key={model.title}>
                <Reveal delay={index * 50}>
                  <div className="brand-box h-full p-7">
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
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Eyebrow>Is this you?</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              If the shelf matters to your growth, let's make it measurable.
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
                  className="flex gap-4 py-4 first:pt-6 last:pb-2"
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
   BLUE CONTAINER — KEEP BLUE
========================================================= */

function FinalCtaSection() {
  return (
    <section className="px-5 pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-deep">
        <div className="px-7 py-12 sm:px-10 lg:px-16 lg:py-14">
          <div className="max-w-3xl">
            <Eyebrow>Ready to build the footprint?</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white lg:text-5xl">
              Your brand deserves more than presence.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
              Let's build a retail operating model that gives your teams the
              people, coverage and visibility they need to execute consistently.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-coral px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
