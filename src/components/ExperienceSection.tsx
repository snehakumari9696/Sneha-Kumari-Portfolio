import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('omnira-cloud');

  const toggleExpand = (id: string) => {
    soundManager.playSoftTick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative w-full py-28 md:py-36 bg-[#F4EFEA] text-[#3C2317] border-t border-[#A67F54]/20">
      {/* Editorial Decorative Architectural Guides */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#A67F54]/20 mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#8B653B] mb-3">
            <span className="text-[#A67F54]">03</span>
            <span>/</span>
            <span>Professional Trajectory &amp; Impact</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3C2317] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Engineering Experience.
          </h2>
        </div>

        {/* Timeline Sequence */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isTopAward = exp.id === 'grastech';

            return (
              <div
                key={exp.id}
                className="bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/25 shadow-xs overflow-hidden transition-all duration-300 hover:border-[#3C2317]"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  data-cursor="TIMELINE"
                  className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0EBE1] border border-[#A67F54]/30 flex items-center justify-center text-[#8B653B] group-hover:text-[#3C2317] shrink-0 mt-1 md:mt-0 transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-lg sm:text-xl text-[#3C2317] group-hover:text-[#8B653B] transition-colors">
                          {exp.role}
                        </h3>
                        {isTopAward && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-2 py-0.5 rounded-sm">
                            <Award className="w-3 h-3 text-amber-700" />
                            #1 Top Project
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#8B653B] mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-5 text-xs text-[#705338] font-mono shrink-0 pl-14 md:pl-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A67F54]" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5 text-[#A67F54]" /> {exp.location}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border border-[#A67F54]/30 flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#3C2317] text-[#FAF7F2]' : 'text-[#8B653B]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Detailed Contributions */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#A67F54]/15 space-y-5 animate-in fade-in duration-200">
                    <p className="text-sm sm:text-base text-[#5C432C] font-normal leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-2.5">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-[#8B653B]">
                        Key Engineering Deliverables &amp; Outcomes:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#5C432C]">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#A67F54] mt-0.5 shrink-0">▪</span>
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Vector (Zero-pill text) */}
                    <div className="pt-4 border-t border-[#A67F54]/15 flex flex-wrap items-center gap-y-1 text-xs text-[#705338] font-mono">
                      <span className="text-[#8B653B] font-bold mr-2 uppercase tracking-wider text-[11px]">
                        Competencies:
                      </span>
                      {exp.skills.map((skill, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="text-[#3C2317]">{skill}</span>
                          {sIdx < exp.skills.length - 1 && (
                            <span className="text-[#A67F54]/40 mx-2 select-none">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
