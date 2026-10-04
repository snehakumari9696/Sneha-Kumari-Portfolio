import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Cpu, Network, Sparkles, ArrowDownRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative w-full py-28 md:py-36 bg-[#F4EFEA] text-[#3C2317] border-t border-[#A67F54]/20 overflow-hidden"
    >
      {/* Editorial Decorative Architectural Guides */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#8B653B] mb-8">
          <span className="text-[#A67F54]">01</span>
          <span>/</span>
          <span>Statement &amp; Engineering Philosophy</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="mb-14 max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-[#3C2317]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Building distributed, intelligent web systems where rigorous{' '}
            <span className="italic font-serif font-normal text-[#8B653B]">
              computer science fundamentals
            </span>{' '}
            meet human-centric clarity.
          </h2>
        </div>

        {/* Two-Column Deep Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-[#5C432C] text-base md:text-lg leading-relaxed font-normal">
            <p>
              I am a Computer Science undergraduate (B.Tech, Class of 2027 at Babu Banarasi Das University) 
              specializing in architecting full-stack, multi-tiered software systems with 
              <strong> Java, Spring Boot</strong>, and the <strong>MERN stack</strong>.
            </p>
            <p>
              My approach blends deep theoretical foundations—reinforced through completing the 
              <strong> NeetCode Blind 75</strong>—with pragmatic software craftsmanship: designing 
              normalized relational databases in MySQL, optimizing document models in MongoDB, and 
              broadcasting low-latency real-time states via WebSockets.
            </p>
            <p>
              Beyond traditional CRUD architectures, I engineer AI-native platforms: building 
              AST parsers for codebase blast-radius detection, integrating Groq &amp; Claude APIs for 
              automated code intelligence, and deploying resilient production web services.
            </p>
          </div>

          {/* Quick Stat / Capability Matrix */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-2xl border border-[#A67F54]/30 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#A67F54]/20">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B653B]">
                Core Architecture Vector
              </span>
              <span className="text-xs font-mono text-[#A67F54]">2024 — 2027</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Terminal,
                  title: 'Data Structures & Algorithms',
                  detail: 'Completed NeetCode Blind 75 · Daily practice on GFG & LeetCode',
                },
                {
                  icon: Cpu,
                  title: 'Full-Stack & Systems Architecture',
                  detail: 'Java, Spring Boot, Spring Security (JWT), Node.js, Express.js, React',
                },
                {
                  icon: Network,
                  title: 'Real-Time & Distributed Channels',
                  detail: 'Socket.io, WebSockets, multi-tier client-server state sync',
                },
                {
                  icon: Sparkles,
                  title: 'Agentic & Generative AI Systems',
                  detail: 'AST static analysis, Groq AI, Claude & ChatGPT API integration',
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playSoftTick()}
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F0EBE1] transition-colors duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-[#F4EFEA] border border-[#A67F54]/30 text-[#8B653B] group-hover:text-[#3C2317] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#3C2317]">{item.title}</h4>
                      <p className="text-xs text-[#705338] leading-relaxed mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#A67F54]/20 flex items-center justify-between text-xs text-[#8B653B]">
              <span>Based in {PERSONAL_INFO.location}</span>
              <a
                href="#contact"
                className="font-semibold text-[#3C2317] hover:text-[#A67F54] transition-colors inline-flex items-center gap-1"
              >
                Inquire <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
