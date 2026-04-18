import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/work"
        className="font-mono text-sm text-accent transition hover:text-white"
      >
        ← All case studies
      </Link>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-accent">
        {cs.company} · {cs.role}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {cs.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-white/85">{cs.summary}</p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Context &amp; problem
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">{cs.problem}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Ownership
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            {cs.ownership}
          </p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Outcome
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">{cs.outcome}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Stack &amp; tools
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-surface-border bg-surface-elevated px-3 py-1.5 font-mono text-xs text-white/80"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-16 border-t border-surface-border pt-10">
        <p className="text-sm text-[var(--muted)]">More work</p>
        <ul className="mt-4 space-y-2">
          {caseStudies
            .filter((c) => c.slug !== cs.slug)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/work/${c.slug}`}
                  className="text-accent transition hover:text-white"
                >
                  {c.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
