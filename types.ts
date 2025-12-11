export type ModuleStatus = 'complete' | 'in-development' | 'planned';

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ModuleStatus;
  path: string;
  icon?: string;
  audience: string;
  method: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  date: string;
  incident: string;
  tactic: string;
  recognition: string;
  counter: string;
  lesson: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  technicalAnnotation: string[];
  duration: string;
  isFeatured?: boolean;
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}