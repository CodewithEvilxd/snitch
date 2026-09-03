import React from "react";
import { ToggleTheme } from "../ui/toggle-theme";
import { MacOSMenuBar } from "./macos-menubar";
import "../../react/toolbar-exact.css";

export const Hero = () => {
  return (
    <section className="landing-hero min-h-screen relative overflow-hidden bg-[#fafafa] dark:bg-[#090a0f] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 pt-[36px]">
      
      {/* ─── macOS Full-Width System Menu Bar (No Apple Logo, All Working) ─── */}
      <MacOSMenuBar />
      
      {/* Subtle Luxury Ambient Radial Lighting */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_70%)]" 
        aria-hidden="true" 
      />
      <div className="landing-dot-grid opacity-35 dark:opacity-15" aria-hidden="true" />

      {/* Top Left Brand Logo - Mascot perched above and biting the text (Desktop Only) */}
      <a href="/" className="landing-top-logo hidden md:block select-none" aria-label="Snitch home">
        <div className="relative flex flex-col items-center select-none pointer-events-none">
          <img
            src="/inki-biting-clean.png"
            alt="Snitch Mascot biting wordmark"
            className="landing-top-cat pointer-events-none select-none"
            draggable={false}
          />
          <div className="relative flex items-center justify-center select-none">
            <span className="landing-top-wordmark font-ndot font-normal text-[1.18rem] tracking-[0.18em] text-neutral-900 dark:text-white select-none">
              SNITCH
            </span>
            {/* Chewed dot-matrix crumbs */}
            <span className="landing-crumb landing-crumb-1 text-neutral-900 dark:text-white select-none" aria-hidden="true" />
            <span className="landing-crumb landing-crumb-2 text-neutral-900 dark:text-white select-none" aria-hidden="true" />
            <span className="landing-crumb landing-crumb-3 text-neutral-900 dark:text-white select-none" aria-hidden="true" />
          </div>
        </div>
      </a>

      {/* Top Right Social Pill (Desktop Only) */}
      <div className="landing-top-social hidden md:flex" aria-label="Creator links">
        <a
          href="https://github.com/codewithevilxd/snitch"
          className="landing-social-pill font-ndot tracking-wider text-xs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          @CODEWITHEVILXD
        </a>
      </div>

      {/* Old floating island replaced by full macOS menu bar above */}

      {/* ─── CLEANSHOT X STYLE ASYMMETRIC SPLIT-SCREEN HERO ─── */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto pt-32 sm:pt-36 lg:pt-36 pb-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Clean, Confident, Non-Centered Typography (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:pt-3">
            
            {/* Left-Aligned Nothing Phone Dot Matrix Headline */}
            <h1 className="font-ndot text-3xl sm:text-4xl lg:text-[3.2rem] font-normal tracking-wide text-neutral-950 dark:text-white leading-[1.12] mb-5 uppercase">
              Capture every pixel. <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                Annotate with ease.
              </span>
            </h1>

            {/* Subtext in Nothing NType82 Sans */}
            <p className="font-ntype text-base sm:text-lg text-neutral-700 dark:text-neutral-200 font-normal leading-relaxed mb-6 max-w-md">
              Instant captures, clean vector annotations, and zero-latency local redaction. 100% client-side, open-source, and private forever.
            </p>

            {/* Left-Aligned Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="/capture.html"
                className="inline-flex items-center gap-3 h-12 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-950 font-ndot text-xs tracking-wider uppercase shadow-xl shadow-neutral-900/10 dark:shadow-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Open Web Studio
                </span>
                <kbd className="font-ndot text-[11px] px-1.5 py-0.5 rounded bg-white/20 dark:bg-black/10">
                  ↵
                </kbd>
              </a>

              <a
                href="https://github.com/codewithevilxd/snitch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-ndot tracking-wider uppercase text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors py-2 px-1"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Star on GitHub</span>
                <span className="text-xs font-mono opacity-60">↗</span>
              </a>
            </div>

            {/* Quiet Luxury Trust Points in High Contrast */}
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800 font-ndot text-xs text-neutral-700 dark:text-neutral-300 w-full max-w-md tracking-wider">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>100% Client-Side · Zero Telemetry & Cloud Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Instant Redaction & Sub-Pixel Vector Marks</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CleanShot X Style Luxury Studio Window (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Subtle Ambient Backlight Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neutral-200/50 via-neutral-100/20 to-neutral-200/50 dark:from-neutral-800/30 dark:via-neutral-900/10 dark:to-neutral-800/30 blur-2xl pointer-events-none" />

            {/* macOS Studio Window Frame */}
            <div className="relative rounded-2xl p-1.5 sm:p-2 bg-gradient-to-b from-neutral-200/80 to-neutral-300/40 dark:from-neutral-800/60 dark:to-neutral-900/40 border border-neutral-300/80 dark:border-neutral-800 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_110px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_50px_140px_-30px_rgba(0,0,0,0.9)] transition-all duration-500">
              
              {/* macOS Title Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900/95 rounded-t-xl border-b border-neutral-800 text-xs font-ndot tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <img src="/inki.png" alt="Snitch" className="h-4 w-auto object-contain select-none pointer-events-none" draggable={false} />
                  <span className="text-neutral-200 font-normal">SNITCH STUDIO</span>
                  <span className="text-neutral-500">· CANVAS ACTIVE</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-ndot text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>LOCAL ENGINE</span>
                </div>
              </div>

              {/* Canvas Image Surface */}
              <div className="relative overflow-hidden rounded-b-xl bg-neutral-950 select-none">
                <img
                  src="/editor-preview.png"
                  alt="Snitch Studio Screen Capture Canvas"
                  className="w-full h-auto object-cover block select-none pointer-events-none"
                  draggable={false}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
