import { impactMetrics } from "@/lib/impact-metrics";

export function ImpactByNumbers() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {impactMetrics.map((m) => (
        <article
          key={m.id}
          className="flex h-full flex-col rounded-2xl border border-surface-border bg-surface-elevated p-5 shadow-card transition hover:border-accent/30 hover:shadow-card-hover sm:p-6"
        >
          <p className="text-4xl font-extrabold leading-none tracking-tight text-accent sm:text-5xl">
            {m.value}
          </p>
          <h3 className="mt-3 text-sm font-bold leading-snug text-ink sm:text-base">
            {m.label}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
            {m.description}
          </p>
        </article>
      ))}
    </div>
  );
}
