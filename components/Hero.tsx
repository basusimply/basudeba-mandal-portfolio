import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-12 sm:px-6 sm:py-24">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {site.credentials}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-white/80">{site.title}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{site.location}</p>
          <p className="mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-white/85">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--muted)]">
            {site.oneLiner}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition hover:bg-accent-muted"
            >
              View selected work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border border-surface-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/20 hover:bg-white/5"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl border border-surface-border shadow-xl shadow-black/40 sm:h-52 sm:w-52">
            <Image
              src={site.headshotSrc}
              alt={`${site.name}, ${site.title}`}
              width={208}
              height={208}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
