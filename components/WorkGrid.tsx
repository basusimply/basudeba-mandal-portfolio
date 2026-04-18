import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export function WorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {caseStudies.map((cs) => (
        <article
          key={cs.slug}
          className="group flex flex-col rounded-xl border border-surface-border bg-surface-elevated/60 p-6 transition hover:border-accent/40 hover:bg-surface-elevated"
        >
          <p className="font-mono text-xs text-accent">{cs.company}</p>
          <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-accent">
            <Link href={`/work/${cs.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
              {cs.title}
            </Link>
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
            {cs.summary}
          </p>
          <Link
            href={`/work/${cs.slug}`}
            className="mt-4 inline-flex text-sm font-medium text-accent transition hover:text-white"
          >
            Read case study →
          </Link>
        </article>
      ))}
    </div>
  );
}
