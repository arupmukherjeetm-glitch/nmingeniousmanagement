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

      return (current - 1 + gallery.length) % gallery.length;
    });
  }, []);

  /* ==========================================================
     KEYBOARD CONTROLS FOR FULLSCREEN VIEWER
  ========================================================== */

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, next, previous]);

  const active = open === null ? null : gallery[open];

  return (
    <>
      {/* ========================================================
          LOCAL GALLERY CSS

          No changes to styles.css required.
      ========================================================= */}

      <style>{`
        /* ======================================================
           GALLERY WINDOW
        ====================================================== */

        .nm-gallery-window {
          position: relative;
          width: 100%;
          overflow: hidden;
        }


        /* ======================================================
           MOVING TRACK
        ====================================================== */

        .nm-gallery-track {
          display: flex;
          width: max-content;
          flex-shrink: 0;

          animation-name: nm-gallery-scroll;
          animation-duration: 42s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;

          will-change: transform;
        }


        /* ======================================================
           PAUSE ON HOVER
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
           SEAMLESS LOOP

           The second image group is identical to the first.
           The track moves exactly 50%.
        ====================================================== */

        @keyframes nm-gallery-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
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

          border: 1px solid rgba(255, 255, 255, 0.12);

          cursor: pointer;

          transform: translateZ(0);

          outline: none;

          transition:
            border-color 500ms ease,
            box-shadow 500ms ease;
        }


        /* ======================================================
           IMAGE
        ====================================================== */

        .nm-gallery-card-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transform: scale(1);

          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-card-image {
          transform: scale(1.06);
        }


        /* ======================================================
           DARK IMAGE GRADIENT
        ====================================================== */

        .nm-gallery-card-overlay {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.78) 0%,
              rgba(0, 0, 0, 0.18) 43%,
              rgba(0, 0, 0, 0) 72%
            );

          opacity: 0.68;

          transition:
            opacity 500ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-card-overlay {
          opacity: 0.92;
        }


        /* ======================================================
           NUMBER
        ====================================================== */

        .nm-gallery-number {
          position: absolute;

          left: 18px;
          top: 18px;

          padding: 7px 11px;

          border-radius: 999px;

          border: 1px solid rgba(255, 255, 255, 0.28);

          background: rgba(0, 0, 0, 0.18);

          color: rgba(255, 255, 255, 0.9);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.18em;

          backdrop-filter: blur(12px);
        }


        /* ======================================================
           EXPAND ICON
        ====================================================== */

        .nm-gallery-expand {
          position: absolute;

          right: 18px;
          top: 18px;

          display: flex;

          width: 40px;
          height: 40px;

          align-items: center;
          justify-content: center;

          border-radius: 999px;

          border: 1px solid rgba(255, 255, 255, 0.28);

          background: rgba(0, 0, 0, 0.18);

          color: white;

          backdrop-filter: blur(12px);

          opacity: 0;

          transform: scale(0.85);

          transition:
            opacity 400ms ease,
            transform 400ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-expand {
          opacity: 1;

          transform: scale(1);
        }


        /* ======================================================
           CAPTION
        ====================================================== */

        .nm-gallery-caption {
          position: absolute;

          left: 20px;
          right: 20px;

          bottom: 24px;

          padding-right: 5px;

          color: white;

          font-size: 14px;

          font-weight: 600;

          line-height: 1.55;

          opacity: 0;

          transform: translateY(12px);

          transition:
            opacity 450ms ease,
            transform 450ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-caption {
          opacity: 1;

          transform: translateY(0);
        }


        /* ======================================================
           CORAL ACCENT
        ====================================================== */

        .nm-gallery-accent {
          position: absolute;

          left: 20px;

          bottom: 18px;

          width: 32px;

          height: 2px;

          background: #f04438;

          transition:
            width 450ms ease;
        }


        .nm-gallery-card:hover
        .nm-gallery-accent {
          width: 58px;
        }


        /* ======================================================
           CARD HOVER
        ====================================================== */

        .nm-gallery-card:hover {
          border-color: rgba(255, 255, 255, 0.28);

          box-shadow:
            0 20px 50px rgba(7, 31, 54, 0.20);
        }


        /* ======================================================
           FOCUS
        ====================================================== */

        .nm-gallery-card:focus-visible {
          border-color: #f04438;

          box-shadow:
            0 0 0 3px rgba(240, 68, 56, 0.25);
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
            animation-duration: 34s;
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


        {/* ======================================================
            AUTO-SCROLLING GALLERY
        ====================================================== */}

        <div
          className="
            nm-gallery-window
            mt-14
          "

          /*
           * IMPORTANT:
           *
           * Hovering anywhere over the gallery pauses
           * the entire marquee.
           *
           * Moving outside resumes it.
           */

          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* LEFT FADE */}

          <div
            aria-hidden="true"
            className="nm-gallery-fade-left"
          />


          {/* RIGHT FADE */}

          <div
            aria-hidden="true"
            className="nm-gallery-fade-right"
          />


          {/* ====================================================
              TRACK

              TWO IDENTICAL GROUPS = SEAMLESS LOOP
          ===================================================== */}

          <div
            className={`
              nm-gallery-track

              ${isPaused ? "nm-gallery-paused" : ""}
            `}
          >

            {/* FIRST GROUP */}

            <div className="nm-gallery-group">

              {gallery.map((image, index) => (
                <GalleryCard
                  key={`first-${image.url}-${index}`}
                  image={image}
                  index={index}
                  onOpen={() => setOpen(index)}
                />
              ))}

            </div>


            {/* SECOND GROUP */}

            <div
              className="nm-gallery-group"
              aria-hidden="true"
            >

              {gallery.map((image, index) => (
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


        {/* ======================================================
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

                transition-opacity
                duration-300

                ${
                  isPaused
                    ? "opacity-30"
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
              CLOSE
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


            <figcaption
              className="
                mt-5
                text-center
              "
            >

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


/* ==============================================================
   GALLERY CARD
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

      {/* IMAGE */}

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


      {/* DARK GRADIENT */}

      <span
        aria-hidden="true"
        className="
          nm-gallery-card-overlay
        "
      />


      {/* NUMBER */}

      <span
        className="
          nm-gallery-number
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>


      {/* EXPAND */}

      <span
        aria-hidden="true"

        className="
          nm-gallery-expand
        "
      >
        <ChevronRight className="size-4" />
      </span>


      {/* CORAL ACCENT */}

      <span
        aria-hidden="true"

        className="
          nm-gallery-accent
        "
      />


      {/* CAPTION */}

      <span
        className="
          nm-gallery-caption
        "
      >
        {image.alt}
      </span>

    </button>
  );
}
