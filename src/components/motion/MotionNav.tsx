import React from 'react';
import { soundManager } from '../../utils/audio';
import { Sparkles, Layers, Briefcase, Globe } from 'lucide-react';

export type ActiveView = 'hero' | 'projects' | 'experience' | 'full';

interface MotionNavProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  onOpenResume: () => void;
}

export const MotionNav: React.FC<MotionNavProps> = ({
  activeView,
  onSelectView,
  onOpenResume,
}) => {
  const views: { id: ActiveView; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'hero', label: '3D Tilt Hero', icon: Sparkles },
    { id: 'projects', label: 'Magnetic Projects', icon: Layers },
    { id: 'experience', label: 'Depth Experience', icon: Briefcase },
    { id: 'full', label: 'Full Portfolio', icon: Globe },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-[#1A110B]/85 backdrop-blur-xl border border-white/20 shadow-2xl select-none max-w-[95vw] overflow-x-auto">
      {views.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              soundManager.playSoftTick();
              onSelectView(item.id);
            }}
            data-cursor={item.label.toUpperCase()}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
              isActive
                ? 'bg-[#FAF7F2] text-[#120B07] font-bold shadow-md scale-100'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8B653B]' : 'text-[#D8BA8D]'}`} />
            <span>{item.label}</span>
          </button>
        );
      })}

      <div className="w-[1px] h-4 bg-white/20 mx-1 shrink-0" />

      {/* Resume CTA */}
      <button
        onClick={() => {
          soundManager.playChime(660);
          onOpenResume();
        }}
        data-cursor="RESUME"
        className="px-3.5 py-1.5 rounded-full border border-[#D8BA8D]/50 hover:border-[#D8BA8D] text-xs font-mono font-semibold text-[#D8BA8D] hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
      >
        Resume
      </button>
    </nav>
  );
};
