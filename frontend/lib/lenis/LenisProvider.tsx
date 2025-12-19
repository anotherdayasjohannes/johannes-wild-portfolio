'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import Lenis from 'lenis';

/**
 * Lenis instance type
 */
export interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
}

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  lock?: boolean;
  onComplete?: () => void;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

/**
 * Hook to access Lenis instance and scroll methods
 * 
 * @example
 * const { lenis, scrollTo } = useLenis();
 * 
 * // Scroll to element
 * scrollTo('#about', { offset: -100 });
 * 
 * // Scroll to position
 * scrollTo(0, { duration: 2 });
 */
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    touchMultiplier?: number;
  };
}

/**
 * Lenis Provider Component
 * 
 * Wraps the application to provide smooth scrolling.
 * Place this inside your layout, after any other providers.
 * 
 * @example
 * <LenisProvider options={{ duration: 1.2 }}>
 *   {children}
 * </LenisProvider>
 */
export function LenisProvider({ children, options = {} }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>();

  // Initialize Lenis
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation ?? 'vertical',
      smoothWheel: options.smoothWheel ?? true,
      touchMultiplier: options.touchMultiplier ?? 2,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Animation frame loop
    const raf = (time: number) => {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, [options.duration, options.easing, options.orientation, options.smoothWheel, options.touchMultiplier]);

  // Handle anchor links
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: 0,
              duration: 1.2,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  // Scroll method exposed via context
  const scrollTo = useCallback(
    (target: string | number | HTMLElement, scrollOptions?: ScrollToOptions) => {
      if (!lenis) return;

      if (typeof target === 'string' && target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
          lenis.scrollTo(element as HTMLElement, scrollOptions);
        }
      } else {
        lenis.scrollTo(target as number | HTMLElement, scrollOptions);
      }
    },
    [lenis]
  );

  // Respect reduced motion preference
  useEffect(() => {
    if (!lenis) return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [lenis]);

  return (
    <LenisContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
