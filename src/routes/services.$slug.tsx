import React, { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  FileCheck2,
  MapPin,
  Users,
  WalletCards,
  Activity,
  ShieldCheck,
  UserRoundCog,
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
   SERVICE MEDIA
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
    <div className="mt-10">
      <div className="hidden gap-4 sm:grid sm:grid-cols-[88px_minmax(0,1fr)]">
        <div className="flex max-h-[560px] flex-col gap-3 overflow-y-auto pr-1">
          {images.map((src, index) => {
            const active = index === activeImage;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View service image ${index + 1}`}
                className={`relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-xl bg-[#EEF2F7] transition-all ${
                  active
                    ? "ring-2 ring-brand ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Service image ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />

                {active && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-coral" />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative flex h-[560px] items-center justify-center overflow-hidden rounded-3xl bg-white">
          <img
            key={currentImage}
            src={currentImage}
            alt={service.caption ?? "NM Ingenious service"}
            className="h-full w-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative h-[420px] overflow-hidden rounded-3xl bg-white">
          <img
            key={currentImage}
            src={currentImage}
            alt={service.caption ?? "NM Ingenious service"}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl ${
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

      {service.caption && (
        <p className="mt-4 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {service.caption}
        </p>
      )}
    </div>
  );
}

/* ==========================================================================
   NO-IMAGE SERVICE VISUALS
   ========================================================================== */

function ServiceVisual({ slug }: { slug: string }) {
  if (slug.includes("tracking")) {
    return <TrackingVisual />;
  }

  if (slug.includes("compliance")) {
    return <ComplianceVisual />;
  }

  if (slug.includes("payroll")) {
    return <PayrollVisual />;
  }

  if (slug.includes("fractional")) {
    return <FractionalHRVisual />;
  }

  return null;
}

function VisualShell({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09243F] p-5 shadow-2xl sm:p-7">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
            {eyebrow}
          </span>

          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
            <span className="size-2 rounded-full bg-coral" />
            Live system
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

function TrackingVisual() {
  return (
    <VisualShell eyebrow="Field operations">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
            Active locations
          </p>
          <p className="mt-3 font-display text-4xl font-extrabold text-white">
            247
          </p>
          <p className="mt-2 text-xs text-white/50">
            Across the field network
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
            Reporting status
          </p>
          <p className="mt-3 font-display text-4xl font-extrabold text-white">
            96%
          </p>
          <p className="mt-2 text-xs text-white/50">
            Reports received today
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-white/5 p-5">
        <div className="flex items-center gap-3">
          <Activity className="size-5 text-coral" />
          <span className="font-display text-sm font-bold text-white">
            Live field activity
          </span>
        </div>

        <div className="mt-6 space-y-4">
          {["North region", "West region", "South region"].map(
            (region, i) => (
              <div key={region}>
                <div className="flex justify-between text-xs text-white/50">
                  <span>{region}</span>
                  <span>{[94, 88, 97][i]}%</span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-coral"
                    style={{ width: `${[94, 88, 97][i]}%` }}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </VisualShell>
  );
}

function ComplianceVisual() {
  const checks = [
    "Attendance verified",
    "Outlet visit verified",
    "Required documentation",
    "Process compliance",
  ];

  return (
    <VisualShell eyebrow="Compliance control">
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF2F7]">
            <ShieldCheck className="size-5 text-brand" />
          </div>

          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Compliance status
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Current operating cycle
            </p>
          </div>

          <span className="ml-auto rounded-full bg-[#E9F7EF] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-green-700">
            Controlled
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {checks.map((check) => (
            <div
              key={check}
              className="flex items-center gap-3 rounded-xl border border-border p-3"
            >
              <Check className="size-4 shrink-0 text-coral" strokeWidth={3} />
              <span className="text-sm text-foreground/80">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function PayrollVisual() {
  return (
    <VisualShell eyebrow="Payroll operations">
      <div className="rounded-2xl bg-white p-5 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF2F7]">
            <WalletCards className="size-5 text-brand" />
          </div>

          <div>
            <p className="font-display text-sm font-extrabold text-foreground">
              Payroll cycle
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Workforce processing workflow
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-2">
          {[
            ["01", "Attendance capture"],
            ["02", "Validation"],
            ["03", "Payroll processing"],
            ["04", "Disbursement"],
          ].map(([number, title], index) => (
            <div key={number} className="relative flex gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xs font-extrabold text-white">
                {number}
              </div>

              <div className="pb-5">
                <p className="font-display text-sm font-bold text-foreground">
                  {title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {index === 0
                    ? "Collect and consolidate workforce inputs"
                    : index === 1
                      ? "Review and validate payroll data"
                      : index === 2
                        ? "Process approved payroll records"
                        : "Complete the final payroll cycle"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function FractionalHRVisual() {
  return (
    <VisualShell eyebrow="HR operating system">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["People", Users],
          ["Policy", FileCheck2],
          ["Process", Clock3],
          ["Leadership", UserRoundCog],
        ].map(([label, Icon]) => {
          const Component = Icon as React.ElementType;

          return (
            <div
              key={String(label)}
              className="rounded-2xl bg-white/10 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <Component className="size-5 text-coral" />

              <p className="mt-5 font-display text-base font-extrabold text-white">
                {label}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-white/45">
                Structured support for a stronger people operation.
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center gap-3">
          <MapPin className="size-4 text-coral" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
            One operating layer
          </span>
        </div>
      </div>
    </VisualShell>
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
        <div
          className={`grid items-center gap-12 ${
            hasImages ? "lg:grid-cols-12" : "lg:grid-cols-2"
          }`}
        >
          <div className={hasImages ? "lg:col-span-5" : ""}>
            <Eyebrow>Service</Eyebrow>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
              {service.tagline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span className="inline-flex items-center rounded-full border border-border px-5 py-3.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {service.caption ?? "Built for scale"}
              </span>
            </div>
          </div>

          <div className={hasImages ? "lg:col-span-7" : ""}>
            {hasImages ? (
              <ServiceMedia service={service} />
            ) : (
              <ServiceVisual slug={service.slug} />
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
      <ServiceHero service={service} />

      {/* THE WORK */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>The work</Eyebrow>

            <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
              Turning operational effort into measurable execution.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.body.map((p: string) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-sand p-8 lg:p-10">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
                Why it matters
              </p>

              <p className="mt-5 font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                {service.outcome}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>What's included</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
                Built around the way your operation actually works.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {service.includes.map((inc: string, index: number) => (
                  <div
                    key={inc}
                    className="group flex gap-5 py-6 transition-all duration-300"
                  >
                    <span className="font-display text-xs font-extrabold text-coral">
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

      {/* ADDITIONAL DETAIL */}
      {detail && (
        <>
          {/* CHALLENGE */}
          <section className="bg-background py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <Eyebrow>The challenge</Eyebrow>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
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
                      className="rounded-2xl border border-border bg-white p-6"
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

              <div className="mt-10 grid gap-4 lg:grid-cols-4">
                {detail.approach.map((a, i) => (
                  <Reveal key={a.step} delay={i * 70}>
                    <div className="h-full rounded-2xl border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                      <span className="font-display text-sm font-extrabold text-coral">
                        {a.step}
                      </span>

                      <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
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
                  className="h-full rounded-3xl p-8 text-white lg:p-10"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                    {detail.bestForTitle}
                  </p>

                  <ul className="mt-7 space-y-4">
                    {detail.bestFor.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-white/85"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-coral"
                          strokeWidth={3}
                        />
                        {b}
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

      {/* RELATED SERVICES */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>Continue exploring</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold text-foreground lg:text-4xl">
            Often deployed together with
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="font-display text-xs font-extrabold text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-display text-lg font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
                    Explore
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
