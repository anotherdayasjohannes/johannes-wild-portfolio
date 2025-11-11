import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales - MUST be exported for middleware
export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
