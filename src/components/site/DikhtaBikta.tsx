import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * "Jo Accha Dikhta hai, Woh Jaldi Bikta hai"
 *
 * Choreography (one 7.2s loop):
 *  1. "Dikhta" lifts off its slot like a pack being picked up,
 *  2. arcs across the line to the "Bikta" slot,
 *  3. lands, flashes into "Bikta" with a SOLD tag and an underline sweep,
 *  4. a fresh "Dikhta" is restocked into the first slot from below.
 *
 * Looks good -> gets picked -> sells. Then the shelf is restocked.
 */
export function DikhtaBikta() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const fromRef = useRef<HTMLSpanElement | null>(null);
  const toRef = useRef<HTMLSpanElement | null>(null);
  const [dx, setDx] = useState(0);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const a = fromRef.current;
      const b = toRef.current;
      if (!a || !b) return;
      setDx(b.getBoundingClientRect().left - a.getBoundingClientRect().left);
      setReady(true);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const [play, setPlay] = useState(false);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPlay(true);
      return;
    }
    const io = new IntersectionObserver(
      (e) => setPlay(Boolean(e[0]?.isIntersecting)),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const anim = (name: string) =>
  play && ready
    ? { animation: `${name} 2.8s cubic-bezier(0.65,0,0.35,1) infinite` }
    : undefined;

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ background: "var(--gradient-brand)" }}
      aria-label="Jo accha dikhta hai, woh jaldi bikta hai"
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
      <div className="relative mx-auto max-w-6xl px-5 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
          The whole business, in one line
        </p>

        <div
          className="relative mx-auto mt-10 select-none font-display text-3xl font-extrabold leading-[1.35] text-white sm:text-4xl lg:text-[3.4rem] lg:leading-[1.3]"
          style={{ "--db-dx": `${dx}px` } as React.CSSProperties}
        >
          <span className="whitespace-nowrap">Jo Accha </span>

          {/* Slot A — Dikhta */}
          <span
            ref={fromRef}
            className="relative inline-block align-baseline"
            style={{ minWidth: "1ch" }}
          >
            {/* the outgoing / travelling pack */}
            <span
              className="pointer-events-none absolute left-0 top-0 whitespace-nowrap"
              style={{
                color: "var(--coral)",
                ...anim("db-depart"),
              }}
              aria-hidden
            >
              Dikhta
            </span>
            {/* the restocked pack */}
            <span
              className="inline-block whitespace-nowrap"
              style={{ ...anim("db-restock"), opacity: play && ready ? undefined : 1 }}
            >
              Dikhta
            </span>
            {/* base copy that hides at cycle start */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 whitespace-nowrap"
              style={play && ready ? anim("db-source-out") : { opacity: 0 }}
            >
              Dikhta
            </span>
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-px w-full"
              style={{ background: "rgba(255,255,255,0.22)" }}
            />
          </span>

          <span className="whitespace-nowrap"> hai,</span>
          <br className="hidden sm:block" />
          <span className="whitespace-nowrap"> Woh Jaldi </span>

          {/* Slot B — Bikta */}
          <span ref={toRef} className="relative inline-block align-baseline">
            {/* dashed empty-slot placeholder */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-2 h-px"
              style={{ background: "rgba(255,255,255,0.22)" }}
            />
            <span
              className="inline-block whitespace-nowrap"
              style={{
                color: "var(--coral)",
                ...anim("db-land"),
                opacity: play && ready ? undefined : 1,
              }}
            >
              Bikta
            </span>
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-[3px] w-full origin-left"
              style={{ background: "var(--coral)", ...anim("db-sweep") }}
            />
            <span
              aria-hidden
              className="absolute -right-4 -top-7 rounded-sm px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:-right-10"
              style={{ background: "var(--coral)", ...anim("db-tag") }}
            >
              Sold
            </span>
          </span>

          <span className="whitespace-nowrap"> hai.</span>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
          What looks good, sells fast. Presence, packaging and a trained voice at the shelf are not
          decoration. They are the difference between a product that waits and a product that
          moves.
        </p>
      </div>
    </section>
  );
}
