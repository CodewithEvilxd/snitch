import React from "react";

export const FooterMinimal = () => {
  return (
    <footer className="relative z-10 w-full border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md py-14 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left: Brand & Creator Info */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2.5">
            <img src="/inki.png" alt="Snitch" className="h-6 w-auto object-contain" />
            <span className="font-heading font-semibold text-lg text-neutral-900 dark:text-white tracking-tight">
              Snitch
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
              v0.1.0 · MIT
            </span>
          </div>

          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
            Lightweight, local-first screen capture & annotation studio. 100% free and open-source forever.
          </p>

          <div className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
            <span>Crafted by</span>
            <a
              href="https://github.com/codewithevilxd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 font-medium hover:underline"
            >
              @codewithevilxd
            </a>
          </div>
        </div>

        {/* Right: Technical Badges & Navigation Links */}
        <div className="flex flex-col md:items-end gap-3.5">
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="/capture.html"
              className="text-neutral-800 dark:text-neutral-200 hover:text-red-500 transition-colors"
            >
              Launch Studio ➔
            </a>
            <a
              href="https://github.com/codewithevilxd/snitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Source Code
            </a>
            <a
              href="https://github.com/codewithevilxd/snitch/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Issues
            </a>
          </div>

          {/* Privacy Local-First Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Client-Side · Zero Cloud Trackers · Private</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
