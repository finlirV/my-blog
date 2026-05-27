"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Rss, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200 dark:border-stone-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:text-agri-600 dark:hover:text-agri-400 transition-colors"
        >
          <span className="text-agri-600 dark:text-agri-400">Agri</span>Dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-agri-700 dark:text-agri-400 bg-agri-50 dark:bg-agri-950/30"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors hidden sm:flex">
            <Search className="w-5 h-5 text-stone-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors hidden sm:flex">
            <Rss className="w-5 h-5 text-stone-500" />
          </button>
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-stone-500" />
            ) : (
              <Menu className="w-5 h-5 text-stone-500" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? "text-agri-700 dark:text-agri-400 bg-agri-50 dark:bg-agri-950/30"
                      : "text-stone-600 dark:text-stone-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
