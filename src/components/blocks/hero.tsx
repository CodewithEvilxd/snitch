import { ToggleTheme } from "../ui/toggle-theme";
import "../../react/toolbar-exact.css";

export const Hero = () => {
  return (
    <section className="landing-hero min-h-screen relative overflow-hidden bg-white dark:bg-[#0c0d12]">
      <div className="landing-dot-grid" aria-hidden="true" />

      {/* Top Left Brand Logo */}
      <a href="/" className="landing-top-logo" aria-label="Snitch home">
        <img src="/inki.png" alt="Snitch" />
        <span className="font-heading font-semibold tracking-tight text-neutral-900 dark:text-white">Snitch</span>
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
          {/* GitHub */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          @codewithevilxd
        </a>
      </div>

      {/* Floating macOS Liquid-Glass Island Toolbar (Kept Intact as Requested!) */}
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

      {/* Brand-New Centered Screen Studio Hero */}
      <div className="relative z-10 w-full max-w-[1160px] mx-auto pt-44 pb-20 px-6 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-6 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span>Snitch v0.1.0 · 100% Free & Open-Source</span>
        </div>

        {/* Centered Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white max-w-4xl leading-[1.05]">
          Capture, annotate, and redact <br className="hidden sm:inline" />
          <span className="text-neutral-400 dark:text-neutral-500">with zero friction.</span>
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mt-5 mb-8 leading-relaxed">
          Transform raw screenshots into studio-grade visuals in seconds. Add arrows, pixelate sensitive tokens, and copy high-res images directly to your clipboard.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="/capture.html"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-heading text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <span>⚡ Open Web Studio</span>
          </a>
          <a
            href="https://github.com/codewithevilxd/snitch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 font-heading text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Grand Centered Studio Showcase */}
        <div className="relative w-full max-w-[1040px] rounded-2xl p-2 sm:p-3.5 bg-neutral-200/50 dark:bg-neutral-800/40 border border-neutral-300/80 dark:border-neutral-800 shadow-2xl shadow-neutral-950/10 dark:shadow-black/70 backdrop-blur-xl">
          <div className="flex items-center justify-between px-3 py-2.5 bg-neutral-900/95 rounded-t-xl border-b border-neutral-800 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <img src="/inki.png" alt="Snitch" className="h-4 w-auto object-contain" />
              <span className="text-neutral-200 font-medium">Snitch Studio</span>
              <span className="text-neutral-500">· Canvas Active</span>
            </div>
            <div className="text-[11px] text-emerald-400 font-medium">
              ● 0ms Local
            </div>
          </div>

          <div className="relative overflow-hidden rounded-b-xl bg-neutral-950">
            <img
              src="/editor-preview.png"
              alt="Snitch Studio Screen Capture Canvas"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
