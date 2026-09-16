import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  LineChart,
  Megaphone,
  MapPin,
  PackageCheck,
  Repeat2,
  Store,
  Target,
  Users,
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
   WHO THIS IS FOR
========================================================= */

const audiences = [
  {
    icon: Target,
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
   GROWTH MOMENTS
========================================================= */

const growthMoments = [
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
   OPERATING SYSTEM
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
          EXACT HERO FROM THE USER'S ORIGINAL CODE
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
          AUDIENCE
      ===================================================== */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>
                  Built around the people running growth
                </Eyebrow>

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

          {/* AUDIENCE CARDS */}

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <Reveal key={audience.title} delay={index * 80}>
                  <article className="group h-full rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(20,45,90,0.08)]">

                    {/* FEATURE ICON
                        Same simple icon treatment:
                        no gradient box
                        no circle
                        no extra container
                    */}

                    <div className="text-coral">
                      <Icon
                        strokeWidth={1.7}
                        className="size-9 transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-[-0.025em] text-foreground">
                      {audience.title}
                    </h3>

                    {/* BODY — DIRECTLY BELOW TITLE */}

                    <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">
                      {audience.body}
                    </p>

                    {/* SUPPORTING POINTS */}

                    <div className="mt-7 border-t border-border pt-6">
                      <div className="space-y-3">
                        {audience.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 text-sm font-medium text-foreground"
                          >
                            <Check
                              strokeWidth={2}
                              className="mt-0.5 size-4 shrink-0 text-coral"
                            />

                            <span>{point}</span>
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
          BLUE BRAND STATEMENT
      ===================================================== */}

      <section className="bg-brand-deep py-24 text-white lg:py-32">
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
              {growthMoments.map((moment, index) => {
                const Icon = moment.icon;

                return (
                  <Reveal key={moment.title} delay={index * 70}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-coral/40">

                      <div className="text-coral">
                        <Icon
                          strokeWidth={1.7}
                          className="size-8"
                        />
                      </div>

                      <h3 className="mt-6 font-display text-lg font-extrabold leading-tight text-white">
                        {moment.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {moment.body}
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
          OPERATING SYSTEM
      ===================================================== */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>
                What changes when you work with us
              </Eyebrow>

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

          <div className="mt-14 grid overflow-hidden rounded-2xl border border-border md:grid-cols-2 lg:grid-cols-4">

            {operatingModel.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 60}>
                  <article className="group h-full border-b border-border bg-white p-7 transition-colors duration-300 hover:bg-sand md:border-r md:last:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8">

                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-deep/5 text-brand-deep transition-colors duration-300 group-hover:bg-coral/10 group-hover:text-coral">
                      <Icon
                        strokeWidth={1.7}
                        className="size-5"
                      />
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
          WHERE WE FIT
      ===================================================== */}

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">

              <div>
                <Eyebrow>Where we fit</Eyebrow>

                <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-foreground lg:text-5xl">
                  Built for products that need a human moment at retail.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
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

                    <div className="h-1 w-8 rounded-full bg-coral transition-all duration-300 group-hover:w-12" />

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
          EXISTING GLOBAL CTA
      ===================================================== */}

      <CtaBand />
    </>
  );
}
