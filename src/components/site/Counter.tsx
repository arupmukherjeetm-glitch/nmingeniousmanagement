import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function Counter({
  value,
  suffix = "",
  duration = 1900,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(easeOutExpo(p) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatBoard({
  items,
  tone = "dark",
}: {
  items: { value: number; suffix: string; label: string }[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        dark ? "text-primary-foreground" : "text-foreground",
      )}
      style={dark ? { background: "var(--gradient-brand)" } : undefined}
    >
      {dark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full blur-3xl"
            style={{ background: "var(--coral)", opacity: 0.28 }}
          />
        </>
      )}
      <div className="relative grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.label}
            className={cn(
              "group relative px-8 py-12",
              dark ? "border-white/10" : "border-border",
              i > 0 && "lg:border-l",
              i % 2 === 1 && "sm:border-l lg:border-l",
              i >= 2 && "lg:border-t-0",
              i >= 2 && "sm:border-t",
            )}
          >
            <span
              className={cn(
                "block text-xs font-bold uppercase tracking-[0.2em]",
                dark ? "text-white/45" : "text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-4 font-display text-5xl font-extrabold leading-none lg:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <span
              className={cn(
                "mt-4 block h-0.5 w-10 origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-[3.2]",
              )}
              style={{ background: "var(--coral)" }}
            />
            <p
              className={cn(
                "mt-4 text-sm leading-relaxed",
                dark ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
