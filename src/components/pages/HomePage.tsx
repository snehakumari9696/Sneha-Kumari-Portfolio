import React from 'react';
import { HeroReference } from '../HeroReference';
import { ArrowRight, Terminal, Code2, Award, Sparkles } from 'lucide-react';
import { PageRoute } from '../navigation/SiteNav';
import { soundManager } from '../../utils/audio';
import { motion } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen bg-[#F4EFEA] text-[#3C2317]">
      {/* 1. EXACT UNTOUCHED LANDING HERO (Pristine picture of the girl & Sneha text) */}
      <section className="w-full h-screen min-h-screen relative">
        <HeroReference />
      </section>

      {/* 2. Editorial Statement & Motion Interactive Portals */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 border-t border-[#A67F54]/25 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#8B653B] mb-6">
              <span className="text-[#A67F54]">01</span>
              <span>/</span>
              <span>Software Development Engineer</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3C2317] tracking-tight leading-[1.08] mb-8 max-w-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Engineering scalable distributed systems &amp;{' '}
              <span className="italic font-serif font-normal text-[#8B653B]">
                intelligent codebase platforms
              </span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#5C432C] leading-relaxed"
            >
              <p>
                Computer Science undergraduate (B.Tech, Class of 2027) with hands-on experience designing and building full-stack web applications using <strong>Java, Spring Boot</strong>, and the <strong>MERN stack</strong>.
              </p>
              <p>
                Strong foundations in <strong>data structures, algorithms</strong>, object-oriented design, operating systems, and distributed real-time channels via WebSockets.
              </p>
              <p>
                Recipient of the <strong>#1 Top Project Award</strong> in the GRAStech cohort, <strong>Adobe Creative Hackathon Certificate</strong>, and <strong>AI Innovation Hackathon Certificate</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="md:col-span-5 bg-[#F4EFEA] p-6 sm:p-8 rounded-2xl border border-[#A67F54]/30 shadow-xs space-y-4 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#A67F54]/20 text-xs font-mono text-[#8B653B]">
                <span>Status Benchmark</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Available for Jobs
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#3C2317]">
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#A67F54] shrink-0" />
                  <span>#1 Top Project Award in Cohort (Social Voice Academy)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-[#A67F54] shrink-0" />
                  <span>Data Structures &amp; Algorithms · System Design</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#A67F54] shrink-0" />
                  <span>Adobe &amp; AI Innovation Hackathon Winner</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-[#A67F54] shrink-0" />
                  <span>Full Stack Intern @ Omnira Cloud (15 Aug – 15 Sept 2026)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Page Jump Links with Spring Motion */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#A67F54]/20">
            <motion.button
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                soundManager.playSoftTick();
                onNavigate('projects');
              }}
              data-cursor="PROJECTS"
              className="p-6 rounded-xl bg-[#F4EFEA] border border-[#A67F54]/25 hover:border-[#3C2317] hover:bg-[#F0EBE1] transition-all text-left group cursor-pointer shadow-xs hover:shadow-md"
            >
              <span className="text-[11px] font-mono text-[#8B653B] uppercase tracking-wider block mb-1">
                Explore Visual Gallery
              </span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#3C2317]">Projects &amp; Systems</span>
                <ArrowRight className="w-4 h-4 text-[#A67F54] transition-transform group-hover:translate-x-1.5" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                soundManager.playSoftTick();
                onNavigate('experience');
              }}
              data-cursor="TIMELINE"
              className="p-6 rounded-xl bg-[#F4EFEA] border border-[#A67F54]/25 hover:border-[#3C2317] hover:bg-[#F0EBE1] transition-all text-left group cursor-pointer shadow-xs hover:shadow-md"
            >
              <span className="text-[11px] font-mono text-[#8B653B] uppercase tracking-wider block mb-1">
                Track Career
              </span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#3C2317]">Experience &amp; Internships</span>
                <ArrowRight className="w-4 h-4 text-[#A67F54] transition-transform group-hover:translate-x-1.5" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                soundManager.playSoftTick();
                onNavigate('contact');
              }}
              data-cursor="INQUIRE"
              className="p-6 rounded-xl bg-[#3C2317] text-[#FAF7F2] transition-all text-left group cursor-pointer hover:bg-[#5C432C] shadow-md hover:shadow-lg"
            >
              <span className="text-[11px] font-mono text-[#D8BA8D] uppercase tracking-wider block mb-1">
                Direct Inquiries
              </span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Contact &amp; Connect</span>
                <ArrowRight className="w-4 h-4 text-[#D8BA8D] transition-transform group-hover:translate-x-1.5" />
              </div>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
