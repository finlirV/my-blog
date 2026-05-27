import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-stone-500 dark:text-stone-400">
              © {new Date().getFullYear()} AgriDev. 农业工程 × 前端开发
            </p>
            <p className="text-xs text-stone-400 dark:text-stone-600 mt-1">
              用代码讲述农机故事
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <Github className="w-5 h-5 text-stone-500" />
            </Link>
            <Link 
              href="mailto:your-email@example.com"
              className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <Mail className="w-5 h-5 text-stone-500" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <Twitter className="w-5 h-5 text-stone-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
