import { getAllPosts, getAllTags } from "@/lib/mdx";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ArrowRight, Sprout, Code2, Wheat } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* 首屏 Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-agri-100 dark:bg-agri-900/40 text-agri-700 dark:text-agri-400 border border-agri-200 dark:border-agri-800">
              <Sprout className="w-3.5 h-3.5" />
              农业工程硕士
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
              <Code2 className="w-3.5 h-3.5" />
              前端开发者
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-6 leading-tight">
            用代码讲述
            <span className="text-agri-600 dark:text-agri-400">农机</span>
            故事
          </h1>

          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
            我是 AgriDev，一名农业工程硕士研究生，研究方向是大豆联合收获机清选损失检测技术。
            在这里，我记录农业智能化、信号处理算法与前端工程技术的交叉探索。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-agri-600 dark:bg-agri-700 text-white font-medium hover:bg-agri-700 dark:hover:bg-agri-600 transition-colors"
            >
              浏览文章
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* 装饰性元素 */}
        <div className="hidden lg:block absolute right-8 top-32 opacity-10 dark:opacity-5">
          <Wheat className="w-64 h-64 text-agri-600" strokeWidth={0.5} />
        </div>
      </section>

      {/* 标签云 */}
      {tags.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-stone-500 dark:text-stone-500 uppercase tracking-wider mb-4">
            浏览分类
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-agri-100 dark:hover:bg-agri-900/30 hover:text-agri-700 dark:hover:text-agri-400 transition-colors cursor-pointer border border-stone-200 dark:border-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 文章列表 */}
      <section id="articles" className="pb-16">
        <h2 className="text-sm font-semibold text-stone-500 dark:text-stone-500 uppercase tracking-wider mb-6">
          最新文章
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-16 text-stone-500 dark:text-stone-500">
            <p>暂无文章，开始写作吧！</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
