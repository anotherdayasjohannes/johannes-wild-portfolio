'use client';

import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface ScrollAnimationOptions {
  trigger?: string | Element | RefObject<Element>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean; // Debug only
  toggleActions?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

/**
 * Hook for scroll-triggered animations
 * 
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * 
 * useScrollAnimation(ref, {
 *   from: { opacity: 0, y: 50 },
 *   to: { opacity: 1, y: 0 },
 *   scrollOptions: { start: 'top 80%' }
 * });
 */
export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  options: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    scrollOptions?: ScrollAnimationOptions;
    duration?: number;
    ease?: string;
  }
) {
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    scrollOptions = {},
    duration = 1,
    ease = 'power2.out',
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state
    gsap.set(element, from);

    // Create animation with ScrollTrigger
    const animation = gsap.to(element, {
      ...to,
      duration,
      ease,
      scrollTrigger: {
        trigger: element,
        start: scrollOptions.start ?? 'top 80%',
        end: scrollOptions.end ?? 'bottom 20%',
        toggleActions: scrollOptions.toggleActions ?? 'play none none reverse',
        markers: scrollOptions.markers ?? false,
        onEnter: scrollOptions.onEnter,
        onLeave: scrollOptions.onLeave,
        onEnterBack: scrollOptions.onEnterBack,
        onLeaveBack: scrollOptions.onLeaveBack,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, from, to, scrollOptions, duration, ease]);
}

/**
 * Hook for parallax effects
 * 
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useParallax(ref, { speed: 0.5 });
 */
export function useParallax<T extends HTMLElement>(
  ref: RefObject<T>,
  options: {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
  } = {}
) {
  const { speed = 0.5, direction = 'vertical' } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const property = direction === 'vertical' ? 'y' : 'x';
    const distance = 100 * speed;

    const animation = gsap.to(element, {
      [property]: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [ref, speed, direction]);
}

/**
 * Hook for simple reveal animations
 * 
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useReveal(ref, { delay: 0.2 });
 */
export function useReveal<T extends HTMLElement>(
  ref: RefObject<T>,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    ease?: string;
    start?: string;
  } = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    y = 40,
    ease = 'power2.out',
    start = 'top 85%',
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.set(element, { opacity: 0, y });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [ref, delay, duration, y, ease, start]);
}
