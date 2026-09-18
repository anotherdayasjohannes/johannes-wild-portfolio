import Link from "next/link";
import { nav, site } from "@/content/site";
import { Pill } from "@/components/ui/Pill";

type HeaderProps = {
  /** "photo" places the header over the hero image in off-white. */
  tone?: "fg" | "photo";
};

export function Header({ tone = "fg" }: HeaderProps) {
  const onPhoto = tone === "photo";
  const color = onPhoto ? "text-on-photo" : "text-fg";
  const position = onPhoto ? "absolute inset-x-0 top-0 z-20" : "relative";

  return (
    <header className={`${position} ${color}`}>
      <nav
        aria-label="Hauptnavigation"
        className="flex items-center justify-between px-gutter py-[15px]"
      >
        <Link href="/" className="text-body font-medium tracking-tight">
          {site.wordmark}
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-wipe text-caption font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Pill href="/#kontakt" tone={tone}>
            Kontakt
          </Pill>
        </div>
      </nav>
    </header>
  );
}
