'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '../lenis';

// Register GSAP plugins (only once)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPContextValue {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
}

const GSAPContext = createContext<GSAPContextValue | null>(null);

/**
 * Hook to access GSAP and ScrollTrigger
 * 
 * @example
 * const { gsap, ScrollTrigger } = useGSAPContext();
 */
export const useGSAPContext = () => {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error('useGSAPContext must be used within a GSAPProvider');
  }
  return context;
};

interface GSAPProviderProps {
  children: ReactNode;
}

/**
 * GSAP Provider Component
 * 
 * Registers plugins and syncs ScrollTrigger with Lenis.
 * Must be placed INSIDE LenisProvider.
 * 
 * @example
 * <LenisProvider>
 *   <GSAPProvider>
 *     {children}
 *   </GSAPProvider>
 * </LenisProvider>
 */
export function GSAPProvider({ children }: GSAPProviderProps) {
  const { lenis } = useLenis();
  const isSetup = useRef(false);

  // Sync Lenis with ScrollTrigger
  useEffect(() => {
    if (!lenis || isSetup.current) return;

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis raf to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing for smoother animations
    gsap.ticker.lagSmoothing(0);

    isSetup.current = true;

    return () => {
      // Cleanup is handled by LenisProvider destroying the instance
      isSetup.current = false;
    };
  }, [lenis]);

  // Refresh ScrollTrigger on resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <GSAPContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </GSAPContext.Provider>
  );
}
