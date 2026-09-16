import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
import { CtaBand, Eyebrow, Reveal } from "@/components/site/Sections";

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
      <CtaBand />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-brand-pale lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <Eyebrow>Who it's for</Eyebrow>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-7xl">
            If your brand needs reach and frequency at the shelf,{" "}
            <em className="not-italic text-coral">this is built for you.</em>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Built for activation managers planning coverage, and for online-first
            brands stepping into offline retail: we quantify how many stores,
            how many shoppers and how often, then hold that number every week.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* INDUSTRIES                                                                 */
/* -------------------------------------------------------------------------- */

function IndustrySection() {
  return (
    <section className="bg-sand pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={industry.title}>
              <Reveal delay={index * 50}>
                <IndustryCard
                  number={String(index + 1).padStart(2, "0")}
                  title={industry.title}
                  body={industry.body}
                />
              </Reveal>
            </div>
          ))}

          <Reveal delay={industries.length * 50}>
            <div
              className="flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-7"
              style={{ background: "var(--gradient-brand)" }}
            >
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Planning
                </span>

                <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-white">
                  Reach & frequency, planned.
                </h3>
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-coral transition-transform duration-300 hover:translate-x-1"
              >
                See the full picture
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative flex min-h-[220px] h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between">
        <span className="font-display text-xs font-bold tracking-[0.18em] text-coral">
          {number}
        </span>

        <ArrowRight className="size-4 text-brand/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
      </div>

      <div className="mt-auto">
        <h2 className="font-display text-xl font-extrabold leading-tight text-foreground">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BRAND STAGES                                                               */
/* -------------------------------------------------------------------------- */

function BrandStageSection() {
  const stages = [
    {
      icon: PackageCheck,
      number: "01",
      title: "D2C brands going physical",
      body:
        "You already have demand online. Now you need a repeatable operating model that converts awareness into availability, trial and purchase across physical retail.",
    },
    {
      icon: Store,
      number: "02",
      title: "Brands expanding their footprint",
      body:
        "New cities, new channels or more stores require disciplined deployment. We build coverage plans around the stores and shoppers that matter.",
    },
    {
      icon: Radar,
      number: "03",
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

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Different growth stages.{" "}
              <span className="text-brand">One operating discipline.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you're entering offline retail or defending an established
              footprint, the operating questions are similar: where should we
              deploy, how often should we be present, and what happened in every
              store?
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.number}>
                  <Reveal delay={index * 70}>
                    <div className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] lg:p-8">
                      <div className="flex gap-6">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-pale text-brand">
                          <Icon className="size-5" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <span className="font-display text-xs font-bold tracking-[0.16em] text-coral">
                              {stage.number}
                            </span>

                            <h3 className="font-display text-xl font-extrabold text-foreground">
                              {stage.title}
                            </h3>
                          </div>

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

/* -------------------------------------------------------------------------- */
/* PROBLEMS                                                                   */
/* -------------------------------------------------------------------------- */

function ProblemSection() {
  const problems = [
    {
      icon: Store,
      title: "Availability",
      body: "Is the product actually present where the shopper expects to find it?",
    },
    {
      icon: Users,
      title: "Visibility",
      body: "Is your brand visible enough to compete for attention at the shelf?",
    },
    {
      icon: Target,
      title: "Conversion",
      body: "Is someone actively helping the shopper understand and choose the product?",
    },
    {
      icon: BarChart3,
      title: "Measurement",
      body: "Can you see what happened across stores instead of relying on anecdotes?",
    },
    {
      icon: CircleDollarSign,
      title: "Productivity",
      body: "Are field teams spending their time in the stores that matter most?",
    },
    {
      icon: Layers3,
      title: "Consistency",
      body: "Does the same standard of execution happen week after week?",
    },
  ];

  return (
    <section className="bg-brand-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>What we solve</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight lg:text-5xl">
            Offline growth gets difficult when execution becomes invisible.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/65">
            We turn the last three feet into an operating system — connecting
            people, stores, execution and reporting so teams can act on what is
            happening in the market.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="bg-brand-deep p-7 lg:p-8"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-coral">
                  <Icon className="size-5" />
                </div>

                <span className="mt-8 block font-display text-xs font-bold tracking-[0.16em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 font-display text-xl font-extrabold">
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

/* -------------------------------------------------------------------------- */
/* ENGAGEMENT                                                                 */
/* -------------------------------------------------------------------------- */

function EngagementSection() {
  const models = [
    {
      number: "01",
      title: "Launch",
      body:
        "Build the initial offline footprint, deploy the right people and establish store-level reporting from day one.",
    },
    {
      number: "02",
      title: "Scale",
      body:
        "Expand cities, stores and teams while maintaining the operating standards that made the first phase work.",
    },
    {
      number: "03",
      title: "Optimise",
      body:
        "Use field intelligence to improve deployment, productivity, visibility and shopper conversion.",
    },
    {
      number: "04",
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

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Start with the problem.{" "}
              <span className="text-coral">Build the system around it.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              You don't need to buy every service at once. We can start with a
              specific execution requirement and expand as your offline
              operation grows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {models.map((model, index) => (
              <div key={model.number}>
                <Reveal delay={index * 60}>
                  <div className="brand-box h-full p-7 lg:p-8">
                    <span className="font-display text-xs font-bold tracking-[0.18em] text-coral">
                      {model.number}
                    </span>

                    <h3 className="mt-6 font-display text-2xl font-extrabold text-foreground">
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

/* -------------------------------------------------------------------------- */
/* FIT                                                                        */
/* -------------------------------------------------------------------------- */

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

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              If the shelf matters to your growth,{" "}
              <span className="text-brand">let's make it measurable.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our model is designed around the practical realities of physical
              retail: people need to be present, stores need to be covered,
              execution needs to be consistent and leadership needs visibility.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Talk to NM Ingenious
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-coral/10 text-coral">
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
