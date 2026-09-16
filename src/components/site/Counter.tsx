import { useEffect, useState } from "react";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StatBoardProps = {
  items: StatItem[];
};

function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      const nextValue = Math.round(value * eased);

      setCount(nextValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        start = value;
        setCount(start);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = value;
    };
  }, [value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

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
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
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
        {items.map((item, index) => (
          <div
            key={item.label}
            className={[
              "relative px-8 py-10 lg:px-8 lg:py-11",
              index !== items.length - 1
                ? "border-b border-white/10 sm:border-r lg:border-b-0"
                : "",
              index === 1
                ? "sm:border-r-0 lg:border-r"
                : "",
              index === 3
                ? "lg:border-r-0"
                : "",
            ].join(" ")}
          >
            {/* NO 01 / 02 / 03 / 04 */}

            <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] sm:text-6xl">
              <CountUp
                value={item.value}
                suffix={item.suffix}
              />
            </div>

            {/* Coral accent line */}
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
