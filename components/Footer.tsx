import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-surface-border bg-surface-elevated/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--muted)]">
          © {year} {site.name}. Lead DevOps · {site.location}
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href={site.linkedIn}
            className="text-[var(--muted)] transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-[var(--muted)] transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
