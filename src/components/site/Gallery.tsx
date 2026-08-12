import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Gallery({
  title = "On the floor, every day",
  eyebrow = "Gallery",
  intro = "Our teams inside modern trade and general trade stores across India: promoters, beauty advisors, merchandizers and activation crews at the last three feet.",
}: {
  title?: string;
  eyebrow?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (open === null) return;
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">{eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={g.url + i}
              type="button"
              onClick={() => setOpen(i)}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted outline-none",
                i % 6 === 0 && "lg:col-span-2 lg:row-span-2 lg:aspect-auto",
              )}
            >

              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.34 0.09 245 / 0.85), transparent 60%)",
                }}
              />
              <span
                aria-hidden
                className="absolute inset-2 rounded-lg border border-white/0 transition-all duration-500 group-hover:border-white/50"
              />
              <span className="absolute inset-x-4 bottom-4 translate-y-3 text-left text-xs font-semibold leading-snug text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            onClick={() => setOpen(null)}
          >
            <X className="size-5" />
          </button>
          <figure
            className="max-h-[85vh] max-w-4xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[open]!.url}
              alt={gallery[open]!.alt}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {gallery[open]!.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
