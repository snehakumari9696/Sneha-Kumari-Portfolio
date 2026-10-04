import React from 'react';
import { X, Printer, ExternalLink } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playChime(660);
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-neutral-900 rounded-xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col animate-in zoom-in-95 duration-200 print:max-h-none print:shadow-none print:rounded-none print:w-full print:max-w-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3 bg-[#FAF7F2] border-b border-[#A67F54]/25 shrink-0 print:hidden select-none">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3C2317]">
            <span className="font-mono">SNEHA_KUMARI_RESUME.pdf</span>
            <span className="text-[#8B653B] font-normal hidden sm:inline">· Official 1-Page Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              data-cursor="PRINT"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#A67F54]/40 hover:bg-[#F0EBE1] text-xs font-semibold text-[#3C2317] transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-[#A67F54]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                soundManager.playSoftTick();
                onClose();
              }}
              data-cursor="CLOSE"
              className="p-1.5 rounded-full hover:bg-black/5 text-[#3C2317] transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet (Exact 1:1 Layout of Official Resume) */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-4 font-sans text-neutral-900 bg-white text-[11px] sm:text-[12px] md:text-[12.5px] leading-snug print:p-0 print:overflow-visible">
          {/* HEADER */}
          <div className="text-center space-y-1 pb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-black font-sans">
              SNEHA KUMARI
            </h1>
            <p className="text-xs sm:text-[12px] text-neutral-800 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <span>Lucknow, India</span>
              <span className="text-neutral-400">|</span>
              <a href="tel:+918090542701" className="hover:underline text-neutral-900">
                +91 8090542701
              </a>
              <span className="text-neutral-400">|</span>
              <a href="mailto:kumarisneha3824@gmail.com" className="hover:underline text-neutral-900">
                kumarisneha3824@gmail.com
              </a>
              <span className="text-neutral-400">|</span>
              <a
                href="https://linkedin.com/in/snehakumari-sk"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-neutral-900 inline-flex items-center gap-0.5"
              >
                linkedin.com/in/snehakumari-sk
                <ExternalLink className="w-2.5 h-2.5 opacity-60 print:hidden" />
              </a>
              <span className="text-neutral-400">|</span>
              <a
                href="https://github.com/snehakumari9696"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-neutral-900 inline-flex items-center gap-0.5"
              >
                github.com/snehakumari9696
                <ExternalLink className="w-2.5 h-2.5 opacity-60 print:hidden" />
              </a>
            </p>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              SUMMARY
            </h2>
            <p className="text-neutral-800 text-justify leading-relaxed">
              B.Tech Computer Science student (Class of 2027) with hands-on experience building full-stack web applications with the MERN stack and Java. Strong in data structures and algorithms (NeetCode Blind 75 completed), with focus on backend architecture, REST API design, database modeling, and integrating AI/LLM APIs into applications. Seeking a Software Development Engineer Internship.
            </p>
          </div>

          {/* TECHNICAL SKILLS */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-0.5 text-neutral-900">
              <p>
                <strong>Languages:</strong> Java, JavaScript, Python, SQL
              </p>
              <p>
                <strong>Core CS:</strong> Data Structures &amp; Algorithms, Object-Oriented Design, DBMS, Operating Systems, Computer Networks, System Design (fresher level)
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js, REST API Design, Spring Security (JWT), JDBC, Socket.io / WebSockets
              </p>
              <p>
                <strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS
              </p>
              <p>
                <strong>Databases:</strong> MongoDB, MySQL
              </p>
              <p>
                <strong>AI:</strong> LLM API Integration (Claude, ChatGPT, Groq), Prompt Engineering, Generative AI
              </p>
              <p>
                <strong>Tools:</strong> Git, GitHub, Postman, IntelliJ IDEA, VS Code, Vercel, Render
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              EXPERIENCE
            </h2>
            <div className="space-y-2.5">
              {/* Role 1 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Full Stack Web Developer Intern | Omnira Cloud</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px]">Aug 2026 – Sep 2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Built web applications across client-side interfaces and backend logic using full-stack technologies.</li>
                  <li>Developed responsive UI components and integrated RESTful APIs to improve performance and user experience.</li>
                  <li>Worked with cross-functional teams on database schema design, query optimization, and cloud-backed deployments.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>MERN Stack Development Intern | GRAStech</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px]">Jun 2026 – Aug 2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Built and deployed Social Voice Academy, an AI-powered coding mentor platform; owned backend architecture and MongoDB data modeling end to end.</li>
                  <li>Recognized as the top project in the cohort by supervising faculty; awarded a completion certificate.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Web Development Intern | YBI Foundation</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px]">Nov 2024 – Feb 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Contributed to frontend and backend components of a team web project; used Git/GitHub workflows to coordinate changes.</li>
                  <li>Debugged and resolved functional issues across the application stack.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              PROJECTS
            </h2>
            <div className="space-y-2.5">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Social Voice Academy – AI-Powered Coding Mentor Platform</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px] font-mono">MERN, JWT, AI API</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Built a platform with an AI coding mentor, automated code review, and personalized learning roadmaps based on user skill level and goals.</li>
                  <li>Developed real-time collaborative &quot;Dev Rooms&quot;, a coding-challenges module, and a progress dashboard with achievements and badges using React and MongoDB.</li>
                  <li>Implemented JWT-based authentication and user profiles; integrated an external AI API for mentor chat and code review.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>SyntronAI – AI-Powered Codebase Intelligence Platform</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px] font-mono">React, Node.js, MongoDB, Groq</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Built a full-stack platform for automated code review, code analysis, repository understanding, and developer assistance.</li>
                  <li>Implemented AST parsing, dependency analysis, impact analysis, and blast-radius detection to assess how code changes affect a codebase.</li>
                  <li>Integrated Groq AI APIs for contextual codebase chat and code-review feedback; built REST APIs and MongoDB models; deployed on Vercel and Render.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Real-Time Chat Application with AI Assistant</span>
                  <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px] font-mono">MERN, Socket.io, JWT</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-800 text-[11px] sm:text-[12px] mt-0.5">
                  <li>Built a real-time messaging system with Socket.io/WebSockets for one-to-one and group chat, with online/offline presence and timestamped delivery.</li>
                  <li>Designed REST APIs in Node.js/Express with a MongoDB/Mongoose layer for message history; secured with JWT and bcrypt.</li>
                  <li>Integrated an external AI API to generate automated responses and conversation insights.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              EDUCATION
            </h2>
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline font-bold text-black">
                <span>B.Tech, Computer Science – Babu Banarasi Das University, Lucknow</span>
                <span className="font-normal text-neutral-700 text-[11px] sm:text-[12px]">Expected 2027</span>
              </div>
              <p className="text-neutral-800">
                <strong>Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks
              </p>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              CERTIFICATIONS
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              NeetCode Blind 75 (completed) <span className="text-neutral-400">|</span> Full Stack Web Development (MERN) – Lernovate <span className="text-neutral-400">|</span> Python – Udemy <span className="text-neutral-400">|</span> Maker Fellowship – Mindler <span className="text-neutral-400">|</span> SQL Database Programming – Giraffe Academy (Cursa) <span className="text-neutral-400">|</span> Java OOP – Caleb Curry (Cursa)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
