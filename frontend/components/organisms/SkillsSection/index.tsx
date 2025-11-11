'use client';

import { Heading, Text } from '@/components/atoms';
import { Card, SkillBar } from '@/components/molecules';
import { FadeIn, Stagger } from '@/lib/animations';
import { SkillsSectionProps } from './types';

export const SkillsSection = ({
  title,
  skills,
  categoryLabels = {
    soft: 'Soft Skills',
    language: 'Languages',
    technical: 'Technical Skills',
  },
  className = '',
}: SkillsSectionProps) => {
  // Group skills by category
  const skillsByCategory = {
    soft: skills.filter((s) => s.category === 'soft').sort((a, b) => a.order - b.order),
    language: skills.filter((s) => s.category === 'language').sort((a, b) => a.order - b.order),
    technical: skills.filter((s) => s.category === 'technical').sort((a, b) => a.order - b.order),
  };

  const renderCategory = (
    category: 'soft' | 'language' | 'technical',
    label: string
  ) => {
    const categorySkills = skillsByCategory[category];
    if (categorySkills.length === 0) return null;

    return (
      <Card variant="elevated" padding="lg">
        <Heading level="h3" size="xl" className="mb-6">
          {label}
        </Heading>
        <div className="space-y-5">
          {categorySkills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={
                category === 'language'
                  ? skill.level // Already in percentage (0-100)
                  : Math.round((skill.level / 6) * 100) // Convert 1-6 to percentage
              }
              color={skill.color || 'blue'}
              animated
            />
          ))}
        </div>
      </Card>
    );
  };

  return (
    <section className={`relative py-24 bg-dark-surface ${className}`}>
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <FadeIn>
          <Heading level="h2" size="4xl" className="mb-16">
            {title}
          </Heading>
        </FadeIn>

        {/* Three-column grid */}
        <Stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderCategory('soft', categoryLabels.soft)}
            {renderCategory('language', categoryLabels.language)}
            {renderCategory('technical', categoryLabels.technical)}
          </div>
        </Stagger>
      </div>
    </section>
  );
};

