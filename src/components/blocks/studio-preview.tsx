import React from "react";

export const StudioPreview = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Outer subtle shadow & border ring */}
      <div className="relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/90 dark:bg-neutral-900/90 p-3.5 shadow-2xl shadow-neutral-950/5 dark:shadow-black/50 backdrop-blur-xl transition-all duration-300">
        
        {/* macOS Window Titlebar */}
        <div className="flex items-center justify-between pb-3 px-1 border-b border-neutral-200/60 dark:border-neutral-800/60">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-300/40 dark:border-neutral-700/40 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
            <img src="/inki.png" alt="Snitch" className="h-3.5 w-auto object-contain" />
            <span>snitch_capture.png</span>
            <span className="text-neutral-400 dark:text-neutral-500">· 1920×1080</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
              Ready
            </span>
          </div>
        </div>

        {/* Canvas Body with Mockup Content */}
        <div className="relative mt-3 rounded-xl overflow-hidden bg-neutral-900 text-neutral-100 p-5 font-mono text-xs shadow-inner">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Simulated Code Lines */}
          <div className="relative space-y-2 text-[12px] leading-relaxed">
            <div className="text-neutral-500">// Snitch - Instant local screen capture</div>
            <div>
              <span className="text-purple-400">import</span>{" "}
              <span className="text-amber-300">&#123; SnitchStudio &#125;</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-emerald-400">"@snitch/core"</span>;
            </div>
            
            <div className="pt-1">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">capture</span> ={" "}
              <span className="text-purple-400">await</span>{" "}
              <span className="text-yellow-300">SnitchStudio</span>.<span className="text-blue-300">snap</span>();
            </div>

            {/* Simulated Sensitive Block with Pixelate Redaction Overlay */}
            <div className="relative inline-block my-1.5 p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60 w-full">
              <div className="text-neutral-400 text-[11px] mb-1 flex items-center justify-between">
                <span>// Sensitive Credentials</span>
                <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  Pixelate Blur
                </span>
              </div>
              
              {/* Pixelated Blur Box Overlay */}
              <div className="relative overflow-hidden rounded bg-neutral-950/70 px-3 py-1.5 border border-red-500/40">
                <span className="blur-[4px] opacity-40 select-none text-red-300 tracking-widest">
                  sb_secret_dOdugLy-Sa9N2ZNDsEBiUw_5FHa3UR_992148
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] text-red-400 font-medium tracking-wide">
                  [ ⬛ REDACTED ⬛ ]
                </span>
              </div>
            </div>

            <div className="text-neutral-400 pt-1">
              <span className="text-purple-400">return</span> capture.<span className="text-blue-300">toClipboard</span>();
            </div>
          </div>

          {/* Active Red Crop Frame Over the Code */}
          <div className="absolute top-10 left-8 right-12 bottom-12 rounded border-2 border-red-500/80 pointer-events-none">
            {/* Corner handles */}
            <span className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-sm bg-white border-2 border-red-600 shadow" />
            <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-sm bg-white border-2 border-red-600 shadow" />
            <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-sm bg-white border-2 border-red-600 shadow" />
            <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-sm bg-white border-2 border-red-600 shadow" />
            
            {/* Dimension Tag */}
            <span className="absolute -top-6 left-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono shadow">
              460 × 180 px
            </span>
          </div>

          {/* Bottom Watermark Tag */}
          <div className="relative mt-4 flex items-center justify-between pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <img src="/inki.png" alt="Snitch Mascot" className="h-4 w-auto object-contain" />
              <span className="font-semibold text-neutral-200">Snitch</span>
              <span className="text-[10px] text-neutral-500">by @codewithevilxd</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px]">
                ⌘C Copy
              </span>
              <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px]">
                ⌘E Export
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
