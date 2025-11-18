export type PageType = 'home' | 'menu' | 'flow' | 'recruit';

export type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type MenuItem = {
  id: string;
  title: string;
  price: string;
  description: string;
  duration: string;
};

export type FlowStep = {
  step: number;
  title: string;
  description: string;
};

export type JobInfo = {
  position: string;
  type: string;
  requirements: string;
  salary: string;
  workingHours: string;
  benefits: string;
};

export type Benefit = {
  text: string;
};

export type NavItem = {
  id: PageType;
  label: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  businessHours: {
    weekday: string;
    weekend: string;
    holiday: string;
  };
};
