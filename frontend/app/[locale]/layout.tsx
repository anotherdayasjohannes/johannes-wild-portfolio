import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Johannes Wild - Portfolio",
    de: "Johannes Wild - Portfolio",
  };
  
  const descriptions = {
    en: "Helping brands stand out in the digital era through analytical thinking and structured execution.",
    de: "Analytisches Denken und strukturiertes Arbeiten erlauben es mir, mich schnell in neue und komplexe Domänen, Herausforderungen und Prozesse hineinzudenken.",
  };
  
  // Base URL for your site
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johanneswild.com';
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: ["Johannes Wild", "Portfolio", "CMO", "Digital Leader", "Brand Builder"],
    authors: [{ name: "Johannes Wild" }],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'de': `${baseUrl}/de`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: "Johannes Wild Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  // Fetch messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Border lines - bottom and sides only */}
          <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-dark-border z-50" />
          <div className="fixed top-0 left-0 bottom-0 w-[2px] bg-dark-border z-50" />
          <div className="fixed top-0 right-0 bottom-0 w-[2px] bg-dark-border z-50" />
          
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

