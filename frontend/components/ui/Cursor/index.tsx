'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useCursor } from './CursorProvider';

/**
 * Custom Cursor Component
 * 
 * Renders a custom cursor that:
 * - Follows the mouse smoothly
 * - Grows on hover over interactive elements
 * - Has magnetic pull effect on buttons
 * - Hides on touch devices
 * 
 * Must be used within CursorProvider.
 */
export function Cursor() {
  const { cursorState, isVisible } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  // Smooth cursor position
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  
  // Animation loop for smooth following
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Lerp factor - lower = smoother but slower
      const lerp = 0.15;
      
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Don't render on touch devices or when hidden
  if (!isVisible) return null;

  // Cursor size based on state
  const getSize = () => {
    switch (cursorState) {
      case 'hover':
        return 'w-16 h-16';
      case 'click':
        return 'w-8 h-8';
      case 'text':
        return 'w-1 h-8';
      default:
        return 'w-10 h-10';
    }
  };

  // Cursor style based on state
  const getStyle = () => {
    switch (cursorState) {
      case 'hover':
        return 'bg-white/10 border-white/30';
      case 'text':
        return 'bg-white/80 border-transparent rounded-none';
      default:
        return 'bg-transparent border-white/50';
    }
  };

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`
          fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2
          pointer-events-none z-[9999]
          rounded-full border-2
          transition-[width,height,background-color,border-color] duration-300 ease-out
          mix-blend-difference
          ${getSize()}
          ${getStyle()}
        `}
        style={{ willChange: 'transform' }}
      />
      
      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className={`
          fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2
          pointer-events-none z-[9999]
          w-1 h-1 rounded-full bg-white
          transition-opacity duration-200
          ${cursorState === 'hover' ? 'opacity-0' : 'opacity-100'}
        `}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

export { CursorProvider, useCursor } from './CursorProvider';
export type { CursorState } from './CursorProvider';
