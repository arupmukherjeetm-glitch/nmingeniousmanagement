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
   * Remove duplicate URLs.
   */
  const uniqueGallery = useMemo(() => {
    const seen = new Set<string>();

    return gallery.filter((item) => {
      const normalized = item.url.split("?")[0].toLowerCase();

      if (seen.has(normalized)) {
        return false;
      }

      seen.add(normalized);
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

  /*
   * Controlled gallery patterns.
   *
   * IMPORTANT:
   * Every row has the same height.
   * There are NO row spans.
   * There are NO overlapping cards.
   *
   * The visual rhythm comes from different column widths.
   */
  const layouts = [
    // Row 1
    ["col-span-7", "col-span-5"],

    // Row 2
    ["col-span-4", "col-span-4", "col-span-4"],

    // Row 3
    ["col-span-5", "col-span-7"],

    // Row 4
    ["col-span-4", "col-span-5", "col-span-3"],

    // Row 5
    ["col-span-7", "col-span-5"],

    // Row 6
    ["col-span-3", "col-span-3", "col-span-6"],
  ];

  /*
   * Convert the flat gallery into visual rows.
   */
  const rows: typeof uniqueGallery[] = [];

  let imageIndex = 0;

  layouts.forEach((layout) => {
    const row = uniqueGallery.slice(
      imageIndex,
      imageIndex + layout.length,
    );

    if (row.length === layout.length) {
      rows.push(row);
      imageIndex += layout.length;
    }
  });

  /*
   * Any remaining images are rendered in a final
   * clean 3-column row.
   */
  const remaining = uniqueGallery.slice(imageIndex);

  if (remaining.length > 0) {
    for (let i = 0; i < remaining.length; i += 3) {
      rows.push(remaining.slice(i, i + 3));
    }
  }

  let globalIndex = 0;

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -top-40
            left-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            opacity-[0.12]
            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--coral) 25%, transparent), transparent 70%)",
          }}
        />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-coral" />

                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-coral">
                  {eyebrow}
                </p>
              </div>

              <h2
                className="
                  mt-6
                  max-w-4xl
                  font-display
                  text-4xl
                  font-extrabold
                  leading-[0.92]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                {title}
              </h2>
            </div>

            <div className="max-w-md">

              <p className="text-sm leading-7 text-muted-foreground">
                {intro}
              </p>

              <div className="mt-7 flex items-center gap-4">

                <span
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  {String(uniqueGallery.length).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-muted-foreground
                  "
                >
                  Moments<br />
                  from the field
                </span>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            GALLERY WALL
        ====================================================== */}

        <div className="relative mt-16 lg:mt-20">

          {/* Thin top rule */}
          <div className="mx-auto max-w-[1500px] border-t border-border/60" />

          <div className="mx-auto max-w-[1500px]">

            {rows.map((row, rowIndex) => {
              const rowLayout =
                rowIndex < layouts.length
                  ? layouts[rowIndex]
                  : Array(row.length).fill("col-span-4");

              return (
                <div
                  key={`gallery-row-${rowIndex}`}
                  className="
                    grid
                    grid-cols-12
                    gap-[2px]
                    bg-border/60
                  "
                >
                  {row.map((item, columnIndex) => {

                    const currentIndex = globalIndex++;

                    const span =
                      rowLayout[columnIndex] || "col-span-4";

                    return (
                      <button
                        key={`${item.url}-${currentIndex}`}
                        type="button"
                        onClick={() => setOpen(currentIndex)}
                        aria-label={`Open image: ${item.alt}`}
                        className={`
                          group
                          relative
                          ${span}
                          h-[220px]
                          overflow-hidden
                          bg-brand-deep
                          text-left
                          outline-none

                          sm:h-[260px]

                          lg:h-[310px]

                          xl:h-[340px]

                          transition-all
                          duration-500
                        `}
                      >

                        {/* =================================================
                            IMAGE
                        ================================================== */}

                        <img
                          src={item.url}
                          alt={item.alt}
                          loading={
                            currentIndex === 0
                              ? "eager"
                              : "lazy"
                          }
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover

                            transition-transform
                            duration-[900ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            group-hover:scale-[1.06]
                          "
                        />

                        {/* =================================================
                            HOVER OVERLAY
                        ================================================== */}

                        <div
                          aria-hidden
                          className="
                            absolute
                            inset-0
                            bg-black/0

                            transition-all
                            duration-500

                            group-hover:bg-black/30
                          "
                        />

                        {/* Bottom gradient */}

                        <div
                          aria-hidden
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            h-2/3

                            bg-gradient-to-t
                            from-black/80
                            via-black/20
                            to-transparent

                            opacity-60

                            transition-opacity
                            duration-500

                            group-hover:opacity-100
                          "
                        />

                        {/* =================================================
                            NUMBER
                        ================================================== */}

                        <span
                          className="
                            absolute
                            left-5
                            top-5

                            text-[9px]
                            font-bold
                            tracking-[0.28em]
                            text-white/60

                            transition-colors
                            duration-300

                            group-hover:text-white
                          "
                        >
                          {String(currentIndex + 1).padStart(2, "0")}
                        </span>

                        {/* =================================================
                            ARROW
                        ================================================== */}

                        <span
                          aria-hidden
                          className="
                            absolute
                            right-5
                            top-5

                            flex
                            size-11
                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/20

                            bg-black/20

                            text-white

                            opacity-0
                            scale-75

                            backdrop-blur-xl

                            transition-all
                            duration-500

                            group-hover:scale-100
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight className="size-4" />
                        </span>

                        {/* =================================================
                            CAPTION
                        ================================================== */}

                        <div
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            p-5
                            lg:p-6
                          "
                        >
                          <p
                            className="
                              max-w-[90%]

                              translate-y-3

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

                        {/* =================================================
                            BORDER
                        ================================================== */}

                        <span
                          aria-hidden
                          className="
                            pointer-events-none
                            absolute
                            inset-0

                            border
                            border-white/0

                            transition-colors
                            duration-500

                            group-hover:border-white/25
                          "
                        />

                      </button>
                    );
                  })}
                </div>
              );
            })}

          </div>

          {/* Bottom rule */}
          <div className="mx-auto max-w-[1500px] border-b border-border/60" />
        </div>

        {/* =====================================================
            SMALL FOOTER LABEL
        ====================================================== */}

        <div className="mx-auto mt-6 flex max-w-[1500px] items-center justify-between px-5 lg:px-8">

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-muted-foreground
            "
          >
            Field execution
          </span>

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-muted-foreground
            "
          >
            India · MT · GT
          </span>

        </div>
      </section>

      {/* =======================================================
          LIGHTBOX
      ======================================================== */}

      {active && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/[0.97]

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
              absolute
              right-5
              top-5
              z-30

              flex
              size-11
              items-center
              justify-center

              rounded-full

              border
              border-white/15

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
              absolute
              left-3
              top-1/2
              z-30

              flex
              size-12
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/15

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
              absolute
              right-3
              top-1/2
              z-30

              flex
              size-12
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/15

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

          {/* Image */}

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

                rounded-xl

                object-contain

                shadow-2xl
              "
            />

            <figcaption className="mt-5 max-w-2xl text-center">

              <p className="text-sm font-medium leading-relaxed text-white">
                {active.alt}
              </p>

              <p
                className="
                  mt-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                {(open ?? 0) + 1} / {uniqueGallery.length}
              </p>

            </figcaption>

          </figure>
        </div>
      )}
    </>
  );
}
