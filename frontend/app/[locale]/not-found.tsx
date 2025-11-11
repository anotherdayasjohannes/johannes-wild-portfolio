'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/atoms';

export default function NotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold text-brand-primary">404</h1>
        <h2 className="text-2xl font-semibold text-dark-text-primary">
          Page Not Found
        </h2>
        <p className="text-dark-text-secondary max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Button variant="primary" size="lg" href={`/${locale}`}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

