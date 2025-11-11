'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Text } from '@/components/atoms';
import { HeroProps } from './types';
import { FadeIn, SlideUp } from '@/lib/animations';

// Rotating Text Component (Dennis Snellenberg style)
const RotatingText = ({ phrases, className = '' }: { phrases: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300); // Fade out duration
    }, 3000); // Time between rotations

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span
      className={`inline-block transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {phrases[index]}
    </span>
  );
};

export const Hero = ({
  name = 'Johannes Wild',
  rotatingTitles = ['Strategic Thinker', 'Digital Leader', 'Brand Builder', 'Innovation Driver'],
  tagline = 'Helping brands stand out in the digital era through analytical thinking and structured execution.',
  primaryCTA = { label: "Let's work together", href: '#contact' },
  secondaryCTA,
  imageUrl,
  imageAlt = 'Profile Photo',
  showScrollIndicator = true,
  stats,
  className = '',
}: HeroProps) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-[#1A2A40] ${className}`}
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A40] via-[#253B59]/50 to-[#1A2A40]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Column - Image (Minimal, Editorial) */}
          {imageUrl && (
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
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

          {/* Right Column - Text Content (Editorial Style) */}
          <div className={`space-y-10 ${imageUrl ? 'lg:col-span-7' : 'lg:col-span-12 mx-auto max-w-4xl'}`}>
            
            {/* Eyebrow - Rotating Title */}
            <FadeIn>
              <div className="text-[#D1D5DB] text-sm font-light tracking-wide uppercase mb-4">
                <RotatingText phrases={rotatingTitles} />
              </div>
            </FadeIn>

            {/* Name with Signature Dash (Dennis Style) */}
            <FadeIn>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F2] leading-none tracking-tight">
                {name}
                <span className="text-[#42628C]">—</span>
              </h1>
            </FadeIn>

            {/* Tagline - Clear, Editorial */}
            <SlideUp delay={0.2}>
              <Text
                variant="large"
                color="secondary"
                className="text-xl md:text-2xl leading-relaxed max-w-2xl font-light"
              >
                {tagline}
              </Text>
            </SlideUp>

            {/* Optional Stats - Editorial/Magazine Style */}
            {stats && stats.length > 0 && (
              <SlideUp delay={0.3}>
                <div className="flex flex-wrap gap-x-16 gap-y-6 pt-6 border-t border-[#253B59]/50">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-baseline gap-3">
                      <span className="text-4xl font-light text-[#F2F2F2] tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-sm text-[#9CA3AF] uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </SlideUp>
            )}

            {/* CTAs - Minimal & Intentional */}
            <SlideUp delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
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
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Ultra Subtle */}
      {showScrollIndicator && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
            <span className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F2F2F2]/20 via-[#F2F2F2]/40 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
};

