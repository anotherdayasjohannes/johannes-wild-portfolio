'use client';

import { useState, useEffect } from 'react';
import { Text } from '@/components/atoms';
import { SkillBarProps } from './types';

export const SkillBar = ({
  name,
  level,
  maxLevel = 6,
  showPercentage = true,
  color = 'blue',
  animated = true,
}: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  // Normalize level to percentage
  const percentage = (level / maxLevel) * 100;

  // Animate on mount
  useEffect(() => {
    if (animated) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(percentage);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setAnimatedLevel(percentage);
    }
  }, [percentage, animated]);

  // Color variants
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div className="w-full">
      {/* Label */}
      <div className="flex justify-between items-center mb-2">
        <Text variant="label" weight="medium" className="text-gray-200">
          {name}
        </Text>
        {showPercentage && (
          <Text variant="small" color="secondary" as="span">
            {level}/{maxLevel}
          </Text>
        )}
      </div>

      {/* Progress Bar Background */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <div
          className={`
            h-full 
            ${colors[color]} 
            rounded-full
            transition-all 
            duration-1000 
            ease-out
          `.trim()}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};

