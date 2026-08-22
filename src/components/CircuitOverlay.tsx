import React from 'react';

interface CircuitOverlayProps {
  className?: string;
  opacity?: number;
}

export const CircuitOverlay: React.FC<CircuitOverlayProps> = ({ className = '', opacity = 0.25 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full text-pink-500"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          {/* Main PCB trace lines */}
          <path d="M 10 20 L 80 20 L 110 50 L 220 50" strokeDasharray="3 3" opacity="0.8" />
          <path d="M 40 180 L 100 180 L 130 140 L 260 140" strokeWidth="1.2" />
          <path d="M 0 100 L 50 100 L 80 70 L 180 70 L 210 100 L 290 100" strokeWidth="1" />
          
          {/* Vertical and diagonal connectors */}
          <path d="M 160 10 L 160 40 L 180 60" />
          <path d="M 230 190 L 230 150 L 210 130 L 210 90" />
          <path d="M 70 120 L 90 140 L 90 170" />
          
          {/* Subtle grid background nodes */}
          <path d="M 250 20 L 280 20 L 290 30" strokeWidth="0.8" opacity="0.6" />
          <path d="M 20 150 L 50 150 L 60 160" strokeWidth="0.8" opacity="0.6" />
        </g>
        
        {/* Glowing circuit pads and nodes */}
        <g fill="currentColor" opacity="0.9">
          <circle cx="80" cy="20" r="2.5" />
          <circle cx="110" cy="50" r="2" />
          <circle cx="220" cy="50" r="2.5" />
          
          <circle cx="100" cy="180" r="2" />
          <circle cx="130" cy="140" r="2.5" />
          
          <circle cx="50" cy="100" r="2" />
          <circle cx="80" cy="70" r="2.5" />
          <circle cx="180" cy="70" r="2" />
          <circle cx="210" cy="100" r="2.5" />
          
          <circle cx="160" cy="40" r="2" />
          <circle cx="210" cy="130" r="2.5" />
          <circle cx="90" cy="140" r="2" />
          
          <circle cx="280" cy="20" r="1.5" />
          <circle cx="50" cy="150" r="1.5" />
        </g>
        
        {/* Microchip rectangular pin outlines */}
        <rect x="135" y="60" width="20" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" rx="2" />
        <rect x="140" y="65" width="10" height="10" fill="currentColor" opacity="0.2" />
      </svg>
    </div>
  );
};
