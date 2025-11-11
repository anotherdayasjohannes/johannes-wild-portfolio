export interface Skill {
  name: string;
  category: 'soft' | 'language' | 'technical';
  level: number; // 1-6 for soft/technical, 0-100 for languages
  color?: 'blue' | 'green' | 'purple' | 'pink';
  order: number;
}

export interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  categoryLabels?: {
    soft: string;
    language: string;
    technical: string;
  };
  className?: string;
}

