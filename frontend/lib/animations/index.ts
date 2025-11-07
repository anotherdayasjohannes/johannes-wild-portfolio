/**
 * Animation Utilities using Motion One
 * Lightweight, modern animation library (5KB)
 */

import { animate, inView, scroll, stagger } from 'motion';

/**
 * Animation Presets
 * Common animation configurations for consistent timing
 */
export const animationPresets = {
  // Timing
  fast: { duration: 0.3 },
  normal: { duration: 0.5 },
  slow: { duration: 0.8 },
  
  // Easing
  easeOut: { easing: 'ease-out' },
  easeInOut: { easing: 'ease-in-out' },
  spring: { easing: 'spring(1, 100, 10, 0)' },
  
  // Common animations
  fadeIn: {
    opacity: [0, 1],
    duration: 0.5,
    easing: 'ease-out',
  },
  
  slideUp: {
    opacity: [0, 1],
    y: [20, 0],
    duration: 0.5,
    easing: 'ease-out',
  },
  
  slideDown: {
    opacity: [0, 1],
    y: [-20, 0],
    duration: 0.5,
    easing: 'ease-out',
  },
  
  slideInLeft: {
    opacity: [0, 1],
    x: [-20, 0],
    duration: 0.5,
    easing: 'ease-out',
  },
  
  slideInRight: {
    opacity: [0, 1],
    x: [20, 0],
    duration: 0.5,
    easing: 'ease-out',
  },
  
  scale: {
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 0.5,
    easing: 'ease-out',
  },
};

/**
 * Animate element on scroll into view
 */
export const animateOnScroll = (
  selector: string,
  animation: any = animationPresets.fadeIn,
  options?: { threshold?: number; amount?: number }
) => {
  return inView(
    selector,
    (entry: any) => {
      animate(entry.target, animation);
    },
    {
      amount: options?.amount || 0.3,
    }
  );
};

/**
 * Stagger animation for multiple elements
 */
export const animateStagger = (
  selector: string,
  animation: any = animationPresets.fadeIn,
  staggerDelay: number = 0.1
) => {
  return inView(selector, (entry: any) => {
    const children = Array.from(entry.target.children);
    animate(
      children,
      animation,
      {
        delay: stagger(staggerDelay),
      }
    );
  });
};

/**
 * Scroll-linked animation
 * Element animates based on scroll position
 */
export const animateOnScrollProgress = (
  selector: string,
  animation: any,
  options?: { target?: Element; offset?: [string, string] }
) => {
  return scroll(
    animate(selector, animation),
    {
      target: options?.target,
      offset: options?.offset || ['start end', 'end start'] as any,
    }
  );
};

/**
 * Simple animate utility
 */
export { animate, inView, scroll, stagger };

/**
 * Re-export for convenience
 */
export * from './hooks';
export * from './components';

