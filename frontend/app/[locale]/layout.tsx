import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans min-h-screen`}>
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

