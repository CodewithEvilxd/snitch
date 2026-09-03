import React, { useState } from "react";
import { ToggleTheme } from "../ui/toggle-theme";
import "../../react/toolbar-exact.css";

type CockpitTab = "redact" | "annotate" | "frame" | "clipboard";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<CockpitTab>("redact");

  return (
    <section className="landing-hero min-h-screen relative overflow-hidden bg-white dark:bg-[#0b0c10] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <div className="landing-dot-grid" aria-hidden="true" />

      {/* Top Left Brand Logo */}
      <a href="/" className="landing-top-logo" aria-label="Snitch home">
        <img src="/inki.png" alt="Snitch" className="h-7 w-auto object-contain" />
        <span className="font-heading font-semibold text-lg tracking-tight text-neutral-900 dark:text-white">
          Snitch
        </span>
      </a>

      {/* Top Right Social & Theme Toggle */}
      <div className="landing-top-social" aria-label="Creator links">
        <ToggleTheme />
        <a
          href="https://github.com/codewithevilxd/snitch"
          className="landing-social-pill font-mono"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          @codewithevilxd
        </a>
      </div>

      {/* Floating macOS Liquid-Glass Island Toolbar (Preserved as Requested!) */}
      <header className="landing-island landing-island-glass" aria-label="Landing navigation">
        <div className="landing-island-dismiss-hint" aria-hidden="true"></div>
        <div className="landing-island-glass-effect" aria-hidden="true"></div>
        <div className="landing-island-glass-tint" aria-hidden="true"></div>
        <div className="landing-island-glass-shine" aria-hidden="true"></div>
        
        <a className="landing-island-brand" href="/" aria-label="Snitch">
          <img src="/inki.png" alt="Snitch" className="landing-island-logo" />
        </a>

        <div className="landing-island-group capture-modes">
          <a className="landing-island-btn" href="/capture.html" aria-label="Capture region" title="Capture Region">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8V4h4"></path><path d="M4 16v4h4"></path><path d="M16 4h4v4"></path><path d="M16 20h4v-4"></path><rect x="8" y="8" width="8" height="8" rx="1" strokeDasharray="2 2"></rect>
            </svg>
          </a>
          <a className="landing-island-btn" href="/capture.html" aria-label="Capture window" title="Capture Window">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 8h18"></path><circle cx="5.5" cy="6" r=".5" fill="currentColor"></circle><circle cx="7.5" cy="6" r=".5" fill="currentColor"></circle><circle cx="9.5" cy="6" r=".5" fill="currentColor"></circle>
            </svg>
          </a>
          <a className="landing-island-btn" href="/capture.html" aria-label="Capture fullscreen" title="Capture Fullscreen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M6 21h12"></path><path d="M12 17v4"></path>
            </svg>
          </a>
          <a className="landing-island-btn" href="/capture.html" aria-label="Upload file" title="Upload Image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </a>
        </div>
      </header>

      {/* ─── BESPOKE ASYMMETRIC STUDIO COCKPIT ─── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto pt-28 pb-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Architecture & Mode Switcher (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Engine Status Label */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Snitch Studio // Local-First Engine</span>
            </div>

            {/* Editorial Asymmetric Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[3.1rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-3">
              Precision screen capture. <br />
              <span className="text-neutral-400 dark:text-neutral-500 font-serif-italic font-normal">
                Zero telemetry.
              </span>
            </h1>

            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-md">
              Engineered for developers and designers who redact credentials, point out bugs, and copy visuals in milliseconds. Everything runs client-side in RAM.
            </p>

            {/* Interactive Mode Tabs */}
            <div className="flex flex-col gap-2 w-full max-w-md mb-6">
              
              <button
                type="button"
                onClick={() => setActiveTab("redact")}
                className={`flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                  activeTab === "redact"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-md"
                    : "bg-neutral-100/70 hover:bg-neutral-200/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/60 border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-wider uppercase opacity-70 mb-0.5">
                    01 // Redaction
                  </div>
                  <div className="font-heading font-semibold text-sm">
                    One-Drag Pixelate Blur
                  </div>
                  <div className="font-sans text-xs opacity-75 mt-0.5">
                    Obscure API keys, passwords, and tokens with sub-millisecond shader blur.
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                  P
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("annotate")}
                className={`flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                  activeTab === "annotate"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-md"
                    : "bg-neutral-100/70 hover:bg-neutral-200/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/60 border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-wider uppercase opacity-70 mb-0.5">
                    02 // Vectors
                  </div>
                  <div className="font-heading font-semibold text-sm">
                    Sub-Pixel Arrows & Shapes
                  </div>
                  <div className="font-sans text-xs opacity-75 mt-0.5">
                    Draw razor-sharp callout boxes, direction arrows, and text tags.
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                  A
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("frame")}
                className={`flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                  activeTab === "frame"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-md"
                    : "bg-neutral-100/70 hover:bg-neutral-200/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/60 border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-wider uppercase opacity-70 mb-0.5">
                    03 // Presentation
                  </div>
                  <div className="font-heading font-semibold text-sm">
                    Studio Frames & Shadows
                  </div>
                  <div className="font-sans text-xs opacity-75 mt-0.5">
                    Wrap raw screengrabs in macOS window chrome with ambient drop shadows.
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                  ⌘S
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("clipboard")}
                className={`flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                  activeTab === "clipboard"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-md"
                    : "bg-neutral-100/70 hover:bg-neutral-200/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/60 border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-wider uppercase opacity-70 mb-0.5">
                    04 // Workflow
                  </div>
                  <div className="font-heading font-semibold text-sm">
                    Zero-Latency Clipboard
                  </div>
                  <div className="font-sans text-xs opacity-75 mt-0.5">
                    Direct copy to system clipboard. No cloud upload waits or expiring URLs.
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                  ⌘C
                </span>
              </button>

            </div>

            {/* Developer Launch Dock */}
            <div className="flex items-center gap-3 w-full max-w-md">
              <a
                href="/capture.html"
                className="flex-1 inline-flex items-center justify-between h-12 px-5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-heading text-sm font-semibold shadow-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Launch Web Studio
                </span>
                <kbd className="font-mono text-[10px] px-2 py-1 rounded bg-white/20 dark:bg-black/10">
                  ENTER
                </kbd>
              </a>

              <a
                href="https://github.com/codewithevilxd/snitch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 w-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                title="View Source on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Layered Interactive Studio Canvas Stage (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-500/10 via-neutral-500/5 to-blue-500/10 dark:from-red-500/15 dark:via-transparent dark:to-emerald-500/15 blur-2xl pointer-events-none" />

            {/* macOS Canvas Window Frame */}
            <div className="relative rounded-2xl border border-neutral-300/80 dark:border-neutral-800 bg-neutral-900/90 shadow-2xl shadow-neutral-950/20 dark:shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <img src="/inki.png" alt="Snitch" className="h-4 w-auto object-contain" />
                  <span className="text-neutral-200 font-medium">snitch_capture.png</span>
                  <span className="text-neutral-500">· 1920 × 1080</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>READY</span>
                </div>
              </div>

              {/* Canvas Surface with Dynamic Mode Overlays */}
              <div className="relative overflow-hidden bg-neutral-950 p-2 sm:p-4">
                
                {/* Base Studio Image */}
                <div className="relative rounded-xl overflow-hidden border border-neutral-800/80">
                  <img
                    src="/editor-preview.png"
                    alt="Snitch Studio Screen Capture Canvas"
                    className="w-full h-auto object-cover block"
                  />

                  {/* ── MODE 1: REDACT OVERLAY ── */}
                  {activeTab === "redact" && (
                    <div className="absolute inset-0 bg-black/20 pointer-events-none flex items-center justify-center">
                      {/* Active Redaction Box */}
                      <div className="absolute top-[38%] left-[28%] w-[58%] h-[24%] border-2 border-dashed border-red-500 bg-red-500/10 backdrop-blur-md rounded-lg flex items-center justify-between px-4 shadow-lg">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-red-500 text-white tracking-wider">
                            ⬛ REDACTED
                          </span>
                          <span className="font-mono text-xs text-red-200/80 line-through">
                            sk_live_9481a8c9b2...
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-red-300 bg-black/50 px-2 py-0.5 rounded">
                          380 × 94 px
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ── MODE 2: ANNOTATE OVERLAY ── */}
                  {activeTab === "annotate" && (
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Callout Box with Handles */}
                      <div className="absolute top-[22%] left-[32%] w-[45%] h-[32%] border-2 border-cyan-400 bg-cyan-400/5 rounded-md">
                        <span className="absolute -top-3 left-3 px-2 py-0.5 rounded bg-cyan-500 text-black font-mono text-[10px] font-bold">
                          HERO CARD
                        </span>
                        {/* Handles */}
                        <span className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-full bg-white border-2 border-cyan-500" />
                        <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-white border-2 border-cyan-500" />
                        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-full bg-white border-2 border-cyan-500" />
                        <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-full bg-white border-2 border-cyan-500" />
                      </div>

                      {/* Direction Arrow */}
                      <div className="absolute top-[58%] left-[22%] flex items-center gap-2 bg-neutral-900/95 text-white border border-neutral-700 px-3 py-1.5 rounded-lg shadow-xl font-mono text-xs">
                        <span className="text-cyan-400 font-bold">➔</span>
                        <span>Tighten padding to 16px</span>
                      </div>
                    </div>
                  )}

                  {/* ── MODE 3: FRAME OVERLAY ── */}
                  {activeTab === "frame" && (
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-purple-500/20 via-transparent to-pink-500/20 flex items-end justify-between p-4">
                      <div className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 font-mono text-xs text-neutral-200 flex items-center gap-2">
                        <span>Drop Shadow: 48px</span>
                        <span>·</span>
                        <span>Radius: 16px</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-500/90 text-black font-mono text-xs font-semibold">
                        4K Retina Export Ready
                      </div>
                    </div>
                  )}

                  {/* ── MODE 4: CLIPBOARD OVERLAY ── */}
                  {activeTab === "clipboard" && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/30">
                      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 border border-emerald-500/50 shadow-2xl text-white font-mono text-sm">
                        <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                        <span>Copied directly to Clipboard!</span>
                        <kbd className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
                          ⌘V to Paste
                        </kbd>
                      </div>
                    </div>
                  )}

                </div>

                {/* ── FLOATING PRO LAYER: Real Glass Tool Palette ── */}
                <div className="absolute bottom-6 left-6 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700/80 shadow-2xl backdrop-blur-md">
                  <span className="px-2 py-1 rounded bg-neutral-800 text-white font-mono text-xs font-semibold" title="Crop Tool">
                    ✂
                  </span>
                  <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-300 font-mono text-xs" title="Arrow Tool">
                    ↗
                  </span>
                  <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-300 font-mono text-xs" title="Box Tool">
                    ⬚
                  </span>
                  <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 font-mono text-xs border border-red-500/40" title="Pixelate Tool">
                    ⬛
                  </span>
                  <div className="h-4 w-[1px] bg-neutral-700 mx-1" />
                  {/* Swatches */}
                  <span className="h-3.5 w-3.5 rounded-full bg-red-500 cursor-pointer" />
                  <span className="h-3.5 w-3.5 rounded-full bg-cyan-400 cursor-pointer" />
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-400 cursor-pointer" />
                  <span className="h-3.5 w-3.5 rounded-full bg-amber-400 cursor-pointer" />
                </div>

                {/* ── FLOATING PRO LAYER: Pixel Loupe Magnifier ── */}
                <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center p-2.5 rounded-xl bg-neutral-900/95 border border-neutral-700/80 shadow-2xl backdrop-blur-md text-left">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400 mb-1.5 w-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>LOUPE 400%</span>
                  </div>
                  {/* Mini grid crosshair */}
                  <div className="h-14 w-24 rounded-md border border-neutral-700 bg-neutral-950 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:6px_6px] opacity-60" />
                    <div className="h-full w-[1px] bg-red-500/60 absolute" />
                    <div className="w-full h-[1px] bg-red-500/60 absolute" />
                    <span className="font-mono text-[9px] text-white/90 z-10 bg-black/60 px-1 rounded">
                      #0B0C10
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
