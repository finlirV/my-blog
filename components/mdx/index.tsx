import { Callout } from "./Callout";
import { ParameterSlider } from "./ParameterSlider";
import { CodeBlock } from "./CodeBlock";

export const mdxComponents = {
  Callout,
  ParameterSlider,
  CodeBlock,
  // 覆盖默认 HTML 元素
  h2: (props: any) => (
    <h2 
      {...props} 
      className="text-2xl font-bold mt-12 mb-4 text-stone-900 dark:text-stone-100 group relative"
    />
  ),
  h3: (props: any) => (
    <h3 
      {...props} 
      className="text-xl font-bold mt-8 mb-3 text-stone-800 dark:text-stone-200"
    />
  ),
  p: (props: any) => (
    <p 
      {...props} 
      className="mb-5 text-stone-700 dark:text-stone-300 leading-relaxed"
    />
  ),
  ul: (props: any) => (
    <ul 
      {...props} 
      className="mb-5 list-disc pl-6 space-y-2 text-stone-700 dark:text-stone-300"
    />
  ),
  ol: (props: any) => (
    <ol 
      {...props} 
      className="mb-5 list-decimal pl-6 space-y-2 text-stone-700 dark:text-stone-300"
    />
  ),
  li: (props: any) => (
    <li {...props} className="leading-relaxed" />
  ),
  a: (props: any) => (
    <a 
      {...props} 
      className="text-agri-600 dark:text-agri-400 hover:text-agri-700 dark:hover:text-agri-300 font-medium underline underline-offset-4 decoration-agri-300/50 hover:decoration-agri-500 transition-all"
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      {...props} 
      className="my-6 pl-5 border-l-4 border-agri-400 bg-agri-50 dark:bg-agri-950/20 py-4 pr-4 rounded-r-lg text-stone-700 dark:text-stone-300 italic"
    />
  ),
  hr: (props: any) => (
    <hr 
      {...props} 
      className="my-8 border-stone-200 dark:border-stone-800"
    />
  ),
  img: (props: any) => (
    <img 
      {...props} 
      className="my-8 rounded-xl shadow-lg w-full"
      loading="lazy"
    />
  ),
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table 
        {...props} 
        className="w-full text-sm text-left border-collapse"
      />
    </div>
  ),
  thead: (props: any) => (
    <thead {...props} className="bg-stone-100 dark:bg-stone-800" />
  ),
  th: (props: any) => (
    <th 
      {...props} 
      className="px-4 py-3 font-semibold text-stone-700 dark:text-stone-300 border-b border-stone-200 dark:border-stone-700"
    />
  ),
  td: (props: any) => (
    <td 
      {...props} 
      className="px-4 py-3 text-stone-600 dark:text-stone-400 border-b border-stone-100 dark:border-stone-800"
    />
  ),
};
