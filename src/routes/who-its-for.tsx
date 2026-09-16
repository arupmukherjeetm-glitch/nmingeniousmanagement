import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Repeat,
  Store,
  Users,
} from "lucide-react";

import { industries } from "@/lib/site-data";
import {
  CtaBand,
  Eyebrow,
  LogoWall,
  PageHero,
  Reveal,
} from "@/components/site/Sections";
import { OfflineExpansion } from "@/components/site/OfflineExpansion";
import { ReachFrequency } from "@/components/site/ReachFrequency";

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
   CORE PILLARS
========================================================= */

const pillars = [
  {
    icon: Store,
    title: "Reach you can count",
    body:
      "2,000+ modern trade and general trade outlets across 185+ cities and 31 states and UTs. We map the store universe, agree the covered list with you, and publish coverage against it every single week.",
  },
  {
    icon: Repeat,
    title: "Frequency you can hold",
    body:
      "Coverage without rhythm is a one-off. We fix visit frequency per store class, staff to it, cover absenteeism the same day and report adherence, so your shopper meets your brand again and again, not once.",
  },
  {
    icon: Users,
    title: "Shoppers you can measure",
    body:
      "Every interaction, demo, sample and conversion is captured at the store. You see how many shoppers were reached, how often, and what it did to offtake, not how many people signed an attendance sheet.",
  },
];

/* =========================================================
   ONLINE → OFFLINE
   NO 01 / 02 / 03 / 04
========================================================= */

const onlineToOffline = [
  {
    title: "Awareness is already yours",
    body:
      "You spent years building an audience online. Offline, that audience walks past your product because nobody is there to connect the brand they follow with the pack on the shelf.",
  },
  {
    title: "Retail is a different sport",
    body:
      "No retargeting, no reviews, no product page. Just three feet, a few seconds and a competitor beside you. We supply the human layer that does what your website used to do.",
  },
  {
    title: "Start small, prove, scale",
    body:
      "We run a pilot cluster of stores, measure sell-out per outlet honestly, kill what does not work, then scale city by city with the same team and the same reporting spine.",
  },
  {
    title: "Full back office included",
    body:
      "Payroll, statutory compliance, HR shared services and fractional HR leadership come with the field team, so you enter offline retail without building an offline org chart.",
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
          ORIGINAL HERO — H1 KEPT EXACTLY AS PROVIDED
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
          WHAT BRANDS NEED
      ===================================================== */}

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* SECTION HEADER */}

          <div className="max-w-3xl">
            <Eyebrow>What brands need</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              Reach, frequency and shoppers you can actually measure.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Physical retail becomes easier to manage when coverage,
              frequency and shopper interaction are treated as operating
              numbers — not assumptions.
            </p>
          </div>

          {/* PILLARS */}

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div key={pillar.title}>
                  <Reveal delay={index * 70}>
                    <article className="group brand-box h-full rounded-2xl p-7 lg:p-8">

                      <div
                        className="flex size-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: "var(--gradient-brand)",
                        }}
                      >
                        <Icon className="size-5" />
                      </div>

                      <h3 className="mt-6 font-display text-xl font-extrabold leading-tight text-foreground">
                        {pillar.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {pillar.body}
                      </p>

                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          REACH & FREQUENCY
          EXISTING COMPONENT
      ===================================================== */}

      <ReachFrequency />

      {/* =====================================================
          ONLINE → OFFLINE
          BLUE SECTION
          NO NUMBERING
      ===================================================== */}

      <section className="bg-brand-deep py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT CONTENT */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
                Online-first brands
              </p>

              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white lg:text-5xl">
                You won the internet. Offline is where the next hundred
                thousand shoppers are.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                D2C brands come to us when the online curve flattens and
                retail is the next route to growth. We give you the field
                organisation, the store access and the reporting you never
                had to build for ecommerce.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-coral px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Plan your offline entry
              </Link>
            </div>

            {/* RIGHT CONTENT */}

            <div className="grid gap-3 sm:grid-cols-2">
              {onlineToOffline.map((item, index) => (
                <div key={item.title}>
                  <Reveal delay={index * 60}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:bg-white/[0.06]">

                      <div className="mb-5 h-1 w-8 rounded-full bg-coral" />

                      <h3 className="font-display text-lg font-extrabold leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {item.body}
                      </p>

                    </article>
                  </Reveal>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CATEGORIES
          SAND SECTION
      ===================================================== */}

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* SECTION HEADER */}

          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>
              <Eyebrow>Categories we run</Eyebrow>

              <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
                Seven categories, one shelf discipline.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
              Different products need different shopper conversations. The
              underlying discipline of availability, visibility and execution
              remains consistent.
            </p>

          </div>

          {/* CATEGORY GRID */}

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry, index) => (
              <div key={industry.title}>
                <Reveal delay={index * 45}>
                  <article className="flex min-h-[185px] h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,45,90,0.08)]">

                    <div className="mt-auto">

                      <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">
                        {industry.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {industry.body}
                      </p>

                    </div>

                  </article>
                </Reveal>
              </div>
            ))}

            {/* ONLY THIS CARD IS CLICKABLE */}

            <div>
              <Reveal delay={industries.length * 45}>

                <Link
                  to="/services"
                  className="group flex min-h-[185px] h-full flex-col justify-between rounded-2xl p-7"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                >

                  <div>

                    <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      Explore further
                    </p>

                    <h3 className="mt-4 max-w-[230px] font-display text-xl font-extrabold leading-tight text-white">
                      See the services behind the execution.
                    </h3>

                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral transition-transform duration-300 group-hover:translate-x-1">
                    Explore services
                    <ArrowRight className="size-4" />
                  </span>

                </Link>

              </Reveal>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          OFFLINE EXPANSION
      ===================================================== */}

      <OfflineExpansion />

      {/* =====================================================
          LOGO WALL
      ===================================================== */}

      <LogoWall />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <CtaBand />
    </>
  );
}
