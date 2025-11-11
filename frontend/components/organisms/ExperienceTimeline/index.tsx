'use client';

import { useState } from 'react';
import { Heading, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { FadeIn, Stagger } from '@/lib/animations';
import { ExperienceTimelineProps } from './types';

export const ExperienceTimeline = ({
  title,
  experiences,
  currentLabel = 'Present',
  className = '',
}: ExperienceTimelineProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const toggleExpanded = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <section className={`relative py-24 bg-dark-bg ${className}`}>
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <FadeIn>
          <Heading level="h2" size="4xl" className="mb-16">
            {title}
          </Heading>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-20 top-0 bottom-0 w-px bg-brand-primary/30" />

          {/* Experience items */}
          <Stagger>
            <div className="space-y-12">
              {sortedExperiences.map((exp, index) => {
                const isExpanded = expandedId === index;
                const endYear = exp.current ? currentLabel : exp.endDate ? formatDate(exp.endDate) : '';

                return (
                  <div key={index} className="relative pl-8 md:pl-32">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-20 top-2 w-3 h-3 -ml-[5px] rounded-full bg-brand-primary border-4 border-dark-bg" />

                    {/* Year marker */}
                    <div className="absolute left-0 md:left-0 top-0 md:w-16 text-left md:text-right">
                      <Text variant="caption" color="primary" className="font-mono font-bold">
                        {formatDate(exp.startDate)}
                      </Text>
                      {endYear && (
                        <>
                          <Text variant="caption" color="tertiary" className="font-mono">
                            –
                          </Text>
                          <Text variant="caption" color={exp.current ? 'primary' : 'tertiary'} className="font-mono">
                            {endYear}
                          </Text>
                        </>
                      )}
                    </div>

                    {/* Content card */}
                    <Card
                      variant="elevated"
                      padding="lg"
                      hover
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(index)}
                    >
                      <div className="space-y-3">
                        <div>
                          <Heading level="h3" size="xl" className="mb-1">
                            {exp.position}
                          </Heading>
                          <Text variant="body" color="secondary" className="font-medium">
                            {exp.company}
                            {exp.location && ` • ${exp.location}`}
                          </Text>
                        </div>

                        {/* Expandable description */}
                        {isExpanded && exp.description && exp.description.length > 0 && (
                          <div className="pt-4 border-t border-dark-border">
                            <Text variant="caption" color="tertiary" className="uppercase tracking-wider mb-3 block">
                              Key Responsibilities
                            </Text>
                            <ul className="space-y-2">
                              {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="text-brand-primary mt-1">•</span>
                                  <Text variant="body" color="secondary">
                                    {item}
                                  </Text>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Expand indicator */}
                        {exp.description && exp.description.length > 0 && (
                          <div className="flex justify-center pt-2">
                            <div className="text-brand-primary text-sm">
                              {isExpanded ? '▲' : '▼'}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
};

