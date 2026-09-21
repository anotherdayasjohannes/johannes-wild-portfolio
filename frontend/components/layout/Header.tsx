import Link from "next/link";
import { family, nav, site } from "@/content/site";

/**
 * Always in normal flow on the page background, so the nav never sits on a
 * photo. The hero subtracts the header height (--header-h) from the viewport.
 */
export function Header() {
  return (
    <header className="relative md:h-[var(--header-h)]">
      <nav
        aria-label="Hauptnavigation"
        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 p-gutter text-body font-retina leading-tight"
      >
        <Link href="/johannes" className="u text-ink-2 [--u-color:var(--ink)]">
          {site.wordmark}
        </Link>
        <ul className="order-3 flex w-full flex-wrap gap-x-5 gap-y-2 md:order-none md:w-auto md:gap-7">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="u">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={family.href}
          className="marker u text-ui font-medium text-pink-text [--u-color:var(--pink)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {family.label}
        </a>
      </nav>
    </header>
  );
}
