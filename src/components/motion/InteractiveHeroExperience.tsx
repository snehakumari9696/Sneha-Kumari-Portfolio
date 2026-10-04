import React from 'react';
import { TiltCard } from './TiltCard';
import { Briefcase, Award, Terminal, MapPin, ArrowRight } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface InteractiveHeroExperienceProps {
  onNavigateToProjects?: () => void;
  onNavigateToExperience?: () => void;
}

export const InteractiveHeroExperience: React.FC<InteractiveHeroExperienceProps> = ({
  onNavigateToProjects,
  onNavigateToExperience,
}) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#120B07] text-[#FAF7F2] flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-8 select-none">
      {/* Dynamic Ambient Background Light Cones */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A67F54]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5C432C]/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Portrait Graphic Backdrop (Sneha text + Girl image clearly visible) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/hero-bg.png"
          alt="Sneha Kumari Portrait Backdrop"
          className="w-full h-full object-cover object-center filter contrast-105 brightness-90 scale-100"
        />
        {/* Subtle Vignette so cards remain legible while preserving the girl illustration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120B07]/40 via-transparent to-[#120B07]/80" />
      </div>

      {/* Top Header Live Status */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between pt-4">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-semibold">
            Available for SDE Internships 2025–2026
          </span>
        </div>

        <div className="text-xs font-mono text-white/50 hidden sm:block">
          Interactive Experience Hero · 3D Tilt
        </div>
      </div>

      {/* Center Layout: Main Typography + Dynamic Floating Glass Overlay Cards */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        {/* Centered Editorial Intro Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SNEHA KUMARI
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#D8BA8D] mt-2 drop-shadow-md">
            Software Developer · Systems &amp; AI Engineer
          </p>
        </div>

        {/* Floating Detail Cards Grid / Cloud Overlaid Across Central Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Card 1: Omnira Cloud (Present) */}
          <TiltCard
            floatDelay={0}
            floatRange={6}
            tiltIntensity={15}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl hover:border-[#D8BA8D]/60 hover:bg-white/15"
          >
            <div className="flex items-center justify-between text-xs text-[#D8BA8D] font-mono mb-3">
              <span className="flex items-center gap-1.5 font-semibold">
                <Briefcase className="w-3.5 h-3.5" /> Omnira Cloud
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold">
                15 Aug – 15 Sept 2026
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
              Full Stack Web Developer Intern
            </h3>

            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Building scalable cloud-backed web applications, managing client-side interfaces, and optimizing RESTful APIs for low latency.
            </p>

            <ul className="space-y-1.5 text-xs text-white/90 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#D8BA8D] mt-0.5">›</span>
                <span>Optimized database schemas &amp; microservice queries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8BA8D] mt-0.5">›</span>
                <span>Shipped modular, responsive React &amp; Node.js UI features</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
              <span>Cloud &amp; REST Architecture</span>
              <span className="text-[#D8BA8D]">3D Tilt Active</span>
            </div>
          </TiltCard>

          {/* Card 2: GRAStech (#1 Top Project in Cohort Award) */}
          <TiltCard
            floatDelay={1.2}
            floatRange={6}
            tiltIntensity={15}
            className="backdrop-blur-md bg-white/10 border border-amber-300/40 rounded-2xl p-6 sm:p-7 shadow-2xl hover:border-amber-300 hover:bg-white/15 relative overflow-hidden"
          >
            {/* Golden Ribbon Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs text-amber-300 font-mono mb-3">
              <span className="flex items-center gap-1.5 font-bold">
                <Award className="w-4 h-4 text-amber-300" /> #1 Project Award
              </span>
              <span className="text-[10px] text-white/80">Jun – Aug 2026</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
              MERN Stack Intern · GRAStech
            </h3>
            <p className="text-xs text-amber-200/90 font-mono mb-3">
              Built &amp; Deployed &quot;Social Voice Academy&quot;
            </p>

            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Integrated an AI coding mentor, automated code reviews, and real-time collaborative &quot;Dev Rooms&quot; using React, WebSockets, and MongoDB.
            </p>

            <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white/90 space-y-1 mb-4">
              <div className="flex items-center justify-between text-[10px] text-amber-300 font-semibold uppercase">
                <span>Cohort Distinction</span>
                <span>Top Project Certificate</span>
              </div>
              <p className="text-[11px] text-white/75">
                Awarded top rank by supervising faculty for end-to-end engineering rigor.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
              <span>WebSockets · JWT · AI Chat</span>
              <span className="text-amber-300 font-bold">★ Certified</span>
            </div>
          </TiltCard>

          {/* Card 3: YBI Foundation & Core CS / NeetCode Blind 75 */}
          <TiltCard
            floatDelay={2.4}
            floatRange={6}
            tiltIntensity={15}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl hover:border-[#D8BA8D]/60 hover:bg-white/15 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between text-xs text-[#D8BA8D] font-mono mb-3">
              <span className="flex items-center gap-1.5 font-semibold">
                <Terminal className="w-3.5 h-3.5" /> Core CS &amp; Engineering
              </span>
              <span className="text-emerald-400 font-bold text-[10px]">
                Nov 2024 – Feb 2025
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
              YBI Foundation &amp; Core CS
            </h3>

            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Full-stack digital solutions, Git workflows, and strong core CS foundations in Data Structures, Algorithms, and System Design.
            </p>

            <ul className="space-y-1.5 text-xs text-white/90 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Java OOD &amp; Spring Boot transactional microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Data Structures, Algorithms &amp; Relational DBMS</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
              <span>B.Tech CS (Class of 2027)</span>
              <span className="text-[#D8BA8D]">Lucknow, India</span>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-t border-white/10 pt-6">
        <div className="text-xs text-white/70 flex items-center gap-4 font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D8BA8D]" /> Lucknow, India
          </span>
          <span>·</span>
          <span>+91 8090542701</span>
        </div>

        <div className="flex items-center gap-3">
          {onNavigateToProjects && (
            <button
              onClick={() => {
                soundManager.playChime(620);
                onNavigateToProjects();
              }}
              data-cursor="PROJECTS"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] text-[#120B07] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA8D] transition-colors cursor-pointer shadow-lg active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onNavigateToExperience && (
            <button
              onClick={() => {
                soundManager.playSoftTick();
                onNavigateToExperience();
              }}
              data-cursor="TIMELINE"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Full Timeline</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
