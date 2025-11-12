import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = locale || 'en';
  
  if (!['en', 'de'].includes(baseLocale)) {
    notFound();
  }

  return {
    locale: baseLocale,
    messages: (await import(`../messages/${baseLocale}.json`)).default
  };
});

