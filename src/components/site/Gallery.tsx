import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const BENTO_LAYOUT = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
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

  const next = useCallback(() => {
    setOpen((i) =>
      i === null ? null : (i + 1) % gallery.length
    );
  }, []);

  const prev = useCallback(() => {
    setOpen((i) =>
      i === null ? null : (i - 1 + gallery.length) % gallery.length
    );
  }, []);

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, next, prev]);

  const active = open === null ? null : gallery[open];

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--coral) 12%, transparent), transparent 65%)",
        }}
      />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
              {eyebrow}
            </p>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {intro}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative mx-auto mt-16 max-w-[120rem] px-3 sm:px-5 lg:px-8">
        <div
          className="
            grid
            grid-cols-2
            auto-rows-[170px]
            gap-2
            sm:auto-rows-[190px]
            sm:gap-3
            lg:grid-cols-4
            lg:auto-rows-[210px]
            lg:gap-3
            xl:auto-rows-[230px]
          "
        >
          {gallery.map((g, i) => (
            <button
              key={`${g.url}-${i}`}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open image: ${g.alt}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-brand-deep text-left outline-none",
                "transition-all duration-500",
                "hover:z-10 hover:-translate-y-1 hover:shadow-2xl",
                "focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2",
                i === 0 && "col-span-2 row-span-2",
                i === 3 && "row-span-2",
                i === 5 && "col-span-2",
                i === 7 && "row-span-2",
                i === 8 && "col-span-2",
                i === 11 && "col-span-2",
                // On small screens keep the layout simple
                "max-sm:col-span-1 max-sm:row-span-1",
                i === 0 && "max-sm:col-span-2 max-sm:row-span-2",
              )}
            >
              {/* Image */}
              <img
                src={g.url}
                alt={g.alt}
                loading={i < 4 ? "eager" : "lazy"}
                className="
                  absolute inset-0
                  size-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.08]
                "
              />

              {/* Base darkening */}
              <div
                aria-hidden
                className="
                  absolute inset-0
                  bg-black/0
                  transition-all duration-500
                  group-hover:bg-black/20
                "
              />

              {/* Bottom gradient */}
              <div
                aria-hidden
                className="
                  absolute inset-x-0 bottom-0 h-2/3
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  opacity-60
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Top-right action */}
              <span
                aria-hidden
                className="
                  absolute right-4 top-4
                  flex size-10 items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-black/20
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all duration-500
                  group-hover:scale-100
                  group-hover:opacity-100
                  scale-75
                "
              >
                <ArrowUpRight className="size-4" />
              </span>

              {/* Image number */}
              <span
                className="
                  absolute left-4 top-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Caption */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  p-5
                  translate-y-2
                  transition-transform duration-500
                  group-hover:translate-y-0
                "
              >
                <p
                  className="
                    max-w-[90%]
                    text-xs
                    font-semibold
                    leading-relaxed
                    text-white
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                >
                  {g.alt}
                </p>
              </div>

              {/* Hover border */}
              <div
                aria-hidden
                className="
                  pointer-events-none absolute inset-0
                  rounded-2xl
                  border border-white/0
                  transition-colors duration-500
                  group-hover:border-white/20
                "
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/95
            p-4
            backdrop-blur-xl
            animate-in fade-in duration-300
          "
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="
              absolute right-5 top-5 z-10
              flex size-11 items-center justify-center
              rounded-full
              border border-white/20
              bg-white/5
              text-white
              transition-all
              hover:bg-white/10
              hover:scale-105
            "
          >
            <X className="size-5" />
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="
              absolute left-3 z-10
              flex size-12 items-center justify-center
              rounded-full
              border border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-white/10
              lg:left-8
            "
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="
              absolute right-3 z-10
              flex size-12 items-center justify-center
              rounded-full
              border border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-white/10
              lg:right-8
            "
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Image */}
          <figure
            key={active.url}
            className="
              relative
              max-h-[90vh]
              max-w-6xl
              animate-in
              fade-in
              zoom-in-95
              duration-500
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.url}
              alt={active.alt}
              className="
                max-h-[78vh]
                w-auto
                max-w-[90vw]
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            <figcaption className="mx-auto mt-5 max-w-2xl text-center">
              <p className="text-sm font-medium leading-relaxed text-white">
                {active.alt}
              </p>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                {(open ?? 0) + 1} / {gallery.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
