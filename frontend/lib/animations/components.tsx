/**
 * Pre-built Animation Components
 * Wrapper components for common animation patterns
 */

'use client';

import React from 'react';
import { useAnimateOnScroll, useAnimateOnMount, useStagger } from './hooks';
import { animationPresets } from './index';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * FadeIn Component
 * Fades in element when scrolled into view
 */
export const FadeIn: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.fadeIn,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * SlideUp Component
 * Slides up and fades in when scrolled into view
 */
export const SlideUp: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.slideUp,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * SlideDown Component
 * Slides down and fades in when scrolled into view
 */
export const SlideDown: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.slideDown,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * SlideInLeft Component
 * Slides in from left when scrolled into view
 */
export const SlideInLeft: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.slideInLeft,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * SlideInRight Component
 * Slides in from right when scrolled into view
 */
export const SlideInRight: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.slideInRight,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * Scale Component
 * Scales up and fades in when scrolled into view
 */
export const Scale: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnScroll({
    ...animationPresets.scale,
    delay,
  }) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * Stagger Component
 * Animates children with stagger effect
 */
export interface StaggerProps extends AnimationWrapperProps {
  staggerDelay?: number;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  className,
  staggerDelay = 0.1,
  as: Component = 'div',
}) => {
  const ref = useStagger(animationPresets.fadeIn, staggerDelay) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

/**
 * AutoAnimate Component
 * Automatically animates children when added/removed/reordered
 * Perfect for lists, grids, and dynamic content
 */
export interface AutoAnimateProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  duration?: number;
  easing?: string;
}

export const AutoAnimate: React.FC<AutoAnimateProps> = ({
  children,
  className,
  as: Component = 'div',
  duration = 250,
  easing = 'ease-in-out',
}) => {
  const [parent] = useAutoAnimate({
    duration,
    easing,
  });

  return (
    <Component ref={parent as any} className={className}>
      {children}
    </Component>
  );
};

/**
 * OnMount Component
 * Animates immediately on mount (no scroll trigger)
 */
export const OnMount: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  delay = 0,
  as: Component = 'div',
}) => {
  const ref = useAnimateOnMount(animationPresets.fadeIn, delay) as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};

