import { Sprout, Code2, GraduationCap, Dumbbell } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-8">
        关于我
      </h1>

      <div className="space-y-8 text-stone-700 dark:text-stone-300 leading-relaxed">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-agri-100 dark:bg-agri-900/30">
              <Sprout className="w-5 h-5 text-agri-600 dark:text-agri-400" />
            </div>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              农业工程研究者
            </h2>
          </div>
          <p className="pl-11">
            我是一名农业工程硕士研究生，师从金诚谦研究员，研究方向为大豆联合收获机清选损失检测技术。
            我的学术背景涵盖从中职、分类考试、专升本到考研的完整升学路径，现处于硕士论文撰写与答辩准备阶段。
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800">
              <Code2 className="w-5 h-5 text-stone-600 dark:text-stone-400" />
            </div>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              前端技术探索者
            </h2>
          </div>
          <p className="pl-11">
            除了农业工程研究，我也热衷于前端开发与技术写作。我相信 Web 技术可以让复杂的工程知识变得更直观、更易理解。
            这个博客就是我实践这一理念的载体——用交互式组件展示技术原理，用精美的排版呈现研究成果。
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-wheat-100 dark:bg-wheat-900/30">
              <GraduationCap className="w-5 h-5 text-wheat-600 dark:text-wheat-400" />
            </div>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              技术栈
            </h2>
          </div>
          <div className="pl-11">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "SolidWorks",
                "MATLAB",
                "Python",
                "DEM+CFD",
                "React / Next.js",
                "Tailwind CSS",
                "TensorFlow",
                "LaTeX",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Dumbbell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              生活日常
            </h2>
          </div>
          <p className="pl-11">
            工作之余，我关注健身与日常健康管理，也在探索如何用技术工具（如减脂备餐规划）优化生活方式。
            我相信技术应该服务于生活的方方面面。
          </p>
        </section>

        <div className="mt-12 p-6 rounded-2xl bg-agri-50 dark:bg-agri-950/20 border border-agri-200 dark:border-agri-800">
          <p className="text-sm text-agri-800 dark:text-agri-300 text-center">
            📧 欢迎通过邮件或社交媒体与我交流，无论是学术问题还是技术探讨，我都很乐意分享。
          </p>
        </div>
      </div>
    </div>
  );
}
