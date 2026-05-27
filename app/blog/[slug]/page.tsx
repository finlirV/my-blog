import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "文章未找到" };
  }
  return {
    title: post.title,
    description: post.abstract,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* 面包屑 */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-agri-600 dark:hover:text-agri-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首页
      </Link>

      {/* 文章头部 */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedOn}>
              {formatDate(post.publishedOn)}
            </time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readingTime} 分钟阅读
          </span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 文章封面图 */}
      {post.coverImage && (
        <div className="mb-12">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* 文章内容 */}
      <div className="article-content prose dark:prose-invert prose-stone max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      {/* 文章底部 */}
      <footer className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center justify-between">
          <p className="text-sm text-stone-500 dark:text-stone-500">
            感谢阅读！如有问题，欢迎交流讨论。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-agri-600 dark:text-agri-400 hover:text-agri-700 dark:hover:text-agri-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回文章列表
          </Link>
        </div>
      </footer>
    </article>
  );
}
