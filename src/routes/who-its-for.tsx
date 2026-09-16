import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Check,
  Globe2,
  LineChart,
  MapPin,
  Megaphone,
  PackageCheck,
  Repeat2,
  ShoppingBag,
  Store,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { industries } from "@/lib/site-data";
import {
  CtaBand,
  Eyebrow,
  PageHero,
  Reveal,
} from "@/components/site/Sections";

export const Route = createFileRoute("/who-its-for")({
  head: () => ({
    meta: [
      {
        title: "Who It's For | Reach & Frequency at the Shelf | NM Ingenious",
      },
      {
        name: "description",
        content:
          "Built for activation managers planning reach and frequency, and for online-first brands venturing into offline retail across modern trade and general trade in India.",
      },
      {
        property: "og:title",
        content: "Who It's For | Reach & Frequency at the Shelf",
      },
      {
        property: "og:description",
        content:
          "Coverage you can plan, frequency you can hold, and a route into offline retail for D2C brands.",
      },
    ],
  }),
  component: WhoItsFor,
});

/* =========================================================
   AUDIENCE CARDS
========================================================= */

const audiences = [
  {
    icon: Target,
    eyebrow: "01",
    title: "Activation Managers",
    body:
      "For teams that already know their targets but need a field organisation capable of delivering coverage, frequency and execution consistently.",
    points: [
      "Plan store coverage",
      "Control visit frequency",
      "Track field execution",
    ],
  },
  {
    icon: Globe2,
    eyebrow: "02",
    title: "Online-First Brands",
    body:
      "For D2C brands moving beyond digital acquisition and looking to build a structured presence across physical retail.",
    points: [
      "Enter offline without building an org",
      "Pilot before scaling",
      "Connect digital demand to retail",
    ],
  },
  {
    icon: Store,
    eyebrow: "03",
    title: "Retail-Focused Brands",
    body:
      "For established brands that need stronger in-store execution, better visibility and disciplined shopper engagement across their retail footprint.",
    points: [
      "Improve store execution",
      "Strengthen visibility",
      "Build shopper engagement",
    ],
  },
];

/* =========================================================
   BUSINESS STAGES
========================================================= */

const stages = [
  {
    icon: Megaphone,
    title: "You have built awareness",
    body:
      "Your brand already has recognition, demand or a loyal online audience. The next challenge is making that connection happen inside a physical store.",
  },
  {
    icon: PackageCheck,
    title: "Your product is ready for retail",
    body:
      "The product, packaging and proposition are ready. What is missing is the operational layer between getting listed and actually being noticed.",
  },
  {
    icon: LineChart,
    title: "You need measurable execution",
    body:
      "You do not want field activity to disappear into attendance reports. You need visibility into stores covered, visits completed and shopper interactions.",
  },
];

/* =========================================================
   OPERATING MODEL
========================================================= */

const operatingModel = [
  {
    icon: MapPin,
    title: "Store universe",
    body:
      "Define where the brand needs to be present and establish a clear, agreed store universe.",
  },
  {
    icon: Repeat2,
    title: "Visit rhythm",
    body:
      "Set the right frequency by store class and maintain the rhythm required to keep execution consistent.",
  },
  {
    icon: Users,
    title: "Field organisation",
    body:
      "Deploy trained people with clear responsibilities, supervision and operational support.",
  },
  {
    icon: LineChart,
    title: "Measurement",
    body:
      "Turn activity into structured reporting so teams can see what happened at the shelf.",
  },
];

/* =========================================================
   PAGE
========================================================= */

function WhoItsFor() {
  return (
    <>
      {/* =====================================================
          HERO
          ONLY THIS HERO IS TAKEN FROM THE USER'S ORIGINAL CODE
      ===================================================== */}

      <PageHero
        eyebrow="Who it's for"
        title={
          <>
            If your brand needs reach and frequency at the shelf,{" "}
            <em className="not-italic text-coral">
              this is built for you.
            </em>
          </>
        }
        intro="For activation managers who plan coverage in numbers, and for online-first brands taking their first serious step into offline retail."
        accent="Modern trade · General trade · D2C to offline"
      />

      {/* =====================================================
          INTRO / AUDIENCE
          NEW DESIGN
      ===================================================== */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

              <div>
                <Eyebrow>Built around the people running growth</Eyebrow>

                <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground lg:text-5xl">
                  Different challenges. One field execution system.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
                NM Ingenious is designed for brands where physical retail
                matters — whether you are scaling an existing retail
                operation or making the move from digital into stores for
                the first time.
              </p>

            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <Reveal key={audience.title} delay={index * 80}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(20,45,90,0.09)]">

                    <div className="absolute right-7 top-7 font-display text-xs font-bold tracking-[0.2em] text-muted-foreground/40">
                      {audience.eyebrow}
                    </div>

                    <div
                      className="flex size-12 items-center justify-center rounded-xl text-white"
                      style={{
                        background: "var(--gradient-brand)",
                      }}
                    >
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-7 font-display text-2xl font-extrabold tracking-[-0.025em] text-foreground">
                      {audience.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {audience.body}
                    </p>

                    <div className="mt-7 border-t border-border pt-6">
                      <div className="space-y-3">
                        {audience.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-3 text-sm font-medium text-foreground"
                          >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                              <Check className="size-3" />
                            </span>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          BLUE STATEMENT SECTION
          NEW DESIGN
      ===================================================== */}

      <section className="overflow-hidden bg-brand-deep py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <Reveal>
              <div>

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
                  When the shelf becomes the next growth channel
                </p>

                <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white lg:text-5xl">
                  Digital creates demand.
                  <br />
                  Retail converts presence into habit.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                  The move into offline is not simply about getting more
                  stores. It is about building a repeatable system for
                  presence, visibility and shopper interaction.
                </p>

              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <Reveal key={stage.title} delay={index * 70}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-coral/40">

                      <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-coral">
                        <Icon className="size-5" />
                      </div>

                      <h3 className="mt-6 font-display text-lg font-extrabold leading-tight text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {stage.body}
                      </p>

                    </article>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          HOW THE MODEL WORKS
          NEW DESIGN
      ===================================================== */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>What changes when you work with us</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-foreground lg:text-5xl">
                You get an operating system for the shelf.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Instead of managing disconnected field activities, your
                retail execution is organised around four connected
                operating layers.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">

            {operatingModel.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 60}>
                  <article className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-sand lg:p-8">

                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-deep text-white">
                        <Icon className="size-5" />
                      </div>

                      <span className="font-display text-xs font-bold text-muted-foreground/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-lg font-extrabold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>

                  </article>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CATEGORY / BRAND FIT
          NEW DESIGN
      ===================================================== */}

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div className="max-w-3xl">
                <Eyebrow>Where we fit</Eyebrow>

                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-foreground lg:text-5xl">
                  Built for products that need a human moment at retail.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                From everyday consumer products to emerging D2C brands,
                our field model is designed around the realities of the
                physical shelf.
              </p>

            </div>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 45}>
                <article className="group min-h-[180px] rounded-2xl border border-border bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,45,90,0.07)]">

                  <div className="flex h-full flex-col justify-between">

                    <div className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/5 text-brand-deep transition-colors duration-300 group-hover:bg-coral/10 group-hover:text-coral">
                      <ShoppingBag className="size-4" />
                    </div>

                    <div className="mt-10">

                      <h3 className="font-display text-lg font-extrabold text-foreground">
                        {industry.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {industry.body}
                      </p>

                    </div>

                  </div>

                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          EXISTING FINAL CTA
      ===================================================== */}

      <CtaBand />
    </>
  );
}
