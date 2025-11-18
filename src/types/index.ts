export type PageType = 'home' | 'menu' | 'flow' | 'recruit';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description: string;
  duration: string;
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface JobInfo {
  position: string;
  type: string;
  requirements: string;
  salary: string;
  workingHours: string;
  benefits: string;
}

export interface Benefit {
  text: string;
}
