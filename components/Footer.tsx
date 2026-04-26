import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-surface-border bg-surface-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-ink-muted">
          © {year} {site.name}. {site.title} · {site.location}
        </p>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <Link
            href={site.linkedIn}
            className="text-ink-muted transition hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-ink-muted transition hover:text-accent"
          >
            Email
          </a>
          <Link
            href="/contact"
            className="text-ink-muted transition hover:text-accent"
          >
            Contact form
          </Link>
        </div>
      </div>
    </footer>
  );
}
