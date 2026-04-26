import Link from "next/link";
import { LineChart, Lock, PiggyBank, type LucideIcon, Zap } from "lucide-react";
import { provenImpact } from "@/lib/proven-impact";

const rowIcons: LucideIcon[] = [Zap, PiggyBank, Lock, LineChart];

const cardClassName =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border/80 bg-gradient-to-b from-surface-muted/90 to-surface-muted/50 px-5 py-5 " +
  "shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_2px_8px_-2px_rgba(15,23,42,0.08)] " +
  "transition-[transform,box-shadow,border-color] duration-300 ease-out " +
  "hover:-translate-y-0.5 " +
  "hover:border-accent/20 " +
  "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.55)_inset,0_6px_20px_-4px_rgba(13,148,136,0.12),0_2px_8px_-2px_rgba(15,23,42,0.08)] " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function ProvenImpactRow() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
      {provenImpact.map((p, i) => {
        const Icon = rowIcons[i % rowIcons.length];
        return (
          <div key={p.label} className={cardClassName}>
            <div
              className="pointer-events-none absolute -left-1/4 -top-2/3 h-full w-[140%] rounded-full bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,theme(colors.accent.DEFAULT/0.12),transparent_72%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-0"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="flex items-start gap-2.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/15 bg-accent-soft/50 text-accent"
                  aria-hidden
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-2xl font-bold text-ink">{p.value}</p>
                  <p className="mt-0.5 font-semibold text-ink">{p.label}</p>
                </div>
              </div>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{p.detail}</p>
              {p.caseStudySlug ? (
                <Link
                  href={`/work/${p.caseStudySlug}`}
                  className="mt-3 text-sm font-medium text-accent transition hover:text-accent-hover"
                >
                  View case study →
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
