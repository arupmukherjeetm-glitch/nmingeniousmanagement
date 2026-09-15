import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { logoUrl } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#432879] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">


          {/* =================================================
              COLUMN 1 — LOGO / COPYRIGHT / SOCIAL
          ================================================== */}

          <div className="lg:col-span-3">

            {/* LOGO */}

            <div className="inline-flex rounded-xl bg-white p-3">
              <img
                src={logoUrl}
                alt="NM Ingenious"
                className="h-20 w-auto"
              />
            </div>


            {/* COPYRIGHT */}

            <p className="mt-4 text-[13px] leading-relaxed text-white/90">
              Copyright © 2024 NM Ingenious ltd.
            </p>

            <p className="mt-4 text-[13px] text-white/90">
              All rights reserved
            </p>


            {/* SOCIAL ICONS */}

            <div className="mt-10 flex items-center gap-5">

              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/IngeniousManagementServices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
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
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
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
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#6845C5]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EF4035]
                "
              >
                <Mail className="h-6 w-6" strokeWidth={2} />
              </a>

            </div>

          </div>


          {/* =================================================
              COLUMN 2 — QUICK LINKS
          ================================================== */}

          <div className="lg:col-span-2 lg:col-start-5">

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


            <ul className="mt-8 space-y-6 text-[13px]">

              <li>
                <Link
                  to="/"
                  className="
                    text-white/90
                    transition-colors
                    hover:text-white
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    text-white/90
                    transition-colors
                    hover:text-white
                  "
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-white/90
                    transition-colors
                    hover:text-white
                  "
                >
                  Business services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    text-white/90
                    transition-colors
                    hover:text-white
                  "
                >
                  Contact us
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="
                    text-white/90
                    transition-colors
                    hover:text-white
                  "
                >
                  Blogs
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              COLUMN 3 — CONTACT INFO
          ================================================== */}

          <div className="lg:col-span-3">

            <h3
              className="
                font-display
                text-xl
                font-bold
                text-white
              "
            >
              Contact Info
            </h3>


            <div className="mt-8 space-y-6 text-[13px] leading-relaxed">

              {/* ADDRESS */}

              <div className="flex items-start gap-4">

                <MapPin
                  className="mt-0.5 h-6 w-6 shrink-0 text-white"
                  strokeWidth={2.5}
                />

                <p>
                  337, 1st Floor, Raghu Leela Mall,
                  <br />
                  Boraspada Road, Near Poisar
                  <br />
                  Depot, Kandivali, Mumbai - 400067
                </p>

              </div>


              {/* GOOGLE PLUS CODE */}

              <div className="pl-10">
                <p>
                  Google Plus Code: 6R7X+8M Mumbai,
                  <br />
                  Maharashtra
                </p>
              </div>


              {/* LANDLINE */}

              <div className="flex items-center gap-4">

                <Phone
                  className="h-6 w-6 shrink-0 text-white"
                  strokeWidth={2.5}
                />

                <a
                  href="tel:+912249240438"
                  className="transition-colors hover:text-white"
                >
                  Land Line: +91-2249240438
                </a>

              </div>


              {/* MOBILE NUMBERS */}

              <div className="flex items-start gap-4">

                <Smartphone
                  className="mt-0.5 h-6 w-6 shrink-0 text-white"
                  strokeWidth={2.5}
                />

                <div>

                  <a
                    href="tel:+919222289841"
                    className="block transition-colors hover:text-white"
                  >
                    +91 9222289841
                  </a>

                  <a
                    href="tel:+918800596876"
                    className="block transition-colors hover:text-white"
                  >
                    +91 8800596876
                  </a>

                  <a
                    href="tel:+919619533691"
                    className="block transition-colors hover:text-white"
                  >
                    +91 9619533691
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex items-start gap-4">

                <Mail
                  className="mt-0.5 h-6 w-6 shrink-0 text-white"
                  strokeWidth={2.5}
                />

                <a
                  href="mailto:business.enquiry@ingeniousmanagement.com?subject=enquiry"
                  className="
                    break-all
                    transition-colors
                    hover:text-white
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

          <div className="lg:col-span-3">

            <h3
              className="
                font-display
                text-xl
                font-bold
                text-white
              "
            >
              Branch Offices
            </h3>


            <div className="mt-8">

              <p className="text-[13px] leading-relaxed text-white/90">
                Bangalore and New Delhi
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM COPYRIGHT BAR
      ====================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} NM Ingenious Management Services Pvt. Ltd.
            All rights reserved.
          </p>

          <p>
            Sell-Out Acceleration Partner · Since 2008
          </p>

        </div>

      </div>

    </footer>
  );
}
