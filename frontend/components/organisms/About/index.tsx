'use client';

import { PortableText } from '@portabletext/react';
import { Button, Heading, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { FadeIn, SlideUp } from '@/lib/animations';
import { AboutProps } from './types';

export const About = ({
  title,
  bio,
  keyFacts,
  cvUrl,
  className = '',
}: AboutProps) => {
  return (
    <section className={`relative py-24 bg-dark-surface ${className}`}>
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <FadeIn>
          <Heading level="h2" size="4xl" className="mb-16">
            {title}
          </Heading>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <SlideUp>
              <div className="prose prose-invert prose-lg max-w-none">
                <PortableText
                  value={bio}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <Text variant="large" color="secondary" className="mb-6">
                          {children}
                        </Text>
                      ),
                    },
                  }}
                />
              </div>
            </SlideUp>

            {/* CTA Buttons */}
            <SlideUp delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-6">
                {cvUrl && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="lg"
                  href="#contact"
                >
                  Get in Touch
                </Button>
              </div>
            </SlideUp>
          </div>

          {/* Right Column - Key Facts */}
          <div className="lg:col-span-5">
            <SlideUp delay={0.3}>
              <Card variant="elevated" padding="lg">
                <Heading level="h3" size="xl" className="mb-6">
                  Key Facts
                </Heading>
                <div className="space-y-4">
                  {keyFacts
                    .sort((a, b) => a.order - b.order)
                    .map((fact, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-baseline pb-4 border-b border-dark-border last:border-b-0 last:pb-0"
                      >
                        <Text variant="body" color="tertiary" className="font-medium">
                          {fact.label}
                        </Text>
                        <Text variant="body" color="primary">
                          {fact.value}
                        </Text>
                      </div>
                    ))}
                </div>
              </Card>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};






