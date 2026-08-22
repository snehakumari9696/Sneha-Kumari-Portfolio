export type NavTab = 'Home' | 'About' | 'Skills' | 'Projects' | 'Process' | 'Testimonials' | 'Contact';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: 'Lightbulb' | 'Layers' | 'Star';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack & AI' | 'Java & Spring Boot' | 'Real-Time' | 'Data & ML';
  badge: string;
  badgeColor: string;
  tech: string[];
  bullets: string[];
  link?: string;
  role?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  bullets: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

