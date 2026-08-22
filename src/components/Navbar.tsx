import React from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { NavTab } from '../types';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenCV: () => void;
  isGlowEnhanced: boolean;
  onToggleGlow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenCV,
  isGlowEnhanced,
  onToggleGlow,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const tabs: NavTab[] = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-2 backdrop-blur-md bg-[#0b020a]/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: SK Monogram Logo */}
        <div 
          onClick={() => onSelectTab('Home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#6b003a] p-[1.5px] shadow-[0_0_20px_rgba(255,0,128,0.5)] group-hover:shadow-[0_0_28px_rgba(255,0,128,0.8)] transition-all">
            <div className="w-full h-full bg-[#1b0317] rounded-[14px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-rose-200 tracking-wider">
                SK
              </span>
            </div>
          </div>
          <span className="font-heading text-xl font-bold text-white tracking-tight group-hover:text-pink-200 transition-colors">
            Sneha Kumari
          </span>
        </div>

        {/* Center: Glassmorphism Nav Pill (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1e0419]/80 backdrop-blur-xl border border-pink-500/30 rounded-full p-1.5 shadow-[0_0_25px_rgba(230,0,126,0.2)]">
          {(['Home', 'About', 'Skills', 'Projects', 'Contact'] as NavTab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => onSelectTab(tab)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-full cursor-pointer select-none ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d90077] to-[#b30060] text-white shadow-[0_0_18px_rgba(255,0,128,0.7)] border border-pink-400/40'
                    : 'text-pink-100/80 hover:text-white hover:bg-pink-500/15'
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-pink-300 rounded-full shadow-[0_0_10px_#ff0080]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Download CV Button */}
          <button
            onClick={onOpenCV}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-pink-100 hover:text-white bg-[#280620]/80 border border-pink-500/35 hover:border-pink-400 hover:bg-pink-900/40 shadow-[0_0_15px_rgba(255,0,128,0.2)] hover:shadow-[0_0_22px_rgba(255,0,128,0.4)] transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-pink-300" />
            <span>Download CV</span>
          </button>

          {/* Theme/Glow Toggle Button */}
          <button
            onClick={onToggleGlow}
            title={isGlowEnhanced ? "Standard Glow" : "Max Cyber Neon Glow"}
            className="w-10 h-10 rounded-full bg-[#24051d]/80 border border-pink-500/35 hover:border-pink-400 text-pink-300 hover:text-pink-100 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,128,0.25)] hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] transition-all cursor-pointer"
          >
            {isGlowEnhanced ? (
              <Sun className="w-4 h-4 text-pink-300 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-pink-300" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#24051d] border border-pink-500/30 text-pink-200 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#1a0416]/95 border border-pink-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,128,0.3)] animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onSelectTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 text-left rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-600 to-rose-700 text-white shadow-[0_0_15px_rgba(255,0,128,0.4)]'
                    : 'text-pink-100/80 hover:bg-pink-500/10 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenCV();
                setMobileMenuOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-pink-900/60 to-purple-900/60 border border-pink-500/40 text-pink-100"
            >
              <Download className="w-4 h-4 text-pink-300" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
