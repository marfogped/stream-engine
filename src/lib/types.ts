export interface IconsProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export interface ServicesProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export interface TechnologyProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  video: string;
  cols: number;
  rows: number;
  description: string;
}

export interface BenefitsProps {
  id: string;
  title: string;
  image: string;
}
