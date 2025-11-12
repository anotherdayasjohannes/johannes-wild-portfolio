import { getRequestConfig } from 'next-intl/server';

// Supported locales
export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
