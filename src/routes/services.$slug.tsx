import React, { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
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
   IMAGE-FREE SERVICES
   These services intentionally NEVER use service.images.
   ========================================================================== */

const IMAGE_FREE_SERVICE_NAMES = new Set([
  "Real-Time Tracking & Reporting",
  "Compliant Workforce Management",
  "Payroll Services",
  "Fractional HR Services",
]);

function isImageFreeService(service: {
  name: string;
  slug: string;
}) {
  const name = service.name.trim();

  if (IMAGE_FREE_SERVICE_NAMES.has(name)) {
    return true;
  }

  const slug = service.slug.toLowerCase();

  return (
    slug.includes("tracking") ||
    slug.includes("reporting") ||
    slug.includes("compliance") ||
    slug.includes("compliant") ||
    slug.includes("payroll") ||
    slug.includes("fractional-hr") ||
    slug.includes("fractional_hr")
  );
}

/* ==========================================================================
   IMAGE GALLERY
   Only used by the four services that genuinely have photography.
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
      <div className="hidden gap-4 sm:grid sm:grid-cols-[82px_minmax(0,1fr)]">
        <div className="flex max-h-[560px] flex-col gap-3 overflow-y-auto pr-1">
          {images.map((src, index) => {
            const active = index === activeImage;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View service image ${index + 1}`}
                className={`relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-xl bg-[#EEF2F7] transition-all duration-300 ${
                  active
                    ? "ring-2 ring-brand ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Service image ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                {active && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-coral" />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative h-[560px] overflow-hidden rounded-[2rem] bg-[#EEF2F7]">
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/40 to-transparent" />

          {service.caption && (
            <p className="absolute bottom-6 left-6 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              {service.caption}
            </p>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] bg-[#EEF2F7]">
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
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl ${
                index === activeImage
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
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   IMAGE-FREE HERO SYSTEM
   No photograph.
   No image container.
   No artificial empty space.
   ========================================================================== */

function ImageFreeHeroVisual({
  service,
}: {
  service: {
    name: string;
    slug: string;
  };
}) {
  const slug = service.slug.toLowerCase();

  if (slug.includes("tracking") || slug.includes("reporting")) {
    return <TrackingHero />;
  }

  if (
    slug.includes("compliance") ||
    slug.includes("compliant")
  ) {
    return <ComplianceHero />;
  }

  if (slug.includes("payroll")) {
    return <PayrollHero />;
  }

  if (
    slug.includes("fractional") ||
    slug.includes("fractional-hr")
  ) {
    return <FractionalHRHero />;
  }

  return <OperationsHero />;
}

/* ==========================================================================
   TRACKING — TYPOGRAPHIC / DATA VISUAL
   ========================================================================== */

function TrackingHero() {
  return (
    <div className="relative min-h-[430px] overflow-hidden lg:min-h-[500px]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,55,95,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,55,95,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex h-full min-h-[430px] items-center justify-center lg:min-h-[500px]">
        {/* Giant number */}
        <div className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 font-display text-[210px] font-extrabold leading-none tracking-[-0.12em] text-brand/[0.045] sm:text-[280px]">
          01
        </div>

        {/* Connecting field lines */}
        <div className="absolute left-[8%] top-[22%] h-px w-[72%] bg-brand/10" />
        <div className="absolute left-[15%] top-[55%] h-px w-[68%] bg-brand/10" />
        <div className="absolute left-[30%] top-[15%] h-[65%] w-px bg-brand/10" />
        <div className="absolute right-[24%] top-[8%] h-[78%] w-px bg-brand/10" />

        {/* Nodes */}
        <span className="absolute left-[8%] top-[22%] size-3 rounded-full bg-coral shadow-[0_0_0_6px_rgba(236,99,73,0.10)]" />
        <span className="absolute left-[30%] top-[55%] size-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(20,55,95,0.08)]" />
        <span className="absolute right-[24%] top-[22%] size-3 rounded-full bg-coral shadow-[0_0_0_6px_rgba(236,99,73,0.10)]" />
        <span className="absolute right-[8%] top-[55%] size-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(20,55,95,0.08)]" />

        {/* Central system */}
        <div className="relative w-[78%] max-w-[430px]">
          <div className="bg-background px-4">
            <div className="border-y border-brand/10 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Field intelligence
                  </p>

                  <p className="mt-2 font-display text-xl font-extrabold text-brand sm:text-2xl">
                    Real-time visibility
                  </p>
                </div>

                <Activity className="size-6 text-coral" />
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-border">
                <div className="pr-3">
                  <p className="font-display text-xl font-extrabold text-foreground">
                    Live
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    Activity
                  </p>
                </div>

                <div className="px-3">
                  <p className="font-display text-xl font-extrabold text-foreground">
                    Daily
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    Reporting
                  </p>
                </div>

                <div className="pl-3">
                  <p className="font-display text-xl font-extrabold text-foreground">
                    Clear
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    Decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating labels */}
        <div className="absolute left-[2%] top-[37%] hidden border border-border bg-background px-3 py-2 sm:block">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-brand">
            Attendance
          </p>
        </div>

        <div className="absolute right-[0%] top-[38%] hidden border border-border bg-background px-3 py-2 sm:block">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-brand">
            Reporting
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   COMPLIANCE — CONTROL FRAMEWORK
   ========================================================================== */

function ComplianceHero() {
  const controls = [
    "Attendance",
    "Documentation",
    "Field visits",
    "Process adherence",
  ];

  return (
    <div className="relative min-h-[430px] lg:min-h-[500px]">
      <div className="absolute inset-y-0 left-1/2 w-px bg-brand/10" />

      <div className="absolute left-0 top-[12%] h-px w-full bg-brand/10" />
      <div className="absolute left-0 bottom-[12%] h-px w-full bg-brand/10" />

      <div className="absolute left-1/2 top-1/2 w-[82%] max-w-[430px] -translate-x-1/2 -translate-y-1/2">
        <div className="border border-brand/15 bg-background p-5 shadow-[0_20px_60px_rgba(20,55,95,0.08)] sm:p-7">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-coral" />

              <div>
                <p className="font-display text-xs font-extrabold text-brand">
                  Workforce controls
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  Compliance framework
                </p>
              </div>
            </div>

            <span className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-coral">
              Active
            </span>
          </div>

          <div className="mt-5 space-y-2">
            {controls.map((control, index) => (
              <div
                key={control}
                className="flex items-center gap-3 border-b border-border/70 py-3 last:border-0"
              >
                <span className="font-display text-[9px] font-extrabold text-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-xs text-foreground/75">
                  {control}
                </span>

                <Check
                  className="size-3.5 text-brand"
                  strokeWidth={3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-[2%] top-[18%] font-display text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Control
      </div>

      <div className="absolute right-[2%] bottom-[18%] font-display text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Verify
      </div>

      <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[180px] font-extrabold leading-none text-brand/[0.035]">
        02
      </div>
    </div>
  );
}

/* ==========================================================================
   PAYROLL — PROCESS DESIGN
   ========================================================================== */

function PayrollHero() {
  const steps = [
    "Attendance",
    "Validation",
    "Processing",
    "Disbursement",
  ];

  return (
    <div className="relative min-h-[430px] lg:min-h-[500px]">
      <div className="absolute left-[9%] right-[9%] top-1/2 h-px -translate-y-1/2 bg-brand/10" />

      <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[500px]">
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 font-display text-[210px] font-extrabold leading-none text-brand/[0.035] sm:text-[270px]">
          03
        </div>

        <div className="relative w-[90%] max-w-[460px]">
          <div className="mb-8 flex items-center gap-3">
            <WalletCards className="size-5 text-coral" />

            <div>
              <p className="font-display text-sm font-extrabold text-brand">
                Payroll workflow
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                Structured from input to completion
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {steps.map((step, index) => (
              <div key={step} className="relative">
                <div className="relative z-10 mx-auto flex size-10 items-center justify-center rounded-full border border-brand/15 bg-background">
                  <span className="font-display text-[9px] font-extrabold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <p className="font-display text-[9px] font-bold leading-tight text-foreground">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 divide-x divide-border border-y border-border py-4">
            <div className="pr-3">
              <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                Capture
              </p>
            </div>

            <div className="px-3">
              <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                Process
              </p>
            </div>

            <div className="pl-3">
              <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                Complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   FRACTIONAL HR — PEOPLE OPERATING MODEL
   ========================================================================== */

function FractionalHRHero() {
  const areas = [
    {
      title: "People",
      icon: Users,
    },
    {
      title: "Policy",
      icon: FileCheck2,
    },
    {
      title: "Process",
      icon: Clock3,
    },
    {
      title: "Leadership",
      icon: UserRoundCog,
    },
  ];

  return (
    <div className="relative min-h-[430px] lg:min-h-[500px]">
      <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[500px]">
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[190px] font-extrabold leading-none text-brand/[0.035] sm:text-[260px]">
          04
        </div>

        {/* Connection lines */}
        <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-brand/10" />
        <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-brand/10" />

        {/* Centre */}
        <div className="relative z-10 flex size-36 items-center justify-center rounded-full border border-brand/15 bg-background shadow-[0_20px_60px_rgba(20,55,95,0.08)] sm:size-44">
          <div className="text-center">
            <UserRoundCog className="mx-auto size-6 text-coral" />

            <p className="mt-3 font-display text-xs font-extrabold text-brand">
              HR
            </p>

            <p className="mt-1 font-display text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              Operating layer
            </p>
          </div>
        </div>

        {/* Four capabilities */}
        {areas.map(({ title, icon: Icon }, index) => {
          const positions = [
            "left-[3%] top-[13%]",
            "right-[3%] top-[13%]",
            "left-[3%] bottom-[13%]",
            "right-[3%] bottom-[13%]",
          ];

          return (
            <div
              key={title}
              className={`absolute ${positions[index]} z-10 w-[110px] border border-border bg-background p-3 sm:w-[130px] sm:p-4`}
            >
              <Icon className="size-4 text-coral" />

              <p className="mt-3 font-display text-[10px] font-extrabold text-brand sm:text-xs">
                {title}
              </p>

              <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[9px]">
                Strategic HR support
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ==========================================================================
   FALLBACK
   ========================================================================== */

function OperationsHero() {
  return (
    <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[500px]">
      <div className="absolute inset-0 border-y border-brand/10" />

      <div className="relative text-center">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
          Operations
        </p>

        <p className="mt-5 font-display text-5xl font-extrabold text-brand">
          Built to execute.
        </p>
      </div>
    </div>
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
  const imageFree = isImageFreeService(service);

  /*
   * IMPORTANT:
   * Image-free services never use service.images.
   */
  const hasImages =
    !imageFree && service.images.filter(Boolean).length > 0;

  return (
    <section
      className={`relative overflow-hidden bg-background ${
        imageFree
          ? "pb-12 pt-16 lg:pb-16 lg:pt-20"
          : "pb-16 pt-20 lg:pb-24 lg:pt-28"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <Eyebrow>Service</Eyebrow>

            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
              {service.tagline}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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

              {service.caption && (
                <span className="inline-flex items-center rounded-full border border-border px-5 py-3.5 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {service.caption}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            {hasImages ? (
              <ServiceMedia service={service} />
            ) : (
              <ImageFreeHeroVisual service={service} />
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
      {/* HERO */}
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
            <div
              className="relative overflow-hidden rounded-[2rem] p-8 lg:p-10"
              style={{
                background: "var(--gradient-brand)",
              }}
            >
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  The outcome
                </p>

                <p className="mt-5 font-display text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                  {service.outcome}
                </p>

                <div className="mt-8 flex items-center gap-2 text-white/60">
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
          ADDITIONAL DETAIL
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
              <Eyebrow>{detail.approachTitle}</Eyebrow>

              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-4xl">
                A clear operating method from start to finish.
              </h2>

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

      <CtaBand />
    </>
  );
}
