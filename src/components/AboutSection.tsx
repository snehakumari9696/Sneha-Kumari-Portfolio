import React, { useState } from 'react';
import { CircuitOverlay } from './CircuitOverlay';
import { Sparkles, Terminal, RefreshCw, CheckCircle2, Play } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  // Chart data: Commits vs Bugs over the years
  const chartData = [
    { year: '2021', commits: 15, bugs: 6, commitVal: '140 commits', bugVal: '35 bugs' },
    { year: '2022', commits: 24, bugs: 5, commitVal: '210 commits', bugVal: '22 bugs' },
    { year: '2023', commits: 38, bugs: 4, commitVal: '380 commits', bugVal: '12 bugs' },
    { year: '2024', commits: 52, bugs: 3, commitVal: '520 commits', bugVal: '8 bugs' },
    { year: '2025', commits: 70, bugs: 2, commitVal: '750 commits', bugVal: '4 bugs' },
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimized(true);
    }, 1200);
  };

  return (
    <div className="relative w-full py-6 sm:py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Header Block matching Reference Screenshot */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative z-10 px-4">
        
        {/* Main Title with Glowing </> Icon Badge */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
          Build{' '}
          {/* Neon Glow Code Badge */}
          <span className="inline-flex items-center justify-center px-4 py-1 mx-2 rounded-2xl bg-[#17051a]/90 border border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.4)] text-cyan-300 font-mono text-3xl sm:text-5xl font-extrabold align-middle relative group hover:border-pink-400 transition-colors">
            <span className="text-glow-pink font-bold">&lt;/&gt;</span>
          </span>{' '}
          software <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-cyan-300 text-glow-pink">
            like never before
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-xl text-pink-100/80 max-w-2xl leading-relaxed font-normal">
          Less bugs. More breakthroughs. Streamline development, cut the noise, and focus on what matters: building great software.
        </p>
      </div>

      {/* 2. Professional Experience, Training & Education Cards */}
      <div className="relative z-10 max-w-5xl mx-auto mb-10 grid lg:grid-cols-12 gap-6">
        
        {/* Experience Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Current Internship: Omnira Cloud */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/40 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.25)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-pink-500/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-pink-500/20">
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
                Current Role • Internship
              </span>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40 font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                Present
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-0.5">Full Stack Web Developer Intern</h3>
            <p className="text-sm font-semibold text-cyan-300 mb-3">Omnira Cloud</p>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-pink-100/80 leading-relaxed list-disc list-inside">
              <li>Building scalable web applications using full stack technologies, managing both client-side interfaces and backend logic.</li>
              <li>Developing responsive UI components and integrating RESTful APIs to improve application performance and user experience.</li>
              <li>Collaborating with cross-functional teams to design database schemas, optimize queries, and deploy cloud-backed services.</li>
            </ul>
          </div>

          {/* Internship 2: GRAStech */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/35 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.2)]">
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-pink-500/20">
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ff0080]" />
                MERN Stack Internship
              </span>
              <span className="text-[11px] font-mono text-pink-300 bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-500/30 font-semibold">
                Jun 2025 – Aug 2025
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-0.5">MERN Stack Development Intern</h3>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-sm font-semibold text-cyan-300">GRAStech</p>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                Top Cohort Project
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-pink-100/80 leading-relaxed list-disc list-inside">
              <li>Built and deployed <strong className="text-white font-medium">Social Voice Academy</strong>, a full-stack AI-powered coding mentor platform combining an AI coding mentor, automated code review, and personalized roadmaps.</li>
              <li>Implemented real-time collaborative "Dev Rooms" for peer discussion, coding-challenges module, and progress dashboard using React and MongoDB.</li>
              <li>Designed secure JWT-based authentication, user profile management, and desktop/mobile responsive UI.</li>
              <li>Owned backend architecture and MongoDB data modeling end-to-end, integrating AI APIs for mentor chat; recognized as the top project in the cohort by the supervising professor.</li>
            </ul>
          </div>

          {/* Internship 3: YBI Foundation */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/35 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.2)]">
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-pink-500/20">
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ff0080]" />
                Web Dev Internship
              </span>
              <span className="text-[11px] font-mono text-pink-300 bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-500/30 font-semibold">
                Nov 2024 – Feb 2025
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-0.5">Web Development Intern</h3>
            <p className="text-sm font-semibold text-cyan-300 mb-3">YBI Foundation</p>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-pink-100/80 leading-relaxed list-disc list-inside">
              <li>Contributed to the development of web-based digital solutions as part of a collaborative project team across frontend and backend.</li>
              <li>Applied Git/GitHub version control workflows in a team setting to manage code changes and coordinate contributions.</li>
              <li>Debugged and resolved functional issues across the application stack, strengthening root-cause analysis.</li>
              <li>Gained practical exposure to software development lifecycle (SDLC) practices and frontend-backend integration.</li>
            </ul>
          </div>

          {/* Training: Lernovate Technologies */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/35 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.2)]">
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-pink-500/20">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                Technical Training
              </span>
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                Certificate Awarded
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-0.5">Full Stack Web Development Training</h3>
            <p className="text-sm font-semibold text-cyan-300 mb-3">Lernovate (MERN Stack)</p>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-pink-100/80 leading-relaxed list-disc list-inside">
              <li>Project-based training bridging academic coursework with industry-oriented full-stack development practices.</li>
              <li>Engineered scalable architectures with React.js, Node.js, Express.js, and MongoDB.</li>
              <li>Implemented secure JWT authentication, RESTful APIs, and relational/document database schemas.</li>
            </ul>
          </div>

        </div>

        {/* Education & CS Fundamentals & Achievements Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Education Card */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/35 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-pink-500/20">
                <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ff0080]" />
                  Education
                </span>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-semibold">
                  Expected: 2027
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-1">Bachelor of Technology (B.Tech)</h3>
              <p className="text-sm font-semibold text-cyan-300 mb-1">Computer Science & Engineering</p>
              <p className="text-xs text-pink-200/70 mb-5">Babu Banarasi Das University, Lucknow</p>

              <div>
                <span className="text-xs font-mono text-pink-300 block mb-3 font-semibold">CORE CS COURSEWORK:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming (Java)',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Complexity Analysis',
                    'Software Engineering'
                  ].map((course, idx) => (
                    <span key={idx} className="text-[11px] px-3 py-1.5 rounded-xl bg-pink-950/60 border border-pink-500/30 text-pink-200 font-medium">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Callout */}
            <div className="mt-6 p-4 rounded-2xl bg-[#230527]/80 border border-pink-500/25">
              <p className="text-xs text-pink-200/80 italic">
                "Solid computer science foundation with hands-on practice building distributed, real-time, and AI-enabled software systems."
              </p>
            </div>
          </div>

          {/* Achievements & Strengths Card */}
          <div className="rounded-3xl bg-[#17041a]/95 backdrop-blur-xl border border-pink-500/35 p-6 sm:p-7 shadow-[0_0_30px_rgba(255,0,128,0.2)]">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-pink-500/20">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Achievements & Strengths
              </span>
            </div>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              <div className="p-3 rounded-xl bg-[#230527]/80 border border-pink-500/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Top Project Recognition:</strong> Commended by supervising professor as the top project in the GRAStech cohort for the Social Voice Academy platform.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#230527]/80 border border-pink-500/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>End-to-End Ownership:</strong> Independently designed and delivered multiple production-style full-stack projects from schema to deployment.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#230527]/80 border border-pink-500/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span><strong>Problem-Solving:</strong> Strong analytical ability to break down ambiguous, broadly defined requirements into structured technical solutions.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#230527]/80 border border-pink-500/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>Agile Collaboration:</strong> Effective at articulating technical trade-offs (architecture, schemas, hosting) in fast-paced sprint cycles.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 3. Certifications & Key Credentials Banner */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12 rounded-3xl bg-[#17041a]/90 backdrop-blur-xl border border-pink-500/30 p-6 shadow-[0_0_30px_rgba(255,0,128,0.15)]">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-pink-500/20">
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            Certifications & Training
          </span>
          <span className="text-[11px] font-mono text-pink-300/80">6 Credentials</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: 'Full Stack Web Development Training', provider: 'Lernovate (MERN Stack)', badge: 'Industry Training' },
            { title: 'MERN Stack Internship', provider: 'GRAStech (Top Cohort Project)', badge: 'Internship' },
            { title: 'Maker Fellowship', provider: 'Mindler', badge: 'Fellowship' },
            { title: 'SQL Database Programming', provider: 'Giraffe Academy (Cursa)', badge: 'Databases' },
            { title: 'Java for Beginners', provider: 'GeeksLesson (Cursa)', badge: 'Core Java' },
            { title: 'Java Object-Oriented Programming', provider: 'Caleb Curry (Cursa)', badge: 'OOP & Architecture' }
          ].map((cert, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-[#230527]/80 border border-pink-500/20 hover:border-pink-400/50 transition-colors flex flex-col justify-between gap-2">
              <div>
                <span className="block font-bold text-xs text-white mb-0.5">{cert.title}</span>
                <span className="text-[10px] font-mono text-pink-300/80">{cert.provider}</span>
              </div>
              <span className="self-start text-[9px] font-mono px-2 py-0.5 rounded bg-pink-950/80 text-cyan-300 border border-pink-500/20">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Glowing Wireframe Mesh Globe & Analytics Window (Now placed BELOW Education & Experience) */}
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* Curved Cyber Sphere / Grid SVG Overlay behind the card */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] max-w-[900px] h-[450px] pointer-events-none opacity-45 overflow-hidden">
          <svg className="w-full h-full text-cyan-400" viewBox="0 0 800 400" fill="none">
            {/* Concentric curved latitude arcs */}
            <ellipse cx="400" cy="280" rx="380" ry="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <ellipse cx="400" cy="280" rx="320" ry="110" stroke="#e6007e" strokeWidth="1.2" opacity="0.5" />
            <ellipse cx="400" cy="280" rx="250" ry="80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <ellipse cx="400" cy="280" rx="160" ry="50" stroke="#e6007e" strokeWidth="1.5" opacity="0.7" />
            
            {/* Longitude curved lines converging to center */}
            <path d="M 20 280 Q 400 50 780 280" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
            <path d="M 80 280 Q 400 80 720 280" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
            <path d="M 150 280 Q 400 110 650 280" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
            <path d="M 230 280 Q 400 140 570 280" stroke="#ff0080" strokeWidth="1" opacity="0.6" />
            <path d="M 310 280 Q 400 180 490 280" stroke="currentColor" strokeWidth="1" opacity="0.8" />
          </svg>
          
          {/* Sphere Center Glow Flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl" />
        </div>

        {/* 3. Interactive MacOS Style Window ("Analytics") */}
        <div className="relative z-10 overflow-hidden rounded-3xl bg-[#17041a]/95 backdrop-blur-2xl border border-pink-500/40 shadow-[0_0_50px_rgba(255,0,128,0.3)]">
          <CircuitOverlay opacity={0.2} />

          {/* Window Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#1f0522]/90 border-b border-pink-500/25">
            {/* Left Window Control Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]" />
            </div>

            {/* Center Tab Title */}
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#2b072e] border border-pink-500/30 text-xs font-semibold text-pink-200">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Analytics</span>
              <span className="text-pink-400/60 ml-1 hover:text-white cursor-pointer">×</span>
            </div>

            {/* Right Status Badge */}
            <div className="flex items-center gap-2 text-xs text-pink-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">LIVE TELEMETRY</span>
            </div>
          </div>

          {/* Window Body: Analytics Chart & Code Suggestions Grid */}
          <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT SIDE: Bar Chart (Commits vs Bugs) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Legend & Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                    <span className="text-white font-semibold">Commits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-pink-500 shadow-[0_0_8px_#ff0080]" />
                    <span className="text-white font-semibold">Bugs</span>
                  </div>
                </div>

                <span className="text-xs text-pink-300/70 font-mono">
                  {activeYear ? `Hovering: ${activeYear}` : 'Hover bars for details'}
                </span>
              </div>

              {/* Bar Chart Canvas */}
              <div className="relative pt-6 pb-2 border-b border-pink-500/20">
                
                {/* Y-Axis Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] font-mono text-pink-300/40">
                  <div className="border-b border-pink-500/10 flex items-center justify-between"><span>40</span></div>
                  <div className="border-b border-pink-500/10 flex items-center justify-between"><span>30</span></div>
                  <div className="border-b border-pink-500/10 flex items-center justify-between"><span>20</span></div>
                  <div className="border-b border-pink-500/10 flex items-center justify-between"><span>10</span></div>
                  <div className="flex items-center justify-between"><span>0</span></div>
                </div>

                {/* Bars Container */}
                <div className="relative h-48 sm:h-56 flex items-end justify-between px-4 sm:px-8 z-10">
                  {chartData.map((item, idx) => {
                    const isHovered = activeYear === Number(item.year);
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveYear(Number(item.year))}
                        onMouseLeave={() => setActiveYear(null)}
                        className="flex flex-col items-center gap-2 group cursor-pointer"
                      >
                        {/* Tooltip on hover */}
                        {isHovered && (
                          <div className="absolute -top-10 bg-[#2d0733] border border-cyan-400/60 px-3 py-1 rounded-lg text-xs font-mono text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] z-30 whitespace-nowrap animate-in fade-in">
                            <span className="text-cyan-300 font-bold">{item.commitVal}</span> • <span className="text-pink-400">{item.bugVal}</span>
                          </div>
                        )}

                        {/* Dual Bar Group */}
                        <div className="flex items-end gap-1.5 sm:gap-2">
                          {/* Commits Bar (Cyan) */}
                          <div
                            style={{ height: `${item.commits * 2.8}px` }}
                            className={`w-4 sm:w-6 rounded-t-md bg-gradient-to-t from-cyan-600 via-cyan-400 to-cyan-300 transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.4)] ${
                              isHovered ? 'shadow-[0_0_20px_#00f0ff] scale-y-105' : 'group-hover:opacity-90'
                            }`}
                          />
                          {/* Bugs Bar (Pink) */}
                          <div
                            style={{ height: `${item.bugs * 2.8}px` }}
                            className={`w-4 sm:w-6 rounded-t-md bg-gradient-to-t from-pink-800 via-pink-600 to-pink-500 transition-all duration-300 shadow-[0_0_10px_rgba(255,0,128,0.4)] ${
                              isHovered ? 'shadow-[0_0_20px_#ff0080] scale-y-105' : 'group-hover:opacity-90'
                            }`}
                          />
                        </div>

                        {/* Year Label */}
                        <span className={`text-xs font-mono transition-colors ${isHovered ? 'text-cyan-300 font-bold' : 'text-pink-200/70'}`}>
                          {item.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chart Footer summary note */}
              <div className="mt-4 flex items-center justify-between text-xs text-pink-200/70">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Continuous Optimization Metric</span>
                </span>
                <span className="font-mono text-cyan-300">+94% Code Efficiency Rate</span>
              </div>
            </div>

            {/* RIGHT SIDE: Suggestions Terminal Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#1e0422]/90 border border-pink-500/30 p-5 shadow-inner">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-pink-500/20">
                  <span className="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-pink-400" />
                    Suggestions
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/60 text-pink-300 border border-pink-500/25">
                    AUTO-DIAGNOSTIC
                  </span>
                </div>

                {/* Terminal Code Lines */}
                <div className="flex flex-col gap-3 font-mono text-xs text-cyan-200/90 leading-relaxed">
                  <div className="p-2 rounded bg-[#140217] border border-pink-500/15 hover:border-cyan-400/40 transition-colors">
                    <span className="text-pink-400 font-bold">&gt;.</span> Optimize loop performance using <code className="text-cyan-300 font-semibold">async worker pipelines</code>.
                  </div>

                  <div className="p-2 rounded bg-[#140217] border border-pink-500/15 hover:border-cyan-400/40 transition-colors">
                    <span className="text-pink-400 font-bold">&gt;.</span> Consider replacing verbose handlers with <code className="text-pink-300">std::accumulate</code> pattern.
                  </div>

                  <div className="p-2 rounded bg-[#140217] border border-pink-500/15 hover:border-cyan-400/40 transition-colors">
                    <span className="text-pink-400 font-bold">&gt;.</span> You can simplify state flow with reactive signals.
                  </div>

                  <div className="p-2 rounded bg-[#140217] border border-pink-500/15 hover:border-cyan-400/40 transition-colors">
                    <span className="text-pink-400 font-bold">&gt;.</span> Memory usage improved by preallocating matrix buffer size.
                  </div>

                  {optimized && (
                    <div className="p-2 rounded bg-[#0b2622] border border-cyan-400 text-cyan-300 font-bold animate-in fade-in">
                      <span className="text-emerald-400">✓ SUCCESS:</span> Zero runtime bottlenecks detected. Production ready.
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button: Run Optimization */}
              <button
                onClick={handleOptimize}
                disabled={isOptimizing}
                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 border border-pink-400/40 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(255,0,128,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all cursor-pointer disabled:opacity-70"
              >
                {isOptimizing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-300" />
                    <span>Analyzing Code Metrics...</span>
                  </>
                ) : optimized ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Optimization Applied</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
                    <span>Run Diagnostic Optimization</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
