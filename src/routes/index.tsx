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
      <WhoWeAreSection />
      <LadderSection />
      <PanIndiaReachSection />
      <StatsSection />
      <ProblemSection />
      <DikhtaBikta />
      <SignalGrid />
      <ShelfSellSection />
      <ServicesSection />
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

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 size-full object-cover"
        src={heroVideoUrl}
        autoPlay
        loop
        muted={muted}
        playsInline
        aria-label="NM Ingenious promoters at work inside retail stores"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.34 0.09 245 / 0.92) 0%, oklch(0.34 0.09 245 / 0.78) 45%, oklch(0.34 0.09 245 / 0.3) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/60">
            <span className="h-px w-10 bg-coral" aria-hidden />
            Sell-Out Acceleration Partner
          </p>
          <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.06] text-white sm:text-5xl lg:text-[4.2rem]">
            You built the product.{" "}
            <em className="not-italic text-coral">We get it to the people you built it for.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg">
            NM Ingenious turns shelf presence into sell-out, with trained promoters, disciplined
            retail execution and real-time store intelligence.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground transition-all duration-300 hover:shadow-[0_20px_44px_-16px_oklch(0.55_0.21_27/0.75)] hover:brightness-110"
            >
              Request a Sell-Out Acceleration Audit
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
            >
              See how we win the shelf
            </Link>
          </div>
          <p className="mt-12 max-w-md border-l-2 border-coral pl-5 text-sm leading-relaxed text-white/60">
            You did the hard part. The last three feet to the shopper's hand are ours.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-6 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur transition-colors hover:bg-white/15 lg:right-8"
      >
        <Play className="size-3.5" />
        {muted ? "Unmute showreel" : "Mute showreel"}
      </button>
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
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
{/* ========================================================
    WHO WE ARE — HOMEPAGE
======================================================== */}
function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-20 lg:py-24">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ==================================================
              LEFT — BRAND MESSAGE
          ================================================== */}
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-coral">
                Who We Are
              </p>

              <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.8rem]">
                We make
                <br />
                <span className="text-coral">strategy happen.</span>
              </h2>
              <div className="mt-7 h-px w-16 bg-coral" />

              <p className="mt-7 max-w-md text-lg leading-8 text-muted-foreground">
                NM Ingenious Management Services helps brands turn
                retail strategy into consistent execution across the
                last mile.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-brand transition-colors hover:text-brand-deep"
              >
                Discover our story
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* ==================================================
              RIGHT — COMPANY STORY
          ================================================== */}
          <Reveal delay={100}>
            <div>
              <div className="border-l-2 border-brand/15 pl-7 lg:pl-10">
                <p className="text-xl leading-9 text-foreground/90 sm:text-2xl sm:leading-10">
                  Since <strong>2008</strong>, we have built our work
                  around one simple idea:
                  <strong>
                    {" "}
                    great strategy only creates value when it is
                    executed well.
                  </strong>
                </p>

                <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
                  From field execution and workforce capability to
                  structured processes and data-led visibility, we
                  help businesses build stronger market presence and
                  better retail performance.
                </p>
              </div>

              {/* ==================================================
                  PROOF POINTS
              ================================================== */}
              <div className="mt-10 grid overflow-hidden rounded-xl border border-border bg-background sm:grid-cols-3">
                <div className="border-b border-border px-6 py-6 sm:border-b-0 sm:border-r">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-brand">
                    2008
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Established
                  </p>
                </div>

                <div className="border-b border-border px-6 py-6 sm:border-b-0 sm:border-r">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-brand">
                    31+
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    States &amp; UTs
                  </p>
                </div>

                <div className="px-6 py-6">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-brand">
                    2,150+
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    People Trained
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
const ladder = ["Listed", "Visible", "Considered", "Explained", "Tried", "Chosen", "Sold"];
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
            You fought to get listed. You paid for the slot, the stock, the visibility. Then the
            product just sits there, waiting for a shopper who walks straight past it.
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

function ServicesSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Eight services. One operating system for the shelf.
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

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="brand-box group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/8] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.caption}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.34 0.09 245 / 0.75), transparent 55%)",
                    }}
                  />
                  <span className="absolute bottom-4 left-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                    {s.caption}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
                    Explore
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
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
