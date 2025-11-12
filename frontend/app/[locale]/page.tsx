'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Footer } from '@/components/organisms/Footer';

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations();

  // Prepare navigation links with translations
  const navLinks = [
    { label: t('nav.about'), href: `/${locale}#about` },
    { label: t('nav.experience'), href: `/${locale}#experience` },
    { label: t('nav.projects'), href: `/${locale}#projects` },
    { label: t('nav.skills'), href: `/${locale}#skills` },
    { label: t('nav.contact'), href: `/${locale}#contact` },
  ];

  // Prepare rotating titles for Hero
  const rotatingTitles = [
    t('hero.eyebrow.strategicThinker'),
    t('hero.eyebrow.digitalLeader'),
    t('hero.eyebrow.brandBuilder'),
    t('hero.eyebrow.innovationDriver'),
  ];

  // Prepare footer links
  const footerLinks = [
    { label: t('nav.about'), href: `/${locale}#about` },
    { label: t('nav.experience'), href: `/${locale}#experience` },
    { label: t('nav.projects'), href: `/${locale}#projects` },
    { label: t('nav.skills'), href: `/${locale}#skills` },
    { label: t('nav.contact'), href: `/${locale}#contact` },
  ];

  return (
    <>
      <Header
        logo={{ href: `/${locale}`, width: 180, height: 50 }}
        navLinks={navLinks}
        ctaLabel={t('nav.getInTouch')}
        sticky={true}
        transparent={true}
        showLanguageSwitcher={true}
      />
      
      <Hero
        name="Johannes Wild"
        rotatingTitles={rotatingTitles}
        tagline={t('hero.tagline')}
        primaryCTA={{ 
          label: t('hero.cta.primary'), 
          href: `/${locale}#contact` 
        }}
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
        imageAlt="Johannes Wild"
        stats={[
          { value: '10+', label: t('hero.stats.yearsLeadership') },
          { value: '50+', label: t('hero.stats.projectsDelivered') },
          { value: '3', label: t('hero.stats.globalExperience') },
        ]}
      />

      <Footer
        footerLinks={footerLinks}
        tagline={t('footer.tagline')}
        quickLinksLabel={t('footer.quickLinks')}
        copyright={`© ${new Date().getFullYear()} Johannes Wild. ${t('footer.copyright')}`}
      />
    </>
  );
}

