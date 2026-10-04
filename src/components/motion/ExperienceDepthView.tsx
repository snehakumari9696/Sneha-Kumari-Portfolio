import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface ExperienceDepthViewProps {
  onNavigateToProjects?: () => void;
}

export const ExperienceDepthView: React.FC<ExperienceDepthViewProps> = ({ onNavigateToProjects }) => {
  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 px-6 md:px-12 bg-[#120B07] text-[#FAF7F2] overflow-hidden select-none">
      {/* Background Depth Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A67F54]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-16 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-xs tracking-widest uppercase font-mono text-[#D8BA8D] mb-3">
            <span>Section 03</span>
            <span>/</span>
            <span>Depth Zoom Motion System</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Experience &amp; Milestones.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-white/60 mt-2">
            Engineered with perspective depth zoom transition (scale: 0.88 → 1.0 &amp; blur: 12px → 0px).
          </p>
        </div>

        {/* Experience Timeline Grid with Perspective Zoom Depth */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => {
            const isTopAward = exp.id === 'grastech';
            return (
              <motion.div
                key={exp.id}
                whileHover={{
                  scale: 1.015,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="relative rounded-2xl bg-white/5 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-md hover:border-[#D8BA8D]/60 hover:bg-white/10 transition-all duration-300"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D8BA8D] font-bold">
                        0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {isTopAward && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-400/20 border border-amber-300/40 px-2.5 py-0.5 rounded-full font-mono">
                          <Award className="w-3.5 h-3.5 text-amber-300" /> Top Project Award
                        </span>
                      )}
                    </div>
                    <div className="text-base text-[#D8BA8D] font-semibold mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-white/60 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D8BA8D]" /> {exp.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D8BA8D]" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary & Bullet Points */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 mb-6">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="text-[#D8BA8D] mt-1 shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Row */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono text-[#D8BA8D] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education Card */}
          <div className="rounded-2xl bg-white/5 border border-white/15 p-8 shadow-xl backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#D8BA8D] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#D8BA8D]" />
              <span>Academic Engineering Degree</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">{EDUCATION.degree}</h4>
              <p className="text-xs text-white/70 mt-1">{EDUCATION.institution}</p>
              <p className="text-xs font-mono text-[#D8BA8D] mt-1">{EDUCATION.timeline}</p>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-white/60 space-y-1">
              <span className="font-semibold text-white/80 block">Completed Core Coursework:</span>
              <p className="leading-relaxed">
                {EDUCATION.coursework.join(' · ')}
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="rounded-2xl bg-white/5 border border-white/15 p-8 shadow-xl backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#D8BA8D] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#D8BA8D]" />
              <span>Honors &amp; Certifications</span>
            </div>

            <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div key={cIdx} className="text-xs p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cert.title}</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#D8BA8D] pl-5 mt-0.5">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA to Projects */}
        {onNavigateToProjects && (
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                soundManager.playChime(660);
                onNavigateToProjects();
              }}
              data-cursor="PROJECTS"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] text-[#120B07] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA8D] transition-colors cursor-pointer shadow-xl active:scale-95"
            >
              <span>Explore Projects with Magnetic Hover</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
