import React from 'react';
import { X, Download, FileText, Check, Star, Code, Briefcase } from 'lucide-react';
import { CircuitOverlay } from './CircuitOverlay';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = React.useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Download text file with exact resume details
    const cvContent = `================================================================================
SNEHA KUMARI
Prayagraj, Uttar Pradesh, India | +91 8090542701 | kumarisneha3824@gmail.com
LinkedIn: www.linkedin.com/in/snehakumari-sk | GitHub: github.com/snehakumari9696
================================================================================

SUMMARY
Computer Science undergraduate (B.Tech, Class of 2027) with hands-on experience designing and building full-stack, multi-tiered web applications using Java, Spring Boot, React, and the MERN stack. Strong foundation in data structures, algorithms, object-oriented design, and relational/NoSQL databases. Proven ability to independently scope, architect, and ship end-to-end software solutions, from RESTful API and database design to scalable deployment and AI feature integration. Seeking a Software Development Engineer Internship to apply strong CS fundamentals to large-scale distributed systems.

TECHNICAL SKILLS
• Programming Languages: Java (Strong), JavaScript, SQL
• Core CS: Data Structures & Algorithms, Object-Oriented Design (Java), Database Management Systems (DBMS), Operating Systems, Computer Networks, Complexity Analysis, Software Engineering
• Backend & APIs: Spring Boot, Spring Security (JWT Authentication), JDBC, Node.js, Express.js, RESTful API Design
• Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
• Databases: MySQL, MongoDB, Relational Schema Design, Mongoose ODM
• Distributed / Real-Time Systems: Socket.io & WebSockets for real-time multi-user communication, multi-tier client-server architecture, presence tracking
• AI & Emerging Tech: Generative AI, Agentic AI, LLM API Integration, Prompt Engineering, AI-Powered Feature Development
• Tools & Platforms: Git, GitHub, Postman, Maven, IntelliJ IDEA, VS Code, Vercel
• Engineering Practices: Agile development, independent end-to-end project ownership, CI/CD, modular architecture

EXPERIENCE
1. Full Stack Web Developer Intern — Omnira Cloud (Present)
• Building scalable web applications using full-stack technologies, managing client interfaces and backend logic.
• Developing responsive UI components and integrating RESTful APIs to improve application performance.
• Collaborating with cross-functional teams to design database schemas, optimize queries, and deploy cloud-backed services.

2. MERN Stack Development Intern — GRAStech (Jun 2025 – Aug 2025)
• Built and deployed "Social Voice Academy," a full-stack AI-powered coding mentor platform combining an AI coding mentor, automated code review, and personalized learning roadmaps based on user skill level and goals.
• Implemented real-time collaborative "Dev Rooms" for peer discussion, a coding-challenges module, and a progress-tracking dashboard with an achievement/badge system, using React and MongoDB.
• Designed secure JWT-based authentication and user profile management, and built a responsive UI supporting desktop and mobile.
• Owned backend architecture and MongoDB data modeling end-to-end, integrating an AI API to power the mentor chat and code-review features; recognized as the top project in the cohort by the supervising faculty.

3. Web Development Intern — YBI Foundation (Nov 2024 – Feb 2025)
• Contributed to the development of web-based digital solutions as part of a collaborative project team, working across frontend and backend components.
• Applied Git/GitHub version control workflows in a team setting to manage code changes and coordinate contributions.
• Debugged and resolved functional issues across the application stack, strengthening analytical and root-cause problem-solving skills.
• Gained practical exposure to software development lifecycle practices and frontend-backend integration in a real-world engineering environment.

PROJECTS
1. Social Voice Academy — Full-Stack AI Coding Mentor Platform
• Tech: React.js, Node.js, Express.js, MongoDB, JWT, AI APIs, Tailwind CSS
• Built a full-stack AI-powered coding mentor platform with automated code reviews, personalized learning roadmaps, and real-time collaborative "Dev Rooms".
• Designed secure JWT authentication, responsive mobile/desktop UI, and modular MongoDB schema. Commended by the supervising professor as the top project in the cohort.

2. Ambaram — Full Stack E-Commerce Platform
• Tech: React.js, Node.js, Express.js, MongoDB, RESTful APIs, Tailwind CSS
• Built a comprehensive e-commerce platform with product catalog browsing, cart operations, user authentication, and order workflows.
• Structured MongoDB schemas for products, categories, carts, and order lifecycles with modular REST controllers.

3. Real-Time Chat Application with AI Assistant
• Tech: React.js, Node.js, Express.js, MongoDB, Socket.io, JWT, AI APIs
• Built a multi-tiered real-time messaging system with Socket.io for low-latency 1-on-1 and group messaging.
• Implemented online/offline presence tracking, JWT authentication, and AI assistant integration for instant conversational responses.

4. E-Commerce Web Application (Java & Spring Boot Architecture)
• Tech: Java, Spring Boot, Spring Security (JWT), MySQL, Hibernate, REST APIs
• Designed and implemented full-stack e-commerce architecture with normalized relational MySQL schema for products, carts, and orders.
• Built CRUD REST endpoints in Spring Boot with clean service-layer abstraction and transaction management.

5. MoodPulse — Mental Health & Mood Tracker
• Tech: React.js, Node.js, Express.js, MongoDB, Chart.js, Tailwind CSS
• Full-stack mood and emotional wellness tracking application capturing daily reflections, emotion intensity, and factor correlations.
• Built responsive analytics visualization dashboard for mood patterns over time.

6. Amazon Clone — Frontend E-Commerce Platform
• Tech: React.js, Tailwind CSS, JavaScript, HTML5, CSS3
• High-fidelity responsive e-commerce storefront with product grid, dynamic category filtering, cart state management, and checkout preview.

EDUCATION
Bachelor of Technology (B.Tech) in Computer Science & Engineering
Babu Banarasi Das University, Lucknow — Expected Graduation: 2027
• Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (DBMS), Operating Systems, Computer Networks, Complexity Analysis, Software Engineering

CERTIFICATIONS & TRAINING
• Full Stack Web Development Training — Lernovate (MERN Stack)
• MERN Stack Development Internship — GRAStech (Top Cohort Project)
• Maker Fellowship — Mindler
• SQL Database Programming — Giraffe Academy (Cursa)
• Java for Beginners — GeeksLesson (Cursa)
• Java Object-Oriented Programming — Caleb Curry (Cursa)

ACHIEVEMENTS & STRENGTHS
• Independently designed and delivered multiple production-style full-stack projects spanning backend architecture, database design, and cloud deployment.
• Recognized by the supervising professor as the top project in the GRAStech cohort for Social Voice Academy.
• Strong problem-solving ability with an emphasis on breaking down ambiguous, broadly defined requirements into structured technical solutions.
• Effective at articulating technical trade-offs (architecture, database schemas, hosting) in agile, fast-iteration workflows.
`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sneha_Kumari_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0109]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#1b041a] border border-pink-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,0,128,0.4)]">
        <CircuitOverlay opacity={0.3} />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-800 p-0.5 shadow-[0_0_18px_#ff0080]">
              <div className="w-full h-full bg-[#1e051d] rounded-[14px] flex items-center justify-center text-pink-300">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white">Sneha Kumari CV</h3>
              <p className="text-xs text-pink-200/70">Computer Science Undergraduate • B.Tech '27</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#270622]/70 border border-pink-500/20 text-xs text-pink-200">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Omnira Cloud Intern</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-pink-400" />
              <span>Java & MERN Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-pink-400 fill-pink-500/30" />
              <span>6+ Full-Stack Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Top Cohort Project</span>
            </div>
          </div>

          <p className="text-sm text-pink-100/80 leading-relaxed">
            Download Sneha Kumari's official curriculum vitae containing her complete education history, technical skills, project portfolio, and certifications.
          </p>

          <button
            onClick={handleDownload}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#a30059] border border-pink-400/50 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:shadow-[0_0_35px_rgba(255,0,128,0.75)] transition-all cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Resume Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume (TXT Format)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
