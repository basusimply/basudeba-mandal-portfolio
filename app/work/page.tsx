import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudiesIntro } from "@/components/CaseStudiesIntro";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected DevOps and platform engineering case studies: CI/CD on AKS, cost optimization, SLI/SLO, and DevSecOps.",
};

export default function WorkIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <CaseStudiesIntro titleAs="h1" />
      <p className="mt-6 max-w-2xl text-ink-muted">
        Deep dives into problems, ownership, and outcomes—written for engineers
        and hiring managers who care about how work actually ships.
      </p>
      <ul className="mt-12 space-y-4">
        {caseStudies.map((cs) => (
          <li key={cs.slug}>
            <Link
              href={`/work/${cs.slug}`}
              className="group block rounded-xl border border-surface-border bg-surface-elevated p-6 shadow-card transition hover:border-accent/35 hover:shadow-card-hover"
            >
              <h2 className="text-xl font-semibold text-ink group-hover:text-accent">
                {cs.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{cs.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
