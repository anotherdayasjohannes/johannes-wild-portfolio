import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header, ContactSection, Footer } from '@/components/organisms';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johanneswild.com';
  
  return {
    title: `${t('contact.title')} - Johannes Wild`,
    description: t('contact.subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        'de': `${baseUrl}/de/contact`,
        'en': `${baseUrl}/en/contact`,
        'x-default': `${baseUrl}/en/contact`,
      },
    },
    openGraph: {
      url: `${baseUrl}/${locale}/contact`,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

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

      <ContactSection
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        contactInfo={{
          phone: '+49 171 9319346',
          email: 'johannes.wild@me.com',
          address: 'Bahnhofstraße 11\n83677 Reichersbeuern\nGermany',
        }}
        formLabels={{
          name: t('contact.form.name'),
          email: t('contact.form.email'),
          message: t('contact.form.message'),
          submit: t('contact.form.submit'),
          sending: t('contact.form.sending'),
          success: t('contact.form.success'),
          error: t('contact.form.error'),
        }}
        infoLabels={{
          phone: t('contact.info.phone'),
          email: t('contact.info.email'),
          address: t('contact.info.address'),
        }}
      />

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

