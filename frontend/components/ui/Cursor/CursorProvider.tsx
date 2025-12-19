'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

export type CursorState = 'default' | 'hover' | 'click' | 'text' | 'hidden';

interface CursorContextValue {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  isVisible: boolean;
}

const CursorContext = createContext<CursorContextValue>({
  cursorState: 'default',
  setCursorState: () => {},
  isVisible: true,
});

/**
 * Hook to control cursor state
 * 
 * @example
 * const { setCursorState } = useCursor();
 * 
 * <button
 *   onMouseEnter={() => setCursorState('hover')}
 *   onMouseLeave={() => setCursorState('default')}
 * >
 *   Hover me
 * </button>
 */
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

/**
 * Cursor Provider Component
 * 
 * Manages cursor state and visibility.
 * Automatically hides on touch devices.
 * 
 * @example
 * <CursorProvider>
 *   <Cursor />
 *   {children}
 * </CursorProvider>
 */
export function CursorProvider({ children }: CursorProviderProps) {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
      setIsVisible(!hasTouch);
    };

    checkTouch();
    window.addEventListener('touchstart', () => setIsVisible(false), { once: true });
  }, []);

  // Auto-detect hover states on interactive elements
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive element
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursor === 'hover';

      const isText =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.dataset.cursor === 'text';

      if (isText) {
        setCursorState('text');
      } else if (isInteractive) {
        setCursorState('hover');
      }
    };

    const handleMouseLeave = () => {
      setCursorState('default');
    };

    const handleMouseDown = () => {
      if (cursorState !== 'text') {
        setCursorState('click');
      }
    };

    const handleMouseUp = () => {
      if (cursorState === 'click') {
        setCursorState('default');
      }
    };

    // Use event delegation for better performance
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice, cursorState]);

  // Hide default cursor globally when custom cursor is active
  useEffect(() => {
    if (!isTouchDevice && isVisible) {
      document.body.style.cursor = 'none';
      
      // Also hide cursor on all interactive elements
      const style = document.createElement('style');
      style.id = 'custom-cursor-style';
      style.textContent = `
        *, *::before, *::after {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.cursor = '';
        const styleEl = document.getElementById('custom-cursor-style');
        if (styleEl) {
          styleEl.remove();
        }
      };
    }
  }, [isTouchDevice, isVisible]);

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState, isVisible: isVisible && !isTouchDevice }}>
      {children}
    </CursorContext.Provider>
  );
}
