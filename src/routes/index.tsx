import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  heroVideoUrl,
  industries,
  problemSignals,
  reports,
  sellModel,
  services,
  shelfModel,
  stats,
  weeklyQuestions,
} from "@/lib/site-data";
import { StatBoard } from "@/components/site/Counter";
import { DikhtaBikta } from "@/components/site/DikhtaBikta";
import { ShelfTestimonials } from "@/components/site/ShelfTestimonials";
import { CorporateTestimonials } from "@/components/site/CorporateTestimonials";
import { Gallery } from "@/components/site/Gallery";
import { OfflineExpansion } from "@/components/site/OfflineExpansion";
import { ReachFrequency } from "@/components/site/ReachFrequency";
import { CtaBand, Eyebrow, LogoWall, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NM Ingenious | Sell-Out Acceleration & Retail Execution in India" },
      {
        name: "description",
        content:
          "Trained promoters, merchandising, BTL activations, payroll and fractional HR. NM Ingenious wins the last three feet for FMCG, beauty and D2C brands across 31 states.",
      },
      {
        property: "og:title",
        content: "NM Ingenious | Sell-Out Acceleration & Retail Execution in India",
      },
      {
        property: "og:description",
        content:
          "We turn shelf presence into sell-out: 2,150+ trained personnel, 2,000+ MT & GT outlets, 31 states and UTs.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TickerBar />
      <PanIndiaReachSection />
      <LadderSection />
      <StatsSection />
      <ProblemSection />
      <DikhtaBikta />
      <SignalGrid />
      <ShelfSellSection />
      <ServicesSection />
      <ExecutionVideoSection />
      <ReportsSection />
      <WhoItsForSection />
      <ReachFrequency />
      <OfflineExpansion />
      <Gallery />
      <LogoWall />
      <ShelfTestimonials />
      <CorporateTestimonials />
      <WeeklySection />
      <CtaBand />
    </>
  );
}

 /* =========================================================
   HERO — FULL BLEED CINEMATIC COVER
========================================================= */

function Hero() {
  return (
    <section className="relative isolate min-h-[610px] overflow-hidden bg-brand-deep text-white sm:min-h-[650px] lg:min-h-[680px]">

      {/* =====================================================
          FULL-BLEED VIDEO
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <video
          src={heroVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_38%]
            scale-[1.04]
            sm:object-[center_35%]
            lg:object-[center_32%]
          "
        />

        {/* ===================================================
            CINEMATIC COLOR GRADING

            The video stays visible.
            The left side becomes darker naturally so the
            white/red typography remains highly readable.
        =================================================== */}

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(5, 30, 70, 0.96) 0%,
                rgba(5, 30, 70, 0.88) 25%,
                rgba(5, 30, 70, 0.58) 45%,
                rgba(5, 30, 70, 0.18) 68%,
                rgba(5, 30, 70, 0.08) 100%
              )
            `,
          }}
        />

        {/* Top cinematic fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,30,70,0.28), transparent)",
          }}
        />

        {/* Bottom cinematic fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(5,30,70,0.58), transparent)",
          }}
        />

        {/* Subtle overall film treatment */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand-deep/[0.08]"
        />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[610px] max-w-[1500px] items-center px-5 sm:min-h-[650px] sm:px-8 lg:min-h-[680px] lg:px-12 xl:px-16">

        <div className="w-full max-w-[620px] py-20 lg:py-24">

          {/* Small brand line */}

          <div className="mb-7 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-coral" />

            <span className="h-px w-16 bg-white/30" />
          </div>


          {/* =================================================
              HEADLINE
          ================================================= */}

          <h1
            className="
              max-w-[650px]
              font-display
              text-[48px]
              font-black
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              sm:text-[62px]
              md:text-[70px]
              lg:text-[72px]
              xl:text-[82px]
            "
          >
            <span className="block">
              You built the
            </span>

            <span className="block">
              product.
            </span>

            <span className="mt-3 block text-coral">
              We get it to the
            </span>

            <span className="block text-coral">
              people.
            </span>
          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-7
              max-w-[520px]
              text-[14px]
              leading-6
              text-white/75
              sm:text-[15px]
              sm:leading-7
            "
          >
            NM Ingenious turns shelf presence into sell-out through
            trained promoters, disciplined retail execution and
            real-time store intelligence.
          </p>


          {/* =================================================
              CTA
          ================================================= */}

          <div className="mt-9 flex flex-wrap items-center gap-6">

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-coral
                px-7
                py-4
                font-display
                text-xs
                font-bold
                text-white
                shadow-[0_16px_40px_rgba(239,68,68,0.30)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#f13a3a]
                hover:shadow-[0_20px_45px_rgba(239,68,68,0.40)]
              "
            >
              Request an Audit

              <ArrowRight
                className="
                  size-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>


            <Link
              to="/services"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-display
                text-xs
                font-bold
                text-white
                transition-colors
                duration-300
                hover:text-coral
              "
            >
              Explore services

              <ArrowRight
                className="
                  size-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM BRAND STRIP
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-[4px]
          bg-coral
        "
      />

    </section>
  );
}

const tickerItems = [
  "Sell-Out Acceleration",
  "The Last Three Feet",
  "18+ Years of Retail Execution",
  "2,150+ Trained Personnel",
  "2,000+ MT & GT Outlets",
  "31 States & UTs",
];

function TickerBar() {
  const row = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-border bg-brand-deep py-4">
      <div className="marquee-track items-center gap-8">
        {row.map((t, i) => (
          <span
            key={t + i}
            className="flex shrink-0 items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.18em] text-white/80"
          >
            {t}
            <span className="text-coral" aria-hidden>
             ❋
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
{/* ========================================================
    PAN-INDIA REACH
======================================================== */}
function PanIndiaReachSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-20 lg:py-28">
      {/* Decorative network lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-brand/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5rem] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-brand/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[3rem] top-1/2 h-[14rem] w-[14rem] -translate-y-1/2 rounded-full border border-coral/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* ==================================================
                LEFT — SCALE
            ================================================== */}
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-coral">
                Pan-India Reach
              </p>

              <div className="flex items-end gap-4">
                <span className="font-display text-[7rem] font-extrabold leading-[0.8] tracking-[-0.07em] text-brand sm:text-[9rem] lg:text-[10rem]">
                  31
                </span>

                <div className="pb-2">
                  <span className="block font-display text-3xl font-extrabold leading-none text-foreground sm:text-4xl">
                    States
                  </span>

                  <span className="mt-1 block font-display text-3xl font-extrabold leading-none text-coral sm:text-4xl">
                    &amp; UTs
                  </span>
                </div>
              </div>

              {/* Horizontal line removed */}

              <p className="mt-7 max-w-md text-lg leading-8 text-muted-foreground">
                One network. 31 states. Every aisle that matters.
              </p>
            </div>

            {/* ==================================================
                RIGHT — NETWORK MESSAGE
            ================================================== */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white p-7 shadow-[0_20px_60px_rgba(20,45,90,0.06)] sm:p-10 lg:p-12">

                {/* Network visual */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-70"
                >
                  <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-coral" />
                  <div className="absolute right-24 top-24 h-2 w-2 rounded-full bg-brand" />
                  <div className="absolute right-16 top-40 h-1.5 w-1.5 rounded-full bg-brand/50" />
                  <div className="absolute right-40 top-16 h-1.5 w-1.5 rounded-full bg-coral/60" />
                  <div className="absolute bottom-16 right-20 h-2 w-2 rounded-full bg-brand" />
                  <div className="absolute bottom-28 right-36 h-1.5 w-1.5 rounded-full bg-coral" />

                  <div className="absolute right-12 top-11 h-px w-24 rotate-[32deg] bg-brand/10" />
                  <div className="absolute right-24 top-25 h-px w-20 rotate-[120deg] bg-brand/10" />
                  <div className="absolute bottom-20 right-20 h-px w-28 rotate-[-35deg] bg-brand/10" />
                </div>

                <div className="relative max-w-2xl">
                  <p className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
                    From Mumbai to the{" "}
                    <span className="text-brand">
                      smallest tier-2 store shelf,
                    </span>{" "}
                    the same discipline, the same reporting, the same
                    accountability.
                  </p>

                  <div className="mt-10 grid grid-cols-3 border-t border-border pt-6">
                    <div>
                      <p className="font-display text-xl font-extrabold text-brand">
                        Pan-India
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Coverage
                      </p>
                    </div>

                    <div className="border-l border-border pl-5">
                      <p className="font-display text-xl font-extrabold text-brand">
                        One
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Standard
                      </p>
                    </div>

                    <div className="border-l border-border pl-5">
                      <p className="font-display text-xl font-extrabold text-coral">
                        Every
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Shelf
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "One network. Everywhere." marker removed */}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
const ladder = ["Listed", "Visible", "Considered", "Explained", "Tried", "Chosen", "Sold"];
function LadderSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-stretch gap-3">
            {ladder.map((step, i) => {
              const last = i === ladder.length - 1;
              return (
                <div
                  key={step}
                  className="group relative flex-1 basis-[calc(50%-0.5rem)] overflow-hidden rounded-lg border border-border p-5 transition-all duration-500 hover:-translate-y-1.5 sm:basis-[calc(25%-0.75rem)] lg:basis-0"
                  style={
                    last
                      ? { background: "var(--gradient-brand)", borderColor: "transparent" }
                      : undefined
                  }
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "var(--coral)" }}
                  />
                  <span
                    className={`block text-xs font-bold ${last ? "text-white/50" : "text-muted-foreground"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-3 block font-display text-lg font-extrabold ${last ? "text-white" : "text-foreground"}`}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
        <p className="mt-10 font-display text-2xl font-bold leading-snug text-foreground lg:text-3xl">
          Most brands stop at visibility.{" "}
          <span className="text-coral">We take it all the way to sold.</span>
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <StatBoard items={stats} />
        </Reveal>
        <p className="mt-8 text-center font-display text-lg font-bold text-foreground lg:text-xl">
          Stop buying manpower. <span className="text-coral">Start buying movement.</span>
        </p>
      </div>
    </section>
  );
}
const storeRealities = [
  "A shopper may not notice the product",
  "They may not understand the benefit",
  "They may trust a competing brand more",
  "The promoter may be present but passive",
  "The display may be weak",
  "The offer may not be clear",
  "The store team may push another brand",
  "The report may show attendance, but not performance",
];

function ProblemSection() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <Eyebrow>01 / The Problem</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            Getting on the shelf was the hard part. Getting off it is harder.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            You got listed. You paid for the slot, the stock, the shelf space. But the product isn't moving.
          </p>
          <div className="mt-8 space-y-3 border-l-2 border-coral pl-6">
            <p className="font-display text-xl font-bold text-foreground">
              A product on the shelf is not a product sold.
            </p>
            <p className="font-display text-xl font-bold text-brand">
              The sale is won or lost in the last three feet.
            </p>
          </div>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            That gap, between your product being present and your product being picked, is the one
            NM Ingenious was built to close.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="brand-box p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Inside the store, the real battle
            </p>
            <ul className="mt-6 space-y-4">
              {storeRealities.map((r, i) => (
                <li key={r} className="group flex items-start gap-4">
                  <span className="mt-1.5 font-display text-[11px] font-bold text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85 transition-colors group-hover:text-brand">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalGrid() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>What We Are</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            We win the last three feet, where the buying decision is actually made.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            One job: turning shelf presence into sell-out. Trained people at the shelf, run with
            discipline, tracked in real time, compliant end to end. One operating system for
            promoters, merchandising, activation, payroll and intelligence.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemSignals.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="brand-box h-full p-7">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-coral">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShelfSellSection() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>The operating model</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            S.H.E.L.F. finds the block. <span className="text-coral">S.E.L.L. breaks it.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ModelColumn title="S.H.E.L.F." items={shelfModel} tone="brand" />
          <ModelColumn title="S.E.L.L." items={sellModel} tone="coral" />
        </div>
      </div>
    </section>
  );
}

function ModelColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: { letter: string; title: string; body: string }[];
  tone: "brand" | "coral";
}) {
  const color = tone === "brand" ? "var(--brand)" : "var(--coral)";
  return (
    <div>
      <h3 className="font-display text-2xl font-extrabold tracking-[0.1em]" style={{ color }}>
        {title}
      </h3>
      <div className="mt-6 space-y-3">
        {items.map((m, i) => (
          <div key={m.title} className="brand-box flex gap-5 p-6">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-lg font-display text-lg font-extrabold text-white"
              style={{ background: color }}
            >
              {m.letter}
            </span>
            <div>
              <h4 className="font-display text-base font-extrabold text-foreground">
                {i + 1}. {m.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/* =========================================================
   WHAT WE DO
========================================================= */

function ServicesSection() {
  return (
    <section className="w-full overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-5xl">
            Eight services. One
            <br />
            operating system for
            <br />
            the shelf.
          </h2>
        </div>


        {/* =====================================================
            FIRST 4 SERVICES
            Single column below LG
            Two columns on LG+
        ====================================================== */}

        <div className="mt-10 grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-2">

          {services.slice(0, 4).map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 50}
              className="w-full min-w-0"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="
                  group
                  flex
                  h-[230px]
                  w-full
                  min-w-0
                  max-w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(20,45,90,0.10)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-full
                    w-[145px]
                    shrink-0
                    overflow-hidden
                    bg-[#E9EEF5]
                    sm:w-[160px]
                    lg:w-[170px]
                  "
                >

                  {/* Main image - fills the entire panel */}

                  <img
                    src={s.image}
                    alt={s.caption}
                    loading="lazy"
                    className="
                      relative
                      z-10
                      block
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Bottom gradient */}

                  <span
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-20
                      h-20
                    "
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.25 0.07 245 / 0.72), transparent)",
                    }}
                  />

                  {/* Caption */}

                  <span
                    className="
                      absolute
                      bottom-3
                      left-3
                      right-3
                      z-30
                      font-display
                      text-[8px]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    {s.caption}
                  </span>

                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    overflow-hidden
                    px-5
                    py-5
                    sm:px-6
                  "
                >

                  {/* Service name */}

                  <h3
                    className="
                      max-w-full
                      font-display
                      text-[17px]
                      font-extrabold
                      leading-[1.1]
                      tracking-[-0.02em]
                      text-foreground
                      transition-colors
                      duration-300
                      group-hover:text-brand
                      sm:text-lg
                    "
                  >
                    {s.name}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-3
                      max-w-full
                      text-xs
                      leading-[1.5]
                      text-muted-foreground
                      sm:text-[13px]
                    "
                  >
                    {s.summary}
                  </p>


                  {/* Explore */}

                  <span
                    className="
                      mt-5
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      font-display
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-coral
                    "
                  >
                    Explore

                    <ArrowRight
                      className="
                        size-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </div>

              </Link>
            </Reveal>
          ))}

        </div>


        {/* =====================================================
            LAST 4 SERVICES
            CUSTOM ICON CARDS
        ====================================================== */}

        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">


          {/* =================================================
              5. REAL-TIME TRACKING & REPORTING
          ================================================== */}

          <Reveal
            delay={0}
            className="w-full min-w-0"
          >
            <Link
              to="/services/$slug"
              params={{ slug: services[4]?.slug }}
              className="
                group
                relative
                flex
                h-full
                min-h-[230px]
                min-w-0
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-coral/40
                hover:shadow-[0_16px_40px_rgba(20,45,90,0.10)]
              "
            >

              {/* Red accent */}

              <span
                aria-hidden
                className="
                  absolute
                  left-7
                  top-0
                  h-[3px]
                  w-8
                  bg-coral
                  transition-all
                  duration-300
                  group-hover:w-14
                "
              />


              {/* Custom icon */}

              <div
                className="
                  mb-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-brand
                  transition-colors
                  duration-300
                  group-hover:text-coral
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <rect
                    x="5"
                    y="8"
                    width="18"
                    height="28"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M9 16H19M9 22H19M9 28H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M26 32L31 26L35 29L43 18"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="43"
                    cy="18"
                    r="2.5"
                    fill="currentColor"
                  />

                  <path
                    d="M24 14H30C34 14 37 17 37 21V24"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeDasharray="2.5 3"
                  />
                </svg>
              </div>


              {/* Title */}

              <h3
                className="
                  max-w-full
                  font-display
                  text-[17px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-brand
                "
              >
                {services[4]?.name}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  flex-1
                  text-[12px]
                  leading-[1.55]
                  text-muted-foreground
                "
              >
                {services[4]?.summary}
              </p>


              {/* Explore */}

              <span
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  font-display
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-coral
                "
              >
                Explore

                <ArrowRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

            </Link>
          </Reveal>


          {/* =================================================
              6. WORKFORCE MANAGEMENT
          ================================================== */}

          <Reveal
            delay={50}
            className="w-full min-w-0"
          >
            <Link
              to="/services/$slug"
              params={{ slug: services[5]?.slug }}
              className="
                group
                relative
                flex
                h-full
                min-h-[230px]
                min-w-0
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-coral/40
                hover:shadow-[0_16px_40px_rgba(20,45,90,0.10)]
              "
            >

              <span
                aria-hidden
                className="
                  absolute
                  left-7
                  top-0
                  h-[3px]
                  w-8
                  bg-coral
                  transition-all
                  duration-300
                  group-hover:w-14
                "
              />

              {/* Custom icon */}

              <div
                className="
                  mb-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-brand
                  transition-colors
                  duration-300
                  group-hover:text-coral
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <circle
                    cx="17"
                    cy="13"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M8 31C8 25.5 11.8 21 17 21C22.2 21 26 25.5 26 31"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="31"
                    cy="17"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M26 31C26.5 26.8 29 24 32.5 24C36.2 24 39 27 39 31"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="34"
                    cy="34"
                    r="7"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M30.5 34L33 36.5L37.5 31.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>


              {/* Title */}

              <h3
                className="
                  max-w-full
                  font-display
                  text-[17px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-brand
                "
              >
                {services[5]?.name}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  flex-1
                  text-[12px]
                  leading-[1.55]
                  text-muted-foreground
                "
              >
                {services[5]?.summary}
              </p>


              {/* Explore */}

              <span
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  font-display
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-coral
                "
              >
                Explore

                <ArrowRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

            </Link>
          </Reveal>


          {/* =================================================
              7. PAYROLL SERVICES
          ================================================== */}

          <Reveal
            delay={100}
            className="w-full min-w-0"
          >
            <Link
              to="/services/$slug"
              params={{ slug: services[6]?.slug }}
              className="
                group
                relative
                flex
                h-full
                min-h-[230px]
                min-w-0
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-coral/40
                hover:shadow-[0_16px_40px_rgba(20,45,90,0.10)]
              "
            >

              <span
                aria-hidden
                className="
                  absolute
                  left-7
                  top-0
                  h-[3px]
                  w-8
                  bg-coral
                  transition-all
                  duration-300
                  group-hover:w-14
                "
              />

              {/* Custom icon */}

              <div
                className="
                  mb-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-brand
                  transition-colors
                  duration-300
                  group-hover:text-coral
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <rect
                    x="7"
                    y="6"
                    width="26"
                    height="34"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M12 14H27M12 19H27M12 24H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M12 30H23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="34"
                    cy="32"
                    r="8"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M31.5 29H36.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M31.5 32H35"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M33 29C35.2 29 36.5 30.1 36.5 31.5C36.5 33 35.2 34 33 34L36 37"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>


              {/* Title */}

              <h3
                className="
                  max-w-full
                  font-display
                  text-[17px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-brand
                "
              >
                {services[6]?.name}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  flex-1
                  text-[12px]
                  leading-[1.55]
                  text-muted-foreground
                "
              >
                {services[6]?.summary}
              </p>


              {/* Explore */}

              <span
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  font-display
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-coral
                "
              >
                Explore

                <ArrowRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

            </Link>
          </Reveal>


          {/* =================================================
              8. FRACTIONAL HR SERVICES
          ================================================== */}

          <Reveal
            delay={150}
            className="w-full min-w-0"
          >
            <Link
              to="/services/$slug"
              params={{ slug: services[7]?.slug }}
              className="
                group
                relative
                flex
                h-full
                min-h-[230px]
                min-w-0
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-coral/40
                hover:shadow-[0_16px_40px_rgba(20,45,90,0.10)]
              "
            >

              <span
                aria-hidden
                className="
                  absolute
                  left-7
                  top-0
                  h-[3px]
                  w-8
                  bg-coral
                  transition-all
                  duration-300
                  group-hover:w-14
                "
              />

              {/* Custom icon */}

              <div
                className="
                  mb-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-brand
                  transition-colors
                  duration-300
                  group-hover:text-coral
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <circle
                    cx="24"
                    cy="13"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M15 29C15 23.5 18.8 19.5 24 19.5C29.2 19.5 33 23.5 33 29"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="10"
                    cy="36"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="38"
                    cy="36"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M18 27L12 33M30 27L36 33"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="24"
                    cy="30"
                    r="2.2"
                    fill="currentColor"
                  />
                </svg>
              </div>


              {/* Title */}

              <h3
                className="
                  max-w-full
                  font-display
                  text-[17px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-brand
                "
              >
                {services[7]?.name}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  flex-1
                  text-[12px]
                  leading-[1.55]
                  text-muted-foreground
                "
              >
                {services[7]?.summary}
              </p>


              {/* Explore */}

              <span
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  font-display
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-coral
                "
              >
                Explore

                <ArrowRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

            </Link>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
/* SERVICE VIDEO */
function ExecutionVideoSection() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* VIDEO */}
          <Reveal>
           <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-3xl">

              <video
                className="block h-auto w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="/media/WhatsApp Video 2026-08-21 at 14.05.14 (1).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>


          {/* CONTENT */}
          <Reveal delay={100}>
            <div className="max-w-2xl">

              <Eyebrow>See execution in action</Eyebrow>

             <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
  Retail execution isn't a presentation. It's what happens inside the store.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                From product demonstrations and sampling to shopper
                conversations and assisted selling, our teams turn
                brand strategy into visible action at the shelf.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <div className="border-l-2 border-coral pl-4">
                  <p className="font-display text-sm font-extrabold text-foreground">
                    Shopper engagement
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Creating conversations that move people towards purchase.
                  </p>
                </div>

                <div className="border-l-2 border-coral pl-4">
                  <p className="font-display text-sm font-extrabold text-foreground">
                    Product sampling
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Turning a walk-past into a first trial.
                  </p>
                </div>

                <div className="border-l-2 border-coral pl-4">
                  <p className="font-display text-sm font-extrabold text-foreground">
                    In-store visibility
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Making brands impossible to miss at the shelf.
                  </p>
                </div>

                <div className="border-l-2 border-coral pl-4">
                  <p className="font-display text-sm font-extrabold text-foreground">
                    Field execution
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Trained teams executing consistently, store by store.
                  </p>
                </div>

              </div>

              <Link
                to="/services"
                className="group mt-9 inline-flex items-center gap-2 font-display text-sm font-bold text-brand"
              >
                Explore our services

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
function ReportsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-brand-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
            What lands in your inbox
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight lg:text-5xl">
            Reporting your activation manager can actually act on.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="space-y-1 lg:col-span-5">
            {reports.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full rounded-lg border px-6 py-5 text-left transition-all duration-300 ${
                  i === active
                    ? "border-coral bg-white/[0.07]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <span className="font-display text-xs font-bold text-coral">
                  R{String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-base font-extrabold">{r.title}</span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/12 bg-white/[0.04] p-8 lg:p-10">
              <h3 className="font-display text-2xl font-extrabold">{reports[active]!.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{reports[active]!.lead}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {reports[active]!.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-white/85">
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--coral)" }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhoItsForSection() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            If your brand needs reach and frequency at the shelf, this is built for you.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Built for activation managers planning coverage, and for online-first brands stepping
            into offline retail: we quantify how many stores, how many shoppers and how often, then
            hold that number every week.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 50}>
              <div className="brand-box h-full p-7">
                <h3 className="font-display text-lg font-extrabold text-foreground">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </div>
            </Reveal>
          ))}
          <Link
            to="/who-its-for"
            className="brand-box flex h-full flex-col justify-between p-7"
            style={{ background: "var(--gradient-brand)" }}
          >
            <h3 className="font-display text-lg font-extrabold text-white">
              Reach & frequency, planned
            </h3>
            <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
              See the full picture <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WeeklySection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Eyebrow>Every week we ask</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
            So every week, on every store, we ask what a manpower vendor never will.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Deployment is where we start, not where we stop. We do not measure people supplied. We
            measure sell-out delivered.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {weeklyQuestions.map((q, i) => (
              <div
                key={q}
                className="group flex items-center gap-4 rounded-lg border border-border px-5 py-4 transition-all duration-400 hover:-translate-y-1 hover:border-coral"
              >
                <span className="font-display text-xs font-bold text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
