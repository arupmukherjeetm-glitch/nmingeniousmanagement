import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { logoUrl, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#432879] text-white">

      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: "var(--gradient-edge)" }}
      />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-white/[0.035]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">

          {/* =================================================
              COLUMN 1 — BRAND
          ================================================== */}

          <div className="lg:col-span-3">

            {/* LOGO */}

            <div className="inline-flex rounded-xl bg-white p-3 shadow-lg">
              <img
                src={logoUrl}
                alt="NM Ingenious"
                className="h-20 w-auto"
              />
            </div>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
              NM Ingenious Management Services Pvt. Ltd. turns shelf
              presence into sell-out, with trained promoters, disciplined
              retail execution and real-time store intelligence.
            </p>

            {/* CERTIFICATION */}

            <p
              className="
                mt-6
                inline-block
                rounded-full
                border
                border-white/20
                px-4
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/80
              "
            >
              Certified women-owned enterprise
            </p>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="mt-9 flex items-center gap-4">

              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/IngeniousManagementServices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M14 8h2.5V4.5c-.4-.1-1.6-.3-3-.3-3 0-5 1.8-5 5V12H5v4h3.5v4h4v-4H16l.5-4h-4V9.6C12.5 8.5 12.9 8 14 8z" />
                </svg>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/company/ingenious-management-services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5h-3V20h3V8.5ZM5 3C4 3 3.2 3.8 3.2 4.8S4 6.6 5 6.6s1.8-.8 1.8-1.8S6 3 5 3Zm15.5 10.4c0-3.5-1.9-5.2-4.5-5.2-2.1 0-3 .9-3.5 1.7V8.5h-3V20h3v-5.7c0-1.5.3-3 2-3s1.7 1.6 1.7 3.1V20h3.3v-6.6Z" />
                </svg>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:business.enquiry@ingeniousmanagement.com?subject=enquiry"
                aria-label="Email"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                  hover:shadow-lg
                "
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </a>

            </div>

          </div>


          {/* =================================================
              COLUMN 2 — QUICK LINKS / SERVICES
          ================================================== */}

          <div className="lg:col-span-4">

            {/* HEADING */}

            <div className="mb-7 flex items-center gap-4">

              <h3
                className="
                  font-display
                  text-xl
                  font-bold
                  text-white
                "
              >
                Quick Links
              </h3>

              <span className="h-px flex-1 bg-white/10" />

            </div>

            {/* SERVICES */}

            <div
              className="
                grid
                grid-cols-1
                gap-x-10
                gap-y-5
                sm:grid-cols-2
              "
            >

              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="
                    group
                    block
                    text-sm
                    leading-5
                    text-white/75
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {s.navLabel}
                </Link>
              ))}

            </div>

          </div>


          {/* =================================================
              COLUMN 3 — CONTACT INFO
          ================================================== */}

          <div className="min-w-0 lg:col-span-4">

            {/* HEADING */}

            <div className="mb-7 flex items-center gap-4">

              <h3
                className="
                  whitespace-nowrap
                  font-display
                  text-xl
                  font-bold
                  text-white
                "
              >
                Contact Info
              </h3>

              <span className="h-px flex-1 bg-white/10" />

            </div>

            <div className="space-y-6 text-[13px] leading-6">

              {/* OFFICE ADDRESS */}

              <div className="flex items-start gap-3">

                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-white"
                  strokeWidth={2}
                />

                <p className="text-white/75">
                  337, 1st Floor, Raghu Leela Mall,
                  <br />
                  Boraspada Road, Near Poisar
                  <br />
                  Depot, Kandivali,
                  <br />
                  Mumbai - 400067
                </p>

              </div>


              {/* GOOGLE PLUS CODE */}

              <div className="border-l border-white/15 pl-8">

                <p className="text-white/55">
                  Google Plus Code:
                </p>

                <p className="text-white/80">
                  6R7X+8M Mumbai,
                  <br />
                  Maharashtra
                </p>

              </div>


              {/* =================================================
                  MOBILE NUMBERS
                  LANDLINE REMOVED
              ================================================== */}

              <div className="flex items-start gap-3">

                <Smartphone
                  className="mt-1 h-5 w-5 shrink-0 text-white"
                  strokeWidth={2}
                />

                <div className="space-y-1">

                  <a
                    href="tel:+919222289841"
                    className="
                      block
                      text-white/75
                      transition-colors
                      hover:text-white
                    "
                  >
                    +91 9222289841
                  </a>

                  <a
                    href="tel:+918800596876"
                    className="
                      block
                      text-white/75
                      transition-colors
                      hover:text-white
                    "
                  >
                    +91 8800596876
                  </a>

                  <a
                    href="tel:+919619533691"
                    className="
                      block
                      text-white/75
                      transition-colors
                      hover:text-white
                    "
                  >
                    +91 9619533691
                  </a>

                </div>

              </div>


              {/* =================================================
                  EMAIL
                  SINGLE CONTINUOUS LINE
              ================================================== */}

              <div className="flex items-start gap-3">

                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-white"
                  strokeWidth={2}
                />

                <a
                  href="mailto:business.enquiry@ingeniousmanagement.com?subject=enquiry"
                  className="
                    whitespace-nowrap
                    text-[12px]
                    text-white/75
                    transition-colors
                    hover:text-white
                    sm:text-[13px]
                  "
                >
                  business.enquiry@ingeniousmanagement.com
                </a>

              </div>

            </div>

          </div>


          {/* =================================================
              COLUMN 4 — BRANCH OFFICES
          ================================================== */}

          <div className="lg:col-span-1">

            {/* HEADING */}

            <div className="mb-7">

              <h3
                className="
                  font-display
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                Branch
                <br />
                Offices
              </h3>

            </div>


            {/* BANGALORE */}

            <div className="mb-6">

              <p className="text-sm leading-5 text-white/80">
                Bangalore
              </p>

            </div>


            {/* NEW DELHI */}

            <div>

              <p className="text-sm leading-5 text-white/80">
                New Delhi
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM COPYRIGHT
      ====================================================== */}

      <div className="relative border-t border-white/10">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-5
            lg:px-8
          "
        >

          <p className="text-xs text-white/50">
            Copyright © 2026 NM Ingenious Management Services Pvt. Ltd.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}
