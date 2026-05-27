import Link from "next/link";
import { PostMeta } from "@/types/post";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

export function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-agri-300 dark:hover:border-agri-700 hover:shadow-lg hover:shadow-agri-100/50 dark:hover:shadow-agri-900/20 transition-all duration-300">
          <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400 mb-3">
            <time dateTime={post.publishedOn}>
              {formatDate(post.publishedOn)}
            </time>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} 分钟阅读
            </span>
          </div>

          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-agri-600 dark:group-hover:text-agri-400 transition-colors">
            {post.title}
          </h2>

          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.abstract}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-agri-500 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </article>
  );
}
