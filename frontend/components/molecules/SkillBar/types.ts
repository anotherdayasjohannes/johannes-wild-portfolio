export interface SkillBarProps {
  name: string;
  level: number; // 0-100 or 0-6 (we'll normalize)
  maxLevel?: number; // default 100, or 6 for your rating system
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'pink'; // All now use blue palette variations
  animated?: boolean;
}

