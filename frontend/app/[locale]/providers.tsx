'use client';

import { ReactNode } from 'react';
import { LenisProvider } from '@/lib/lenis';
import { GSAPProvider } from '@/lib/gsap';
import { CursorProvider, Cursor } from '@/components/ui';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Client-side providers for enhanced UX
 * 
 * Order matters:
 * 1. LenisProvider - Smooth scroll (base layer)
 * 2. GSAPProvider - Animations (depends on Lenis)
 * 3. CursorProvider - Custom cursor (independent)
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <LenisProvider
      options={{
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false, // Native feel on mobile
      }}
    >
      <GSAPProvider>
        <CursorProvider>
          <Cursor />
          {children}
        </CursorProvider>
      </GSAPProvider>
    </LenisProvider>
  );
}
