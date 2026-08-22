import React from 'react';
import { Lightbulb, Layers, Star, Code, Heart } from 'lucide-react';
import { CircuitOverlay } from './CircuitOverlay';

interface StatCardProps {
  value?: string;
  label: string;
  iconType: 'Lightbulb' | 'Layers' | 'Star' | 'Code' | 'Heart';
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, iconType, onClick }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-pink-300" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-pink-300" />;
      case 'Star':
        return <Star className="w-5 h-5 text-pink-300 fill-pink-500/20" />;
      case 'Code':
        return <Code className="w-5 h-5 text-pink-300" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-pink-300 fill-pink-500/20" />;
    }
  };

  const hasValue = Boolean(value && value.trim().length > 0);

  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#1b0419]/70 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/80 p-5 sm:p-6 min-w-[200px] sm:min-w-[220px] shadow-[0_0_20px_rgba(230,0,126,0.18)] hover:shadow-[0_0_32px_rgba(255,0,128,0.4)] transition-all duration-300"
    >
      {/* Background PCB circuit lines overlay */}
      <CircuitOverlay opacity={0.3} />

      {/* Subtle hover gradient flare */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-pink-600/20 rounded-full blur-2xl group-hover:bg-pink-500/35 transition-all" />

      {/* Header layout inside card: Value on left, Icon on right */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-2">
        {hasValue ? (
          <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-glow-sm group-hover:text-pink-100 transition-colors">
            {value}
          </span>
        ) : (
          <div className="flex-1" />
        )}
        <div className="w-10 h-10 rounded-xl bg-pink-950/40 border border-pink-500/35 flex items-center justify-center shadow-[0_0_12px_rgba(255,0,128,0.3)] group-hover:border-pink-400 group-hover:shadow-[0_0_18px_rgba(255,0,128,0.5)] transition-all shrink-0">
          {renderIcon()}
        </div>
      </div>

      {/* Label lines */}
      <p className={`relative z-10 font-medium whitespace-pre-line group-hover:text-pink-100 transition-colors ${
        hasValue 
          ? 'text-xs sm:text-sm text-pink-200/80 leading-tight' 
          : 'text-base sm:text-lg font-heading font-bold text-white text-glow-sm leading-snug mt-1'
      }`}>
        {label}
      </p>

      {/* Bottom glowing accent bar on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent transition-all duration-300" />
    </div>
  );
};
