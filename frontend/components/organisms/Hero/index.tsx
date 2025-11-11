'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Text, Heading, Container } from '@/components/atoms';
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
      className={`relative min-h-screen flex items-center justify-center bg-dark-bg ${className}`}
    >
      {/* Subtle grid overlay for structure */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg" />

      {/* Content Container with Grid Structure */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-32">
        {/* Visual grid markers (left and right edges) */}
        <div className="absolute left-8 lg:left-16 top-32 bottom-32 w-px bg-white/5" />
        <div className="absolute right-8 lg:right-16 top-32 bottom-32 w-px bg-white/5" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image (Clean, No Effects) */}
          {imageUrl && (
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover grayscale"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right Column - Text Content (Using Atoms) */}
          <div className={`space-y-12 ${imageUrl ? 'lg:col-span-7' : 'lg:col-span-12 mx-auto max-w-5xl'}`}>
            
            {/* Rotating Title - Using Text Atom */}
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-brand-primary" />
                <Text variant="caption" className="font-mono tracking-[0.25em] uppercase text-brand-primary">
                  <RotatingText phrases={rotatingTitles} />
                </Text>
              </div>
            </FadeIn>

            {/* Value Proposition - Using Heading Atom */}
            <FadeIn>
              <Heading 
                level="h1" 
                size="4xl"
                weight="bold"
                className="max-w-4xl"
              >
                {tagline}
              </Heading>
            </FadeIn>

            {/* Name - Using Heading Atom */}
            <SlideUp delay={0.2}>
              <Heading 
                level="h2" 
                size="2xl"
                weight="light"
                color="secondary"
              >
                {name}
              </Heading>
            </SlideUp>

            {/* Optional Stats - Using Text Atoms */}
            {stats && stats.length > 0 && (
              <SlideUp delay={0.3}>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-dark-border max-w-2xl">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <Text variant="display" weight="bold" className="tabular-nums">
                        {stat.value}
                      </Text>
                      <Text variant="caption" color="tertiary" className="uppercase tracking-wider">
                        {stat.label}
                      </Text>
                    </div>
                  ))}
                </div>
              </SlideUp>
            )}

            {/* CTA - Using Button Atom */}
            <SlideUp delay={0.4}>
              <div className="pt-4">
                {primaryCTA && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTA.href}
                    className="group"
                  >
                    {primaryCTA.label}
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                )}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Using Text Atom */}
      {showScrollIndicator && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-70 transition-opacity cursor-pointer">
            <Text variant="caption" color="tertiary" className="uppercase tracking-widest text-[10px]">
              Scroll
            </Text>
            <div className="w-px h-12 bg-gradient-to-b from-dark-text-primary/20 via-dark-text-primary/10 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
};

