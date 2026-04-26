import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseStudiesIntro } from "@/components/CaseStudiesIntro";

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

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/work"
        className="font-mono text-sm text-accent transition hover:text-accent-hover"
      >
        ← All case studies
      </Link>
      <CaseStudiesIntro className="mt-6" size="compact" />
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
        {cs.company ? (
          <>
            {cs.company} · {cs.role}
          </>
        ) : (
          <>{cs.role}</>
        )}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {cs.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">{cs.summary}</p>

      <div className="mt-12 space-y-10">
        <section>
          <Subheading>Context &amp; problem</Subheading>
          <p className="mt-4 leading-relaxed text-ink-muted">{cs.problem}</p>
        </section>
        <section>
          <Subheading>Ownership</Subheading>
          <p className="mt-4 leading-relaxed text-ink-muted">{cs.ownership}</p>
        </section>
        <section>
          <Subheading>Outcome</Subheading>
          {Array.isArray(cs.outcome) ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink marker:text-ink">
              {cs.outcome.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 leading-relaxed text-ink">{cs.outcome}</p>
          )}
        </section>
        <section>
          <Subheading>Stack &amp; tools</Subheading>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-surface-border bg-surface-muted px-3 py-1.5 font-mono text-xs text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-16 border-t border-surface-border pt-10">
        <p className="font-mono text-xs text-ink-muted">More work</p>
        <ul className="mt-4 space-y-2">
          {caseStudies
            .filter((c) => c.slug !== cs.slug)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/work/${c.slug}`}
                  className="text-accent transition hover:text-accent-hover"
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
