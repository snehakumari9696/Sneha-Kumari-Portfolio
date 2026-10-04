import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { PROJECTS } from '../../data/portfolioData';
import { ArrowUpRight, Terminal, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface MagneticProjectListProps {
  onSelectProject: (project: Project) => void;
}

// Project preview graphical themes and mock screenshot representations
const PREVIEW_ASSETS: Record<
  string,
  {
    gradient: string;
    codeSnippet: string;
    tagline: string;
    accent: string;
  }
> = {
  'syntron-ai': {
    gradient: 'from-[#3C2317] via-[#2A180E] to-[#120B07]',
    codeSnippet: 'const ast = parseTypeScriptAST(fileDiff);\nblastRadius.computeAffectedNodes();',
    tagline: 'AST Dependency & Blast-Radius Engine',
    accent: '#D8BA8D',
  },
  'social-voice-academy': {
    gradient: 'from-[#2C1E14] via-[#1E120A] to-[#0D0805]',
    codeSnippet: 'io.of("/dev-rooms").on("connection");\nsocket.broadcast.emit("code-sync");',
    tagline: 'Real-Time Dev Rooms · #1 Project Award',
    accent: '#FBBF24',
  },
  'real-time-chat': {
    gradient: 'from-[#1C2024] via-[#12161A] to-[#0A0D10]',
    codeSnippet: 'socket.on("presence-heartbeat");\nawait db.messages.insertMany(history);',
    tagline: 'High-Concurrency Socket.io Messaging',
    accent: '#60A5FA',
  },
  ambaram: {
    gradient: 'from-[#1F2937] via-[#111827] to-[#030712]',
    codeSnippet: 'df = pd.read_csv("weather_vectors.csv")\nscaler = StandardScaler().fit(df)',
    tagline: 'Python ML Data Cleaning & Weather Pipeline',
    accent: '#34D399',
  },
  'ecommerce-platform': {
    gradient: 'from-[#331E12] via-[#24130A] to-[#140803]',
    codeSnippet: '@Service\npublic class OrderService {\n  @Transactional checkout();\n}',
    tagline: 'Spring Boot REST & Normalized SQL Schema',
    accent: '#F97316',
  },
  'ai-learning-app': {
    gradient: 'from-[#261E33] via-[#191324] to-[#0D0814]',
    codeSnippet: 'export const LearningConsole: React.FC = () => {\n  return <StreamViewer />;\n}',
    tagline: 'HCL Hackathon Finalist Interface',
    accent: '#C084FC',
  },
  'mental-health-tracker': {
    gradient: 'from-[#1E2824] via-[#111916] to-[#070D0A]',
    codeSnippet: 'db.moods.aggregate([\n  { $match: { userId: id } },\n  { $group: { avg: "$val" } }\n])',
    tagline: 'Longitudinal Trend & Mood Analytics',
    accent: '#4ADE80',
  },
};

export const MagneticProjectList: React.FC<MagneticProjectListProps> = ({ onSelectProject }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isFanned, setIsFanned] = useState(false);

  // Raw cursor mouse position
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  /**
   * Framer Motion Springs for Magnetic Cursor Following
   * Physics Values:
   * stiffness: 280 -> responsive springiness without sluggishness
   * damping: 24   -> suppresses excessive oscillating overshoots
   */
  const springConfig = { stiffness: 280, damping: 24 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#170E08] text-[#FAF7F2] overflow-hidden select-none">
      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#D8BA8D] mb-3">
              <span>Section 02</span>
              <span>/</span>
              <span>Magnetic Hover Interaction Engine</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Featured Projects.
            </h2>
          </div>

          <div className="text-xs font-mono text-white/50 max-w-xs">
            Hover any project to activate the magnetic cursor preview window with stacked screenshot fans.
          </div>
        </div>

        {/* Vertical Project List with Magnetic Hover Triggers */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {PROJECTS.map((project, idx) => {
            const isHovered = activeProject?.id === project.id;
            const indexFormatted = String(idx + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.id}
                onMouseEnter={() => {
                  soundManager.playSoftTick();
                  setActiveProject(project);
                  setIsFanned(true);
                }}
                onMouseLeave={() => {
                  setActiveProject(null);
                  setIsFanned(false);
                }}
                onClick={() => {
                  soundManager.playChime(660);
                  onSelectProject(project);
                }}
                className="group relative py-8 sm:py-10 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 hover:bg-white/5 cursor-pointer"
                data-cursor="INSPECT"
              >
                {/* Left: Index + Project Title + Brief Summary */}
                <div className="flex items-start gap-6 md:gap-8 max-w-2xl">
                  <span className="font-mono text-xs sm:text-sm text-[#D8BA8D]/60 mt-1 shrink-0">
                    {indexFormatted}
                  </span>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#D8BA8D] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.subtitle} — {project.highlight}
                    </p>
                  </div>
                </div>

                {/* Right: Tech Stack Tags (#REACT, #DOCKER, #AWS) + Action Icon */}
                <div className="flex items-center gap-6 justify-between md:justify-end shrink-0 pl-12 md:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.technologies.slice(0, 3).map((tag, tIdx) => {
                      const formattedTag = `#${tag.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`;
                      return (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono tracking-wider text-[#D8BA8D] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md group-hover:border-[#D8BA8D]/50 transition-colors"
                        >
                          {formattedTag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#D8BA8D] group-hover:bg-[#D8BA8D] group-hover:text-[#120B07] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Floating Magnetic Hover Preview Window */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            style={{
              left: smoothX,
              top: smoothY,
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 60,
              x: 24, // Slight offset to right of cursor
              y: -140, // Centered vertically relative to cursor
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                // Spring entrance physics per prompt specs
                type: 'spring',
                stiffness: 300,
                damping: 25,
              },
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
              transition: { duration: 0.15, ease: 'easeOut' },
            }}
            className="hidden md:block w-80 h-96 perspective-[1200px]"
          >
            {/* Stacked Screenshot Fan Container */}
            <div className="relative w-full h-full">
              {/* Back Card 1: Rotates Left and fans out */}
              <motion.div
                animate={
                  isFanned
                    ? { rotate: -9, x: -20, y: 14, scale: 0.93 }
                    : { rotate: -4, x: -6, y: 6, scale: 0.96 }
                }
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute inset-0 rounded-2xl bg-[#170E08] border border-white/15 shadow-2xl p-3 overflow-hidden opacity-70 backdrop-blur-md"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative opacity-50">
                  {activeProject.image && (
                    <img
                      src={activeProject.image}
                      alt="Thumbnail Layer"
                      className="w-full h-full object-cover filter contrast-125 brightness-50"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#A67F54]/20 mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Back Card 2: Rotates Right and fans out */}
              <motion.div
                animate={
                  isFanned
                    ? { rotate: 8, x: 22, y: 10, scale: 0.96 }
                    : { rotate: 3, x: 6, y: 4, scale: 0.98 }
                }
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute inset-0 rounded-2xl bg-[#22150E] border border-[#D8BA8D]/40 shadow-2xl p-3.5 overflow-hidden opacity-90 backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#D8BA8D] mb-2 pb-1.5 border-b border-white/10">
                  <span className="flex items-center gap-1 font-bold">
                    <Layers className="w-3 h-3" /> Architecture Mockup
                  </span>
                  <span>UI Spec</span>
                </div>
                <div className="w-full h-36 rounded-lg overflow-hidden border border-white/10 relative">
                  {activeProject.image && (
                    <img
                      src={activeProject.image}
                      alt="Architecture Mockup"
                      className="w-full h-full object-cover filter contrast-110"
                    />
                  )}
                </div>
              </motion.div>

              {/* Main Front Card: High-Resolution Visual Project Showcase */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-[#1E120A] border border-white/30 shadow-2xl p-4 flex flex-col justify-between overflow-hidden backdrop-blur-2xl"
              >
                {/* Header Window Bar */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D8BA8D] animate-pulse" />
                      <span className="text-[12px] font-mono font-bold text-white uppercase tracking-wider truncate max-w-[180px]">
                        {activeProject.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                      ● LIVE MOCKUP
                    </span>
                  </div>

                  {/* Visual Project Image Container */}
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-white/20 shadow-inner relative mb-3 group/img">
                    {activeProject.image ? (
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 scale-100 group-hover/img:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#3C2317] flex items-center justify-center text-xs font-mono text-[#D8BA8D]">
                        Visual Architecture Preview
                      </div>
                    )}
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-white/90">
                      <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-white/10">
                        {activeProject.category}
                      </span>
                      <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-white/10 text-[#D8BA8D]">
                        {activeProject.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/90 line-clamp-2 leading-relaxed font-medium">
                    {activeProject.highlight || activeProject.subtitle}
                  </p>
                </div>

                {/* Footer Tagline */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="text-[#D8BA8D] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D8BA8D]" /> Click to inspect case study
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
