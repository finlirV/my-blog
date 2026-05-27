"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export function CodeBlock({ code, language = "typescript", filename, highlightLines = [] }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function highlight() {
      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });
        setHighlighted(html);
      } catch {
        setHighlighted(`<pre><code>${code}</code></pre>`);
      }
    }
    highlight();
  }, [code, language]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper bg-[#0d1117] dark:bg-[#0d1117]">
      {/* 标题栏 */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {filename && (
            <span className="ml-3 text-xs text-stone-400 font-mono">{filename}</span>
          )}
          {!filename && (
            <span className="ml-3 text-xs text-stone-500 uppercase font-mono">{language}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>已复制</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制</span>
            </>
          )}
        </button>
      </div>

      {/* 代码内容 */}
      <div 
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
