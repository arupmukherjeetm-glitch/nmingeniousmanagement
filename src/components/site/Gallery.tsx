import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  /*
   * Remove duplicate image URLs.
   */
  const uniqueGallery = useMemo(() => {
    const seen = new Set<string>();

    return gallery.filter((item) => {
      const normalizedUrl = item.url
        .split("?")[0]
        .toLowerCase();

      if (seen.has(normalizedUrl)) {
        return false;
      }

      seen.add(normalizedUrl);
      return true;
    });
  }, []);

  /*
   * Keep active index valid if gallery changes.
   */
  useEffect(() => {
    if (activeIndex >= uniqueGallery.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, uniqueGallery.length]);

  /*
   * NEXT
   */
  const next = useCallback(() => {
    setActiveIndex((current) =>
      uniqueGallery.length
        ? (current + 1) % uniqueGallery.length
        : 0,
    );
  }, [uniqueGallery.length]);

  /*
   * PREVIOUS
   */
  const previous = useCallback(() => {
    setActiveIndex((current) =>
      uniqueGallery.length
        ? (current - 1 + uniqueGallery.length) %
          uniqueGallery.length
        : 0,
    );
  }, [uniqueGallery.length]);

  /*
   * AUTO PLAY
   *
   * Changes image every 4 seconds.
   * Stops while user is hovering over the gallery.
   */
  useEffect(() => {
    if (
      isPaused ||
      lightboxOpen ||
      uniqueGallery.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      next();
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isPaused,
    lightboxOpen,
    next,
    uniqueGallery.length,
  ]);

  /*
   * Keyboard controls for lightbox.
   */
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

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
  }, [lightboxOpen, next, previous]);

  /*
   * Calculate circular distance between an image
   * and the currently active image.
   */
  const getRelativePosition = (index: number) => {
    const total = uniqueGallery.length;

    if (!total) return 0;

    let difference =
      index - activeIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  /*
   * Get visual properties for each card.
   */
  const getCardStyle = (
    position: number,
  ): React.CSSProperties => {
    /*
     * CENTER
     */
    if (position === 0) {
      return {
        left: "50%",
        top: "50%",
        width:
          "clamp(250px, 32vw, 410px)",
        height:
          "clamp(330px, 42vw, 510px)",
        transform:
          "translate(-50%, -50%) scale(1)",
        zIndex: 30,
        opacity: 1,
      };
    }

    /*
     * IMMEDIATELY LEFT
     */
    if (position === -1) {
      return {
        left:
          "calc(50% - clamp(210px, 25vw, 330px))",
        top: "50%",
        width:
          "clamp(210px, 27vw, 340px)",
        height:
          "clamp(280px, 35vw, 420px)",
        transform:
          "translate(-50%, -50%) scale(0.88)",
        zIndex: 20,
        opacity: 0.82,
      };
    }

    /*
     * IMMEDIATELY RIGHT
     */
    if (position === 1) {
      return {
        left:
          "calc(50% + clamp(210px, 25vw, 330px))",
        top: "50%",
        width:
          "clamp(210px, 27vw, 340px)",
        height:
          "clamp(280px, 35vw, 420px)",
        transform:
          "translate(-50%, -50%) scale(0.88)",
        zIndex: 20,
        opacity: 0.82,
      };
    }

    /*
     * FAR LEFT
     */
    if (position === -2) {
      return {
        left:
          "calc(50% - clamp(390px, 45vw, 560px))",
        top: "50%",
        width:
          "clamp(170px, 22vw, 280px)",
        height:
          "clamp(230px, 29vw, 350px)",
        transform:
          "translate(-50%, -50%) scale(0.76)",
        zIndex: 10,
        opacity: 0.45,
      };
    }

    /*
     * FAR RIGHT
     */
    if (position === 2) {
      return {
        left:
          "calc(50% + clamp(390px, 45vw, 560px))",
        top: "50%",
        width:
          "clamp(170px, 22vw, 280px)",
        height:
          "clamp(230px, 29vw, 350px)",
        transform:
          "translate(-50%, -50%) scale(0.76)",
        zIndex: 10,
        opacity: 0.45,
      };
    }

    /*
     * Everything else is hidden.
     */
    return {
      left: "50%",
      top: "50%",
      width: "260px",
      height: "340px",
      transform:
        "translate(-50%, -50%) scale(0.6)",
      zIndex: 0,
      opacity: 0,
      pointerEvents: "none",
    };
  };

  if (!uniqueGallery.length) {
    return null;
  }

  const activeImage =
    uniqueGallery[activeIndex];

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
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-coral" />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-coral
                  "
                >
                  {eyebrow}
                </p>
              </div>

              <h2
                className="
                  mt-5
                  font-display
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {title}
              </h2>
            </div>

            <div className="max-w-md">
              <p
                className="
                  text-sm
                  leading-7
                  text-muted-foreground
                "
              >
                {intro}
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  {String(
                    uniqueGallery.length,
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-muted-foreground
                  "
                >
                  Field moments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            h-[500px]
            w-full
            max-w-[1500px]
            overflow-hidden
            sm:h-[560px]
            lg:mt-20
            lg:h-[620px]
          "
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >
          {/* Soft central glow */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[400px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-20
              blur-3xl
            "
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--coral) 20%, transparent), transparent 70%)",
            }}
          />

          {/* Cards */}

          <div
            className="
              absolute
              inset-0
            "
          >
            {uniqueGallery.map(
              (item, index) => {
                const position =
                  getRelativePosition(index);

                const style =
                  getCardStyle(position);

                /*
                 * Only render the five visible
                 * positions for performance.
                 */
                if (Math.abs(position) > 2) {
                  return null;
                }

                const isActive =
                  position === 0;

                return (
                  <button
                    key={`${item.url}-${index}`}
                    type="button"
                    onClick={() => {
                      if (isActive) {
                        setLightboxOpen(true);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    aria-label={
                      isActive
                        ? `Open image: ${item.alt}`
                        : `View image: ${item.alt}`
                    }
                    className="
                      absolute
                      overflow-hidden
                      rounded-[24px]
                      bg-brand-deep
                      text-left
                      shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                      outline-none
                      transition-all
                      duration-[900ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      focus-visible:ring-2
                      focus-visible:ring-coral
                      focus-visible:ring-offset-4
                    "
                    style={style}
                  >
                    {/* Image */}

                    <img
                      src={item.url}
                      alt={item.alt}
                      loading={
                        isActive
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
                        duration-[1000ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-105
                      "
                    />

                    {/* Gradient */}

                    <div
                      aria-hidden
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/5
                        to-transparent
                      "
                    />

                    {/* Active image border */}

                    {isActive && (
                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-[24px]
                          border
                          border-white/20
                        "
                      />
                    )}

                    {/* Active image expand button */}

                    {isActive && (
                      <span
                        aria-hidden
                        className="
                          absolute
                          right-5
                          top-5
                          flex
                          size-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/20
                          text-white
                          backdrop-blur-xl
                        "
                      >
                        <Expand className="size-4" />
                      </span>
                    )}

                    {/* Caption */}

                    {isActive && (
                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          p-6
                        "
                      >
                        <p
                          className="
                            text-xs
                            font-semibold
                            leading-5
                            text-white
                          "
                        >
                          {item.alt}
                        </p>

                        <p
                          className="
                            mt-2
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.28em]
                            text-white/50
                          "
                        >
                          {String(
                            index + 1,
                          ).padStart(2, "0")}{" "}
                          /{" "}
                          {String(
                            uniqueGallery.length,
                          ).padStart(2, "0")}
                        </p>
                      </div>
                    )}
                  </button>
                );
              },
            )}
          </div>

          {/* =================================================
              CONTROLS
          ================================================== */}

          <div
            className="
              absolute
              bottom-2
              left-1/2
              z-40
              flex
              -translate-x-1/2
              items-center
              gap-5
            "
          >
            <button
              type="button"
              aria-label="Previous image"
              onClick={previous}
              className="
                flex
                size-12
                items-center
                justify-center
                rounded-full
                border
                border-foreground/20
                bg-background/80
                text-foreground
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:bg-background
              "
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="
                flex
                size-12
                items-center
                justify-center
                rounded-full
                border
                border-foreground/20
                bg-background/80
                text-foreground
                backdrop-blur-md
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:bg-background
              "
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Progress */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              hidden
              sm:block
            "
          >
            <div
              className="
                h-px
                w-full
                bg-foreground/10
              "
            >
              <div
                className="
                  h-px
                  bg-coral
                  transition-all
                  duration-700
                "
                style={{
                  width: `${
                    ((activeIndex + 1) /
                      uniqueGallery.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {lightboxOpen && activeImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/[0.96]
            p-4
            backdrop-blur-2xl
            animate-in
            fade-in
            duration-300
          "
          onClick={() =>
            setLightboxOpen(false)
          }
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() =>
              setLightboxOpen(false)
            }
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
              border-white/20
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              hover:scale-105
              hover:bg-white/10
            "
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="
              absolute
              left-4
              top-1/2
              z-30
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
              backdrop-blur-xl
              hover:bg-white/10
              lg:left-8
            "
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="
              absolute
              right-4
              top-1/2
              z-30
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
              backdrop-blur-xl
              hover:bg-white/10
              lg:right-8
            "
          >
            <ChevronRight className="size-5" />
          </button>

          <figure
            onClick={(event) =>
              event.stopPropagation()
            }
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
              src={activeImage.url}
              alt={activeImage.alt}
              className="
                max-h-[78vh]
                max-w-[88vw]
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            <figcaption
              className="
                mt-5
                max-w-2xl
                text-center
              "
            >
              <p
                className="
                  text-sm
                  font-medium
                  leading-relaxed
                  text-white
                "
              >
                {activeImage.alt}
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
                {activeIndex + 1} /{" "}
                {uniqueGallery.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
