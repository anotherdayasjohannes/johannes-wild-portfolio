import { notFound } from 'next/navigation';
import { locales } from '@/lib/locales';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  // Load messages manually
  const messages = (await import(`@/messages/${locale}.json`)).default;
  
  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0 }}>
        <LocaleProvider locale={locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

