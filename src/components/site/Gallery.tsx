import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Edge-to-edge mosaic gallery. Every tile is a fixed-ratio cell in a dense
 * 12-column grid with a 2px hairline gutter, so there are no white gaps or
 * ragged rows regardless of the source image aspect ratio.
 */
const SPANS = [
  "col-span-6 row-span-2 lg:col-span-4",
  "col-span-6 lg:col-span-2",
  "col-span-6 lg:col-span-2",
  "col-span-6 row-span-2 lg:col-span-4",
  "col-span-6 lg:col-span-2",
  "col-span-6 lg:col-span-2",
  "col-span-6 lg:col-span-3",
  "col-span-6 lg:col-span-3",
  "col-span-6 row-span-2 lg:col-span-3",
  "col-span-6 lg:col-span-3",
  "col-span-6 lg:col-span-3",
  "col-span-6 lg:col-span-3",
];

export function Gallery({
  title = "On the floor, every day",
  eyebrow = "Gallery",
  intro = "Our teams inside modern trade and general trade stores across India: promoters, beauty advisors, merchandizers and activation crews at the last three feet.",
}: {
  title?: string;
  eyebrow?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const active = open === null ? null : gallery[open];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">{eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      </div>

      <div className="mt-14 px-0 lg:px-8">
        <div className="mx-auto max-w-[110rem] overflow-hidden rounded-none lg:rounded-2xl">
          <div className="grid auto-rows-[minmax(9rem,1fr)] grid-cols-12 gap-[2px] bg-brand-deep sm:auto-rows-[minmax(11rem,1fr)] lg:auto-rows-[minmax(12.5rem,1fr)]">
            {gallery.map((g, i) => (
              <button
                key={g.url + i}
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open image: ${g.alt}`}
                className={cn(
                  "group relative overflow-hidden bg-brand-deep outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-coral",
                  SPANS[i % SPANS.length],
                )}
              >
                <img
                  src={g.url}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--brand-deep) 92%, transparent), transparent 65%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute right-3 top-3 flex size-9 scale-90 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                >
                  <Expand className="size-4" />
                </span>
                <span className="absolute inset-x-4 bottom-4 translate-y-3 text-left text-xs font-semibold leading-snug text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/95 p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            onClick={close}
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 inline-flex size-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 lg:left-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 inline-flex size-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 lg:right-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="size-5" />
          </button>

          <figure
            key={active.url}
            className="max-h-[85vh] max-w-4xl animate-in fade-in zoom-in-95 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.url}
              alt={active.alt}
              className="max-h-[72vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mx-auto mt-5 max-w-2xl text-center">
              <p className="text-sm font-medium leading-relaxed text-white">{active.alt}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                {(open ?? 0) + 1} / {gallery.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
