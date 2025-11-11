'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Text } from '@/components/atoms';
import { LanguageSwitcherProps } from './types';

export const LanguageSwitcher = ({
  currentLocale,
  className = '',
}: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Replace the locale in the path
    // e.g., /en/about -> /de/about
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => switchLocale('de')}
        className={`px-3 py-1 rounded transition-all ${
          currentLocale === 'de'
            ? 'bg-brand-primary text-white'
            : 'text-dark-text-secondary hover:text-dark-text-primary'
        }`}
        aria-label="Switch to German"
      >
        <Text variant="body" className="font-mono font-medium">
          DE
        </Text>
      </button>
      <span className="text-dark-text-tertiary">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded transition-all ${
          currentLocale === 'en'
            ? 'bg-brand-primary text-white'
            : 'text-dark-text-secondary hover:text-dark-text-primary'
        }`}
        aria-label="Switch to English"
      >
        <Text variant="body" className="font-mono font-medium">
          EN
        </Text>
      </button>
    </div>
  );
};

