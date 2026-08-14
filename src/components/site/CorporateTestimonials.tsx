import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

/*
 * Corporate testimonial section
 *
 * Designed as a premium client-reference module:
 * - Large featured testimonial
 * - Corporate-style client index
 * - Smooth transitions
 * - Auto rotation
 * - Manual previous / next controls
 * - Responsive layout
 * - No dependency on external CSS
 */

const testimonials = [
  {
    id: "01",
    name: "Samuel Thomas",
    company: "Director at Axiom Gen Nxt India Pvt Ltd",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
    shortCompany: "Axiom",
  },

  {
    id: "02",
    name: "Saurabh Desai",
    company: "HR Professional",
    quote:
      "The team at NM Ingenious teams are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in bigstores across the country.",
    shortCompany: "Corporate Partner",
  },

  {
    id: "03",
    name: "Tejas Goenka",
    company: "MSME Honours",
    quote:
      "Businesses like you are driven by innovation & inspire the rest of us. It was amazing to hear your story & we are glad that you gave us a chance to share it with the world.",
    shortCompany: "MSME Honours",
  },

  {
    id: "04",
    name: "Kanu",
    company: "Senior Purchase Manager | Indian MNC",
    quote:
      "I have had great experience working with you over last couple of years and value Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
    shortCompany: "Indian MNC",
  },

  {
    id: "05",
    name: "Rishabh Mariwala",
    company: "Marico",
    quote:
      "I wanted to thank you for your ongoing help and a assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
    shortCompany: "Marico",
  },
];

export function CorporateTestimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = testimonials[active];

  /*
   * Automatic rotation
   *
   * Slower timing keeps it corporate rather than feeling
   * like an aggressive carousel.
   */
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((currentIndex) => {
        return (currentIndex + 1) % testimonials.length;
      });
    }, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  const previous = () => {
    setActive((currentIndex) => {
      return (
        (currentIndex - 1 + testimonials.length) %
        testimonials.length
      );
    });
  };

  const next = () => {
    setActive((currentIndex) => {
      return (currentIndex + 1) % testimonials.length;
    });
  };

  return (
    <>
      <style>{`

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .nm-testimonials {
          position: relative;
          overflow: hidden;
          background: #f7f8fa;
          padding: 110px 0;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .nm-testimonials-container {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .nm-testimonials-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 58px;
        }


        .nm-testimonials-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;

          color: #ef3e35;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.28em;
          text-transform: uppercase;
        }


        .nm-testimonials-eyebrow-line {
          width: 42px;
          height: 2px;
          background: #ef3e35;
        }


        .nm-testimonials-title {
          max-width: 780px;

          margin: 0;

          color: #0b1730;

          font-size: clamp(
            38px,
            5vw,
            66px
          );

          font-weight: 800;

          line-height: 0.98;

          letter-spacing: -0.055em;
        }


        .nm-testimonials-title span {
          color: #234986;
        }


        .nm-testimonials-header-copy {
          max-width: 350px;

          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.8;
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .nm-testimonials-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.55fr)
            minmax(280px, 0.65fr);

          gap: 22px;

          align-items: stretch;
        }


        /* =====================================================
           FEATURED CARD
        ===================================================== */

        .nm-testimonial-feature {
          position: relative;

          min-height: 520px;

          overflow: hidden;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          padding: 48px;

          border-radius: 28px;

          background:
            linear-gradient(
              135deg,
              #123b70 0%,
              #173f78 55%,
              #0c2c58 100%
            );

          box-shadow:
            0 25px 70px
            rgba(12, 44, 88, 0.16);
        }


        /* Large decorative quote */

        .nm-testimonial-feature-quote {
          position: absolute;

          top: -30px;
          right: 25px;

          color: rgba(
            255,
            255,
            255,
            0.055
          );

          font-family: Georgia, serif;

          font-size: 230px;

          line-height: 1;

          pointer-events: none;

          user-select: none;
        }


        /* Decorative circle */

        .nm-testimonial-glow {
          position: absolute;

          width: 420px;
          height: 420px;

          right: -220px;
          bottom: -240px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                255,
                255,
                255,
                0.11
              ),
              transparent 68%
            );

          pointer-events: none;
        }


        /* =====================================================
           FEATURE META
        ===================================================== */

        .nm-testimonial-feature-top {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: center;
          justify-content: space-between;
        }


        .nm-testimonial-index {
          color: rgba(
            255,
            255,
            255,
            0.55
          );

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.22em;
        }


        .nm-testimonial-client-tag {
          padding: 8px 13px;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.18
            );

          border-radius: 999px;

          color: rgba(
            255,
            255,
            255,
            0.78
          );

          background: rgba(
            255,
            255,
            255,
            0.055
          );

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.17em;

          text-transform: uppercase;

          backdrop-filter: blur(10px);
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .nm-testimonial-quote-wrap {
          position: relative;
          z-index: 2;

          margin-top: 50px;

          max-width: 850px;
        }


        .nm-testimonial-quote-icon {
          width: 40px;
          height: 40px;

          margin-bottom: 25px;

          color: #ef4b42;
        }


        .nm-testimonial-quote {
          margin: 0;

          color: #ffffff;

          font-family: inherit;

          font-size: clamp(
            22px,
            2.6vw,
            34px
          );

          font-weight: 500;

          line-height: 1.48;

          letter-spacing: -0.018em;
        }


        /* =====================================================
           AUTHOR
        ===================================================== */

        .nm-testimonial-author {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 30px;

          margin-top: 55px;

          padding-top: 26px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );
        }


        .nm-testimonial-author-name {
          margin: 0;

          color: white;

          font-size: 18px;

          font-weight: 800;

          letter-spacing: -0.015em;
        }


        .nm-testimonial-author-role {
          margin: 7px 0 0;

          color: rgba(
            255,
            255,
            255,
            0.58
          );

          font-size: 12px;

          line-height: 1.6;
        }


        .nm-testimonial-counter {
          color: rgba(
            255,
            255,
            255,
            0.45
          );

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.18em;

          text-transform: uppercase;

          white-space: nowrap;
        }


        /* =====================================================
           RIGHT CLIENT LIST
        ===================================================== */

        .nm-testimonial-list {
          display: flex;

          flex-direction: column;

          gap: 10px;

          padding: 10px;
        }


        .nm-testimonial-item {
          position: relative;

          display: flex;

          align-items: center;

          gap: 17px;

          width: 100%;

          padding: 18px 18px;

          border: 1px solid
            rgba(
              14,
              36,
              70,
              0.09
            );

          border-radius: 17px;

          background: rgba(
            255,
            255,
            255,
            0.58
          );

          text-align: left;

          cursor: pointer;

          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }


        .nm-testimonial-item:hover {
          transform:
            translateX(-4px);

          border-color:
            rgba(
              35,
              73,
              134,
              0.2
            );

          background: #ffffff;

          box-shadow:
            0 12px 30px
            rgba(
              14,
              36,
              70,
              0.08
            );
        }


        .nm-testimonial-item.active {
          transform:
            translateX(-8px);

          border-color:
            rgba(
              35,
              73,
              134,
              0.16
            );

          background: #ffffff;

          box-shadow:
            0 15px 35px
            rgba(
              14,
              36,
              70,
              0.10
            );
        }


        /* Active line */

        .nm-testimonial-item-line {
          width: 3px;
          height: 36px;

          flex-shrink: 0;

          border-radius: 99px;

          background: #d9dee7;

          transition:
            background 300ms ease,
            height 300ms ease;
        }


        .nm-testimonial-item.active
        .nm-testimonial-item-line {
          height: 46px;

          background: #ef3e35;
        }


        /* Number */

        .nm-testimonial-item-number {
          color: #a3adbd;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;
        }


        .nm-testimonial-item.active
        .nm-testimonial-item-number {
          color: #ef3e35;
        }


        /* Name */

        .nm-testimonial-item-name {
          display: block;

          color: #14213a;

          font-size: 14px;

          font-weight: 800;
        }


        /* Company */

        .nm-testimonial-item-company {
          display: block;

          margin-top: 4px;

          overflow: hidden;

          color: #7b8798;

          font-size: 11px;

          line-height: 1.45;

          text-overflow: ellipsis;

          white-space: nowrap;
        }


        /* =====================================================
           CONTROLS
        ===================================================== */

        .nm-testimonial-controls {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 28px;

          padding: 0 10px;
        }


        .nm-testimonial-dots {
          display: flex;

          align-items: center;

          gap: 7px;
        }


        .nm-testimonial-dot {
          width: 7px;
          height: 7px;

          padding: 0;

          border: 0;

          border-radius: 50%;

          background: #d4d9e2;

          cursor: pointer;

          transition:
            width 300ms ease,
            border-radius 300ms ease,
            background 300ms ease;
        }


        .nm-testimonial-dot.active {
          width: 24px;

          border-radius: 99px;

          background: #ef3e35;
        }


        .nm-testimonial-arrows {
          display: flex;

          gap: 8px;
        }


        .nm-testimonial-arrow {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 46px;
          height: 46px;

          padding: 0;

          border: 1px solid
            rgba(
              14,
              36,
              70,
              0.14
            );

          border-radius: 50%;

          background: #ffffff;

          color: #16365f;

          cursor: pointer;

          transition:
            transform 250ms ease,
            background 250ms ease,
            color 250ms ease,
            border-color 250ms ease;
        }


        .nm-testimonial-arrow:hover {
          transform: translateY(-2px);

          border-color: #ef3e35;

          background: #ef3e35;

          color: #ffffff;
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

          .nm-testimonials {
            padding: 80px 0;
          }

          .nm-testimonials-header {
            flex-direction: column;

            align-items: flex-start;

            margin-bottom: 38px;
          }

          .nm-testimonials-layout {
            grid-template-columns: 1fr;
          }

          .nm-testimonial-feature {
            min-height: 480px;

            padding: 35px;
          }

          .nm-testimonial-list {
            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            padding: 0;
          }

          .nm-testimonial-item.active,
          .nm-testimonial-item:hover {
            transform: none;
          }
        }


        @media (max-width: 600px) {

          .nm-testimonials {
            padding: 70px 0;
          }

          .nm-testimonials-container {
            width:
              calc(100% - 32px);
          }

          .nm-testimonials-title {
            font-size: 40px;
          }

          .nm-testimonials-header-copy {
            font-size: 13px;
          }

          .nm-testimonial-feature {
            min-height: 530px;

            padding: 28px;

            border-radius: 22px;
          }

          .nm-testimonial-quote {
            font-size: 21px;

            line-height: 1.55;
          }

          .nm-testimonial-author {
            align-items: flex-start;

            flex-direction: column;

            gap: 15px;
          }

          .nm-testimonial-list {
            grid-template-columns: 1fr;
          }

          .nm-testimonial-item {
            padding: 15px;
          }

          .nm-testimonial-controls {
            padding: 0;
          }
        }

      `}</style>


      <section
        className="nm-testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* =====================================================
            SUBTLE BACKGROUND DETAIL
        ===================================================== */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-180px",
            left: "-180px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(35,73,134,0.08), transparent 68%)",
            pointerEvents: "none",
          }}
        />


        <div className="nm-testimonials-container">

          {/* ===================================================
              HEADER
          =================================================== */}

          <div className="nm-testimonials-header">

            <div>

              <div className="nm-testimonials-eyebrow">

                <span
                  className="nm-testimonials-eyebrow-line"
                  aria-hidden="true"
                />

                Client references

              </div>


              <h2 className="nm-testimonials-title">
                Trusted by teams
                <br />

                <span>that demand execution.</span>
              </h2>

            </div>


            <p className="nm-testimonials-header-copy">
              Long-standing relationships are built on
              consistency, responsiveness and the ability to
              deliver where the brand meets the shopper.
            </p>

          </div>


          {/* ===================================================
              CONTENT
          =================================================== */}

          <div className="nm-testimonials-layout">

            {/* =================================================
                FEATURED TESTIMONIAL
            ================================================= */}

            <div
              className="nm-testimonial-feature"
              key={current.id}
            >

              {/* Decorative quote */}

              <div
                aria-hidden="true"
                className="
                  nm-testimonial-feature-quote
                "
              >
                “
              </div>


              <div
                aria-hidden="true"
                className="
                  nm-testimonial-glow
                "
              />


              {/* TOP */}

              <div
                className="
                  nm-testimonial-feature-top
                "
              >

                <span
                  className="
                    nm-testimonial-index
                  "
                >
                  CLIENT REFERENCE
                </span>


                <span
                  className="
                    nm-testimonial-client-tag
                  "
                >
                  {current.shortCompany}
                </span>

              </div>


              {/* QUOTE */}

              <div
                className="
                  nm-testimonial-quote-wrap
                "
              >

                <Quote
                  className="
                    nm-testimonial-quote-icon
                  "
                  strokeWidth={1.5}
                />


                <blockquote
                  className="
                    nm-testimonial-quote
                  "
                >
                  “{current.quote}”
                </blockquote>

              </div>


              {/* AUTHOR */}

              <div
                className="
                  nm-testimonial-author
                "
              >

                <div>

                  <p
                    className="
                      nm-testimonial-author-name
                    "
                  >
                    {current.name}
                  </p>


                  <p
                    className="
                      nm-testimonial-author-role
                    "
                  >
                    {current.company}
                  </p>

                </div>


                <span
                  className="
                    nm-testimonial-counter
                  "
                >
                  {current.id} / 05
                </span>

              </div>

            </div>


            {/* =================================================
                CLIENT LIST
            ================================================= */}

            <div>

              <div
                className="
                  nm-testimonial-list
                "
              >

                {testimonials.map(
                  (testimonial, index) => {

                    const isActive =
                      index === active;

                    return (
                      <button
                        key={testimonial.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() =>
                          setActive(index)
                        }
                        className={`
                          nm-testimonial-item

                          ${
                            isActive
                              ? "active"
                              : ""
                          }
                        `}
                      >

                        <span
                          aria-hidden="true"
                          className="
                            nm-testimonial-item-line
                          "
                        />


                        <span
                          className="
                            nm-testimonial-item-number
                          "
                        >
                          {testimonial.id}
                        </span>


                        <span
                          style={{
                            minWidth: 0,
                            flex: 1,
                          }}
                        >

                          <span
                            className="
                              nm-testimonial-item-name
                            "
                          >
                            {testimonial.name}
                          </span>


                          <span
                            className="
                              nm-testimonial-item-company
                            "
                          >
                            {testimonial.company}
                          </span>

                        </span>

                      </button>
                    );
                  },
                )}

              </div>


              {/* =================================================
                  CONTROLS
              ================================================= */}

              <div
                className="
                  nm-testimonial-controls
                "
              >

                {/* DOTS */}

                <div
                  className="
                    nm-testimonial-dots
                  "
                >

                  {testimonials.map(
                    (testimonial, index) => (
                      <button
                        key={testimonial.id}
                        type="button"
                        aria-label={`Show testimonial ${index + 1}`}
                        onClick={() =>
                          setActive(index)
                        }
                        className={`
                          nm-testimonial-dot

                          ${
                            index === active
                              ? "active"
                              : ""
                          }
                        `}
                      />
                    ),
                  )}

                </div>


                {/* ARROWS */}

                <div
                  className="
                    nm-testimonial-arrows
                  "
                >

                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={previous}
                    className="
                      nm-testimonial-arrow
                    "
                  >
                    <ArrowLeft
                      size={17}
                      strokeWidth={1.8}
                    />
                  </button>


                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={next}
                    className="
                      nm-testimonial-arrow
                    "
                  >
                    <ArrowRight
                      size={17}
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
