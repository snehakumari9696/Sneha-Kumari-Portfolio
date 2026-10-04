import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/audio';

interface NavigationProps {
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 120);

      // Simple active section detection
      const sections = ['works', 'experience', 'skills', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    soundManager.playSoftTick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 pointer-events-none ${
        scrolled
          ? 'py-3.5 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#A67F54]/20 shadow-xs'
          : 'py-6 bg-transparent opacity-0 -translate-y-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-auto">
        {/* Name / Brand Title */}
        <button
          onClick={() => {
            soundManager.playSoftTick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          data-cursor="TOP"
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <span className="font-bold text-sm tracking-wider uppercase text-[#3C2317]">
            Sneha Kumari
          </span>
          <span className="text-[#A67F54]/50 hidden sm:inline">·</span>
          <span className="text-xs text-[#8B653B] font-medium hidden sm:inline tracking-wide">
            Software Developer
          </span>
        </button>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#5C432C]">
          {[
            { id: 'works', label: 'Works' },
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Matrix' },
            { id: 'about', label: 'Philosophy' },
            { id: 'contact', label: 'Inquiry' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              data-cursor="VIEW"
              className={`transition-colors duration-200 relative py-1 hover:text-[#3C2317] ${
                activeSection === item.id ? 'text-[#3C2317]' : 'text-[#8B653B]/70'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#A67F54] rounded-full animate-in fade-in duration-300" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA Node: Resume Viewer */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundManager.playChime(580);
              onOpenResume();
            }}
            data-cursor="RESUME"
            className="text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-[#A67F54]/40 hover:border-[#3C2317] bg-[#FAF7F2] text-[#3C2317] transition-all duration-300 shadow-2xs hover:scale-105 active:scale-95"
          >
            Resume (PDF)
          </button>
        </div>
      </div>
    </header>
  );
};
