import React from "react";

export const StudioShowcase = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 overflow-hidden">
      <div className="max-w-[1160px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <span className="font-mono text-xs tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-3">
          [ THE STUDIO ]
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-2xl leading-tight">
          Annotate, frame, and export with zero friction.
        </h2>
        <p className="font-sans text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mt-3 mb-12 leading-relaxed">
          Draw clean vectors, highlight critical details, redact passwords, and wrap your captures in gorgeous studio backdrops.
        </p>

        {/* CleanShot / Raycast Style Studio Frame */}
        <div className="relative w-full max-w-[1040px] rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-neutral-200/50 to-neutral-300/30 dark:from-neutral-800/40 dark:to-neutral-900/40 border border-neutral-300/60 dark:border-neutral-800/80 shadow-2xl shadow-neutral-950/10 dark:shadow-black/60 backdrop-blur-xl">
          
          {/* macOS Window Header */}
          <div className="flex items-center justify-between px-3 py-2.5 bg-neutral-900/90 rounded-t-xl border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <img src="/inki.png" alt="Snitch" className="h-4 w-auto object-contain" />
              <span className="text-neutral-200 font-medium">Snitch Studio</span>
              <span className="text-neutral-500">· Canvas Active</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/capture.html"
                className="px-3 py-1 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors"
              >
                Open Studio ➔
              </a>
            </div>
          </div>

          {/* Actual Studio Screenshot */}
          <div className="relative overflow-hidden rounded-b-xl bg-neutral-950">
            <img
              src="/editor-preview.png"
              alt="Snitch Studio Screen Capture Canvas"
              className="w-full h-auto object-cover block"
            />

            {/* Subtle Gradient Vignette Over the Image */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
};
