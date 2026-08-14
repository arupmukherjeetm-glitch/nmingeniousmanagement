import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { gallery } from "@/lib/site-data";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  /*
   * ------------------------------------------------------------
   * REMOVE DUPLICATE IMAGES
   * ------------------------------------------------------------
   */

  const uniqueGallery = useMemo(() => {
    const seen = new Set<string>();

    return gallery.filter((item) => {
      const normalizedUrl = item.url
        .split("?")[0]
        .toLowerCase()
        .trim();

      if (seen.has(normalizedUrl)) {
        return false;
      }

      seen.add(normalizedUrl);
      return true;
    });
  }, []);

  /*
   * ------------------------------------------------------------
   * KEEP ACTIVE INDEX VALID
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (
      uniqueGallery.length > 0 &&
      activeIndex >= uniqueGallery.length
    ) {
      setActiveIndex(0);
    }
  }, [activeIndex, uniqueGallery.length]);

  /*
   * ------------------------------------------------------------
   * NEXT IMAGE
   * ------------------------------------------------------------
   */

  const next = useCallback(() => {
    if (uniqueGallery.length <= 1) return;

    setActiveIndex((current) => {
      return (current + 1) % uniqueGallery.length;
    });
  }, [uniqueGallery.length]);

  /*
   * ------------------------------------------------------------
   * PREVIOUS IMAGE
   * ------------------------------------------------------------
   */

  const previous = useCallback(() => {
    if (uniqueGallery.length <= 1) return;

    setActiveIndex((current) => {
      return (
        (current - 1 + uniqueGallery.length) %
        uniqueGallery.length
      );
    });
  }, [uniqueGallery.length]);

  /*
   * ------------------------------------------------------------
   * AUTOMATIC SLIDESHOW
   *
   * Changes every 3.5 seconds.
   * It does NOT pause on hover.
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (
      lightboxOpen ||
      uniqueGallery.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % uniqueGallery.length;
      });
    }, 3500);

    return () => {
      window.clearInterval(timer);
    };
  }, [lightboxOpen, uniqueGallery.length]);

  /*
   * ------------------------------------------------------------
   * KEYBOARD CONTROLS
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (
        event.key === "Escape" &&
        lightboxOpen
      ) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [next, previous, lightboxOpen]);

  /*
   * ------------------------------------------------------------
   * LOCK BODY SCROLL WHEN LIGHTBOX IS OPEN
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [lightboxOpen]);

  /*
   * ------------------------------------------------------------
   * GET RELATIVE POSITION
   *
   * 0  = active
   * -1 = previous
   * +1 = next
   * -2 = far previous
   * +2 = far next
   * ------------------------------------------------------------
   */

  const getRelativePosition = (
    index: number,
  ) => {
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
   * ------------------------------------------------------------
   * CARD STYLE
   * ------------------------------------------------------------
   */

  const getCardStyle = (
    position: number,
  ): React.CSSProperties => {
    /*
     * ACTIVE CENTER IMAGE
     */

    if (position === 0) {
      return {
        left: "50%",
        top: "50%",
        width:
          "clamp(250px, 31vw, 420px)",
        height:
          "clamp(320px, 43vw, 520px)",
        transform:
          "translate(-50%, -50%) scale(1)",
        opacity: 1,
        zIndex: 40,
      };
    }

    /*
     * PREVIOUS IMAGE
     */

    if (position === -1) {
      return {
        left:
          "calc(50% - clamp(200px, 25vw, 340px))",
        top: "50%",
        width:
          "clamp(205px, 27vw, 350px)",
        height:
          "clamp(275px, 36vw, 425px)",
        transform:
          "translate(-50%, -50%) scale(0.88)",
        opacity: 0.78,
        zIndex: 30,
      };
    }

    /*
     * NEXT IMAGE
     */

    if (position === 1) {
      return {
        left:
          "calc(50% + clamp(200px, 25vw, 340px))",
        top: "50%",
        width:
          "clamp(205px, 27vw, 350px)",
        height:
          "clamp(275px, 36vw, 425px)",
        transform:
          "translate(-50%, -50%) scale(0.88)",
        opacity: 0.78,
        zIndex: 30,
      };
    }

    /*
     * FAR PREVIOUS
     */

    if (position === -2) {
      return {
        left:
          "calc(50% - clamp(350px, 43vw, 570px))",
        top: "50%",
        width:
          "clamp(170px, 21vw, 280px)",
        height:
          "clamp(225px, 29vw, 350px)",
        transform:
          "translate(-50%, -50%) scale(0.75)",
        opacity: 0.38,
        zIndex: 20,
      };
    }

    /*
     * FAR NEXT
     */

    if (position === 2) {
      return {
        left:
          "calc(50% + clamp(350px, 43vw, 570px))",
        top: "50%",
        width:
          "clamp(170px, 21vw, 280px)",
        height:
          "clamp(225px, 29vw, 350px)",
        transform:
          "translate(-50%, -50%) scale(0.75)",
        opacity: 0.38,
        zIndex: 20,
      };
    }

    /*
     * HIDDEN IMAGES
     */

    return {
      left: "50%",
      top: "50%",
      width: "250px",
      height: "320px",
      transform:
        "translate(-50%, -50%) scale(0.6)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  /*
   * ------------------------------------------------------------
   * EMPTY STATE
   * ------------------------------------------------------------
   */

  if (!uniqueGallery.length) {
    return null;
  }

  const activeImage =
    uniqueGallery[activeIndex];

  /*
   * ------------------------------------------------------------
   * RENDER
   * ------------------------------------------------------------
   */

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

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
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

            {/* RIGHT */}

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

        {/* =====================================================
            CAROUSEL AREA
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            h-[520px]
            w-full
            max-w-[1500px]
            overflow-hidden
            sm:h-[570px]
            lg:mt-20
            lg:h-[630px]
          "
        >
          {/* Background glow */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[600px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-[0.14]
              blur-3xl
            "
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--coral) 20%, transparent), transparent 70%)",
            }}
          />

          {/* Cards */}

          <div className="absolute inset-0">
            {uniqueGallery.map(
              (item, index) => {
                const position =
                  getRelativePosition(index);

                /*
                 * Only render visible cards.
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
                        : `Show image: ${item.alt}`
                    }
                    className="
                      absolute
                      overflow-hidden
                      rounded-[24px]
                      bg-brand-deep
                      text-left
                      outline-none
                      shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                      transition-all
                      duration-[900ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      focus-visible:ring-2
                      focus-visible:ring-coral
                      focus-visible:ring-offset-4
                    "
                    style={getCardStyle(
                      position,
                    )}
                  >
                    {/* IMAGE */}

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
                        duration-[900ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      aria-hidden
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* ACTIVE BORDER */}

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

                    {/* EXPAND */}

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

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        text-[9px]
                        font-bold
                        tracking-[0.28em]
                        text-white/65
                      "
                    >
                      {String(
                        index + 1,
                      ).padStart(2, "0")}
                    </span>

                    {/* ACTIVE CAPTION */}

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
                            max-w-[90%]
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
                            text-white/45
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
              NAVIGATION BUTTONS
          ================================================== */}

          <div
            className="
              absolute
              bottom-1
              left-1/2
              z-[60]
              flex
              -translate-x-1/2
              items-center
              gap-6
            "
          >
            {/* PREVIOUS */}

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                previous();
              }}
              className="
                flex
                size-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-foreground/20
                bg-background
                text-foreground
                shadow-lg
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:scale-105
                hover:bg-foreground
                hover:text-background
              "
            >
              <ChevronLeft className="size-4" />
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
                flex
                size-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-foreground/20
                bg-background
                text-foreground
                shadow-lg
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:scale-105
                hover:bg-foreground
                hover:text-background
              "
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* =================================================
              PROGRESS
          ================================================== */}

          <div
            className="
              absolute
              bottom-7
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

      {/* =======================================================
          LIGHTBOX
      ======================================================== */}

      {lightboxOpen && activeImage && (
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
          onClick={() =>
            setLightboxOpen(false)
          }
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* CLOSE */}

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
              duration-300
              hover:scale-105
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
              transition-all
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
              transition-all
              hover:bg-white/10
              lg:right-8
            "
          >
            <ChevronRight className="size-5" />
          </button>

          {/* ACTIVE IMAGE */}

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
