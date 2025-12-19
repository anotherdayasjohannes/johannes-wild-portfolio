'use client';

import Image from 'next/image';
import { Heading, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { FadeIn, Stagger } from '@/lib/animations';
import { TestimonialsSectionProps } from './types';

export const TestimonialsSection = ({
  title,
  testimonials,
  className = '',
}: TestimonialsSectionProps) => {
  const sortedTestimonials = [...testimonials].sort((a, b) => a.order - b.order);

  return (
    <section className={`relative py-24 bg-dark-bg ${className}`}>
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
            {sortedTestimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated" padding="lg" className="flex flex-col">
                {/* Quote */}
                <div className="flex-1 mb-6">
                  <Text variant="large" color="primary" className="leading-relaxed">
                    "{testimonial.quote}"
                  </Text>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-dark-border">
                  {testimonial.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image.asset.url}
                        alt={testimonial.image.alt || testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <Text variant="body" color="primary" className="font-semibold truncate">
                      {testimonial.name}
                    </Text>
                    <Text variant="caption" color="tertiary" className="truncate">
                      {testimonial.position}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
};






