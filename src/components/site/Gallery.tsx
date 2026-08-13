import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={g.url + i}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open image: ${g.alt}`}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                i % 6 === 0 && "lg:col-span-2 lg:row-span-2 lg:aspect-auto",
              )}
            >
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, var(--brand-deep), transparent 60%)",
                }}
              />
              <span
                aria-hidden
                className="absolute inset-2 rounded-lg border border-white/0 transition-all duration-500 group-hover:border-white/50"
              />
              <span
                aria-hidden
                className="absolute right-4 top-4 flex size-9 scale-90 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
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
              className="max-h-[72vh] w-auto rounded-xl object-contain shadow-2xl"
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
