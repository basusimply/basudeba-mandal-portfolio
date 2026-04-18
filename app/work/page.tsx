import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected DevOps and platform engineering case studies: CI/CD on AKS, cost optimization, SLI/SLO, and DevSecOps.",
};

export default function WorkIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Case studies
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Deep dives into problems, ownership, and outcomes—written for engineers
        and hiring managers who care about how work actually ships.
      </p>
      <ul className="mt-12 space-y-6">
        {caseStudies.map((cs) => (
          <li key={cs.slug}>
            <Link
              href={`/work/${cs.slug}`}
              className="group block rounded-xl border border-surface-border bg-surface-elevated/50 p-6 transition hover:border-accent/40"
            >
              <span className="font-mono text-xs text-accent">{cs.company}</span>
              <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-accent">
                {cs.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{cs.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
