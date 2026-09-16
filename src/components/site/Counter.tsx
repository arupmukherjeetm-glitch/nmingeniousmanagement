import { useEffect, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function Counter({
  value,
  suffix = "",
  duration = 1400,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StatBoardProps = {
  items: StatItem[];
};

export function StatBoard({ items }: StatBoardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl text-white"
      style={{
        background: "var(--gradient-brand)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="relative px-8 py-10 lg:px-8 lg:py-11"
          >
            {/* NO 01 / 02 / 03 / 04 */}

            <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] sm:text-6xl">
              <Counter
                value={item.value}
                suffix={item.suffix}
              />
            </div>

            <div className="mt-5 h-0.5 w-12 bg-coral" />

            <p className="mt-4 text-sm font-medium text-white/65">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
