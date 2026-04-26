import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for collaboration, consulting, or platform engineering discussions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-sm text-accent">Let&apos;s connect</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Start a conversation
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        Ready to discuss platform engineering, SRE, or collaboration? Share a bit
        about what you&apos;re building—I&apos;ll reply by email.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="rounded-xl border border-surface-border bg-surface-elevated p-5 shadow-card transition hover:border-accent/40"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Email
          </p>
          <p className="mt-2 break-all text-sm font-medium text-accent">
            {site.email}
          </p>
        </a>
        <a
          href={site.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-surface-border bg-surface-elevated p-5 shadow-card transition hover:border-accent/40"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            LinkedIn
          </p>
          <p className="mt-2 text-sm font-medium text-accent">Connect with me</p>
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-surface-border bg-surface-muted/50 p-8 sm:p-10">
        <h2 className="text-xl font-semibold text-ink">Send a message</h2>
        <p className="mt-2 text-sm text-ink-muted">
          For external collaboration or project inquiries. No resume download
          here—ask by email if you need one.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink-muted">
        <Link href="/" className="font-medium text-accent hover:text-accent-hover">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
