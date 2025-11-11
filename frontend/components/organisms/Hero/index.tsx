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
      className={`relative min-h-screen flex items-center justify-center bg-black ${className}`}
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Column - Image (Stark, Bold) */}
          {imageUrl && (
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative group">
                  {/* Accent line on hover */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#42628C] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  
                  <div className="relative overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700"
                        priority
                      />
                      {/* Subtle overlay for more contrast */}
                      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right Column - Text Content (Value First, Identity Second) */}
          <div className={`space-y-10 ${imageUrl ? 'lg:col-span-7' : 'lg:col-span-12 mx-auto max-w-5xl'}`}>
            
            {/* Value Proposition - THE HERO ELEMENT */}
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
                {tagline}
              </h1>
            </FadeIn>

            {/* Name + Rotating Title - Supporting Info */}
            <SlideUp delay={0.2}>
              <div className="flex flex-col gap-2">
                <div className="text-2xl md:text-3xl text-white/70 font-light">
                  {name}
                </div>
                <div className="text-sm text-[#42628C] font-mono tracking-[0.2em] uppercase">
                  <RotatingText phrases={rotatingTitles} />
                </div>
              </div>
            </SlideUp>

            {/* Optional Stats - Inline, Clean, High Contrast */}
            {stats && stats.length > 0 && (
              <SlideUp delay={0.3}>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-base text-white/50 uppercase tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </SlideUp>
            )}

            {/* CTA - Single, Bold */}
            <SlideUp delay={0.4}>
              <div className="pt-6">
                {primaryCTA && (
                  <button
                    className="group relative px-8 py-4 text-lg font-medium text-black bg-white hover:bg-[#42628C] hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">{primaryCTA.label}</span>
                  </button>
                )}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      {showScrollIndicator && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
};

