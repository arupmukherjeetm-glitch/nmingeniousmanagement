import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samuel Thomas",
    company: "Director at Axiom Gen Nxt India Pvt Ltd",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
    client: "Axiom",
  },
  {
    name: "Saurabh Desai",
    company: "HR Professional",
    quote:
      "The team at NM Ingenious teams are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in bigstores across the country.",
    client: "Corporate Partner",
  },
  {
    name: "Tejas Goenka",
    company: "MSME Honours",
    quote:
      "Businesses like you are driven by innovation & inspire the rest of us. It was amazing to hear your story & we are glad that you gave us a chance to share it with the world.",
    client: "MSME Honours",
  },
  {
    name: "Kanu",
    company: "Senior Purchase Manager | Indian MNC",
    quote:
      "I have had great experience working with you over last couple of years and value Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
    client: "Indian MNC",
  },
  {
    name: "Rishabh Mariwala",
    company: "Marico",
    quote:
      "I wanted to thank you for your ongoing help and a assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
    client: "Marico",
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
      setActive((value) => (value + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => {
    setActive(
      (value) =>
        (value - 1 + testimonials.length) %
        testimonials.length,
    );
  };

  const next = () => {
    setActive(
      (value) =>
        (value + 1) % testimonials.length,
    );
  };

  return (
    <>
      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .nm-client-testimonials {
          position: relative;
          overflow: hidden;

          background: #ffffff;

          padding: 90px 0;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .nm-client-testimonials-inner {
          position: relative;
          z-index: 2;

          width: min(
            1180px,
            calc(100% - 48px)
          );

          margin: 0 auto;
        }


        /* =====================================================
           MAIN GRID
        ===================================================== */

        .nm-client-testimonials-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.82fr)
            minmax(0, 1.18fr);

          align-items: center;

          gap: 90px;
        }


        /* =====================================================
           LEFT SIDE
        ===================================================== */

        .nm-client-testimonials-left {
          max-width: 470px;
        }


        .nm-client-testimonials-eyebrow {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 18px;

          color: #ef3e35;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.28em;

          text-transform: uppercase;
        }


        .nm-client-testimonials-eyebrow-line {
          width: 36px;

          height: 2px;

          background: #ef3e35;
        }


        .nm-client-testimonials-title {
          margin: 0;

          color: #0b1730;

          font-size: clamp(
            38px,
            4.5vw,
            58px
          );

          font-weight: 800;

          line-height: 1.02;

          letter-spacing: -0.055em;
        }


        .nm-client-testimonials-title em {
          color: #244b86;

          font-style: normal;
        }


        .nm-client-testimonials-description {
          max-width: 430px;

          margin: 25px 0 0;

          color: #68778d;

          font-size: 14px;

          line-height: 1.75;
        }


        /* =====================================================
           SMALL TRUST LINE
        ===================================================== */

        .nm-client-trust-line {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: 28px;

          color: #8b96a6;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }


        .nm-client-trust-dot {
          width: 6px;

          height: 6px;

          border-radius: 50%;

          background: #ef3e35;
        }


        /* =====================================================
           RIGHT TESTIMONIAL
        ===================================================== */

        .nm-client-quote-area {
          position: relative;

          min-width: 0;
        }


        .nm-client-quote-card {
          position: relative;

          min-height: 340px;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          overflow: hidden;

          padding: 38px 42px;

          border-radius: 24px;

          background:
            linear-gradient(
              135deg,
              #123d74 0%,
              #183f76 55%,
              #0d2f5c 100%
            );

          box-shadow:
            0 24px 55px
            rgba(
              12,
              43,
              82,
              0.16
            );
        }


        /* =====================================================
           SUBTLE DECORATION
        ===================================================== */

        .nm-client-quote-card::after {
          content: "";

          position: absolute;

          right: -120px;

          bottom: -150px;

          width: 360px;

          height: 360px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                255,
                255,
                255,
                0.09
              ),
              transparent 68%
            );

          pointer-events: none;
        }


        .nm-client-quote-mark {
          position: absolute;

          right: 30px;

          top: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.07
            );

          font-family: Georgia, serif;

          font-size: 190px;

          line-height: 0.8;

          pointer-events: none;
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .nm-client-quote-top {
          position: relative;

          z-index: 2;
        }


        .nm-client-quote-icon {
          width: 30px;

          height: 30px;

          margin-bottom: 22px;

          color: #f04a40;
        }


        .nm-client-quote {
          max-width: 700px;

          margin: 0;

          color: #ffffff;

          font-size: clamp(
            19px,
            2vw,
            25px
          );

          font-weight: 500;

          line-height: 1.55;

          letter-spacing: -0.015em;
        }


        /* =====================================================
           AUTHOR
        ===================================================== */

        .nm-client-author {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 20px;

          margin-top: 30px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );
        }


        .nm-client-author-name {
          margin: 0;

          color: #ffffff;

          font-size: 16px;

          font-weight: 800;
        }


        .nm-client-author-company {
          margin: 5px 0 0;

          color:
            rgba(
              255,
              255,
              255,
              0.57
            );

          font-size: 11px;

          line-height: 1.5;
        }


        .nm-client-author-client {
          color:
            rgba(
              255,
              255,
              255,
              0.48
            );

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.18em;

          text-transform: uppercase;

          white-space: nowrap;
        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .nm-client-navigation {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 18px;

          padding: 0 3px;
        }


        /* =====================================================
           CLIENT SELECTOR
        ===================================================== */

        .nm-client-selector {
          display: flex;

          align-items: center;

          gap: 7px;

          min-width: 0;

          overflow-x: auto;

          scrollbar-width: none;
        }


        .nm-client-selector::-webkit-scrollbar {
          display: none;
        }


        .nm-client-selector-button {
          flex-shrink: 0;

          padding: 9px 13px;

          border: 1px solid
            rgba(
              16,
              39,
              73,
              0.10
            );

          border-radius: 999px;

          background: #f5f7fa;

          color: #78859a;

          font-size: 10px;

          font-weight: 700;

          cursor: pointer;

          transition:
            background 250ms ease,
            color 250ms ease,
            border-color 250ms ease,
            transform 250ms ease;
        }


        .nm-client-selector-button:hover {
          transform: translateY(-1px);

          border-color:
            rgba(
              35,
              73,
              134,
              0.18
            );

          color: #234986;

          background: #ffffff;
        }


        .nm-client-selector-button.active {
          border-color: #ef3e35;

          background: #ef3e35;

          color: #ffffff;
        }


        /* =====================================================
           ARROWS
        ===================================================== */

        .nm-client-arrows {
          display: flex;

          flex-shrink: 0;

          gap: 7px;

          margin-left: 18px;
        }


        .nm-client-arrow {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 38px;

          height: 38px;

          padding: 0;

          border: 1px solid
            rgba(
              16,
              39,
              73,
              0.12
            );

          border-radius: 50%;

          background: #ffffff;

          color: #173b6d;

          cursor: pointer;

          transition:
            all 250ms ease;
        }


        .nm-client-arrow:hover {
          border-color: #ef3e35;

          background: #ef3e35;

          color: #ffffff;

          transform: translateY(-2px);
        }


        /* =====================================================
           ANIMATION
        ===================================================== */

        .nm-client-quote-content {
          animation:
            nmClientFade
            500ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        @keyframes nmClientFade {

          from {
            opacity: 0;

            transform:
              translateY(8px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 950px) {

          .nm-client-testimonials {
            padding: 75px 0;
          }

          .nm-client-testimonials-grid {
            grid-template-columns: 1fr;

            gap: 42px;
          }

          .nm-client-testimonials-left {
            max-width: 650px;
          }

          .nm-client-testimonials-description {
            max-width: 600px;
          }

        }


        @media (max-width: 600px) {

          .nm-client-testimonials {
            padding: 65px 0;
          }

          .nm-client-testimonials-inner {
            width:
              calc(100% - 32px);
          }

          .nm-client-testimonials-title {
            font-size: 39px;
          }

          .nm-client-testimonials-description {
            margin-top: 18px;

            font-size: 13px;
          }

          .nm-client-trust-line {
            margin-top: 20px;
          }

          .nm-client-quote-card {
            min-height: 390px;

            padding: 30px 26px;

            border-radius: 21px;
          }

          .nm-client-quote {
            font-size: 19px;

            line-height: 1.55;
          }

          .nm-client-author {
            align-items: flex-start;

            flex-direction: column;

            gap: 12px;
          }

          .nm-client-author-client {
            display: none;
          }

          .nm-client-navigation {
            align-items: flex-start;

            flex-direction: column;

            gap: 14px;
          }

          .nm-client-selector {
            width: 100%;
          }

          .nm-client-arrows {
            margin-left: 0;
          }

        }

      `}</style>


      <section
        className="nm-client-testimonials"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div className="nm-client-testimonials-inner">

          {/* ==================================================
              MAIN LAYOUT
          ================================================== */}

          <div className="nm-client-testimonials-grid">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="nm-client-testimonials-left">

              <div
                className="
                  nm-client-testimonials-eyebrow
                "
              >

                <span
                  aria-hidden="true"
                  className="
                    nm-client-testimonials-eyebrow-line
                  "
                />

                Client references

              </div>


              <h2
                className="
                  nm-client-testimonials-title
                "
              >
                Trusted by
                <br />
                <em>teams that deliver.</em>
              </h2>


              <p
                className="
                  nm-client-testimonials-description
                "
              >
                Strong partnerships are built through
                consistency, responsiveness and execution
                that delivers where it matters most.
              </p>


              <div
                className="
                  nm-client-trust-line
                "
              >

                <span
                  className="
                    nm-client-trust-dot
                  "
                />

                Long-term client relationships

              </div>

            </div>


            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="nm-client-quote-area">

              <div
                className="
                  nm-client-quote-card
                "
              >

                <span
                  aria-hidden="true"
                  className="
                    nm-client-quote-mark
                  "
                >
                  “
                </span>


                <div
                  key={active}
                  className="
                    nm-client-quote-content
                  "
                >

                  <div
                    className="
                      nm-client-quote-top
                    "
                  >

                    <Quote
                      className="
                        nm-client-quote-icon
                      "
                      strokeWidth={1.5}
                    />


                    <blockquote
                      className="
                        nm-client-quote
                      "
                    >
                      “{current.quote}”
                    </blockquote>

                  </div>


                  <div
                    className="
                      nm-client-author
                    "
                  >

                    <div>

                      <p
                        className="
                          nm-client-author-name
                        "
                      >
                        {current.name}
                      </p>


                      <p
                        className="
                          nm-client-author-company
                        "
                      >
                        {current.company}
                      </p>

                    </div>


                    <span
                      className="
                        nm-client-author-client
                      "
                    >
                      {current.client}
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  CLIENT SELECTOR + CONTROLS
              ================================================= */}

              <div
                className="
                  nm-client-navigation
                "
              >

                <div
                  className="
                    nm-client-selector
                  "
                >

                  {testimonials.map(
                    (testimonial, index) => (
                      <button
                        key={testimonial.name}
                        type="button"
                        onClick={() =>
                          setActive(index)
                        }
                        aria-label={`Show testimonial from ${testimonial.name}`}
                        aria-pressed={
                          active === index
                        }
                        className={`
                          nm-client-selector-button

                          ${
                            active === index
                              ? "active"
                              : ""
                          }
                        `}
                      >
                        {testimonial.name}
                      </button>
                    ),
                  )}

                </div>


                <div
                  className="
                    nm-client-arrows
                  "
                >

                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={previous}
                    className="
                      nm-client-arrow
                    "
                  >
                    <ArrowLeft
                      size={15}
                      strokeWidth={1.8}
                    />
                  </button>


                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={next}
                    className="
                      nm-client-arrow
                    "
                  >
                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                    />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
