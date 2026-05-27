"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors">
        <Monitor className="w-5 h-5 text-stone-500" />
      </button>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <button
      onClick={() => {
        if (currentTheme === "dark") {
          setTheme("light");
        } else if (currentTheme === "light") {
          setTheme("system");
        } else {
          setTheme("dark");
        }
      }}
      className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors group"
      aria-label="切换主题"
    >
      {currentTheme === "dark" ? (
        <Moon className="w-5 h-5 text-wheat-400 group-hover:scale-110 transition-transform" />
      ) : currentTheme === "light" ? (
        <Sun className="w-5 h-5 text-wheat-600 group-hover:scale-110 transition-transform" />
      ) : (
        <Monitor className="w-5 h-5 text-stone-500 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
