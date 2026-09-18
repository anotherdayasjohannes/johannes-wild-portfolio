import Link from "next/link";
import { family } from "@/content/family";
import { footerLinks } from "@/content/site";

/** Wordmark line for domain-level pages: "wir Wilden" left, place right. */
export function FamilyHeader() {
  return (
    <header className="flex items-baseline justify-between gap-5 px-gutter pb-5 pt-6 text-body leading-tight md:pb-6 md:pt-7">
      <Link href="/" className="u font-light" aria-label={`${family.title}, Startseite`}>
        {family.wordmark[0]} <b className="font-semibold">{family.wordmark[1]}</b>
      </Link>
      <span className="text-ui font-retina text-ink-2">{family.place}</span>
    </header>
  );
}

/** Footer for domain-level pages: family line left, legal links right. */
export function FamilyFooter() {
  return (
    <footer className="mx-gutter flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 border-t border-line pb-gutter pt-4 text-ui font-retina leading-tight text-ink-2 md:pt-5">
      <span>{family.footer}</span>
      <ul className="flex gap-5">
        {footerLinks.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="u">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
