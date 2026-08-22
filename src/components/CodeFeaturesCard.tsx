import React from 'react';
import { CircuitOverlay } from './CircuitOverlay';

export const CodeFeaturesCard: React.FC = () => {
  return (
    <div className="relative inline-flex items-center gap-4">
      {/* Main Glass Box */}
      <div className="relative overflow-hidden rounded-2xl bg-[#1b0419]/80 backdrop-blur-xl border border-pink-500/35 p-5 px-6 shadow-[0_0_25px_rgba(230,0,126,0.25)] hover:shadow-[0_0_35px_rgba(255,0,128,0.45)] hover:border-pink-400 transition-all duration-300">
        
        {/* Background circuit lines overlay */}
        <CircuitOverlay opacity={0.3} />

        {/* Top Right Glowing Status Dot */}
        <div className="absolute top-3.5 right-4 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ff0080] animate-pulse" />

        <div className="relative z-10 flex items-center gap-5 sm:gap-6">
          {/* Big </> Code Icon */}
          <div className="text-pink-100 font-mono font-bold text-3xl sm:text-4xl tracking-tighter text-glow-pink select-none">
            &lt;/&gt;
          </div>

          {/* Vertical Separator line */}
          <div className="w-[1px] h-12 bg-pink-500/20" />

          {/* Bulleted Feature Text Lines */}
          <div className="flex flex-col gap-1.5 font-medium text-xs sm:text-sm text-pink-100/90 tracking-wide">
            <span className="hover:text-pink-300 transition-colors cursor-default">Clean Code</span>
            <span className="hover:text-pink-300 transition-colors cursor-default">Scalable Solutions</span>
            <span className="hover:text-pink-300 transition-colors cursor-default">Pixel Perfect</span>
          </div>
        </div>
      </div>

      {/* Floating 4-pointed diamond star element next to the card (exact match to screenshot) */}
      <div className="hidden sm:block relative text-pink-400 animate-float-star">
        <svg className="w-8 h-8 drop-shadow-[0_0_10px_#ff0080]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </div>
  );
};
