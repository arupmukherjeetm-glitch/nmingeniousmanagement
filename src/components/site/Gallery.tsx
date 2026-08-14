import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { gallery } from "@/lib/site-data";

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

  /*
   * Remove duplicate image URLs automatically.
   */
  const uniqueGallery = useMemo(() => {
    const seen = new Set<string>();

    return gallery.filter((item) => {
      const url = item.url.split("?")[0].toLowerCase();

      if (seen.has(url)) return false;

      seen.add(url);
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
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
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

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Very subtle ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--coral) 14%, transparent), transparent 68%)",
        }}
      />

      {/* =========================
          HEADER
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-coral" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-coral">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-muted-foreground">
              {intro}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {String(uniqueGallery.length).padStart(2, "0")}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Field moments
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          GALLERY
      ========================== */}
      <div className="relative mx-auto mt-16 max-w-7xl px-5 lg:mt-20 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {uniqueGallery.map((item, index) => (
            <button
              key={`${item.url}-${index}`}
              type="button"
              onClick={() => setOpen(index)}
              aria-label={`Open image: ${item.alt}`}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-brand-deep
                text-left
                outline-none
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-1
                hover:shadow-2xl
                focus-visible:ring-2
                focus-visible:ring-coral
                focus-visible:ring-offset-4
              "
            >
              {/* IMAGE FRAME
                  Fixed height means portrait images
                  cannot become excessively tall.
              */}
              <div
                className="
                  relative
                  h-[260px]
                  overflow-hidden
                  sm:h-[280px]
                  lg:h-[300px]
                  xl:h-[320px]
                "
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.07]
                  "
                />

                {/* Dark gradient */}
                <div
                  aria-hidden
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top left number */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    text-[9px]
                    font-bold
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Open icon */}
                <span
                  aria-hidden
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight className="size-4" />
                </span>

                {/* Caption */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                  "
                >
                  <p
                    className="
                      max-w-[90%]
                      translate-y-2
                      text-xs
                      font-semibold
                      leading-5
                      text-white
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {item.alt}
                  </p>
                </div>
              </div>

              {/* Clean card footer */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  bg-brand-deep
                  px-5
                  py-4
                "
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Field execution
                </span>

                <ArrowUpRight
                  className="
                    size-4
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-white
                  "
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =========================
          LIGHTBOX
      ========================== */}
      {active && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
            backdrop-blur-xl
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
              absolute
              right-5
              top-5
              z-20
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/5
              text-white
              backdrop-blur-md
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
              absolute
              left-3
              top-1/2
              z-20
              flex
              size-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
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
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              size-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
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
            <img
              src={active.url}
              alt={active.alt}
              className="
                max-h-[78vh]
                max-w-[88vw]
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

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
    </section>
  );
}
