import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { logoUrl, services, contactDetails } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Who It's For", to: "/who-its-for" },
  { label: "About Us", to: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /*
   * Lock page scrolling while the mobile navigation is open.
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Close the mobile menu if the viewport is resized to desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-xl">
      {/* ============================================================
          DESKTOP / MAIN NAVIGATION
      ============================================================ */}

      <div className="mx-auto flex h-[82px] max-w-7xl items-center px-5 lg:px-8">
        {/* ==========================================================
            LOGO
        ========================================================== */}

        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => {
            setOpen(false);
            setServicesOpen(false);
          }}
        >
          <img
            src={logoUrl}
            alt="NM Ingenious Management Services"
            className="h-[58px] w-auto object-contain lg:h-[64px]"
          />

          <span className="sr-only">NM Ingenious</span>
        </Link>

        {/* ==========================================================
            DESKTOP NAVIGATION
        ========================================================== */}

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {/* Home */}
          <NavItem to="/">Home</NavItem>

          {/* ========================================================
              SERVICES DROPDOWN
          ======================================================== */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services

              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </Link>

            {/* Services dropdown */}
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
                      params={{ slug: service.slug }}
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

                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center justify-between border-t border-border bg-brand-soft/60 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  <span>View all services</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Who It's For + About Us */}
          {primaryNav.slice(1).map((item) => (
            <NavItem key={item.to} to={item.to}>
              {item.label}
            </NavItem>
          ))}

          {/* ========================================================
              CONTACT US
          ======================================================== */}

          <a
            href={`mailto:${contactDetails.email}`}
            className="ml-3 inline-flex h-11 items-center justify-center rounded-lg bg-coral px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact Us
          </a>
        </nav>

        {/* ==========================================================
            CERTIFICATION BADGE
        ========================================================== */}

        <div className="ml-5 hidden h-[82px] w-[120px] shrink-0 items-center justify-center lg:flex">
          <img
            src="/media/awards/amazing-workplaces-certified.png"
            alt="Amazing Workplaces Certified"
            className="h-[112px] w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* ==========================================================
            MOBILE MENU BUTTON
        ========================================================== */}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-brand-soft lg:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* ============================================================
          MOBILE DRAWER
      ============================================================ */}

      <div
        className={cn(
          "fixed inset-x-0 top-[82px] z-40 h-[calc(100dvh-82px)] overflow-y-auto border-t border-border bg-background transition-all duration-300 lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="space-y-1 px-5 py-6">
          {/* Main navigation */}
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => {
                setOpen(false);
                setServicesOpen(false);
              }}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-brand-soft"
            >
              {item.label}
            </Link>
          ))}

          {/* ========================================================
              MOBILE SERVICES
          ======================================================== */}

          <div className="pt-3">
            <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>

            <Link
              to="/services"
              onClick={() => {
                setOpen(false);
                setServicesOpen(false);
              }}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
            >
              All services
            </Link>

            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
                className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-brand-soft"
              >
                {service.navLabel}
              </Link>
            ))}
          </div>

          {/* ========================================================
              MOBILE CONTACT
          ======================================================== */}

          <a
            href={`mailto:${contactDetails.email}`}
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-lg bg-coral px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-coral/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

/* ================================================================
   NAV ITEM
================================================================ */

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
