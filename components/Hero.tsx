import Link from "next/link";
import { site } from "@/lib/site";
import { heroChips } from "@/lib/chips";
import { heroRoleSlides } from "@/lib/hero-roles";
import { HeroRotatingRoles } from "@/components/HeroRotatingRoles";

export function Hero() {
  return (
    <section className="relative min-h-[min(85vh,760px)] overflow-hidden border-b border-surface-border bg-surface-elevated">
      {/* Soft gradient background (no headshot image) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-soft/50 via-white to-surface"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(13,148,136,0.14),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>

        <p className="mt-5 font-mono text-sm text-ink-muted sm:text-base">
          <span className="text-accent">$</span> whoami
        </p>

        <div className="mt-3 w-full max-w-2xl">
          <HeroRotatingRoles slides={heroRoleSlides} />
        </div>

        <p className="mt-8 text-sm text-ink-muted sm:mt-10">{site.location}</p>

        <div className="mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {heroChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-surface-border bg-white/90 px-3 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-hover"
          >
            Explore my work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white/95 px-6 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur-sm transition hover:border-accent/40 hover:bg-accent-soft/40"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
