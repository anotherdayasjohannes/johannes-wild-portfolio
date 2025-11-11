export interface Experience {
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  order: number;
}

export interface ExperienceTimelineProps {
  title: string;
  experiences: Experience[];
  currentLabel?: string;
  className?: string;
}

