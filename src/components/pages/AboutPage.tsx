import React from 'react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../../data/portfolioData';
import { SkillsMatrix } from '../SkillsMatrix';
import { GraduationCap, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 bg-[#F4EFEA] text-[#3C2317]">
      {/* Editorial Profile Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 mb-20">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#8B653B] mb-4">
          <span className="text-[#A67F54]">03</span>
          <span>/</span>
          <span>Engineering Biography &amp; Foundations</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3C2317] tracking-tight mb-8"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          About Sneha Kumari.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5C432C] leading-relaxed">
            <p>
              I am a <strong>Computer Science undergraduate (B.Tech, Class of 2027)</strong> at Babu Banarasi Das University, Lucknow, with hands-on experience designing and building full-stack, multi-tiered web applications using <strong>Java, Spring Boot</strong>, and the <strong>MERN stack</strong>.
            </p>
            <p>
              My engineering approach is grounded in strong core CS fundamentals: data structures, algorithms, object-oriented design, operating systems, and database management systems, reinforced through consistent problem-solving and software architecture practice.
            </p>
            <p>
              I specialize in independently scoping, architecting, and shipping end-to-end software solutions—from RESTful API and relational database design to real-time WebSocket communication and modern AI API integrations (Claude, ChatGPT, Groq).
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-2xl border border-[#A67F54]/30 shadow-xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-[#A67F54]/20">
              <GraduationCap className="w-5 h-5 text-[#A67F54]" />
              <div>
                <h3 className="font-bold text-sm text-[#3C2317]">{EDUCATION.degree}</h3>
                <p className="text-xs text-[#8B653B]">{EDUCATION.institution}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#5C432C] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#8B653B]">Expected Graduation:</span>
                <span className="font-bold text-[#3C2317]">2027</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8B653B]">Location:</span>
                <span className="font-bold text-[#3C2317]">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8B653B]">Core Focus:</span>
                <span className="font-bold text-emerald-800">Full-Stack MERN &amp; Java</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <SkillsMatrix />

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3C2317] mb-8 tracking-tight">
          Certifications &amp; Industry Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#FAF7F2] border border-[#A67F54]/25 hover:border-[#3C2317] transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-[#3C2317]">
                <Award className="w-4 h-4 text-[#A67F54] shrink-0" />
                <span>{cert.title}</span>
              </div>
              <p className="text-xs font-mono text-[#8B653B] mb-2">{cert.issuer}</p>
              <p className="text-xs text-[#5C432C] leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
