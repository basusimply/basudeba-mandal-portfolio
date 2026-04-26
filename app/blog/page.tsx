import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on DevOps, SRE, Kubernetes, CI/CD, and platform engineering.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-sm text-accent">Blog</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Writing
      </h1>
      <p className="mt-4 text-ink-muted">
        Notes on delivery, reliability, and running platforms in production.
      </p>
      <ul className="mt-12 space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-surface-border pb-8">
            <time
              dateTime={post.date}
              className="font-mono text-xs text-ink-muted"
            >
              {post.date}
            </time>
            <h2 className="mt-2 text-xl font-semibold text-ink">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-accent"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-ink-muted">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 ? (
        <p className="mt-8 text-ink-muted">No posts yet. Add Markdown files under content/blog.</p>
      ) : null}
    </div>
  );
}
