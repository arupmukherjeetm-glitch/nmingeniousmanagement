import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Samuel Thomas",
    company: "Director at Axiom Gen Nxt India Pvt Ltd",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
  },
  {
    name: "Saurabh Desai",
    company: "HR Professional",
    quote:
      "The team at NM Ingenious teams are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in bigstores across the country.",
  },
  {
    name: "Tejas Goenka",
    company: "MSME Honours",
    quote:
      "Businesses like you are driven by innovation & inspire the rest of us. It was amazing to hear your story & we are glad that you gave us a chance to share it with the world.",
  },
  {
    name: "Kanu",
    company: "Senior Purchase Manager | Indian MNC",
    quote:
      "I have had great experience working with you over last couple of years and value Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
  },
  {
    name: "Rishabh Mariwala",
    company: "Marico",
    quote:
      "I wanted to thank you for your ongoing help and a assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
  },
];

export function CorporateTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = testimonials[active];

  /* ==========================================================
     AUTO ROTATION
  ========================================================== */

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((value) => {
        return (value + 1) % testimonials.length;
      });
    }, 6500);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused]);

  const previous = () => {
    setActive((value) => {
      return (
        (value - 1 + testimonials.length) %
        testimonials.length
      );
    });
  };

  const next = () => {
    setActive((value) => {
      return (value + 1) % testimonials.length;
    });
  };

  return (
    <>
      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .nm-ultra-testimonials {
          position: relative;

          overflow: hidden;

          padding: 95px 0;

          background:
            #071a31;

          color: white;
        }


        /* =====================================================
           BACKGROUND GRID
        ===================================================== */

        .nm-ultra-testimonials::before {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: 0.18;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.045) 1px,
              transparent 1px
            );

          background-size:
            80px 80px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 20%,
              black 80%,
              transparent
            );
        }


        /* =====================================================
           BLUE GLOW
        ===================================================== */

        .nm-ultra-glow-one {
          position: absolute;

          width: 620px;
          height: 620px;

          left: -280px;
          top: -280px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(38,101,180,0.26),
              transparent 68%
            );

          filter: blur(20px);

          pointer-events: none;
        }


        .nm-ultra-glow-two {
          position: absolute;

          width: 520px;
          height: 520px;

          right: -260px;
          bottom: -260px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(239,62,53,0.11),
              transparent 68%
            );

          filter: blur(25px);

          pointer-events: none;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .nm-ultra-container {
          position: relative;

          z-index: 2;

          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* =====================================================
           TOP HEADER
        ===================================================== */

        .nm-ultra-header {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 40px;

          margin-bottom: 48px;
        }


        .nm-ultra-eyebrow {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 18px;

          color: #f04a40;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.30em;

          text-transform: uppercase;
        }


        .nm-ultra-eyebrow-line {
          width: 34px;

          height: 2px;

          background: #f04a40;
        }


        .nm-ultra-title {
          max-width: 700px;

          margin: 0;

          font-size:
            clamp(
              38px,
              5vw,
              64px
            );

          font-weight: 800;

          line-height: 0.98;

          letter-spacing: -0.055em;

          color: #ffffff;
        }


        .nm-ultra-title span {
          color: #7da6d8;
        }


        .nm-ultra-intro {
          max-width: 320px;

          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.48
            );

          font-size: 13px;

          line-height: 1.75;
        }


        /* =====================================================
           MAIN TESTIMONIAL STAGE
        ===================================================== */

        .nm-ultra-stage {
          position: relative;

          min-height: 390px;

          display: grid;

          grid-template-columns:
            1fr
            240px;

          gap: 18px;
        }


        /* =====================================================
           FEATURED CARD
        ===================================================== */

        .nm-ultra-card {
          position: relative;

          min-width: 0;

          overflow: hidden;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          min-height: 390px;

          padding: 42px 46px;

          border-radius: 28px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.085),
              rgba(255,255,255,0.025)
            );

          box-shadow:
            0 35px 80px
            rgba(
              0,
              0,
              0,
              0.25
            );

          backdrop-filter:
            blur(18px);
        }


        /* =====================================================
           CARD TOP ACCENT
        ===================================================== */

        .nm-ultra-card-accent {
          position: absolute;

          top: 0;
          left: 40px;

          width: 70px;

          height: 3px;

          background: #f0443b;

          box-shadow:
            0 0 20px
            rgba(
              240,
              68,
              59,
              0.5
            );
        }


        /* =====================================================
           LARGE QUOTE MARK
        ===================================================== */

        .nm-ultra-quote-mark {
          position: absolute;

          right: 22px;
          top: -35px;

          color:
            rgba(
              255,
              255,
              255,
              0.045
            );

          font-family:
            Georgia,
            serif;

          font-size: 230px;

          line-height: 1;

          pointer-events: none;

          user-select: none;
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .nm-ultra-quote-area {
          position: relative;

          z-index: 2;

          max-width: 800px;
        }


        .nm-ultra-quote-icon {
          width: 29px;

          height: 29px;

          margin-bottom: 20px;

          color: #f0443b;
        }


        .nm-ultra-quote {
          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              20px,
              2.3vw,
              29px
            );

          font-weight: 500;

          line-height: 1.5;

          letter-spacing: -0.018em;
        }


        /* =====================================================
           AUTHOR
        ===================================================== */

        .nm-ultra-author {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 20px;

          margin-top: 32px;

          padding-top: 22px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.10
            );
        }


        .nm-ultra-author-name {
          margin: 0;

          color: #ffffff;

          font-size: 15px;

          font-weight: 800;
        }


        .nm-ultra-author-company {
          margin: 5px 0 0;

          color:
            rgba(
              255,
              255,
              255,
              0.48
            );

          font-size: 11px;

          line-height: 1.5;
        }


        .nm-ultra-author-mark {
          width: 42px;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          color:
            rgba(
              255,
              255,
              255,
              0.45
            );

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.04em;

          text-transform: uppercase;
        }


        /* =====================================================
           CLIENT RAIL
        ===================================================== */

        .nm-ultra-rail {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }


        .nm-ultra-client {
          position: relative;

          flex: 1;

          display: flex;

          align-items: center;

          padding: 0 18px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius: 15px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color:
            rgba(
              255,
              255,
              255,
              0.40
            );

          text-align: left;

          cursor: pointer;

          overflow: hidden;

          transition:
            all 350ms ease;
        }


        .nm-ultra-client::before {
          content: "";

          position: absolute;

          left: 0;

          top: 14px;
          bottom: 14px;

          width: 2px;

          background:
            transparent;

          transition:
            background 300ms ease,
            box-shadow 300ms ease;
        }


        .nm-ultra-client:hover {
          color:
            rgba(
              255,
              255,
              255,
              0.78
            );

          background:
            rgba(
              255,
              255,
              255,
              0.055
            );

          border-color:
            rgba(
              255,
              255,
              255,
              0.13
            );
        }


        .nm-ultra-client.active {
          color: #ffffff;

          background:
            rgba(
              255,
              255,
              255,
              0.085
            );

          border-color:
            rgba(
              255,
              255,
              255,
              0.15
            );
        }


        .nm-ultra-client.active::before {
          background: #f0443b;

          box-shadow:
            0 0 14px
            rgba(
              240,
              68,
              59,
              0.7
            );
        }


        .nm-ultra-client-name {
          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.01em;
        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .nm-ultra-navigation {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 18px;
        }


        .nm-ultra-progress {
          display: flex;

          align-items: center;

          gap: 6px;
        }


        .nm-ultra-progress-dot {
          width: 5px;

          height: 5px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.20
            );

          transition:
            all 300ms ease;
        }


        .nm-ultra-progress-dot.active {
          width: 25px;

          border-radius: 99px;

          background: #f0443b;

          box-shadow:
            0 0 12px
            rgba(
              240,
              68,
              59,
              0.55
            );
        }


        .nm-ultra-arrows {
          display: flex;

          gap: 7px;
        }


        .nm-ultra-arrow {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.13
            );

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          color:
            rgba(
              255,
              255,
              255,
              0.75
            );

          cursor: pointer;

          transition:
            all 250ms ease;
        }


        .nm-ultra-arrow:hover {
          background: #f0443b;

          border-color: #f0443b;

          color: #ffffff;

          transform:
            translateY(-2px);
        }


        /* =====================================================
           CARD TRANSITION
        ===================================================== */

        .nm-ultra-card-content {
          animation:
            nmUltraEnter
            550ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        @keyframes nmUltraEnter {

          from {
            opacity: 0;

            transform:
              translateY(12px)
              scale(0.99);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 850px) {

          .nm-ultra-testimonials {
            padding: 75px 0;
          }

          .nm-ultra-header {
            flex-direction: column;

            align-items: flex-start;

            margin-bottom: 35px;
          }

          .nm-ultra-stage {
            grid-template-columns: 1fr;
          }

          .nm-ultra-rail {
            display: flex;

            flex-direction: row;

            overflow-x: auto;

            scrollbar-width: none;
          }

          .nm-ultra-rail::-webkit-scrollbar {
            display: none;
          }

          .nm-ultra-client {
            flex: 0 0 auto;

            min-height: 48px;

            padding: 0 17px;
          }

          .nm-ultra-client::before {
            left: 12px;
            right: 12px;

            top: auto;
            bottom: 0;

            width: auto;

            height: 2px;
          }

          .nm-ultra-card {
            min-height: 380px;

            padding: 35px;
          }

        }


        @media (max-width: 560px) {

          .nm-ultra-container {
            width:
              calc(100% - 32px);
          }

          .nm-ultra-testimonials {
            padding: 65px 0;
          }

          .nm-ultra-title {
            font-size: 41px;
          }

          .nm-ultra-intro {
            font-size: 12px;
          }

          .nm-ultra-card {
            min-height: 440px;

            padding: 28px;

            border-radius: 22px;
          }

          .nm-ultra-quote {
            font-size: 19px;

            line-height: 1.58;
          }

          .nm-ultra-author {
            align-items: flex-start;

            flex-direction: column;
          }

          .nm-ultra-author-mark {
            display: none;
          }

        }

      `}</style>


      <section
        className="nm-ultra-testimonials"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* BACKGROUND LIGHT */}

        <div
          aria-hidden="true"
          className="
            nm-ultra-glow-one
          "
        />

        <div
          aria-hidden="true"
          className="
            nm-ultra-glow-two
          "
        />


        <div
          className="
            nm-ultra-container
          "
        >

          {/* ==================================================
              HEADER
          ================================================== */}

          <header
            className="
              nm-ultra-header
            "
          >

            <div>

              <div
                className="
                  nm-ultra-eyebrow
                "
              >

                <span
                  className="
                    nm-ultra-eyebrow-line
                  "
                />

                Client voices

              </div>


              <h2
                className="
                  nm-ultra-title
                "
              >
                Trusted by the
                <br />

                <span>
                  people behind the brands.
                </span>
              </h2>

            </div>


            <p
              className="
                nm-ultra-intro
              "
            >
              Partnerships built through
              consistency, responsiveness and
              execution at the point where brands
              meet shoppers.
            </p>

          </header>


          {/* ==================================================
              TESTIMONIAL STAGE
          ================================================== */}

          <div
            className="
              nm-ultra-stage
            "
          >

            {/* =================================================
                FEATURED QUOTE
            ================================================= */}

            <div
              className="
                nm-ultra-card
              "
            >

              <span
                aria-hidden="true"
                className="
                  nm-ultra-card-accent
                "
              />


              <span
                aria-hidden="true"
                className="
                  nm-ultra-quote-mark
                "
              >
                “
              </span>


              <div
                key={active}
                className="
                  nm-ultra-card-content
                "
              >

                <div
                  className="
                    nm-ultra-quote-area
                  "
                >

                  <Quote
                    className="
                      nm-ultra-quote-icon
                    "
                    strokeWidth={1.5}
                  />


                  <blockquote
                    className="
                      nm-ultra-quote
                    "
                  >
                    “{current.quote}”
                  </blockquote>

                </div>


                <div
                  className="
                    nm-ultra-author
                  "
                >

                  <div>

                    <p
                      className="
                        nm-ultra-author-name
                      "
                    >
                      {current.name}
                    </p>


                    <p
                      className="
                        nm-ultra-author-company
                      "
                    >
                      {current.company}
                    </p>

                  </div>


                  <span
                    className="
                      nm-ultra-author-mark
                    "
                    aria-hidden="true"
                  >
                    NM
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                CLIENT RAIL
            ================================================== */}

            <div
              className="
                nm-ultra-rail
              "
            >

              {testimonials.map(
                (testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`View testimonial from ${testimonial.name}`}
                    aria-pressed={
                      active === index
                    }
                    onClick={() =>
                      setActive(index)
                    }
                    className={`
                      nm-ultra-client

                      ${
                        active === index
                          ? "active"
                          : ""
                      }
                    `}
                  >

                    <span
                      className="
                        nm-ultra-client-name
                      "
                    >
                      {testimonial.name}
                    </span>

                  </button>
                ),
              )}

            </div>

          </div>


          {/* ==================================================
              CONTROLS
          ================================================== */}

          <div
            className="
              nm-ultra-navigation
            "
          >

            <div
              className="
                nm-ultra-progress
              "
            >

              {testimonials.map(
                (testimonial, index) => (
                  <span
                    key={testimonial.name}
                    className={`
                      nm-ultra-progress-dot

                      ${
                        active === index
                          ? "active"
                          : ""
                      }
                    `}
                  />
                ),
              )}

            </div>


            <div
              className="
                nm-ultra-arrows
              "
            >

              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={previous}
                className="
                  nm-ultra-arrow
                "
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.7}
                />
              </button>


              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="
                  nm-ultra-arrow
                "
              >
                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                />
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
