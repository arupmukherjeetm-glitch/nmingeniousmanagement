import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { contactDetails, logoUrl } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <div className="mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between px-5 sm:h-[84px] lg:h-[88px] lg:px-8">

        {/* LOGO */}

        <Link
          to="/"
          aria-label="NM Ingenious"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <img
            src={logoUrl}
            alt="NM Ingenious"
            className="block h-[52px] w-auto object-contain sm:h-[58px] lg:h-[62px]"
          />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            to="/"
            className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
          >
            About
          </Link>

          <Link
            to="/services"
            className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
          >
            Contact
          </Link>

        </nav>


        {/* =====================================================
            DESKTOP RIGHT SIDE
        ====================================================== */}

        <div className="hidden items-center gap-5 lg:flex">

          <a
            href={`mailto:${contactDetails.email}`}
            className="text-xs font-semibold text-muted-foreground transition-colors hover:text-brand-deep"
          >
            {contactDetails.email}
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 font-display text-xs font-bold text-coral-foreground transition-all duration-300 hover:brightness-110"
          >
            Request an Audit
            <ArrowRight className="size-3.5" />
          </Link>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-brand-deep transition-all duration-200 hover:bg-[#F7F9FC] lg:hidden"
        >
          {menuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-border
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >

        <nav className="px-5 pb-6 pt-2">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block border-b border-border py-4 font-display text-base font-bold text-brand-deep"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block border-b border-border py-4 font-display text-base font-bold text-brand-deep"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block border-b border-border py-4 font-display text-base font-bold text-brand-deep"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block border-b border-border py-4 font-display text-base font-bold text-brand-deep"
          >
            Contact
          </Link>


          {/* CONTACT DETAILS */}

          <div className="mt-5 space-y-2">

            <a
              href={`mailto:${contactDetails.email}`}
              className="block break-all text-xs font-medium text-muted-foreground"
            >
              {contactDetails.email}
            </a>

            <a
              href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
              className="block text-xs font-medium text-muted-foreground"
            >
              {contactDetails.phone}
            </a>

          </div>


          {/* CTA */}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-display text-sm font-bold text-coral-foreground"
          >
            Request an Audit
            <ArrowRight className="size-4" />
          </Link>

        </nav>

      </div>

    </header>
  );
}
