// TEMPORARILY DISABLED to debug 404 issues
// import createMiddleware from 'next-intl/middleware';
// import { locales, defaultLocale } from './i18n';

// export default createMiddleware({
//   locales,
//   defaultLocale,
//   localeDetection: true,
//   localePrefix: 'always'
// });

// export const config = {
//   matcher: ['/((?!api|_next|_vercel|playground|demo-page|test-animations|.*\\..*).*)']
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Just pass through - no redirects, no rewrites
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|playground|demo-page|test-animations|.*\\..*).*)']
};

