import React, { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  MapPin,
  ShieldCheck,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";

import {
  serviceDetails,
  services,
  type ServiceDetail as ServiceDetailData,
} from "@/lib/site-data";

import {
  CtaBand,
  Eyebrow,
  Reveal,
} from "@/components/site/Sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
      throw notFound();
    }

    return {
      service,
      detail: serviceDetails[params.slug] ?? null,
    };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Service not found | NM Ingenious",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { service } = loaderData;
    const title = `${service.name} | NM Ingenious`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: service.summary,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: service.summary,
        },
      ],
    };
  },

  component: ServiceDetail,
});

/* ==========================================================================
   SERVICE IMAGE GALLERY
   Used ONLY when the service actually has images.
   ========================================================================== */

function ServiceMedia({
  service,
}: {
  service: {
    images: string[];
    caption?: string;
  };
}) {
  const images = service.images.filter(Boolean);
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[activeImage];

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-[86px_minmax(0,1fr)]">
        <div className="flex max-h-[570px] flex-col gap-3 overflow-y-auto pr-1">
          {images.map((src, index) => {
            const isActive = index === activeImage;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View service image ${index + 1}`}
                aria-pressed={isActive}
                className={`group relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-xl bg-[#EEF2F7] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
                  isActive
                    ? "ring-2 ring-brand ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Service image ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-coral"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative h-[570px] overflow-hidden rounded-[2rem] bg-[#EEF2F7]">
          <img
            key={currentImage}
            src={currentImage}
            alt={
              service.caption
                ? `${service.caption} ${activeImage + 1}`
                : `Service image ${activeImage + 1}`
            }
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover transition-opacity duration-500"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent" />

          {service.caption && (
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                {service.caption}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#EEF2F7]">
          <img
            key={currentImage}
            src={currentImage}
            alt={
              service.caption
                ? `${service.caption} ${activeImage + 1}`
                : `Service image ${activeImage + 1}`
            }
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {images.map((src, index) => {
            const isActive = index === activeImage;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View service image ${index + 1}`}
                className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-[#EEF2F7] ${
                  isActive
                    ? "ring-2 ring-brand ring-offset-2"
                    : "opacity-60"
                }`}
              >
                <img
                  src={src}
                  alt={`Service image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   NO-IMAGE VISUAL SYSTEM

   These are NOT images.
   They are purpose-built HTML/CSS visual compositions for services that
   don't have photography.
   ========================================================================== */

function NoImageServiceVisual({ slug }: { slug: string }) {
  const normalized = slug.toLowerCase();

  if (
    normalized.includes("tracking") ||
    normalized.includes("reporting")
  ) {
    return <TrackingReportingVisual />;
  }

  if (
    normalized.includes("compliance") ||
    normalized.includes("compliant")
  ) {
    return <ComplianceVisual />;
  }

  if (normalized.includes("payroll")) {
    return <PayrollVisual />;
  }

  if (
    normalized.includes("fractional") ||
    normalized.includes("hr")
  ) {
    return <FractionalHRVisual />;
  }

  return <GenericOperationsVisual />;
}

/* ==========================================================================
   SHARED NO-IMAGE VISUAL FRAME
   ========================================================================== */

function VisualFrame({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#09243F] p-5 shadow-[0_30px_80px_rgba(9,36,63,0.16)] sm:p-7">
      {/* Decorative geometry */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "var(--gradient-brand)",
        }}
      />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
            {eyebrow}
          </span>

          <span className="flex items-center gap-2 font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
            <span className="size-2 rounded-full bg-coral" />
            NM Ingenious
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

/* ==========================================================================
   REAL-TIME TRACKING & REPORTING
   ========================================================================== */

function TrackingReportingVisual() {
  return (
    <VisualFrame eyebrow="Field intelligence">
      {/* Header */}
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Field operations
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Real-time visibility across the network
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#EAF7EF] px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-green-600" />
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-green-700">
              Live
            </span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#F4F7FB] p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Active outlets
            </p>

            <p className="mt-2 font-display text-3xl font-extrabold text-brand">
              247
            </p>
          </div>

          <div className="rounded-xl bg-[#F4F7FB] p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Reports today
            </p>

            <p className="mt-2 font-display text-3xl font-extrabold text-brand">
              96%
            </p>
          </div>
        </div>

        {/* Activity */}
        <div className="mt-4 rounded-xl border border-border p-4">
          <div className="flex items-center gap-2">
            <Activity className="size-4 text-coral" />

            <span className="font-display text-xs font-bold text-foreground">
              Live activity
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["North", "94%"],
              ["West", "88%"],
              ["South", "97%"],
            ].map(([region, value]) => (
              <div key={region}>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>{region}</span>
                  <span className="font-bold text-brand">{value}</span>
                </div>

                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E8EDF3]">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{
                      width: value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom status strip */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Attendance", "Visits", "Reports"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">
              {item}
            </p>

            <p className="mt-1 font-display text-xs font-bold text-white/75">
              Tracked
            </p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

/* ==========================================================================
   COMPLIANT WORKFORCE MANAGEMENT
   ========================================================================== */

function ComplianceVisual() {
  const controls = [
    "Attendance verification",
    "Outlet visit verification",
    "Documentation checks",
    "Process adherence",
  ];

  return (
    <VisualFrame eyebrow="Workforce control">
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF2F7]">
            <ShieldCheck className="size-5 text-brand" />
          </div>

          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Compliance control
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Workforce operating standards
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[#EAF7EF] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-green-700/60">
                Overall status
              </p>

              <p className="mt-1 font-display text-xl font-extrabold text-green-800">
                Controlled
              </p>
            </div>

            <CheckCircle2 className="size-7 text-green-700" />
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {controls.map((control, index) => (
            <div
              key={control}
              className="flex items-center gap-3 rounded-xl border border-border p-3"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#F4F7FB]">
                <span className="font-display text-[9px] font-extrabold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="flex-1 text-xs font-medium text-foreground/80">
                {control}
              </span>

              <Check className="size-4 text-coral" strokeWidth={3} />
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

/* ==========================================================================
   PAYROLL SERVICES
   ========================================================================== */

function PayrollVisual() {
  const steps = [
    {
      title: "Attendance capture",
      body: "Collect workforce inputs",
    },
    {
      title: "Validation",
      body: "Review and verify records",
    },
    {
      title: "Payroll processing",
      body: "Process approved payroll",
    },
    {
      title: "Disbursement",
      body: "Complete the payroll cycle",
    },
  ];

  return (
    <VisualFrame eyebrow="Payroll operations">
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF2F7]">
            <WalletCards className="size-5 text-brand" />
          </div>

          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Payroll workflow
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              From attendance to disbursement
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          {/* Connecting line */}
          <div className="absolute bottom-5 left-[17px] top-5 w-px bg-border" />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-4">
                <div className="relative z-10 flex size-[35px] shrink-0 items-center justify-center rounded-full bg-brand">
                  <span className="font-display text-[9px] font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="pt-1">
                  <p className="font-display text-xs font-extrabold text-foreground">
                    {step.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#F4F7FB] p-3">
          <Clock3 className="size-4 text-coral" />

          <span className="text-[10px] font-medium text-muted-foreground">
            Structured payroll operations
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}

/* ==========================================================================
   FRACTIONAL HR SERVICES
   ========================================================================== */

function FractionalHRVisual() {
  const areas = [
    {
      label: "People",
      icon: Users,
    },
    {
      label: "Policy",
      icon: FileCheck2,
    },
    {
      label: "Process",
      icon: Clock3,
    },
    {
      label: "Leadership",
      icon: UserRoundCog,
    },
  ];

  return (
    <VisualFrame eyebrow="HR operating system">
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF2F7]">
            <UserRoundCog className="size-5 text-brand" />
          </div>

          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Fractional HR
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Strategic people operations
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {areas.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <Icon className="size-4 text-coral" />

              <p className="mt-4 font-display text-xs font-extrabold text-foreground">
                {label}
              </p>

              <p className="mt-1 text-[9px] leading-relaxed text-muted-foreground">
                Structured HR support
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-4 rounded-xl bg-brand p-5 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
            One connected layer
          </p>

          <p className="mt-2 font-display text-lg font-extrabold text-white">
            HR Operating System
          </p>

          <div className="absolute left-1/2 top-0 h-4 w-px -translate-y-full bg-brand/30" />
        </div>
      </div>
    </VisualFrame>
  );
}

/* ==========================================================================
   FALLBACK VISUAL
   ========================================================================== */

function GenericOperationsVisual() {
  return (
    <VisualFrame eyebrow="Operations">
      <div className="rounded-2xl bg-white p-6">
        <div className="grid grid-cols-2 gap-3">
          {[
            "People",
            "Process",
            "Visibility",
            "Performance",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-xl bg-[#F4F7FB] p-5"
            >
              <span className="font-display text-[10px] font-extrabold text-coral">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-5 font-display text-sm font-extrabold text-brand">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

/* ==========================================================================
   SERVICE HERO
   ========================================================================== */

function ServiceHero({
  service,
}: {
  service: {
    slug: string;
    name: string;
    tagline: string;
    summary: string;
    caption?: string;
    images: string[];
  };
}) {
  const hasImages = service.images.filter(Boolean).length > 0;

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-20 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className={hasImages ? "lg:col-span-5" : "lg:col-span-5"}>
            <Eyebrow>Service</Eyebrow>

            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
              {service.tagline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span className="inline-flex items-center rounded-full border border-border px-5 py-3.5 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {service.caption ?? "Built for scale"}
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7">
            {hasImages ? (
              <ServiceMedia service={service} />
            ) : (
              <NoImageServiceVisual slug={service.slug} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SERVICE DETAIL PAGE
   ========================================================================== */

function ServiceDetail() {
  const { service, detail: rawDetail } = Route.useLoaderData();

  const detail = rawDetail as ServiceDetailData | null;

  const others = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* =====================================================================
          HERO
          ===================================================================== */}

      <ServiceHero service={service} />

      {/* =====================================================================
          THE WORK
          ===================================================================== */}

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>The work</Eyebrow>

            <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-foreground lg:text-5xl">
              Turning operational effort into measurable execution.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.body.map((p: string) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] p-8 lg:p-10">
              <div
                className="absolute inset-0"
                style={{
                  background: "var(--gradient-brand)",
                }}
              />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  The outcome
                </p>

                <p className="mt-5 font-display text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                  {service.outcome}
                </p>

                <div className="mt-8 flex items-center gap-2 text-white/55">
                  <CheckCircle2 className="size-4 text-coral" />

                  <span className="text-xs">
                    Designed around execution
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================================
          WHAT'S INCLUDED
          ===================================================================== */}

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>What's included</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-4xl">
                Built around the way your operation actually works.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                A structured service layer designed to bring consistency,
                visibility and execution into the operation.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {service.includes.map((inc: string, index: number) => (
                  <div
                    key={inc}
                    className="group flex gap-5 py-6 transition-all duration-300"
                  >
                    <span className="pt-0.5 font-display text-xs font-extrabold text-coral">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <p className="font-display text-base font-extrabold text-foreground transition-colors group-hover:text-brand">
                        {inc}
                      </p>
                    </div>

                    <Check
                      className="mt-0.5 size-4 shrink-0 text-coral"
                      strokeWidth={3}
                    />
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us about this
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ADDITIONAL SERVICE DETAIL
          ===================================================================== */}

      {detail && (
        <>
          {/* CHALLENGE */}
          <section className="bg-background py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <Eyebrow>The challenge</Eyebrow>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
                  {detail.challengeTitle}
                </h2>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                  {detail.challenge.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {detail.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-border bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <p className="font-display text-3xl font-extrabold text-brand">
                        {m.value}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* METHOD */}
          <section className="bg-sand py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                <div>
                  <Eyebrow>{detail.approachTitle}</Eyebrow>

                  <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-4xl">
                    A clear operating method from start to finish.
                  </h2>
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-4">
                {detail.approach.map((a, i) => (
                  <Reveal key={a.step} delay={i * 70}>
                    <div className="group h-full rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-extrabold text-coral">
                          {a.step}
                        </span>

                        <ArrowRight className="size-4 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
                      </div>

                      <h3 className="mt-7 font-display text-lg font-extrabold text-foreground">
                        {a.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {a.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* BEST FOR + FAQ */}
          <section className="bg-background py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <div
                  className="h-full rounded-[2rem] p-8 text-white lg:p-10"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                    {detail.bestForTitle}
                  </p>

                  <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight lg:text-3xl">
                    Where this service creates the most operational value.
                  </h2>

                  <ul className="mt-8 space-y-4">
                    {detail.bestFor.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-white/85"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-coral"
                          strokeWidth={3}
                        />

                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Eyebrow>Questions we get asked</Eyebrow>

                <dl className="mt-8 divide-y divide-border border-y border-border">
                  {detail.faqs.map((f) => (
                    <div key={f.q} className="py-6">
                      <dt className="font-display text-base font-extrabold text-foreground">
                        {f.q}
                      </dt>

                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </>
      )}

      {/* =====================================================================
          RELATED SERVICES
          ===================================================================== */}

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>Continue exploring</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground lg:text-4xl">
            Often deployed together with
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{
                    slug: s.slug,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-extrabold text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <ArrowRight className="size-4 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>

                  <span className="mt-6 font-display text-sm font-bold text-coral">
                    Explore service
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CTA
          ===================================================================== */}

      <CtaBand />
    </>
  );
}
