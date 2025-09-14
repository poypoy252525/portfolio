export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface AboutContent {
  summary: string;
  experience: string[];
  interests: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: SocialLink[];
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    avatar?: string;
  };
  about: AboutContent;
  projects: Project[];
  skills: SkillCategory[];
  contact: ContactInfo;
}