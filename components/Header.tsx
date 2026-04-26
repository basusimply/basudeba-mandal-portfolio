import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/work", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface-elevated/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-accent hover:text-accent-hover"
        >
          BM
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm font-medium text-ink-muted"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
