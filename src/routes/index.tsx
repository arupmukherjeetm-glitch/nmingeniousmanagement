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

/* HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">

      {/* =====================================================
          VIDEO BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        <video
          src="/media/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#082B61]/55" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#082B61]/90
            via-[#082B61]/45
            to-transparent
          "
        />
      </div>


      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[calc(100vh-140px)]
          min-h-[480px]
          max-h-[600px]
          max-w-[1440px]
          items-center
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* =================================================
            CONTENT PANEL
        ================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-[690px]
            rounded-[24px]
            border
            border-white/50
            bg-[#F4F7FB]/[0.97]
            px-7
            py-6
            shadow-[0_25px_60px_rgba(0,0,0,0.16)]
            sm:px-9
            sm:py-7
            lg:px-10
            lg:py-8
          "
        >

          {/* Coral edge */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              h-full
              w-1
              rounded-l-[24px]
              bg-coral
            "
          />


          {/* =================================================
              HEADLINE
          ================================================== */}

          <h1
            className="
              max-w-[650px]
              font-display
              text-[2.65rem]
              font-extrabold
              leading-[0.91]
              tracking-[-0.06em]
              text-brand-deep
              sm:text-5xl
              md:text-[3.8rem]
              lg:text-[4.35rem]
              xl:text-[4.7rem]
            "
          >
            <span className="block">
              You built the product.
            </span>

            <span className="mt-1 block text-coral">
              We get it to the people
            </span>

            <span className="block text-coral">
              you built it for.
            </span>
          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-5
              max-w-[535px]
              text-sm
              leading-6
              text-brand-deep/65
              sm:text-[15px]
            "
          >
            NM Ingenious turns shelf presence into sell-out
            through trained promoters, disciplined retail
            execution and real-time store intelligence.
          </p>


          {/* =================================================
              CTA
          ================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-5">

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-coral
                px-6
                py-3
                font-display
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-brand-deep
                hover:shadow-lg
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
                text-sm
                font-bold
                text-brand-deep
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
          BOTTOM ACCENT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-full
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

              <div className="mt-8 h-px w-16 bg-coral" />

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

              {/* Small floating location marker */}
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 shadow-lg">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-coral opacity-40" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                  One network. Everywhere.
                </span>
              </div>
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
/* WHAT WE DO */
function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
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

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-display text-sm font-bold text-brand"
          >
            View all services
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>


        {/* =====================================================
            FIRST 4 SERVICES — EXISTING IMAGE CARD DESIGN
        ====================================================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-2">

          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>

              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="
                  brand-box
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                "
              >

                {/* Image */}
                <div className="relative aspect-[16/8] overflow-hidden">

                  <img
                    src={s.image}
                    alt={s.caption}
                    loading="lazy"
                    className="
                      size-full
                      object-cover
                      transition-transform
                      duration-[900ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.07]
                    "
                  />

                  {/* Image gradient */}
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.34 0.09 245 / 0.75), transparent 55%)",
                    }}
                  />

                  {/* Caption */}
                  <span className="absolute bottom-4 left-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                    {s.caption}
                  </span>

                </div>


                {/* Content */}
                <div className="flex flex-1 flex-col p-7">

                  <h3 className="font-display text-xl font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">

                    Explore

                    <ArrowRight
                      className="
                        size-4
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
    MORE SERVICES — CLEAN ONE-LINE LAYOUT
===================================================== */}

<div className="mt-16">

  {/* Header */}
  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

    <div>
      <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-coral">
        More services
      </p>

      <h3 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight text-foreground lg:text-3xl">
        More ways we strengthen your retail execution.
      </h3>
    </div>

    <Link
      to="/services"
      className="group inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold text-brand"
    >
      Explore all services

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


  {/* =====================================================
      FOUR SERVICES — ONE ROW
  ====================================================== */}

  <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

    {services.slice(4, 8).map((s) => (

      <Link
        key={s.slug}
        to="/services/$slug"
        params={{ slug: s.slug }}
        className="
          group
          relative
          flex
          min-h-[150px]
          flex-col
          border-l-2
          border-brand/10
          pl-5
          transition-all
          duration-300
          hover:border-coral
        "
      >

        {/* Service title */}
        <h4
          className="
            max-w-[230px]
            font-display
            text-lg
            font-extrabold
            leading-tight
            text-foreground
            transition-colors
            duration-300
            group-hover:text-brand
          "
        >
          {s.name}
        </h4>


        {/* Description */}
        <p
          className="
            mt-3
            max-w-[240px]
            text-sm
            leading-relaxed
            text-muted-foreground
          "
        >
          {s.summary}
        </p>


        {/* Explore */}
        <span
          className="
            mt-auto
            inline-flex
            items-center
            gap-2
            pt-6
            font-display
            text-sm
            font-bold
            text-coral
          "
        >
          Explore

          <ArrowRight
            className="
              size-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </span>

      </Link>

    ))}

  </div>

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
