import { Monitor, ScanLine, SquareDashedMousePointer } from "lucide-react";
import { StudioPreview } from "./studio-preview";
import { ToggleTheme } from "../ui/toggle-theme";

import "../../react/toolbar-exact.css";

const CaptureNavButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: import("react").ReactNode;
}) => (
  <a className="landing-nav-icon" href={href} aria-label={label} title={label}>
    {children}
  </a>
);

export const Hero = () => {
  return (
    <section className="landing-hero">
      <div className="landing-dot-grid" aria-hidden="true" />

      <a href="/" className="landing-top-logo" aria-label="Snitch home">
        <img src="/inki.png" alt="Snitch" />
        <span className="font-heading font-semibold tracking-tight">Snitch</span>
      </a>

      {/* ── Top-right social & theme pills ── */}
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

      <div className="landing-hero-layout">
        <div className="landing-hero-copy">
          <span className="landing-eyebrow font-mono">[0.1.0] · LOCAL-FIRST · ZERO FRICTION</span>
          <h1>
            Snitch lets you capture screen <br className="landing-heading-break" />
            with <span className="font-serif-italic">elegance.</span>
          </h1>
          <p className="font-sans">
            Fast captures. Clean marks. Instant redaction. <br />
            Catch your screen red-handed with absolute focus.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-primary-cta font-heading" href="/capture.html">
              Open Studio
            </a>
            <a className="landing-secondary-cta font-heading" href="#features">
              See in action
            </a>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <StudioPreview />
        </div>
      </div>
    </section>
  );
};
