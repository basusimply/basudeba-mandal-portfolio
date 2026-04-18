import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-elevated/40 p-8">
      <p className="text-sm text-[var(--muted)]">
        For opportunities, collaborations, or a copy of my resume, reach out via
        email or LinkedIn.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
        <a
          href={`mailto:${site.email}`}
          className="text-base font-medium text-white underline-offset-4 transition hover:text-accent hover:underline"
        >
          {site.email}
        </a>
        <a
          href={site.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-white underline-offset-4 transition hover:text-accent hover:underline"
        >
          LinkedIn profile
        </a>
      </div>
    </div>
  );
}
