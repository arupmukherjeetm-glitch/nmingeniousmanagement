import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, logoUrl, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep text-white/75">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: "var(--gradient-edge)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="inline-flex rounded-lg bg-white p-3">
            <img src={logoUrl} alt="NM Ingenious" className="h-12 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            NM Ingenious Management Services Pvt. Ltd. turns shelf presence into sell-out, with
            trained promoters, disciplined retail execution and real-time store intelligence.
          </p>
          <p className="mt-6 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            Certified women-owned enterprise
          </p>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Services</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm transition-colors hover:text-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Company</h3>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/who-its-for" className="transition-colors hover:text-white">
                Who It's For
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Reach us</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${contactDetails.email}`} className="break-all hover:text-white">
                {contactDetails.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {contactDetails.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {contactDetails.office}. {contactDetails.branches}.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} NM Ingenious Management Services Pvt. Ltd. All rights
            reserved.
          </p>
          <p>Sell-Out Acceleration Partner · Since 2008</p>
        </div>
      </div>
    </footer>
  );
}
