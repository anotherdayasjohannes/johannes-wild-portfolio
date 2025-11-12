import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Footer } from '@/components/organisms/Footer';
import {
  getSiteSettings,
  getNavigation,
  getHero,
  getFooter,
  getLocalizedString,
  getLocalizedText,
  getLocalizedStringArray,
  urlFor,
} from '@/lib/sanity';
import {
  fallbackSiteSettings,
  fallbackNavigation,
  fallbackHero,
  fallbackFooter,
} from '@/lib/sanity/fallback';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  // Fetch all content from Sanity with fallbacks
  const [
    siteSettingsData,
    navigationData,
    heroData,
    footerData,
  ] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
    getHero(),
    getFooter(),
  ]);

  // Use fallback content if Sanity content is not available yet
  const siteSettings = siteSettingsData || fallbackSiteSettings;
  const navigation = navigationData || fallbackNavigation;
  const hero = heroData || fallbackHero;
  const footer = footerData || fallbackFooter;

  // Show warning in development if using fallback content
  if (process.env.NODE_ENV === 'development') {
    if (!siteSettingsData || !navigationData || !heroData || !footerData) {
      console.warn('⚠️ Using fallback content. Run migration: cd studio && npm run migrate');
    }
  }

  // Prepare navigation links
  const navLinks = navigation.items.map((item) => ({
    label: getLocalizedString(item.label, locale),
    href: `/${locale}${item.href}`,
  }));

  // Prepare Hero data
  const rotatingTitles = getLocalizedStringArray(hero.rotatingTitles, locale);
  const heroImageUrl = hero.heroImage?.asset
    ? urlFor(hero.heroImage).width(800).height(800).url()
    : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop';

  const heroStats = hero.stats.map((stat) => ({
    value: stat.value,
    label: getLocalizedString(stat.label, locale),
  }));

  // Prepare Footer data
  const footerLinks = footer.quickLinks.map((link) => ({
    label: getLocalizedString(link.label, locale),
    href: `/${locale}${link.href}`,
  }));

  const socialLinks = siteSettings.socialLinks.map((social) => ({
    platform: social.platform as any,
    href: social.url,
    label: getLocalizedString(social.label, locale),
  }));

  return (
    <>
      <Header
        logo={{ href: `/${locale}`, width: 180, height: 50 }}
        navLinks={navLinks}
        ctaLabel={getLocalizedString(navigation.ctaLabel, locale)}
        sticky={true}
        transparent={true}
        showLanguageSwitcher={true}
      />

      <Hero
        name={hero.name}
        rotatingTitles={rotatingTitles}
        tagline={getLocalizedText(hero.tagline, locale)}
        primaryCTA={{
          label: getLocalizedString(hero.primaryCTA.label, locale),
          href: `/${locale}${hero.primaryCTA.href}`,
        }}
        imageUrl={heroImageUrl}
        imageAlt={getLocalizedString(hero.imageAlt, locale)}
        stats={heroStats}
      />

      <Footer
        companyName={siteSettings.companyName}
        tagline={getLocalizedString(siteSettings.tagline, locale)}
        socialLinks={socialLinks}
        footerLinks={footerLinks}
        quickLinksLabel={getLocalizedString(footer.quickLinksLabel, locale)}
        copyright={`© ${new Date().getFullYear()} ${siteSettings.companyName}. ${getLocalizedString(siteSettings.copyright, locale)}`}
      />
    </>
  );
}

