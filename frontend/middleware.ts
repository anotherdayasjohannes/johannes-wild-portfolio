import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Automatically detect the user's locale based on their browser settings
  localeDetection: true,

  // Use path-based routing: /en/about, /de/about
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - Files with extensions (e.g. favicon.ico)
  // - Test/demo pages (playground, demo-page, test-animations)
  matcher: ['/((?!api|_next|_vercel|playground|demo-page|test-animations|.*\\..*).*)']
};

