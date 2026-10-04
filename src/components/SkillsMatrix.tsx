import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Monitor, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const icons = [Code2, Server, Monitor, Database, Sparkles];

  return (
    <section id="skills" className="relative w-full py-28 md:py-36 bg-[#F4EFEA] text-[#3C2317] border-t border-[#A67F54]/20">
      {/* Editorial Decorative Architectural Guides */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#A67F54]/20 mb-14">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#8B653B] mb-3">
            <span className="text-[#A67F54]">04</span>
            <span>/</span>
            <span>Technical Foundations &amp; Systems Matrix</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3C2317] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Engineering Matrix.
          </h2>
          <p className="text-sm md:text-base text-[#705338] font-normal mt-2 max-w-2xl">
            From low-level data structures and object-oriented design to distributed real-time sockets and AI agent integrations.
          </p>
        </div>

        {/* Category Selector Tabs (Functional buttons with active/inactive states) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  soundManager.playSoftTick();
                  setSelectedCategory(idx);
                }}
                data-cursor="SELECT"
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-[#3C2317] text-[#FAF7F2] border-[#3C2317] shadow-md scale-[1.02]'
                    : 'bg-[#FAF7F2] text-[#5C432C] border-[#A67F54]/25 hover:border-[#8B653B]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-[#D8BA8D]' : 'text-[#8B653B]'}`} />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider">{cat.title}</h4>
                  <span className={`text-[10px] ${isSelected ? 'text-[#D8BA8D]' : 'text-[#8B653B]'}`}>
                    {cat.skills.length} competencies
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Details */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/30 p-8 sm:p-10 shadow-xs">
          <div className="pb-6 border-b border-[#A67F54]/20 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#3C2317]">
                {SKILL_CATEGORIES[selectedCategory].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#705338] mt-1">
                {SKILL_CATEGORIES[selectedCategory].description}
              </p>
            </div>
            <div className="text-xs font-mono text-[#8B653B] shrink-0">
              Proficiency Benchmark · Evaluated 2025
            </div>
          </div>

          {/* Grid of Skills (Zero-Pill Discipline: Clean typography cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                onMouseEnter={() => soundManager.playSoftTick()}
                className="p-5 rounded-xl bg-[#F4EFEA] border border-[#A67F54]/20 hover:border-[#8B653B] transition-colors group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A67F54] shrink-0" />
                    <h4 className="font-bold text-sm text-[#3C2317] group-hover:text-[#8B653B] transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  {skill.note && (
                    <p className="text-xs text-[#705338] font-mono mt-1.5 pl-6 leading-relaxed">
                      {skill.note}
                    </p>
                  )}
                </div>

                {skill.level && (
                  <span className="text-[11px] font-mono font-bold text-[#8B653B] shrink-0">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
