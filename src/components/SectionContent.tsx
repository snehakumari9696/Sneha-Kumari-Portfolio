import React, { useState } from 'react';
import { NavTab } from '../types';
import { CircuitOverlay } from './CircuitOverlay';
import { AboutSection } from './AboutSection';
import { Code, ExternalLink, Mail, Phone, MapPin, Linkedin, Sparkles, CheckCircle2, Copy, Check, Send, Server, Database, Cpu, Wrench, Binary, Bot, Award } from 'lucide-react';

interface SectionContentProps {
  activeTab: NavTab;
  onOpenContact: () => void;
  onViewWork: () => void;
}

export const SectionContent: React.FC<SectionContentProps> = ({ activeTab }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [msgForm, setMsgForm] = useState({ name: '', email: '', message: '' });

  if (activeTab === 'Home') return null;

  if (activeTab === 'About') {
    return <AboutSection />;
  }

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setMsgForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const allProjects = [
    {
      id: 'social-voice-academy',
      title: 'Social Voice Academy — AI-Powered Coding Mentor Platform',
      category: 'Full Stack & AI',
      badge: 'TOP COHORT PROJECT',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      recognition: 'Recognized as Top Project in Cohort by Supervising Faculty',
      tech: ['MERN Stack', 'React.js', 'MongoDB', 'JWT', 'AI API Integration', 'WebSockets'],
      bullets: [
        'Designed and built an AI-powered coding mentor platform offering personalized learning roadmaps, automated code review, and skill-based guidance tailored to each user’s level and goals.',
        'Developed real-time collaborative "Dev Rooms" using React and MongoDB for peer discussion and live coding practice, alongside a coding-challenges module and a progress-tracking dashboard with an achievement/badge system.',
        'Owned backend architecture and MongoDB data modeling end-to-end, and implemented secure JWT-based authentication and user profile management.',
        'Integrated an external AI API to power mentor chat and automated code-review features; deployed the platform and recognized as the top project in the cohort by supervising faculty.'
      ]
    },
    {
      id: 'ambaram-weather',
      title: 'Ambaram — AI Weather Prediction App',
      category: 'Data & ML',
      badge: 'AI / DATA CONTRIBUTOR',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
      role: 'AI / Data Contributor',
      tech: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Git', 'GitHub'],
      bullets: [
        'Collected and aggregated raw historical weather datasets for machine learning model training.',
        'Cleaned, preprocessed, and formatted data using Python (Pandas, NumPy), removing noise and handling missing values to optimize model accuracy.',
        'Organized and version-controlled clean datasets on GitHub for seamless team access and ML model integration.'
      ]
    },
    {
      id: 'ai-learning-app',
      title: 'AI Learning App — HCL Hackathon',
      category: 'Full Stack & AI',
      badge: 'HACKATHON BUILD',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'AI APIs', 'Git', 'GitHub'],
      bullets: [
        'Designed and built the complete user interface using React and Tailwind CSS, creating a responsive, intuitive interface for AI-driven interactive learning.',
        'Transformed project requirements into interactive modular components, optimizing performance and user navigation flow.',
        'Connected frontend views with backend APIs to display real-time AI responses and learner data smoothly.'
      ]
    },
    {
      id: 'ecommerce-app',
      title: 'E-Commerce Web Application',
      category: 'Full Stack & AI',
      badge: 'MERN FULL STACK',
      badgeColor: 'bg-pink-950/80 text-pink-300 border-pink-500/40',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful API Design', 'JWT'],
      bullets: [
        'Designed and implemented a full-stack e-commerce platform supporting product browsing, cart management, and simulated checkout, with MongoDB collections for product, cart, and order data.',
        'Built CRUD REST endpoints with Node.js and Express.js for product and cart management, keeping the service layer modular and maintainable.',
        'Implemented a responsive product catalogue and cart UI in React, with secure user authentication and efficient API-driven data access.'
      ]
    },
    {
      id: 'realtime-chat',
      title: 'Real-Time Chat Application with AI Assistant',
      category: 'Real-Time',
      badge: 'REAL-TIME & AI',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
      tech: ['MERN Stack', 'Socket.io', 'JWT', 'MongoDB', 'Bcrypt', 'AI API Integration'],
      bullets: [
        'Built a multi-tiered, real-time messaging system using Socket.io/WebSockets to broadcast one-to-one and group messages with low latency across concurrent client connections.',
        'Designed RESTful APIs in Node.js/Express.js for user, chat, and message-history operations, backed by a MongoDB/Mongoose data layer for scalable message storage and retrieval.',
        'Implemented secure authentication and session management using JWT and bcrypt, and integrated an external AI API to generate automated responses and conversation insights.',
        'Engineered online/offline presence tracking and timestamped message delivery, reasoning about consistency and state synchronization across concurrent user sessions.'
      ]
    },
    {
      id: 'mental-health-tracker',
      title: 'Mental Health & Mood Tracker',
      category: 'Full Stack & AI',
      badge: 'MERN FULL STACK',
      badgeColor: 'bg-violet-950/80 text-violet-300 border-violet-500/40',
      tech: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'Relational Schema', 'Trend Analytics'],
      bullets: [
        'Built backend logic and a structured data model to capture, store, and query daily mood entries efficiently.',
        'Paired backend with a responsive frontend for seamless daily logging, emotional state categorization, and trend visualization.',
        'Designed optimized queries for rapid historical data retrieval and progress insights.'
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative overflow-hidden rounded-3xl bg-[#1b041a]/95 backdrop-blur-2xl border border-pink-500/40 p-6 sm:p-10 shadow-[0_0_40px_rgba(255,0,128,0.25)]">
        <CircuitOverlay opacity={0.2} />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between mb-8 border-b border-pink-500/20 pb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {activeTab}
            </h2>
          </div>
          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
            Sneha Kumari Profile
          </span>
        </div>

        {/* Tab Specific Views */}
        <div className="relative z-10">

          {/* SKILLS TAB */}
          {activeTab === 'Skills' && (
            <div className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Programming Languages',
                    icon: Code,
                    color: 'text-pink-400',
                    items: [
                      { name: 'Java', level: 'Strong (Core, OOP, Collections, Multithreading)' },
                      { name: 'JavaScript', level: 'ES6+, Async/Await, DOM, Modern JS' },
                      { name: 'SQL', level: 'Complex Queries, Joins, Indexing, Schema' },
                      { name: 'Python', level: 'Data manipulation, scripts, AI pipelines' },
                    ],
                  },
                  {
                    title: 'Core Computer Science',
                    icon: Binary,
                    color: 'text-cyan-400',
                    items: [
                      { name: 'Data Structures & Algorithms', level: 'Trees, Graphs, DP, Sorting' },
                      { name: 'Object-Oriented Design (Java)', level: 'Design Principles, Abstraction, Polymorphism' },
                      { name: 'Database Management Systems', level: 'ACID, Normalization, Transactions' },
                      { name: 'Operating Systems & Networks', level: 'Processes, Threads, Sockets, Protocols' },
                      { name: 'Complexity Analysis', level: 'Time & Space Asymptotics (Big-O)' },
                    ],
                  },
                  {
                    title: 'Backend & APIs',
                    icon: Server,
                    color: 'text-pink-300',
                    items: [
                      { name: 'Spring Boot', level: 'MVC, Dependency Injection, REST Controllers' },
                      { name: 'Spring Security & JWT', level: 'Stateless Auth, Roles, Token validation' },
                      { name: 'JDBC & Data Access', level: 'Data persistence & SQL mapping' },
                      { name: 'Node.js & Express.js', level: 'REST APIs, Middleware, Async routes' },
                      { name: 'RESTful API Design', level: 'Modular & scalable service layers' },
                    ],
                  },
                  {
                    title: 'Frontend Engineering',
                    icon: Cpu,
                    color: 'text-cyan-300',
                    items: [
                      { name: 'React.js & Next.js', level: 'Custom Hooks, State, Component Architecture' },
                      { name: 'HTML5 & CSS3', level: 'Semantic, Flexbox, CSS Grid, Animations' },
                      { name: 'Tailwind CSS', level: 'Utility-first styling & Responsive layouts' },
                    ],
                  },
                  {
                    title: 'Databases & Storage',
                    icon: Database,
                    color: 'text-pink-400',
                    items: [
                      { name: 'MySQL', level: 'Relational Schema Design, Normalization, Query Tuning' },
                      { name: 'MongoDB', level: 'NoSQL Document Store, Mongoose Schemas, Aggregations' },
                      { name: 'Relational Schema Design', level: 'Entity-Relationship models & Constraints' },
                    ],
                  },
                  {
                    title: 'Distributed / Real-Time Systems',
                    icon: Sparkles,
                    color: 'text-cyan-400',
                    items: [
                      { name: 'Socket.io & WebSockets', level: 'Real-time multi-user bidirectional communication' },
                      { name: 'Presence Tracking', level: 'Online/offline state synchronization' },
                      { name: 'Multi-tier Client-Server', level: 'Scalable distributed architectures' },
                    ],
                  },
                  {
                    title: 'AI, Data & ML Tooling',
                    icon: Bot,
                    color: 'text-pink-300',
                    items: [
                      { name: 'Generative & Agentic AI', level: 'LLM API Integration & Prompt Engineering' },
                      { name: 'AI-Powered Feature Dev', level: 'Automated code review & AI mentors' },
                      { name: 'Pandas & NumPy', level: 'Data cleaning, preprocessing for ML models' },
                    ],
                  },
                  {
                    title: 'Tools, Platforms & Practices',
                    icon: Wrench,
                    color: 'text-cyan-300',
                    items: [
                      { name: 'Git & GitHub', level: 'Branching, PRs, Version Control Workflows' },
                      { name: 'Postman & Maven', level: 'API testing, automation & build pipelines' },
                      { name: 'IntelliJ IDEA & VS Code', level: 'Full-stack IDE environments' },
                      { name: 'Vercel & Deployment', level: 'Continuous deployment & cloud hosting' },
                      { name: 'Agile & Ownership', level: 'Independent end-to-end project execution' },
                    ],
                  },
                ].map((category, idx) => {
                  const IconComp = category.icon;
                  return (
                    <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#220520]/80 border border-pink-500/30 hover:border-pink-400 transition-all flex flex-col justify-between shadow-[0_0_20px_rgba(255,0,128,0.1)]">
                      <div>
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-pink-500/20">
                          <IconComp className={`w-5 h-5 ${category.color}`} />
                          <h3 className="font-heading font-bold text-base text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                          {category.items.map((item, i) => (
                            <div key={i} className="flex flex-col gap-0.5">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="font-semibold text-white flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                                  {item.name}
                                </span>
                              </div>
                              <span className="text-[11px] font-mono text-pink-300/70 pl-5">{item.level}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'Projects' && (
            <div className="flex flex-col gap-6">
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {allProjects.map((proj) => (
                  <div key={proj.id} className="group p-6 rounded-3xl bg-[#220520]/80 border border-pink-500/30 hover:border-pink-400 transition-all flex flex-col justify-between shadow-[0_0_25px_rgba(255,0,128,0.15)] hover:shadow-[0_0_35px_rgba(255,0,128,0.3)]">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white group-hover:text-pink-200 transition-colors leading-snug">
                            {proj.title}
                          </h3>
                          {proj.role && (
                            <span className="text-xs font-semibold text-cyan-300 font-mono block mt-1">
                              Role: {proj.role}
                            </span>
                          )}
                        </div>
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold shrink-0 ${proj.badgeColor}`}>
                          {proj.badge}
                        </span>
                      </div>

                      {proj.recognition && (
                        <div className="mb-3 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{proj.recognition}</span>
                        </div>
                      )}

                      <ul className="flex flex-col gap-2 text-xs sm:text-sm text-pink-100/80 mb-5 list-disc list-inside leading-relaxed">
                        {proj.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-pink-500/20 flex flex-wrap gap-1.5">
                      {proj.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-pink-950/60 border border-pink-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'Contact' && (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Direct Contact Info & Links */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-[#220520]/90 border border-pink-500/30">
                  <h3 className="font-heading font-bold text-xl text-white mb-1">Sneha Kumari</h3>
                  <p className="text-xs text-pink-200/80 mb-6">
                    Computer Science Undergraduate (B.Tech '27) • Open for Software Development Engineer Internships & Full-Stack Roles.
                  </p>

                  <div className="flex flex-col gap-4">
                    {/* Email item */}
                    <div className="p-3.5 rounded-xl bg-[#170318] border border-pink-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-pink-400 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-mono text-pink-300/70">EMAIL</span>
                          <span className="text-xs font-semibold text-white">kumarisneha3824@gmail.com</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy('kumarisneha3824@gmail.com', 'email')}
                        className="p-2 rounded-lg bg-pink-950/60 hover:bg-pink-900/60 text-pink-300 transition-colors cursor-pointer"
                        title="Copy Email"
                      >
                        {copiedField === 'email' ? <Check className="w-4 h-4 text-cyan-300" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Phone item */}
                    <div className="p-3.5 rounded-xl bg-[#170318] border border-pink-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-pink-400 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-mono text-pink-300/70">PHONE</span>
                          <span className="text-xs font-semibold text-white">+91 8090542701</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy('+91 8090542701', 'phone')}
                        className="p-2 rounded-lg bg-pink-950/60 hover:bg-pink-900/60 text-pink-300 transition-colors cursor-pointer"
                        title="Copy Phone"
                      >
                        {copiedField === 'phone' ? <Check className="w-4 h-4 text-cyan-300" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Location item */}
                    <div className="p-3.5 rounded-xl bg-[#170318] border border-pink-500/20 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-pink-400 shrink-0" />
                      <div>
                        <span className="block text-[10px] font-mono text-pink-300/70">LOCATION</span>
                        <span className="text-xs font-semibold text-white">Prayagraj, Uttar Pradesh, India</span>
                      </div>
                    </div>

                    {/* LinkedIn item */}
                    <a
                      href="https://www.linkedin.com/in/snehakumari-sk/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-xl bg-[#170318] border border-pink-500/20 hover:border-pink-400/50 flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-pink-400 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-mono text-pink-300/70">LINKEDIN</span>
                          <span className="text-xs font-semibold text-white group-hover:text-pink-300 transition-colors">snehakumari-sk</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Message Transmission Form */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#220520]/90 border border-pink-500/30">
                <h3 className="font-heading font-bold text-xl text-white mb-1">Direct Message Transmission</h3>
                <p className="text-xs text-pink-200/80 mb-5">
                  Send a message directly to Sneha. Response expected within 24 hours.
                </p>

                {submittedMessage ? (
                  <div className="py-12 text-center flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_#00f0ff]">
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white">Message Transmitted!</h4>
                    <p className="text-xs text-pink-200/80">Thank you! Sneha has received your message.</p>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-medium text-pink-200 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager / Recruiter"
                        value={msgForm.name}
                        onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#170318] border border-pink-500/30 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-pink-300/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-pink-200 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={msgForm.email}
                        onChange={(e) => setMsgForm({ ...msgForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#170318] border border-pink-500/30 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-pink-300/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-pink-200 mb-1">Message Details</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Hi Sneha, we reviewed your portfolio and would love to discuss an SDE internship opportunity..."
                        value={msgForm.message}
                        onChange={(e) => setMsgForm({ ...msgForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#170318] border border-pink-500/30 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-pink-300/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

