import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contactDetails, logoUrl } from "@/lib/site-data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneHref = `tel:${contactDetails.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-[0_2px_18px_rgba(8,43,97,0.08)]">

      {/* =========================================================
          TOP CONTACT BAR
      ========================================================= */}
      <div className="border-b border-white/10 bg-brand-deep text-white">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-10 lg:px-8">

          {/* EMAIL */}
          <a
            href={`mailto:${contactDetails.email}`}
            className="flex min-w-0 items-center gap-2 text-[10px] font-semibold tracking-tight transition-opacity hover:opacity-80 sm:text-xs"
          >
            <Mail className="size-3.5 shrink-0 sm:size-4" />

            <span className="truncate">
              {contactDetails.email}
            </span>
          </a>

          {/* PHONE */}
          <a
            href={phoneHref}
            className="ml-3 flex shrink-0 items-center gap-2 text-[10px] font-semibold sm:text-xs"
          >
            <Phone className="size-3.5 shrink-0 sm:size-4" />

            <span className="whitespace-nowrap">
              {contactDetails.phone}
            </span>
          </a>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
      <div className="bg-white">
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:h-[82px] lg:px-8">

          {/* LOGO */}
          <Link
            to="/"
            aria-label="NM Ingenious Home"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center"
          >
            <img
              src={logoUrl}
              alt="NM Ingenious"
              className="block h-[48px] w-auto object-contain sm:h-[54px] lg:h-[60px]"
            />
          </Link>

          {/* DESKTOP NAV */}
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

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 font-display text-xs font-bold text-coral-foreground shadow-[0_8px_20px_rgba(239,68,68,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Request an Audit
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-xl border border-border bg-white text-brand-deep transition-all duration-200 hover:bg-[#F7F9FC] lg:hidden"
          >
            {menuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <div
        className={`overflow-hidden border-t border-border bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="px-5 pb-6 pt-1">

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

          {/* MOBILE CONTACT DETAILS */}
          <div className="mt-5 rounded-2xl bg-[#F4F7FB] p-4">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Contact NM Ingenious
            </p>

            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-3 py-2 text-xs font-semibold text-brand-deep"
            >
              <Mail className="size-4 shrink-0 text-coral" />

              <span className="break-all">
                {contactDetails.email}
              </span>
            </a>

            <a
              href={phoneHref}
              className="flex items-center gap-3 py-2 text-xs font-semibold text-brand-deep"
            >
              <Phone className="size-4 shrink-0 text-coral" />

              <span>
                {contactDetails.phone}
              </span>
            </a>
          </div>

          {/* MOBILE CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-display text-sm font-bold text-coral-foreground shadow-[0_10px_25px_rgba(239,68,68,0.18)]"
          >
            Request an Audit
            <ArrowRight className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
