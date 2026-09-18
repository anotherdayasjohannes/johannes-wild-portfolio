import Link from "next/link";
import { footerLinks, nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-gutter pb-6 pt-10">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-12">
        <div className="col-span-2 md:col-span-5">
          <p className="text-h2 font-medium">{site.name}</p>
          <p className="mt-3 max-w-md text-caption text-muted">{site.positioning}</p>
        </div>

        <FooterColumn title="Seiten">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-wipe">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#kontakt" className="link-wipe">
              Kontakt
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title="Kontakt">
          <li>
            <a href={`mailto:${site.email}`} className="link-wipe break-all">
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              className="link-wipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Rechtliches">
          {footerLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-wipe">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-line pt-4 text-meta text-muted md:flex-row md:justify-between">
        <p>
          © {site.copyrightYear} {site.name}
        </p>
        <p>{site.photoCredit}</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2">
      <p className="mb-4 text-label uppercase text-muted">({title})</p>
      <ul className="grid gap-2 text-caption">{children}</ul>
    </div>
  );
}
