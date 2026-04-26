import Link from "next/link";
import { getLatestPosts } from "@/lib/blog";

export function BlogTeaser() {
  const posts = getLatestPosts(3);
  if (posts.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex flex-col rounded-xl border border-surface-border bg-surface-elevated p-6 shadow-card transition hover:border-accent/30 hover:shadow-card-hover"
        >
          <time
            dateTime={post.date}
            className="font-mono text-xs text-ink-muted"
          >
            {post.date}
          </time>
          <h3 className="mt-2 text-lg font-semibold text-ink">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-accent"
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm text-ink-muted">{post.description}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
          >
            Read post →
          </Link>
        </article>
      ))}
    </div>
  );
}
