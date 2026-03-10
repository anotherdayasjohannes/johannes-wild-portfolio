/**
 * React Hooks for animations
 */

import { useEffect, useRef } from 'react';
import { animate, inView, scroll } from 'motion';
import { animationPresets } from './index';

/**
 * Helper to separate keyframes from options
 */
const separateAnimation = (animation: any) => {
  const { duration, easing, delay, ...keyframes } = animation;
  const options: any = {};
  if (duration !== undefined) options.duration = duration;
  if (easing !== undefined) options.easing = easing;
  if (delay !== undefined) options.delay = delay;
  return { keyframes, options };
};

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
        const { keyframes, options } = separateAnimation(animation);
        animate(ref.current, keyframes, options);
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
    const { keyframes, options: animOptions } = separateAnimation(animation);
    const controls = inView(
      element,
      () => {
        animate(element, keyframes, animOptions);
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

    const { keyframes, options: animOptions } = separateAnimation(animation);
    const controls = scroll(
      animate(ref.current, keyframes, animOptions),
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
    const { keyframes, options: animOptions } = separateAnimation(animation);
    const controls = inView(element, () => {
      const children = Array.from(element.children) as HTMLElement[];
      animate(
        children,
        keyframes,
        {
          ...animOptions,
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

