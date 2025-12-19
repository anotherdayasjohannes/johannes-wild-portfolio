'use client';

import { GlassCardProps } from './types';

export const GlassCard = ({
  children,
  hover = false,
  padding = 'md',
  intensity = 'medium',
  className = '',
  ...props
}: GlassCardProps) => {
  // Intensity variants for Apple-style glassmorphism
  const intensities = {
    subtle: `
      bg-[#1A2A40]/20
      backdrop-blur-md
      border-white/5
    `,
    medium: `
      bg-[#1A2A40]/40
      backdrop-blur-xl
      border-white/10
    `,
    strong: `
      bg-[#1A2A40]/60
      backdrop-blur-2xl
      border-white/15
    `,
  };

  // Padding styles
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 hover:bg-[#1A2A40]/50'
    : '';

  return (
    <div
      className={`
        ${intensities[intensity]}
        ${paddings[padding]}
        ${hoverStyles}
        rounded-2xl
        border
        shadow-xl
        shadow-black/30
        relative
        overflow-hidden
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Optional shimmer effect on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      )}
      
      {children}
    </div>
  );
};








