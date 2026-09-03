import React from "react";

const shortcuts = [
  { key: "C", label: "Crop Selection", desc: "Drag to frame your capture" },
  { key: "V", label: "Select / Move", desc: "Select & drag any drawn shape" },
  { key: "P", label: "Pixelate Blur", desc: "Redact passwords & secrets" },
  { key: "R", label: "Rectangle", desc: "Draw high-contrast boxes" },
  { key: "A", label: "Arrow", desc: "Point out UI bugs & details" },
  { key: "T", label: "Text Overlay", desc: "Add notes with custom fonts" },
  { key: "⌘C", label: "Copy to Clipboard", desc: "Instant clipboard copy" },
  { key: "⌘E", label: "Export Image", desc: "Download high-res PNG" },
];

export const ShortcutsMatrix = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 border-t border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/50 dark:bg-neutral-950/40">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
        
        <span className="font-ndot text-xs tracking-widest text-neutral-600 dark:text-neutral-400 font-semibold uppercase mb-3">
          [ POWER-USER SHORTCUTS ]
        </span>
        <h2 className="font-ndot text-3xl sm:text-4xl uppercase tracking-wide text-neutral-950 dark:text-white max-w-xl">
          Everything at your fingertips.
        </h2>
        <p className="font-ntype text-sm sm:text-base text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mb-12">
          Designed for developers who move fast. Annotate, redact, and export without touching a menu.
        </p>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full">
          {shortcuts.map((s) => (
            <div
              key={s.key}
              className="flex flex-col items-start p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/80 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between w-full mb-2.5">
                <kbd className="inline-flex items-center justify-center min-w-[32px] h-[28px] px-2 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-ndot text-xs text-neutral-900 dark:text-white font-bold shadow-sm">
                  {s.key}
                </kbd>
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              </div>
              <span className="font-ndot text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-semibold">
                {s.label}
              </span>
              <span className="font-ntype text-xs text-neutral-600 dark:text-neutral-300 mt-1">
                {s.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
