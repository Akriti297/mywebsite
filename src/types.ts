export interface ProjectItem {
  id: string;
  projectNumber: string;
  category: string;
  badge?: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  iconName: string;
  items: string[];
  footer: string;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  modules?: string[];
  verified: boolean;
  category: string;
  date?: string;
}

export interface EducationItem {
  period: string;
  location: string;
  institution: string;
  status: string;
  degree: string;
  grades?: { label: string; value: string; highlight?: boolean }[];
  description?: string;
}

export interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  standard: string;
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  code: string[];
  explanation: string;
}
