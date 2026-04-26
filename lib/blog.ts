import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  draft?: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function parseFile(file: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = (data.slug as string) || file.replace(/\.md$/, "");
  if (!data.title || !data.date) return null;
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: (data.description as string) || "",
    draft: data.draft === true,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files
    .map((f) => parseFile(f))
    .filter((p): p is BlogPost => p !== null && !p.draft);
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getLatestPosts(limit: number): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(POSTS_DIR)) return null;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const post = parseFile(file);
    if (post && post.slug === slug && !post.draft) return post;
  }
  return null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
