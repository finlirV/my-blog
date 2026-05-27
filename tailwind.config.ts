import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 农业工程主题色
        agri: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        wheat: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        steel: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Josh 风格强调色
        josh: {
          pink: "#ff6b9d",
          purple: "#c084fc",
          blue: "#60a5fa",
          cyan: "#22d3ee",
          green: "#4ade80",
          yellow: "#facc15",
          orange: "#fb923c",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "monospace",
        ],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.steel.700"),
            a: {
              color: theme("colors.agri.600"),
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
              "&:hover": {
                color: theme("colors.agri.700"),
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              },
            },
            "h1, h2, h3, h4": {
              color: theme("colors.steel.900"),
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            code: {
              color: theme("colors.josh.pink"),
              backgroundColor: theme("colors.steel.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.375rem",
              fontSize: "0.875em",
              fontWeight: "500",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit",
              fontSize: "inherit",
            },
            blockquote: {
              borderLeftColor: theme("colors.agri.400"),
              backgroundColor: theme("colors.agri.50"),
              padding: "1rem 1.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontStyle: "normal",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.steel.300"),
            a: {
              color: theme("colors.agri.400"),
              "&:hover": {
                color: theme("colors.agri.300"),
              },
            },
            "h1, h2, h3, h4": {
              color: theme("colors.steel.50"),
            },
            code: {
              color: theme("colors.josh.pink"),
              backgroundColor: theme("colors.steel.800"),
            },
            blockquote: {
              borderLeftColor: theme("colors.agri.600"),
              backgroundColor: theme("colors.steel.800"),
            },
            strong: {
              color: theme("colors.steel.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
