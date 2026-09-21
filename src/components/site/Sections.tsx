import { Link } from "@tanstack/react-router";
import { clientLogos } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
      {children}
    </p>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal();

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={cn("reveal-up", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  accent,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  accent?: string;
}) {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-20 lg:pb-28 lg:pt-28"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-32 size-96 rounded-full blur-3xl"
        style={{
          background: "var(--coral)",
          opacity: 0.2,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-white lg:text-6xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
          {intro}
        </p>

        {accent && (
          <p className="mt-8 inline-block rounded-full border border-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
            {accent}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-16 lg:px-16 lg:py-20"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full blur-3xl"
            style={{
              background: "var(--coral)",
              opacity: 0.3,
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
                Start here
              </p>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white lg:text-5xl">
                You built it for someone. Let's get it into their hands.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                If your product is listed, visible and still not selling the
                way you know it should, we will find what is blocking it and
                build the field system that fixes it. It starts with one
                audit.
              </p>
            </div>

            {/* RIGHT CTA */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex min-h-[72px] min-w-[365px] shrink-0 items-center justify-center gap-4 whitespace-nowrap rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground transition-all duration-300 hover:shadow-[0_20px_40px_-16px_oklch(0.55_0.21_27/0.7)] hover:brightness-110"
              >
                <span className="whitespace-nowrap">
                  Request a Sell-Out Acceleration Audit
                </span>

                <span
                  aria-hidden
                  className="shrink-0 text-base leading-none"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CLIENT LOGO WALL
   ========================================================= */

export function LogoWall() {
  const logos = [
    {
      name: "Marico",
      src: "/logos/marico.png",
    },
    {
      name: "Castrol",
      src: "/logos/castrol.png",
    },
    {
      name: "Cipla Health",
      src: "/logos/cipla-health.png",
    },
    {
      name: "Ariel",
      src: "/logos/ariel.png",
    },
    {
      name: "Ambi Pur",
      src: "/logos/ambi-pur.png",
    },
    {
      name: "Bournvita",
      src: "/logos/bournvita.png",
    },
    {
      name: "Complan",
      src: "/logos/complan.png",
    },
    {
      name: "Pillsbury",
      src: "/logos/pillsbury.png",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">
          <h2
            className="
              font-display
              text-3xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.035em]
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Already trusted on the shelves of
            <br />
            India&apos;s biggest brands.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-muted-foreground
              sm:text-base
            "
          >
            From global FMCG leaders to new-age brands, companies hand us
            the last three feet between their product and their shopper.
          </p>
        </div>


        {/* =====================================================
            LOGO GRID
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-2
            items-center
            gap-x-8
            gap-y-10
            sm:grid-cols-4
            lg:grid-cols-8
          "
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="
                group
                flex
                min-h-[80px]
                items-center
                justify-center
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="
                  block
                  h-auto
                  max-h-16
                  w-auto
                  max-w-[150px]
                  object-contain
                  opacity-100
                  grayscale-0
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
