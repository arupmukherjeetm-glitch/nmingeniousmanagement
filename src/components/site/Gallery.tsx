import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type GalleryProps = {
  title?: string;
  eyebrow?: string;
  intro?: string;
};

export function Gallery({
  title = "On the floor, every day",
  eyebrow = "Gallery",
  intro = "Our teams inside modern trade and general trade stores across India: promoters, beauty advisors, merchandizers and activation crews at the last three feet.",
}: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  /*
   * Remove duplicate image URLs automatically.
   * This protects the gallery even if the same image is accidentally
   * added more than once in site-data.ts.
   */
  const uniqueGallery = useMemo(() => {
    const seen = new Set<string>();

    return gallery.filter((item) => {
      const normalizedUrl = item.url.split("?")[0].toLowerCase();

      if (seen.has(normalizedUrl)) {
        return false;
      }

      seen.add(normalizedUrl);
      return true;
    });
  }, []);

  const close = useCallback(() => {
    setOpen(null);
  }, []);

  const next = useCallback(() => {
    setOpen((current) => {
      if (current === null || uniqueGallery.length === 0) {
        return current;
      }

      return (current + 1) % uniqueGallery.length;
    });
  }, [uniqueGallery.length]);

  const prev = useCallback(() => {
    setOpen((current) => {
      if (current === null || uniqueGallery.length === 0) {
        return current;
      }

      return (
        (current - 1 + uniqueGallery.length) %
        uniqueGallery.length
      );
    });
  }, [uniqueGallery.length]);

  useEffect(() => {
    if (open === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, next, prev]);

  const active =
    open === null ? null : uniqueGallery[open] ?? null;

  /*
   * Controlled editorial sizing.
   *
   * The actual source image dimensions do not control the visual height.
   * This prevents very tall portrait images from becoming enormous.
   */
  const getCardClass = (index: number) => {
    const patterns = [
      "md:col-span-7 md:row-span-2",
      "md:col-span-5 md:row-span-1",
      "md:col-span-5 md:row-span-1",
      "md:col-span-4 md:row-span-2",
      "md:col-span-4 md:row-span-1",
      "md:col-span-4 md:row-span-1",
      "md:col-span-8 md:row-span-2",
      "md:col-span-4 md:row-span-2",
      "md:col-span-4 md:row-span-1",
      "md:col-span-4 md:row-span-1",
      "md:col-span-6 md:row-span-2",
      "md:col-span-6 md:row-span-1",
    ];

    return patterns[index % patterns.length];
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        {/* Ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--coral) 18%, transparent), transparent 68%)",
          }}
        />

        {/* Header */}
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-coral" />

                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-coral">
                  {eyebrow}
                </p>
              </div>

              <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-7xl">
                {title}
              </h2>
            </div>

            <div className="flex max-w-md flex-col gap-5 lg:pb-1">
              <p className="text-sm leading-7 text-muted-foreground">
                {intro}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  {String(uniqueGallery.length).padStart(2, "0")}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                  Moments from<br />
                  the field
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative mx-auto mt-16 max-w-[1400px] px-3 sm:px-5 lg:mt-20 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              gap-3
              md:grid-cols-12
              md:auto-rows-[170px]
              lg:auto-rows-[185px]
              xl:auto-rows-[200px]
            "
          >
            {uniqueGallery.map((item, index) => (
              <button
                key={`${item.url}-${index}`}
                type="button"
                onClick={() => setOpen(index)}
                aria-label={`Open image: ${item.alt}`}
                className={cn(
                  "group relative min-h-[280px] overflow-hidden rounded-[1.25rem] bg-brand-deep text-left outline-none",
                  "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:z-10 hover:-translate-y-1.5 hover:shadow-2xl",
                  "focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4",
                  getCardClass(index),
                )}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    absolute inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.065]
                  "
                />

                {/* Soft cinematic overlay */}
                <div
                  aria-hidden
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/5
                    to-transparent
                    opacity-70
                    transition-all
                    duration-700
                    group-hover:from-black/90
                    group-hover:via-black/15
                    group-hover:opacity-100
                  "
                />

                {/* Subtle image sheen */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-white/0
                    transition-all
                    duration-700
                    group-hover:bg-white/[0.025]
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute left-5 top-5
                    text-[9px]
                    font-bold
                    tracking-[0.25em]
                    text-white/70
                    transition-all
                    duration-500
                    group-hover:text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Open button */}
                <span
                  aria-hidden
                  className="
                    absolute right-5 top-5
                    flex size-10
                    translate-y-2
                    scale-75
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    text-white
                    opacity-0
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight className="size-4" />
                </span>

                {/* Caption */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    p-5
                    sm:p-6
                  "
                >
                  <div
                    className="
                      translate-y-3
                      transition-transform
                      duration-600
                      group-hover:translate-y-0
                    "
                  >
                    <p
                      className="
                        max-w-[90%]
                        text-xs
                        font-semibold
                        leading-5
                        text-white
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    >
                      {item.alt}
                    </p>
                  </div>
                </div>

                {/* Premium border */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[1.25rem]
                    border border-white/0
                    transition-colors duration-500
                    group-hover:border-white/20
                  "
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div className="relative mx-auto mt-8 max-w-[1400px] px-5 lg:px-8">
          <div className="flex items-center justify-between border-t border-border/60 pt-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              Field execution
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              India · MT · GT
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/[0.96]
            p-4
            backdrop-blur-2xl
            animate-in
            fade-in
            duration-300
          "
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={close}
            className="
              absolute right-5 top-5 z-20
              flex size-11
              items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/10
            "
          >
            <X className="size-5" />
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            className="
              absolute left-3 top-1/2 z-20
              flex size-12
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/15
              bg-black/30
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
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
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="
              absolute right-3 top-1/2 z-20
              flex size-12
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/15
              bg-black/30
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/10
              lg:right-8
            "
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Active image */}
          <figure
            key={active.url}
            onClick={(event) => event.stopPropagation()}
            className="
              flex
              max-h-[90vh]
              max-w-[90vw]
              flex-col
              items-center
              animate-in
              fade-in
              zoom-in-95
              duration-500
            "
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={active.url}
                alt={active.alt}
                className="
                  max-h-[76vh]
                  max-w-[88vw]
                  object-contain
                  shadow-2xl
                "
              />
            </div>

            <figcaption className="mt-5 max-w-2xl text-center">
              <p className="text-sm font-medium leading-relaxed text-white">
                {active.alt}
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                {(open ?? 0) + 1} / {uniqueGallery.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
