"use client";

import { AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "success" | "tip";

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  tip: Lightbulb,
};

const styles = {
  info: {
    border: "border-blue-300 dark:border-blue-700",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    icon: "text-blue-500",
    title: "text-blue-800 dark:text-blue-300",
  },
  warning: {
    border: "border-amber-300 dark:border-amber-700",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    icon: "text-amber-500",
    title: "text-amber-800 dark:text-amber-300",
  },
  success: {
    border: "border-green-300 dark:border-green-700",
    bg: "bg-green-50 dark:bg-green-950/30",
    icon: "text-green-500",
    title: "text-green-800 dark:text-green-300",
  },
  tip: {
    border: "border-agri-300 dark:border-agri-700",
    bg: "bg-agri-50 dark:bg-agri-950/30",
    icon: "text-agri-500",
    title: "text-agri-800 dark:text-agri-300",
  },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const Icon = icons[type];
  const style = styles[type];

  return (
    <div className={`my-6 p-5 rounded-xl border-l-4 ${style.border} ${style.bg}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.icon}`} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className={`font-semibold text-sm mb-2 ${style.title}`}>
              {title}
            </p>
          )}
          <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
