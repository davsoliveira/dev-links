"use client";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { BsMoonStars } from "react-icons/bs";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const Icon = theme === "dark" ? BsMoonStars : Sun;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-6 w-16 rounded-full border border-black/40 bg-black/10 dark:border-white/40 dark:bg-white/10"
    >
      <Icon
        size={32}
        className="absolute -top-1 -left-1 rounded-full bg-white p-1 text-black dark:translate-x-9"
      />
    </button>
  );
}
