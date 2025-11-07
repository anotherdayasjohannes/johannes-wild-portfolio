/**
 * React Hooks for animations
 */

import { useEffect, useRef } from 'react';
import { animate, inView, scroll } from 'motion';
import { animationPresets } from './index';

/**
 * Hook to animate element on mount
 */
export const useAnimateOnMount = (
  animation: any = animationPresets.fadeIn,
  delay: number = 0
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const timeout = setTimeout(() => {
      if (ref.current) {
        animate(ref.current, animation);
      }
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [animation, delay]);

  return ref;
};

/**
 * Hook to animate element on scroll into view
 */
export const useAnimateOnScroll = (
  animation: any = animationPresets.fadeIn,
  options?: { amount?: number }
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const controls = inView(
      element,
      () => {
        animate(element, animation);
      },
      {
        amount: options?.amount || 0.3,
      }
    );

    return () => {
      if (typeof controls === 'function') {
        controls();
      }
    };
  }, [animation, options?.amount]);

  return ref;
};

/**
 * Hook to animate element based on scroll progress
 */
export const useScrollProgress = (
  animation: any,
  options?: { offset?: [string, string] }
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const controls = scroll(
      animate(ref.current, animation),
      {
        target: ref.current,
        offset: options?.offset || ['start end', 'end start'] as any,
      }
    );

    return () => {
      if (typeof controls === 'function') {
        controls();
      }
    };
  }, [animation, options?.offset]);

  return ref;
};

/**
 * Hook for stagger animations on children
 */
export const useStagger = (
  animation: any = animationPresets.fadeIn,
  staggerDelay: number = 0.1
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const controls = inView(element, () => {
      const children = Array.from(element.children) as HTMLElement[];
      animate(
        children,
        animation,
        {
          delay: (index) => index * staggerDelay,
        }
      );
    });

    return () => {
      if (typeof controls === 'function') {
        controls();
      }
    };
  }, [animation, staggerDelay]);

  return ref;
};

