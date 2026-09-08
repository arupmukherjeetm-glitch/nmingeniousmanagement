import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { logoUrl, services, contactDetails } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const primaryNav = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Who It's For",
    to: "/who-its-for",
  },
  {
    label: "About Us",
    to: "/about",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-[0_1px_0_0_var(--border)] backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
    >
      {/* ========================================================
          UTILITY BAR
      ======================================================== */}
      <div
        className="text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <p className="hidden text-xs font-medium tracking-wide text-white/70 sm:block">
            Sell-out acceleration across 31 states &amp; UTs
          </p>

          <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-2 text-xs font-medium text-white/85 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 text-coral" />

              <span className="truncate">
                {contactDetails.email}
              </span>
            </a>

            <a
              href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-xs font-semibold text-white/85 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 text-coral" />

              <span>{contactDetails.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN HEADER
      ======================================================== */}
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        {/* ======================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          onClick={closeMenus}
        >
          <img
            src={logoUrl}
            alt="NM Ingenious Management Services"
            className="h-14 w-auto lg:h-[4.5rem]"
          />

          <span className="sr-only">
            NM Ingenious
          </span>
        </Link>

        {/* ======================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {/* HOME */}
          <NavItem to="/">
            Home
          </NavItem>

          {/* ====================================================
              SERVICES DROPDOWN
          ==================================================== */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
  type="button"
  className="flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
  aria-haspopup="true"
  aria-expanded={servicesOpen}
>
  <span>Services</span>

  <ChevronDown
    className={cn(
      "size-4 transition-transform duration-300",
      servicesOpen && "rotate-180",
    )}
  />
</button>

            {/* ==================================================
                SERVICES MEGA MENU
            ================================================== */}
            <div
              className={cn(
                "absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0",
              )}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-[var(--shadow-lift)]">
                <div className="grid grid-cols-2 gap-1 p-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{
                        slug: service.slug,
                      }}
                      className="group/link rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-soft"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-foreground transition-colors group-hover/link:text-brand">
                        {service.navLabel}
                      </span>

                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {service.tagline}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* VIEW ALL SERVICES */}
              
              </div>
            </div>
          </div>

          {/* ====================================================
              SECONDARY NAVIGATION
          ==================================================== */}
          {primaryNav.slice(1).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavItem>
          ))}
        </nav>

        {/* ======================================================
            CONTACT US CTA
        ====================================================== */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/request-an-audit"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-coral px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* ======================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-brand-soft lg:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* ========================================================
          MOBILE DRAWER
      ======================================================== */}
      <div
        className={cn(
          "fixed inset-x-0 top-[8.5rem] z-40 h-[calc(100dvh-8.5rem)] overflow-y-auto border-t border-border bg-background transition-all duration-300 lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="space-y-1 px-5 py-6">
          {/* ====================================================
              MOBILE PRIMARY NAV
          ==================================================== */}
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenus}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-brand-soft"
            >
              {item.label}
            </Link>
          ))}

          {/* ====================================================
              MOBILE SERVICES
          ==================================================== */}
          <div className="pt-2">
            <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>

            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{
                  slug: service.slug,
                }}
                onClick={closeMenus}
                className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-brand-soft"
              >
                {service.navLabel}
              </Link>
            ))}
          </div>

          {/* ====================================================
              MOBILE CONTACT CTA
          ==================================================== */}
          <Link
            to="/request-an-audit"
            onClick={closeMenus}
            className="mt-4 block rounded-lg bg-coral px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-coral/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   NAVIGATION ITEM
============================================================ */

function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      activeOptions={{
        exact: to === "/",
      }}
      className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand data-[status=active]:font-semibold data-[status=active]:text-brand"
    >
      {children}
    </Link>
  );
}
