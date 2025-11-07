'use client';

import Image from 'next/image';
import { Button, Heading, Text } from '@/components/atoms';
import { HeroProps } from './types';
import { FadeIn, SlideUp } from '@/lib/animations';

export const Hero = ({
  headline = 'Strategic Thinker. Digital Leader.',
  tagline = 'Transforming complexity into clarity through analytical thinking and structured execution',
  primaryCTA = { label: 'Learn More', href: '#about' },
  secondaryCTA = { label: 'Contact', href: '#contact' },
  imageUrl,
  imageAlt = 'Profile Photo',
  showScrollIndicator = true,
  stats,
  className = '',
}: HeroProps) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-[#0D0D0D] ${className}`}
    >
      {/* Subtle Background Accent - Static, elegant */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A2A40]/20 to-[#0D0D0D]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image (Minimal Treatment) */}
          {imageUrl && (
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative">
                  {/* Simple border accent */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#42628C] to-[#253B59] rounded-2xl opacity-50" />
                  
                  {/* Image Container - Clean */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#1A2A40]">
                    <div className="relative aspect-square">
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right Column - Text Content */}
          <div className={`space-y-8 ${imageUrl ? 'lg:col-span-7' : 'lg:col-span-12 text-center mx-auto max-w-4xl'}`}>
            {/* Headline - Simple, Bold */}
            <FadeIn>
              <Heading
                level="h1"
                className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              >
                {headline}
              </Heading>
            </FadeIn>

            {/* Tagline - Clear, Focused */}
            <SlideUp delay={0.2}>
              <Text
                variant="large"
                color="secondary"
                className="text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                {tagline}
              </Text>
            </SlideUp>

            {/* CTAs - Minimal */}
            <SlideUp delay={0.3}>
              <div className="flex flex-wrap gap-4">
                {primaryCTA && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTA.href}
                  >
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant="ghost"
                    size="lg"
                    href={secondaryCTA.href}
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            </SlideUp>

            {/* Optional Stats - Clean presentation */}
            {stats && stats.length > 0 && (
              <SlideUp delay={0.4}>
                <div className="flex flex-wrap gap-12 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <Text
                        variant="large"
                        weight="semibold"
                        className="text-2xl text-[#F2F2F2] mb-1"
                      >
                        {stat.value}
                      </Text>
                      <Text variant="small" color="tertiary">
                        {stat.label}
                      </Text>
                    </div>
                  ))}
                </div>
              </SlideUp>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Subtle */}
      {showScrollIndicator && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#5A7FB8] to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
};

