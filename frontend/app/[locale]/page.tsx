import { useTranslations } from 'next-intl';
import { Header, Hero, Footer } from '@/components/organisms';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Header
        logo={{
          src: '/images/logo.svg',
          alt: 'Johannes Wild Logo',
          href: '/',
        }}
        navigation={[
          { label: t('nav.about'), href: '/about' },
          { label: t('nav.experience'), href: '/experience' },
          { label: t('nav.contact'), href: '/contact' },
        ]}
      />

      <Hero
        name="Johannes Wild"
        rotatingTitles={[
          t('hero.eyebrow.strategicThinker'),
          t('hero.eyebrow.digitalLeader'),
          t('hero.eyebrow.brandBuilder'),
          t('hero.eyebrow.innovationDriver'),
        ]}
        tagline={t('hero.tagline')}
        primaryCTA={{
          label: t('hero.cta.primary'),
          href: '/contact',
        }}
        imageUrl="/images/johannes-wild-profile.jpg"
        imageAlt="Johannes Wild"
        showScrollIndicator
        stats={[
          { value: '15+', label: t('hero.stats.yearsLeadership') },
          { value: '50+', label: t('hero.stats.projectsDelivered') },
          { value: '3', label: t('hero.stats.globalExperience') },
        ]}
      />

      <Footer
        tagline={t('footer.tagline')}
        sections={[
          {
            title: t('footer.quickLinks'),
            links: [
              { label: t('nav.about'), href: '/about' },
              { label: t('nav.experience'), href: '/experience' },
              { label: t('nav.contact'), href: '/contact' },
            ],
          },
        ]}
        bottomLinks={[
          { label: t('footer.privacy'), href: '/privacy' },
          { label: t('footer.terms'), href: '/terms' },
          { label: t('footer.imprint'), href: '/imprint' },
        ]}
        copyright={`© ${new Date().getFullYear()} Johannes Wild. ${t('footer.copyright')}`}
      />
    </div>
  );
}

