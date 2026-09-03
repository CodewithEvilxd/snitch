"use client";
// beui.dev/components/blocks/dynamic-island
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { EASE_OUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

type IslandContextValue = {
  view: string | null;
};

const IslandContext = createContext<IslandContextValue | null>(null);

// Shell physics in Apple's duration/bounce form: one long perceptual glide with barely-there bounce
const SHELL_SPRING = {
  type: "spring",
  duration: 0.65,
  bounce: 0.22,
} as const;

// Content gets a touch more life than the shell
const CONTENT_SPRING = {
  type: "spring",
  duration: 0.65,
  bounce: 0.3,
} as const;

const RADIUS = 28;
const PILL_WIDTH = 250;
const PILL_HEIGHT = 46;

/** Tracks the natural size of the content so the shell can spring to it. */
function useContentSize() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setSize({ width: Math.max(el.scrollWidth, el.offsetWidth), height: Math.max(el.scrollHeight, el.offsetHeight) });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      setSize({ width: Math.max(el.scrollWidth, el.offsetWidth), height: Math.max(el.scrollHeight, el.offsetHeight) });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, size] as const;
}

function Slot({
  keyId,
  children,
  className,
}: {
  keyId: string;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={keyId}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.92, y: -6, filter: "blur(4px)" }
      }
      animate={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      exit={
        reduce
          ? { opacity: 0, transition: { duration: 0.1 } }
          : {
              opacity: 0,
              scale: 0.92,
              y: -5,
              filter: "blur(3px)",
              transition: { duration: 0.12, ease: EASE_OUT },
            }
      }
      transition={reduce ? { duration: 0.15 } : CONTENT_SPRING}
      style={{ transformOrigin: "top center" }}
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
}

export interface DynamicIslandProps {
  /** Active view id. `null` shows the compact pill. */
  view: string | null;
  /** Compact pill content, shown when no view is active. */
  compact?: ReactNode;
  /** DynamicIslandView elements. */
  children?: ReactNode;
  className?: string;
}

export function DynamicIsland({
  view,
  compact,
  children,
  className,
}: DynamicIslandProps) {
  const reduce = useReducedMotion();
  const expanded = view !== null;
  const [sizerRef, size] = useContentSize();
  const contextValue = useMemo(() => ({ view }), [view]);

  return (
    <IslandContext.Provider value={contextValue}>
      <motion.div
        role="status"
        aria-live="polite"
        initial={false}
        animate={
          size
            ? { width: size.width, height: size.height }
            : { width: PILL_WIDTH, height: PILL_HEIGHT }
        }
        transition={reduce ? { duration: 0 } : SHELL_SPRING}
        style={{ borderRadius: RADIUS }}
        className={cn(
          "relative inline-flex items-start justify-center overflow-hidden select-none",
          "bg-white/95 text-neutral-900 dark:bg-neutral-900/95 dark:text-white",
          "border border-black/10 dark:border-white/15",
          "shadow-[0_16px_36px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.6)]",
          "backdrop-blur-2xl backdrop-saturate-150",
          className
        )}
      >
        <div ref={sizerRef} className="w-max">
          <AnimatePresence mode="popLayout" initial={false}>
            {!expanded && compact ? (
              <Slot
                keyId="compact"
                className="min-h-[44px] px-2 py-1 text-xs font-medium"
              >
                {compact}
              </Slot>
            ) : null}
          </AnimatePresence>
          {children}
        </div>
      </motion.div>
    </IslandContext.Provider>
  );
}

export interface DynamicIslandViewProps {
  /** Matches the parent `view` prop when active. */
  id: string;
  children: ReactNode;
  className?: string;
}

export function DynamicIslandView({
  id,
  children,
  className,
}: DynamicIslandViewProps) {
  const ctx = useContext(IslandContext);
  if (!ctx) throw new Error("DynamicIslandView must be used inside <DynamicIsland>");
  const active = ctx.view === id;

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {active ? (
        <Slot keyId={id} className={cn("px-4 py-3.5", className)}>
          {children}
        </Slot>
      ) : null}
    </AnimatePresence>
  );
}
