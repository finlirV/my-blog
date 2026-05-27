"use client";

import { useState } from "react";

interface ParameterSliderProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  description?: string;
}

export function ParameterSlider({
  defaultValue = 1000,
  min = 500,
  max = 5000,
  step = 100,
  label = "采样频率",
  unit = "Hz",
  description,
}: ParameterSliderProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="my-6 p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-semibold text-stone-700 dark:text-stone-300">
          {label}
        </label>
        <span className="font-mono text-sm font-bold text-agri-600 dark:text-agri-400 bg-white dark:bg-stone-800 px-3 py-1 rounded-lg border border-stone-200 dark:border-stone-700">
          {value} {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-agri-500"
      />

      <div className="flex justify-between mt-1 text-xs text-stone-400">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>

      {description && (
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          {description}
        </p>
      )}

      <div className="mt-3 text-sm">
        {value < 1000 ? (
          <span className="text-amber-600 dark:text-amber-400">
            ⚠️ 采样率过低，可能丢失高频冲击信号
          </span>
        ) : value < 2000 ? (
          <span className="text-stone-600 dark:text-stone-400">
            ℹ️ 采样率基本满足需求，但边缘信号可能不完整
          </span>
        ) : (
          <span className="text-green-600 dark:text-green-400">
            ✓ 采样率充足，可捕捉籽粒完整冲击波形
          </span>
        )}
      </div>
    </div>
  );
}
