import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

