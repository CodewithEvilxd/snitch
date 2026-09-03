import { useEffect, useRef } from "react";

/* ─── Illustration: Capture mode icon grid (2×2, centered) ─── */
const CaptureIllustration = () => (
  <div className="feat-illust feat-illust--capture">
    <div className="feat-icon-grid">
      <span className="feat-icon-sym">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 8V4h4"/><path d="M4 16v4h4"/><path d="M16 4h4v4"/><path d="M16 20h4v-4"/></svg>
      </span>
      <span className="feat-icon-sym">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/></svg>
      </span>
      <span className="feat-icon-sym">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M6 21h12"/><path d="M12 17v4"/></svg>
      </span>
      <span className="feat-icon-sym">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
      </span>
    </div>
  </div>
);

/* ─── Illustration: Annotation tool list ─── */
const tools = [
  { label: "Crop", shortcut: "C", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg> },
  { label: "Select / Move", shortcut: "V", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 3l14 9-6 1-4 5z"/></svg> },
  { label: "Pixelate", shortcut: "P", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
];

const AnnotationIllustration = () => (
  <div className="feat-illust feat-illust--annotate">
    <div className="feat-tool-list">
      {tools.map((t) => (
        <div key={t.label} className="feat-tool-row">
          <span className="feat-tool-icon">{t.icon}</span>
          <span className="feat-tool-label font-sans">{t.label}</span>
          <kbd className="feat-tool-key font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700 shadow-sm">{t.shortcut}</kbd>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Illustration: Action pill buttons ─── */
const ShareIllustration = () => (
  <div className="feat-illust feat-illust--share">
    <div className="feat-pills font-mono">
      <span className="feat-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy to clipboard (⌘C)
      </span>
      <span className="feat-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
        Share direct link
      </span>
      <span className="feat-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Quick PNG export
      </span>
    </div>
  </div>
);

const items = [
  {
    num: "01",
    title: "Region & Window",
    description:
      "Capture exactly what you need with precision. Select any region, window, or full screen with a single shortcut. Zero friction.",
    Illustration: CaptureIllustration,
  },
  {
    num: "02",
    title: "Clean Annotation",
    description:
      "Highlight, redact sensitive credentials with pixelate blur, and annotate with elegant tools in real time. Built for focus.",
    Illustration: AnnotationIllustration,
  },
  {
    num: "03",
    title: "Instant Share",
    description:
      "Everything goes straight to clipboard immediately. Empower your workflow with one-click actions that just work.",
    Illustration: ShareIllustration,
  },
];

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-view");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="landing-features" ref={sectionRef}>
      <div className="landing-dot-grid" aria-hidden="true" />
      <div className="landing-feature-shell">
        <div className="landing-feature-intro fade-in-view">
          <span className="font-mono text-xs tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
            [ CAPABILITIES ]
          </span>
          <h2 className="landing-feature-heading font-heading">
            Capture. Refine. Deliver.
          </h2>
          <p className="landing-feature-subhead font-sans">
            Everything you need to capture, annotate, redact, and share in seconds.
          </p>
          <div className="landing-feature-grid">
            {items.map((item, i) => {
              const Illust = item.Illustration;
              return (
                <div
                  key={item.title}
                  className="landing-feature-card fade-in-view group rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 p-6 bg-neutral-50/40 dark:bg-neutral-900/30 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 tracking-wider">
                      {item.num}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-red-500 transition-colors" />
                  </div>

                  <Illust />
                  <div className="feat-card-body mt-4">
                    <p className="font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      <strong className="feat-card-title font-heading font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">
                        {item.title}
                      </strong>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
