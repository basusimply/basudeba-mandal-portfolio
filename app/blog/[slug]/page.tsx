import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MarkdownContent } from "@/components/MarkdownContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/blog"
        className="font-mono text-sm text-accent hover:text-accent-hover"
      >
        ← All posts
      </Link>
      <time
        dateTime={post.date}
        className="mt-6 block font-mono text-sm text-ink-muted"
      >
        {post.date}
      </time>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-ink-muted">{post.description}</p>
      <div className="mt-10 border-t border-surface-border pt-10">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}
