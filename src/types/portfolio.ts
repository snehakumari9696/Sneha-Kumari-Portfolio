export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Systems' | 'Full Stack' | 'Machine Learning';
  technologies: string[];
  period: string;
  highlight: string;
  description: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  architectureHighlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; note?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  description: string;
}
