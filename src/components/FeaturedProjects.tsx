import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, LayoutGrid, ListFilter, Code } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'cards' | 'index'>('cards');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Systems', 'Full Stack', 'Machine Learning'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="relative w-full py-28 md:py-36 bg-[#F4EFEA] text-[#3C2317]">
      {/* Editorial Decorative Architectural Guides */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#A67F54]/20 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#8B653B] mb-3">
              <span className="text-[#A67F54]">02</span>
              <span>/</span>
              <span>Selected Works &amp; Code Intelligence</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3C2317] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Architected for scale.
            </h2>
          </div>

          {/* Interactive Controls Bar: Categories & View Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Functional Category Filter Buttons */}
            <div className="flex items-center p-1 bg-[#FAF7F2] rounded-xl border border-[#A67F54]/25 shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundManager.playSoftTick();
                    setActiveCategory(cat);
                  }}
                  data-cursor="FILTER"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#3C2317] text-[#FAF7F2] shadow-xs'
                      : 'text-[#8B653B] hover:text-[#3C2317]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-[#FAF7F2] rounded-xl border border-[#A67F54]/25 shadow-2xs">
              <button
                onClick={() => {
                  soundManager.playSoftTick();
                  setViewMode('cards');
                }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-[#3C2317] text-[#FAF7F2]'
                    : 'text-[#8B653B] hover:text-[#3C2317]'
                }`}
                title="Grid Card View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundManager.playSoftTick();
                  setViewMode('index');
                }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'index'
                    ? 'bg-[#3C2317] text-[#FAF7F2]'
                    : 'text-[#8B653B] hover:text-[#3C2317]'
                }`}
                title="Editorial Table Index"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: EDITORIAL CARD SHOWCASE */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {filteredProjects.map((project, index) => {
              const isLead = index === 0;
              return (
                <article
                  key={project.id}
                  onClick={() => {
                    soundManager.playChime(600);
                    onSelectProject(project);
                  }}
                  onMouseEnter={() => {
                    soundManager.playSoftTick();
                    setHoveredProject(project);
                  }}
                  onMouseLeave={() => setHoveredProject(null)}
                  data-cursor="CASE STUDY"
                  className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] border border-[#A67F54]/25 hover:border-[#3C2317] transition-all duration-300 shadow-2xs hover:shadow-lg cursor-pointer overflow-hidden ${
                    isLead && activeCategory === 'All' ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Subtle Top Metallic Accent Hairline */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#A67F54]/30 to-transparent group-hover:via-[#A67F54] transition-all duration-500" />

                  {/* Visual Project Image Container with Motion Zoom */}
                  {project.image && (
                    <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-[#A67F54]/25 shadow-inner relative group-hover:border-[#3C2317]/50 transition-colors">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-xs text-[#FAF7F2] px-2.5 py-1 rounded-sm border border-white/10">
                        {project.category}
                      </div>
                    </div>
                  )}

                  {/* Header / Meta Row (Zero-pill discipline) */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8B653B] font-mono mb-4">
                      <div className="flex items-center gap-2">
                        <span>{project.category}</span>
                        <span>·</span>
                        <span>{project.period}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-[#A67F54]/30 group-hover:border-[#3C2317] group-hover:bg-[#3C2317] group-hover:text-[#FAF7F2] flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-extrabold text-[#3C2317] tracking-tight group-hover:text-[#8B653B] transition-colors duration-200 ${
                        isLead && activeCategory === 'All'
                          ? 'text-2xl sm:text-3xl md:text-4xl mb-2'
                          : 'text-xl sm:text-2xl mb-1.5'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-[#705338] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Primary Highlight Note */}
                    {project.highlight && (
                      <div className="mb-6 flex items-start gap-2 text-xs font-semibold text-[#8B653B] bg-[#F0EBE1] p-3 rounded-lg border border-[#A67F54]/20">
                        <Sparkles className="w-3.5 h-3.5 text-[#A67F54] shrink-0 mt-0.5" />
                        <span>{project.highlight}</span>
                      </div>
                    )}

                    {/* Description Paragraph */}
                    <p className="text-sm text-[#5C432C] leading-relaxed line-clamp-3 mb-6">
                      {project.description[0]}
                    </p>
                  </div>

                  {/* Footer Stack / Architecture Pills (Clean text with separators) */}
                  <div className="pt-6 border-t border-[#A67F54]/15 mt-auto">
                    <div className="flex flex-wrap items-center gap-y-1 text-xs text-[#705338] font-mono">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <React.Fragment key={i}>
                          <span className="hover:text-[#3C2317] transition-colors">{tech}</span>
                          {i < Math.min(project.technologies.length, 5) - 1 && (
                            <span className="text-[#A67F54]/40 mx-2 select-none">/</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[#A67F54] font-semibold ml-2">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: INTERACTIVE EDITORIAL RESUME INDEX TABLE */}
        {viewMode === 'index' && (
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/25 shadow-xs overflow-hidden divide-y divide-[#A67F54]/15">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-6 sm:px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#8B653B] bg-[#F4EFEA]">
              <div className="col-span-6 sm:col-span-5">Project Name &amp; Role</div>
              <div className="hidden sm:block sm:col-span-3">Core Stack</div>
              <div className="col-span-4 sm:col-span-3">Category &amp; Period</div>
              <div className="col-span-2 sm:col-span-1 text-right">Inspect</div>
            </div>

            {/* Project Rows */}
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  soundManager.playChime(620);
                  onSelectProject(project);
                }}
                onMouseEnter={() => {
                  soundManager.playSoftTick();
                  setHoveredProject(project);
                }}
                data-cursor="INSPECT"
                className="grid grid-cols-12 px-6 sm:px-8 py-5 items-center hover:bg-[#F0EBE1] transition-colors duration-200 cursor-pointer group"
              >
                {/* Title & Subtitle */}
                <div className="col-span-6 sm:col-span-5 pr-4">
                  <h4 className="font-bold text-sm sm:text-base text-[#3C2317] group-hover:text-[#8B653B] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#705338] truncate">{project.subtitle}</p>
                </div>

                {/* Tech Stack (Zero-pill text) */}
                <div className="hidden sm:block sm:col-span-3 text-xs text-[#5C432C] font-mono truncate pr-4">
                  {project.technologies.slice(0, 3).join(' / ')}
                </div>

                {/* Category & Date */}
                <div className="col-span-4 sm:col-span-3 text-xs text-[#8B653B] font-mono">
                  <div>{project.category}</div>
                  <div className="text-[10px] text-[#A67F54]">{project.period}</div>
                </div>

                {/* Trigger Arrow */}
                <div className="col-span-2 sm:col-span-1 flex justify-end">
                  <div className="w-7 h-7 rounded-full border border-[#A67F54]/30 group-hover:border-[#3C2317] group-hover:bg-[#3C2317] group-hover:text-[#FAF7F2] flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
