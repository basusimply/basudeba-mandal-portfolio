import { heroStats } from "@/lib/stats";

export function HeroStats() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
      {heroStats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-surface-border bg-surface-elevated px-6 py-6 text-center shadow-card"
        >
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            {s.value}
          </p>
          <p className="mt-2 font-semibold text-ink">{s.label}</p>
          <p className="mt-1 text-sm text-ink-muted">{s.hint}</p>
        </div>
      ))}
    </div>
  );
}
