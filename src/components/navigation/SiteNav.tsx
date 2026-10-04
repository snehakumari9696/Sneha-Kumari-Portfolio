import React from 'react';
import { soundManager } from '../../utils/audio';

export type PageRoute = 'home' | 'projects' | 'experience' | 'about' | 'contact';

interface SiteNavProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
}

export const SiteNav: React.FC<SiteNavProps> = ({
  currentPage,
  onNavigate,
  onOpenResume,
}) => {
  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 select-none py-4 px-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            soundManager.playSoftTick();
            onNavigate('home');
          }}
          data-cursor="HOME"
          className="flex items-center gap-2 group cursor-pointer text-left py-1.5 px-3 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#A67F54]/30 shadow-xs hover:border-[#3C2317] transition-all duration-300"
        >
          <span className="font-extrabold text-xs sm:text-sm tracking-widest uppercase text-[#3C2317]">
            Sneha Kumari
          </span>
          <span className="text-[#A67F54]/50 hidden sm:inline">·</span>
          <span className="text-[11px] text-[#8B653B] font-mono hidden sm:inline">
            Software Developer
          </span>
        </button>

        {/* Core Pages Navigation (Home, Projects, Experience, About, Contact) */}
        <nav className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#A67F54]/30 shadow-xs">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundManager.playSoftTick();
                  onNavigate(item.id);
                }}
                data-cursor={item.label.toUpperCase()}
                className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#3C2317] text-[#FAF7F2] shadow-xs'
                    : 'text-[#5C432C] hover:text-[#3C2317] hover:bg-[#A67F54]/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Resume */}
        <div className="hidden sm:block">
          <button
            onClick={() => {
              soundManager.playChime(660);
              onOpenResume();
            }}
            data-cursor="RESUME"
            className="text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[#A67F54]/40 hover:border-[#3C2317] bg-[#FAF7F2]/90 backdrop-blur-md text-[#3C2317] transition-all duration-300 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
          >
            Resume (PDF)
          </button>
        </div>
      </div>
    </header>
  );
};
