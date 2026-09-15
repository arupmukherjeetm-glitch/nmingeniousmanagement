import { Link } from "@tanstack/react-router";
import { clientLogos } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">{children}</p>
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
        style={{ background: "var(--coral)", opacity: 0.2 }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-white lg:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">{intro}</p>
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
            style={{ background: "var(--coral)", opacity: 0.3 }}
          />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
                Start here
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white lg:text-5xl">
                You built it for someone. Let's get it into their hands.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                If your product is listed, visible and still not selling the way you know it should,
                we will find what is blocking it and build the field system that fixes it. It starts
                with one audit.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground transition-all duration-300 hover:shadow-[0_20px_40px_-16px_oklch(0.55_0.21_27/0.7)] hover:brightness-110"
              >
                Request a Sell-Out Acceleration Audit
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoWall({ compact = false }: { compact?: boolean }) {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section
      className={cn(
        "overflow-hidden bg-background",
        compact ? "py-16" : "py-20 lg:py-28"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {!compact && (
          <div className="max-w-3xl">
            <Eyebrow>Trusted by</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground lg:text-5xl">
              Already trusted on the shelves of India's biggest brands.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From global FMCG leaders to new-age brands, companies hand us the
              last three feet between their product and their shopper.
            </p>
          </div>
        )}
      </div>

      <div
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-16 lg:gap-20">
          {row.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-20 w-[150px] shrink-0 items-center justify-center sm:w-[175px] lg:h-24 lg:w-[190px]"
            >
              <img
                src={logo.url}
                alt={logo.name}
                loading="lazy"
                className="block h-14 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-16 lg:h-[68px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
