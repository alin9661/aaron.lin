export interface Project {
  id: string;
  title: string;
  status: 'LIVE' | 'BETA' | 'IN_DEV' | 'OSS';
  description: string;
  technologies: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface MatrixColumn {
  id: string;
  left: number;
  animationDuration: number;
  animationDelay: number;
  characters: string;
}