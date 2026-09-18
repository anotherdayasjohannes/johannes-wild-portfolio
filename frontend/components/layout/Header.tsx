import Link from "next/link";
import { family, nav, site } from "@/content/site";

type HeaderProps = {
  /** Over the hero the header floats; on inner pages it sits in the flow. */
  overlay?: boolean;
};

export function Header({ overlay = false }: HeaderProps) {
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-20" : "relative"}`}>
      <nav
        aria-label="Hauptnavigation"
        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 p-gutter text-body font-retina leading-tight"
      >
        <Link href="/" className="u text-ink-2 [--u-color:var(--ink)]">
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
