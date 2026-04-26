import Link from "next/link";

/** Slim CTA on home — full form lives on /contact */
export function ContactSection() {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface-elevated p-8 shadow-card sm:p-10">
      <h3 className="text-xl font-semibold text-ink">Let&apos;s connect</h3>
      <p className="mt-3 max-w-2xl text-ink-muted">
        Open to discussing platform engineering, SRE, and collaboration. Use the
        form for project inquiries or partnerships—I&apos;ll reply by email.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        Send a message
      </Link>
    </div>
  );
}
