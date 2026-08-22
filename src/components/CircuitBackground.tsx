import React from 'react';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/nwwiqfso/video/upload/v1785949021/portfolio_vaf2cy.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Subtle Dark Vignette Tint for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      {/* Grid line texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #ff007f 1px, transparent 1px), linear-gradient(to bottom, #ff007f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating neon particle stars */}
      <div className="absolute top-[18%] left-[52%] w-1.5 h-1.5 rounded-full bg-pink-400 blur-[1px] shadow-[0_0_8px_#ff0080] animate-pulse" />
      <div className="absolute top-[22%] left-[48%] w-1 h-1 rounded-full bg-pink-300 shadow-[0_0_6px_#ff0080] opacity-80" />
      <div className="absolute top-[35%] left-[62%] w-2 h-2 rounded-full bg-pink-400 blur-[1px] shadow-[0_0_12px_#ff0080] animate-pulse" />
      <div className="absolute top-[15%] right-[25%] w-1.5 h-1.5 rounded-full bg-pink-300 blur-[1px] shadow-[0_0_8px_#ff0080]" />
      <div className="absolute top-[48%] right-[15%] w-1 h-1 rounded-full bg-pink-200 opacity-60" />
      <div className="absolute bottom-[25%] left-[40%] w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ff0080]" />
    </div>
  );
};

