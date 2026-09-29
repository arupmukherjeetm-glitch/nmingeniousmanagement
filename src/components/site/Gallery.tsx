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

  /* ============================================================
     CLOSE LIGHTBOX
  ============================================================ */

  const close = useCallback(() => {
    setOpen(null);
  }, []);

  /* ============================================================
     NEXT IMAGE
  ============================================================ */

  const next = useCallback(() => {
    setOpen((current) => {
      if (current === null || gallery.length === 0) {
        return null;
      }

      return (current + 1) % gallery.length;
    });
  }, []);

  /* ============================================================
     PREVIOUS IMAGE
  ============================================================ */

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

  /* ============================================================
     KEYBOARD CONTROLS
  ============================================================ */

  useEffect(() => {
    if (open === null) {
      return;
    }

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
  }, [
    open,
    close,
    next,
    previous,
  ]);

  const active =
    open === null
      ? null
      : gallery[open];

  return (
    <>
      {/* ========================================================
          GALLERY LOCAL STYLES

          Everything required for the marquee is contained here.
          No changes to styles.css are required.
      ========================================================= */}

      <style>{`

        /* ======================================================
           GALLERY VIEWPORT
        ====================================================== */

        .nm-gallery-window {
          position: relative;
          width: 100%;
          overflow: hidden;
        }


        /* ======================================================
           MOVING TRACK

           52 seconds = deliberately slow / premium movement.
        ====================================================== */

        .nm-gallery-track {
          display: flex;
          width: max-content;
          flex-shrink: 0;

          animation-name: nm-gallery-scroll;
          animation-duration: 52s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;

          will-change: transform;
        }


        /* ======================================================
           PAUSE WHEN MOUSE IS OVER GALLERY
        ====================================================== */

        .nm-gallery-track.nm-gallery-paused {
          animation-play-state: paused;
        }


        /* ======================================================
           IMAGE GROUP
        ====================================================== */

        .nm-gallery-group {
          display: flex;
          flex-shrink: 0;

          gap: 24px;

          padding-right: 24px;
        }


        /* ======================================================
           SEAMLESS INFINITE ANIMATION

           The two image groups are identical.
           Moving exactly 50% creates the seamless loop.
        ====================================================== */

        @keyframes nm-gallery-scroll {
          from {
            transform: translate3d(
              0,
              0,
              0
            );
          }

          to {
            transform: translate3d(
              -50%,
              0,
              0
            );
          }
        }


        /* ======================================================
           GALLERY CARD
        ====================================================== */

        .nm-gallery-card {
          position: relative;

          flex-shrink: 0;

          width: 345px;
          height: 460px;

          overflow: hidden;

          border-radius: 24px;

          background: #123b61;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          cursor: pointer;

          transform: translateZ(0);

          outline: none;

          transition:
            border-color 500ms ease,
            box-shadow 500ms ease;
        }


        /* ======================================================
           IMAGE

           object-fit: cover means every image fits the same
           visual card regardless of original dimensions.
        ====================================================== */

        .nm-gallery-card-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transform: scale(1);

          transition:
            transform 700ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }


        /* ======================================================
           HOVER IMAGE ZOOM
        ====================================================== */

        .nm-gallery-card:hover
        .nm-gallery-card-image {
          transform: scale(1.06);
        }


        /* ======================================================
           IMAGE OVERLAY

           No text is displayed.
           This only gives the images a subtle premium depth.
        ====================================================== */

        .nm-gallery-card-overlay {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to top,
              rgba(
                0,
                0,
                0,
                0.28
              ),
              rgba(
                0,
                0,
                0,
                0
              ) 65%
            );

          opacity: 0.55;

          transition:
            opacity 500ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-card-overlay {
          opacity: 0.8;
        }


        /* ======================================================
           HOVER BORDER
        ====================================================== */

        .nm-gallery-card:hover {
          border-color:
            rgba(
              255,
              255,
              255,
              0.28
            );

          box-shadow:
            0 20px 50px
            rgba(
              7,
              31,
              54,
              0.18
            );
        }


        /* ======================================================
           EDGE FADES
        ====================================================== */

        .nm-gallery-fade-left {
          position: absolute;

          z-index: 20;

          left: 0;
          top: 0;
          bottom: 0;

          width: 120px;

          pointer-events: none;

          background:
            linear-gradient(
              to right,
              var(--background),
              transparent
            );
        }


        .nm-gallery-fade-right {
          position: absolute;

          z-index: 20;

          right: 0;
          top: 0;
          bottom: 0;

          width: 120px;

          pointer-events: none;

          background:
            linear-gradient(
              to left,
              var(--background),
              transparent
            );
        }


        /* ======================================================
           FOCUS ACCESSIBILITY
        ====================================================== */

        .nm-gallery-card:focus-visible {
          border-color: #f04438;

          box-shadow:
            0 0 0 3px
            rgba(
              240,
              68,
              56,
              0.25
            );
        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 1024px) {

          .nm-gallery-card {
            width: 300px;
            height: 400px;

            border-radius: 22px;
          }

          .nm-gallery-group {
            gap: 18px;

            padding-right: 18px;
          }

          .nm-gallery-fade-left,
          .nm-gallery-fade-right {
            width: 75px;
          }
        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 640px) {

          .nm-gallery-track {
            animation-duration: 42s;
          }

          .nm-gallery-card {
            width: 270px;
            height: 360px;

            border-radius: 20px;
          }

          .nm-gallery-group {
            gap: 14px;

            padding-right: 14px;
          }

          .nm-gallery-fade-left,
          .nm-gallery-fade-right {
            width: 35px;
          }
        }

      `}</style>


      {/* ========================================================
          GALLERY SECTION
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-background
          py-24
          lg:py-32
        "
      >

        {/* ======================================================
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

              {/* EYEBROW — DASH REMOVED */}

              <div className="mb-6">
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


              {/* TITLE */}

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


        {/* ======================================================
            AUTO-SCROLLING IMAGE GALLERY

            Hover anywhere over this area:
            PAUSE

            Move mouse away:
            RESUME
        ====================================================== */}

        <div
          className="
            nm-gallery-window
            mt-14
          "
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >

          {/* LEFT EDGE FADE */}

          <div
            aria-hidden="true"
            className="
              nm-gallery-fade-left
            "
          />


          {/* RIGHT EDGE FADE */}

          <div
            aria-hidden="true"
            className="
              nm-gallery-fade-right
            "
          />


          {/* ====================================================
              TRACK
          ===================================================== */}

          <div
            className={`
              nm-gallery-track

              ${
                isPaused
                  ? "nm-gallery-paused"
                  : ""
              }
            `}
          >

            {/* ==================================================
                FIRST IMAGE SET
            ================================================== */}

            <div
              className="
                nm-gallery-group
              "
            >

              {gallery.map(
                (image, index) => (
                  <GalleryCard
                    key={
                      `first-${image.url}-${index}`
                    }
                    image={image}
                    index={index}
                    onOpen={() =>
                      setOpen(index)
                    }
                  />
                ),
              )}

            </div>


            {/* ==================================================
                SECOND IMAGE SET

                Identical copy creates seamless looping.
            ================================================== */}

            <div
              className="
                nm-gallery-group
              "
              aria-hidden="true"
            >

              {gallery.map(
                (image, index) => (
                  <GalleryCard
                    key={
                      `second-${image.url}-${index}`
                    }
                    image={image}
                    index={index}
                    onOpen={() =>
                      setOpen(index)
                    }
                  />
                ),
              )}

            </div>

          </div>

        </div>


        {/* ======================================================
            NO TEXT / STATUS BAR HERE

            Intentionally removed:
            - Field execution in motion
            - Hover to pause
            - Click to explore
        ====================================================== */}

      </section>


      {/* ========================================================
          FULLSCREEN IMAGE VIEWER
      ========================================================= */}

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

          {/* ====================================================
              CLOSE BUTTON
          ===================================================== */}

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


          {/* ====================================================
              PREVIOUS
          ===================================================== */}

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


          {/* ====================================================
              NEXT
          ===================================================== */}

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


          {/* ====================================================
              ACTIVE IMAGE
          ===================================================== */}

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

          </figure>

        </div>
      )}

    </>
  );
}


/* ==============================================================
   GALLERY CARD

   IMPORTANT:
   There is NO text on the image.
   No number.
   No caption.
   No "click to explore".
================================================================ */

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
        nm-gallery-card
        group
      "
    >

      <img
        src={image.url}
        alt={image.alt}
        loading={
          index < 5
            ? "eager"
            : "lazy"
        }
        draggable={false}
        className="
          nm-gallery-card-image
        "
      />


      {/* SUBTLE OVERLAY */}

      <span
        aria-hidden="true"
        className="
          nm-gallery-card-overlay
        "
      />

    </button>
  );
}
