import Link from "next/link";
import {
  Box,
  Gauge,
  Layers,
  Server,
  Shield,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const cardIcons: LucideIcon[] = [Layers, Workflow, Box, Gauge, Shield, Server];

const cardClassName =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border/90 bg-gradient-to-b from-white to-surface-elevated p-6 " +
  "shadow-[0_1px_0_0_rgba(255,255,255,0.65)_inset,0_4px_6px_-1px_rgba(15,23,42,0.06),0_12px_32px_-8px_rgba(15,23,42,0.1)] " +
  "transition-[transform,box-shadow,border-color] duration-300 ease-out " +
  "hover:-translate-y-1.5 " +
  "hover:border-accent/25 " +
  "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_8px_16px_-4px_rgba(13,148,136,0.15),0_24px_48px_-12px_rgba(15,23,42,0.12)] " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0 " +
  "motion-reduce:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.65)_inset,0_4px_6px_-1px_rgba(15,23,42,0.06),0_12px_32px_-8px_rgba(15,23,42,0.1)]";

export function WorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {caseStudies.map((cs, i) => {
        const Icon = cardIcons[i % cardIcons.length];
        return (
          <article key={cs.slug} className={cardClassName}>
            <div
              className="pointer-events-none absolute -left-1/4 -top-1/2 h-[120%] w-[150%] rounded-full bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,theme(colors.accent.DEFAULT/0.2),transparent_70%)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-0"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="flex gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-b from-accent-soft/90 to-accent-soft/50 text-accent shadow-sm"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                    <Link
                      href={`/work/${cs.slug}`}
                      className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      {cs.title}
                    </Link>
                  </h3>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {cs.summary}
              </p>
              <Link
                href={`/work/${cs.slug}`}
                className="mt-4 inline-flex text-sm font-medium text-accent transition hover:text-accent-hover"
              >
                Read case study →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
