import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header, About, Footer } from '@/components/organisms';
import { fetchSanity, aboutQuery } from '@/lib/sanity';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johanneswild.com';
  
  return {
    title: `${t('about.title')} - Johannes Wild`,
    description: t('about.title'),
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        'de': `${baseUrl}/de/about`,
        'en': `${baseUrl}/en/about`,
        'x-default': `${baseUrl}/en/about`,
      },
    },
    openGraph: {
      url: `${baseUrl}/${locale}/about`,
    },
  };
}

async function getAboutData(locale: string) {
  try {
    const data = await fetchSanity(aboutQuery, { locale });
    return data;
  } catch (error) {
    console.error('Error fetching about data:', error);
    return null;
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const aboutData = await getAboutData(locale);

  return (
    <div className="min-h-screen">
      <Header
        logo={{
          src: '/images/logo.svg',
          alt: 'Johannes Wild Logo',
          href: `/${locale}`,
        }}
        navigation={[
          { label: t('nav.about'), href: `/${locale}/about` },
          { label: t('nav.experience'), href: `/${locale}/experience` },
          { label: t('nav.contact'), href: `/${locale}/contact` },
        ]}
      />

      {aboutData ? (
        <About
          title={aboutData.title || t('about.title')}
          bio={aboutData.bio || []}
          keyFacts={aboutData.keyFacts || []}
          cvUrl={aboutData.cvUrl}
        />
      ) : (
        <section className="py-24">
          <div className="container mx-auto px-8 lg:px-16">
            <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
            <p className="text-dark-text-secondary">
              Content is being prepared. Please add content in Sanity Studio.
            </p>
          </div>
        </section>
      )}

      <Footer
        tagline={t('footer.tagline')}
        sections={[
          {
            title: t('footer.quickLinks'),
            links: [
              { label: t('nav.about'), href: `/${locale}/about` },
              { label: t('nav.experience'), href: `/${locale}/experience` },
              { label: t('nav.contact'), href: `/${locale}/contact` },
            ],
          },
        ]}
        bottomLinks={[
          { label: t('footer.privacy'), href: `/${locale}/privacy` },
          { label: t('footer.terms'), href: `/${locale}/terms` },
          { label: t('footer.imprint'), href: `/${locale}/imprint` },
        ]}
        copyright={`© ${new Date().getFullYear()} Johannes Wild. ${t('footer.copyright')}`}
      />
    </div>
  );
}

