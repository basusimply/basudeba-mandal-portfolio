import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-muted">
        That page or article does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-medium text-accent hover:text-accent-hover"
      >
        ← Back home
      </Link>
    </div>
  );
}
