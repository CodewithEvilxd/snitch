"use client";

import React, { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { ActionSwapIcon } from "./action-swap";
import { cn } from "../../lib/utils";

export type ThemeVariant = "rectangle" | "circle" | "circle-blur" | "blinds";
export type RectStart =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "bottom-up";

export interface ThemeToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
  variant?: ThemeVariant;
  start?: RectStart;
  iconClassName?: string;
}

const VT_STYLE_ID = "beui-theme-toggle-vt";

const VT_CSS = `
html[data-beui-vt="rect"]::view-transition-old(root) { animation: none; mix-blend-mode: normal; }
html[data-beui-vt="rect"]::view-transition-new(root) { mix-blend-mode: normal; animation: beui-rect-reveal 400ms ease-out; }
html[data-beui-vt="circle"]::view-transition-old(root),
html[data-beui-vt="circle-blur"]::view-transition-old(root) { animation: none; mix-blend-mode: normal; }
html[data-beui-vt="circle"]::view-transition-new(root) { mix-blend-mode: normal; animation: beui-circle-reveal 700ms cubic-bezier(0.4, 0, 0.2, 1); }
html[data-beui-vt="circle-blur"]::view-transition-new(root) { mix-blend-mode: normal; animation: beui-circle-blur-reveal 700ms cubic-bezier(0.4, 0, 0.2, 1); }
html[data-beui-vt="blinds"]::view-transition-old(root) { animation: none; mix-blend-mode: normal; }

@property --beui-vt-slat {
  syntax: "<length>";
  inherits: false;
  initial-value: 72px;
}

html[data-beui-vt="blinds"]::view-transition-new(root) {
  mix-blend-mode: normal;
  mask-image: linear-gradient(
    90deg,
    #000 0 var(--beui-vt-slat),
    transparent calc(var(--beui-vt-slat) + 20px)
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0 var(--beui-vt-slat),
    transparent calc(var(--beui-vt-slat) + 20px)
  );
  mask-size: 72px 100%;
  -webkit-mask-size: 72px 100%;
  mask-repeat: repeat;
  -webkit-mask-repeat: repeat;
  animation: beui-blinds-reveal 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes beui-blinds-reveal {
  from {
    --beui-vt-slat: -20px;
  }
  to {
    --beui-vt-slat: 72px;
  }
}

@keyframes beui-rect-reveal {
  from { clip-path: polygon(var(--beui-vt-from)); }
  to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}

@keyframes beui-circle-reveal {
  from { clip-path: circle(0% at var(--beui-vt-origin, 50% 100%)); }
  to { clip-path: circle(150% at var(--beui-vt-origin, 50% 100%)); }
}

@keyframes beui-circle-blur-reveal {
  from {
    clip-path: circle(0% at var(--beui-vt-origin, 50% 100%));
    filter: blur(16px);
  }
  to {
    clip-path: circle(150% at var(--beui-vt-origin, 50% 100%));
    filter: blur(0px);
  }
}
`;

const RECT_FROM: Record<RectStart, string> = {
  "top-left": "0 0, 0 0, 0 0, 0 0",
  "top-right": "100% 0, 100% 0, 100% 0, 100% 0",
  "bottom-left": "0 100%, 0 100%, 0 100%, 0 100%",
  "bottom-right": "100% 100%, 100% 100%, 100% 100%, 100% 100%",
  center: "50% 50%, 50% 50%, 50% 50%, 50% 50%",
  "bottom-up": "0 100%, 100% 100%, 100% 100%, 0 100%",
};

const CIRCLE_ORIGIN: Record<RectStart, string> = {
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
  center: "50% 50%",
  "bottom-up": "50% 100%",
};

export function useThemeToggle({
  variant = "blinds",
  start = "bottom-up",
}: { variant?: ThemeVariant; start?: RectStart } = {}) {
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Inject beUI VT styles
    if (!document.getElementById(VT_STYLE_ID)) {
      const el = document.createElement("style");
      el.id = VT_STYLE_ID;
      el.textContent = VT_CSS;
      document.head.appendChild(el);
    }

    // Determine initial theme
    const saved = localStorage.getItem("theme");
    const isDarkInitial =
      saved === "dark" ||
      document.documentElement.classList.contains("dark") ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkInitial) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("theme-dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("theme-dark");
      setTheme("light");
    }
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : false;

  const toggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    const applyTheme = () => {
      const root = document.documentElement;
      if (nextTheme === "dark") {
        root.classList.add("dark");
        document.body.classList.add("theme-dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        document.body.classList.remove("theme-dark");
        localStorage.setItem("theme", "light");
      }
      setTheme(nextTheme);
    };

    if (reduce || !("startViewTransition" in document)) {
      applyTheme();
      return;
    }

    const root = document.documentElement;
    if (variant === "rectangle") {
      root.style.setProperty("--beui-vt-from", RECT_FROM[start]);
      root.dataset.beuiVt = "rect";
    } else if (variant === "blinds") {
      root.dataset.beuiVt = "blinds";
    } else {
      root.style.setProperty("--beui-vt-origin", CIRCLE_ORIGIN[start]);
      root.dataset.beuiVt = variant;
    }

    try {
      const vt = (
        document as Document & {
          startViewTransition(cb: () => void): { finished: Promise<void> };
        }
      ).startViewTransition(() => {
        applyTheme();
      });

      vt.finished.finally(() => {
        delete root.dataset.beuiVt;
      });
    } catch {
      applyTheme();
      delete root.dataset.beuiVt;
    }
  };

  return { isDark, mounted, toggle, theme };
}

export function ThemeToggle({
  variant = "blinds",
  start = "bottom-up",
  className,
  iconClassName = "h-4 w-4",
  ...rest
}: ThemeToggleProps) {
  const { isDark, mounted, toggle } = useThemeToggle({ variant, start });

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn(
        "relative z-20 flex items-center justify-center h-8 w-8 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer",
        className
      )}
      {...rest}
    >
      {mounted ? (
        <ActionSwapIcon
          value={isDark ? "dark" : "light"}
          animation="blur"
          className={iconClassName}
        >
          {isDark ? (
            <Sun className={iconClassName} />
          ) : (
            <Moon className={iconClassName} />
          )}
        </ActionSwapIcon>
      ) : (
        <span className={iconClassName} aria-hidden="true" />
      )}
    </button>
  );
}
