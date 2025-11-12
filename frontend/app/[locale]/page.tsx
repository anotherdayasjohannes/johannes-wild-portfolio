'use client';

import { useTranslations } from 'next-intl';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  const { locale } = params;
  const t = useTranslations();

  return (
    <div style={{ minHeight: '100vh', background: '#0D0D0D', color: '#F2F2F2', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {locale === 'en' ? 'Welcome' : 'Willkommen'}
      </h1>
      <p style={{ fontSize: '1.25rem' }}>
        Current locale: {locale}
      </p>
      <p style={{ marginTop: '1rem' }}>
        Routing is working! ✅
      </p>
      <p style={{ marginTop: '1rem' }}>
        Translation test: {t('nav.about')}
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        Hero tagline: {t('hero.tagline')}
      </p>
    </div>
  );
}

