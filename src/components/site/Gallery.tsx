import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site-data";

type GalleryProps = {
  title?: string;
  eyebrow?: string;
  intro?: string;
};

export function Gallery({
  title = "Execution, where it matters.",
  eyebrow = "In the field",
  intro = "Our teams bring strategy to life at the last three feet, across stores, shelves, activations and shopper touchpoints.",
}: GalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  /*
   * One complete set of images.
   *
   * We render TWO identical groups side-by-side.
   * CSS moves the entire track by exactly 50%.
   * This creates a seamless infinite loop.
   */
  const imageSet = gallery;

  const close = useCallback(() => {
    setOpen(null);
  }, []);

  const next = useCallback(() => {
    setOpen((current) => {
      if (current === null || gallery.length === 0) {
        return null;
      }

      return (current + 1) % gallery.length;
    });
  }, []);

  const previous = useCallback(() => {
    setOpen((current) => {
      if (current === null || gallery.length === 0) {
        return null;
      }

      return (
        (current - 1 + gallery.length) %
        gallery.length
      );
    });
  }, []);

  /*
   * Keyboard controls for image viewer.
   */
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
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [open, close, next, previous]);

  const active =
    open === null ? null : gallery[open];

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-background
          py-24
          lg:py-32
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* LEFT */}

            <div className="max-w-3xl">
              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-[2px]
                    w-12
                    bg-coral
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-coral
                  "
                >
                  {eyebrow}
                </p>
              </div>

              <h2
                className="
                  font-display
                  text-4xl
                  font-extrabold
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {title}
              </h2>
            </div>

            {/* RIGHT */}

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-muted-foreground
                lg:text-base
              "
            >
              {intro}
            </p>
          </div>
        </div>

        {/* =====================================================
            GALLERY MARQUEE
        ====================================================== */}

        <div
          className="
            relative
            mt-14
            w-full
            overflow-hidden
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-10
              bg-gradient-to-r
              from-background
              to-transparent
              sm:w-20
              lg:w-32
            "
          />

          {/* RIGHT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-10
              bg-gradient-to-l
              from-background
              to-transparent
              sm:w-20
              lg:w-32
            "
          />

          {/* ===================================================
              MOVING TRACK

              Two identical groups.
              CSS moves the track exactly 50%.
          ==================================================== */}

          <div
            className={`
              gallery-marquee-track
              flex
              w-max
              ${isPaused ? "is-paused" : ""}
            `}
          >
            {/* GROUP 1 */}

            <div
              className="
                flex
                shrink-0
                gap-5
                pr-5
                lg:gap-6
                lg:pr-6
              "
            >
              {imageSet.map((image, index) => (
                <GalleryCard
                  key={`first-${image.url}-${index}`}
                  image={image}
                  index={index}
                  onOpen={() => setOpen(index)}
                />
              ))}
            </div>

            {/* GROUP 2 */}

            <div
              className="
                flex
                shrink-0
                gap-5
                pr-5
                lg:gap-6
                lg:pr-6
              "
              aria-hidden="true"
            >
              {imageSet.map((image, index) => (
                <GalleryCard
                  key={`second-${image.url}-${index}`}
                  image={image}
                  index={index}
                  onOpen={() => setOpen(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            STATUS
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-8
          "
        >
          <div className="flex items-center gap-3">
            <span
              className={`
                size-2
                rounded-full
                bg-coral
                ${
                  isPaused
                    ? "opacity-40"
                    : "animate-pulse"
                }
              `}
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-muted-foreground
              "
            >
              {isPaused
                ? "Gallery paused"
                : "Field execution in motion"}
            </span>
          </div>

          <span
            className="
              hidden
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-muted-foreground/50
              sm:block
            "
          >
            Hover to pause · Click to explore
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
            bg-[#071F36]/95
            p-5
            backdrop-blur-xl
          "
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={close}
        >
          {/* CLOSE */}

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
              size-12
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
              hover:bg-white/10
            "
          >
            <X className="size-5" />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="
              absolute
              left-3
              z-30
              flex
              size-12
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
              hover:bg-white/10
              lg:left-8
            "
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* NEXT */}

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
              z-30
              flex
              size-12
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
              hover:bg-white/10
              lg:right-8
            "
          >
            <ChevronRight className="size-5" />
          </button>

          {/* IMAGE */}

          <figure
            className="
              relative
              max-h-[90vh]
              max-w-6xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={active.url}
              alt={active.alt}
              className="
                max-h-[78vh]
                w-auto
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            <figcaption className="mt-5 text-center">
              <p
                className="
                  text-sm
                  font-medium
                  text-white
                "
              >
                {active.alt}
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                {open !== null
                  ? `${open + 1} / ${gallery.length}`
                  : ""}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

/* ============================================================
   GALLERY CARD
   ============================================================ */

function GalleryCard({
  image,
  index,
  onOpen,
}: {
  image: {
    url: string;
    alt: string;
  };
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View image: ${image.alt}`}
      className="
        gallery-card
        group
        relative
        block
        h-[360px]
        w-[270px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        bg-brand-deep
        text-left
        outline-none
        focus-visible:ring-2
        focus-visible:ring-coral
        focus-visible:ring-offset-4
        focus-visible:ring-offset-background

        sm:h-[400px]
        sm:w-[300px]

        lg:h-[460px]
        lg:w-[345px]
      "
    >
      {/* IMAGE */}

      <img
        src={image.url}
        alt={image.alt}
        loading={index < 5 ? "eager" : "lazy"}
        draggable={false}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.06]
        "
      />

      {/* DARK BOTTOM GRADIENT */}

      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent
          opacity-60
          transition-opacity
          duration-500
          group-hover:opacity-90
        "
      />

      {/* NUMBER */}

      <span
        className="
          absolute
          left-5
          top-5
          rounded-full
          border
          border-white/25
          bg-black/20
          px-3
          py-1.5
          text-[10px]
          font-bold
          tracking-[0.18em]
          text-white/80
          backdrop-blur-md
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* VIEW INDICATOR */}

      <span
        aria-hidden="true"
        className="
          absolute
          right-5
          top-5
          flex
          size-10
          scale-90
          items-center
          justify-center
          rounded-full
          border
          border-white/25
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
        <ChevronRight className="size-4" />
      </span>

      {/* BOTTOM ACCENT */}

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-5
          left-5
          h-[2px]
          w-8
          bg-coral
          transition-all
          duration-500
          group-hover:w-14
        "
      />

      {/* CAPTION */}

      <span
        className="
          absolute
          inset-x-5
          bottom-8
          translate-y-3
          pr-4
          text-sm
          font-semibold
          leading-6
          text-white
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {image.alt}
      </span>
    </button>
  );
}
