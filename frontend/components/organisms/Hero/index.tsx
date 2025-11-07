'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button, Heading, Text } from '@/components/atoms';
import { HeroProps } from './types';
import { FadeIn, SlideUp } from '@/lib/animations';

export const Hero = ({
  headline = 'Building Digital Experiences That Matter',
  tagline = 'Full-Stack Developer & Digital Strategist specializing in modern web technologies',
  primaryCTA = { label: 'View Projects', href: '#projects' },
  secondaryCTA = { label: 'Get in Touch', href: '#contact' },
  imageUrl,
  imageAlt = 'Profile Photo',
  showScrollIndicator = true,
  stats,
  className = '',
}: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect for floating orbs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A2A40] to-[#253B59] animate-gradient-shift" />
      
      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(90, 127, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(90, 127, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating Glassmorphic Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5A7FB8]/20 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#42628C]/20 rounded-full blur-3xl animate-float-delayed"
        style={{
          transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#6B8CAF]/20 rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 25}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Headline with animated reveal */}
            <FadeIn>
              <Heading
                level="h1"
                className="text-6xl md:text-7xl lg:text-8xl leading-none"
              >
                {headline}
              </Heading>
            </FadeIn>

            {/* Tagline */}
            <SlideUp delay={0.2}>
              <Text
                variant="large"
                color="secondary"
                className="text-xl md:text-2xl max-w-2xl"
              >
                {tagline}
              </Text>
            </SlideUp>

            {/* CTAs */}
            <SlideUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {primaryCTA && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTA.href}
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">{primaryCTA.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5A7FB8] to-[#6B8CAF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant="outline"
                    size="lg"
                    href={secondaryCTA.href}
                    className="backdrop-blur-sm hover:bg-white/10"
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            </SlideUp>

            {/* Optional Stats */}
            {stats && stats.length > 0 && (
              <SlideUp delay={0.6}>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <Text
                        variant="large"
                        weight="bold"
                        className="text-3xl text-[#5A7FB8] mb-1"
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

          {/* Right Column - Image */}
          {imageUrl && (
            <SlideUp delay={0.3}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5A7FB8] via-[#42628C] to-[#6B8CAF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-[#1A2A40]/50 backdrop-blur-xl p-2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#42628C] text-white px-6 py-3 rounded-full shadow-xl backdrop-blur-sm border border-white/10 animate-float">
                  <Text weight="semibold">✨ Available for work</Text>
                </div>
              </div>
            </SlideUp>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <Text variant="small" color="tertiary">
              Scroll to explore
            </Text>
            <svg
              className="w-6 h-6 text-[#5A7FB8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

