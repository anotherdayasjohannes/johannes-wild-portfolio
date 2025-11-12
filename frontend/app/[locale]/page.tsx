'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations();

  // Debug: log what we're getting
  console.log('Current locale:', locale);
  console.log('nav.about translation:', t('nav.about'));
  console.log('hero.tagline translation:', t('hero.tagline'));

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
      <p style={{ marginTop: '1rem', color: '#5A7FB8' }}>
        Translation test: {t('nav.about')}
      </p>
      <p style={{ marginTop: '0.5rem', color: '#5A7FB8' }}>
        Hero tagline: {t('hero.tagline')}
      </p>
    </div>
  );
}

