import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostMeta } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const wordCount = fileContents.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 300);

      return {
        slug,
        title: data.title || slug,
        abstract: data.abstract || "",
        publishedOn: data.publishedOn || new Date().toISOString(),
        updatedOn: data.updatedOn,
        isPublished: data.isPublished !== false,
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime,
      };
    })
    .filter((post) => post.isPublished)
    .sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
    }

    const filePath = fs.existsSync(fullPath) ? fullPath : path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 300);

    return {
      slug,
      title: data.title || slug,
      abstract: data.abstract || "",
      publishedOn: data.publishedOn || new Date().toISOString(),
      updatedOn: data.updatedOn,
      isPublished: data.isPublished !== false,
      tags: data.tags || [],
      coverImage: data.coverImage,
      readingTime,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}
