import React from 'react';
import { ArrowRight, MessageSquare, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CircuitOverlay } from './CircuitOverlay';

interface HeroContentProps {
  onViewWork: () => void;
  onOpenContact: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onViewWork, onOpenContact }) => {
  return (
    <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-2xl">
      
      {/* Software Developer Badge Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#24051e]/80 backdrop-blur-xl border border-pink-500/35 shadow-[0_0_15px_rgba(255,0,128,0.2)]">
        <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ff0080] animate-pulse" />
        <span className="text-xs sm:text-sm font-medium text-pink-200 tracking-wide">
          B.Tech CS '27 • Full-Stack & AI Developer
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
        I build <br className="hidden sm:block" />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-cyan-300 text-glow-pink">
          scalable & AI-driven
        </span>{' '}
        software.
      </h1>

      {/* Bio Subtitle Paragraph */}
      <p className="text-base sm:text-lg text-pink-100/80 font-normal leading-relaxed max-w-xl">
        I'm <strong className="text-white font-semibold">Sneha Kumari</strong>, a Computer Science engineer skilled in Java, Spring Boot, MERN Stack, and WebSockets. I design and deploy multi-tiered, real-time web applications with end-to-end precision.
      </p>

      {/* Location tag */}
      <div className="flex items-center gap-2 text-xs text-pink-300/80 font-mono">
        <MapPin className="w-3.5 h-3.5 text-pink-400" />
        <span>Prayagraj, Uttar Pradesh, India</span>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-4 pt-1">
        {/* Primary View My Work Button */}
        <button
          onClick={onViewWork}
          className="relative group overflow-hidden bg-gradient-to-r from-[#e6007e] via-[#c9006e] to-[#a30059] hover:from-[#ff008b] hover:to-[#c4006b] border border-pink-400/50 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-2xl flex items-center gap-3 shadow-[0_0_28px_rgba(255,0,128,0.5)] hover:shadow-[0_0_40px_rgba(255,0,128,0.75)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <CircuitOverlay opacity={0.3} />
          <span className="relative z-10">Explore My Projects</span>
          <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Let's Talk Button */}
        <button
          onClick={onOpenContact}
          className="relative group overflow-hidden bg-[#22051d]/75 backdrop-blur-xl border border-pink-500/40 hover:border-pink-300 text-pink-100 hover:text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-2xl flex items-center gap-3 shadow-[0_0_18px_rgba(255,0,128,0.2)] hover:shadow-[0_0_30px_rgba(255,0,128,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <CircuitOverlay opacity={0.25} />
          <span className="relative z-10">Get In Touch</span>
          <MessageSquare className="relative z-10 w-4 h-4 text-pink-300 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Social Media Links Row */}
      <div className="flex items-center gap-3 pt-2">
        {[
          { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/snehakumari-sk/' },
          { icon: Github, label: 'GitHub', href: 'https://github.com' },
          { icon: Mail, label: 'Email: kumarisneha3824@gmail.com', href: 'mailto:kumarisneha3824@gmail.com' },
          { icon: Phone, label: 'Call: +91 8090542701', href: 'tel:+918090542701' },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={item.label}
              className="w-11 h-11 rounded-2xl bg-[#22051d]/80 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,0,128,0.2)] hover:shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

    </div>
  );
};
