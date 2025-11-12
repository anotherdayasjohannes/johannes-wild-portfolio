import { getTranslations } from 'next-intl/server';
import { Header, Hero, Footer } from '@/components/organisms';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen">
      <Header
        logo={{
          href: `/${locale}`,
          width: 180,
          height: 50,
        }}
        navLinks={[
          { label: t('nav.about'), href: `/${locale}/about` },
          { label: t('nav.experience'), href: `/${locale}/experience` },
          { label: t('nav.contact'), href: `/${locale}/contact` },
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
          href: `/${locale}/contact`,
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
        companyName="Johannes Wild"
        tagline={t('footer.tagline')}
        footerLinks={[
          { label: t('nav.about'), href: `/${locale}/about` },
          { label: t('nav.experience'), href: `/${locale}/experience` },
          { label: t('nav.contact'), href: `/${locale}/contact` },
          { label: t('footer.privacy'), href: `/${locale}/privacy` },
          { label: t('footer.terms'), href: `/${locale}/terms` },
          { label: t('footer.imprint'), href: `/${locale}/imprint` },
        ]}
      />
    </div>
  );
}

