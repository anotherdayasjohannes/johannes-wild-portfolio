import Link from "next/link";
import { footerLinks, footerPages, site } from "@/content/site";
import { fontCredit } from "@/app/fonts";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="mt-footer grid grid-cols-12 gap-x-gutter gap-y-10 border-t border-line px-gutter pb-gutter pt-10 text-body"
    >
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-lead font-light">{site.contactLead}</h2>
        <p className="mt-5 text-lead font-light">
          <ArrowLink href={`mailto:${site.email}`} tone="orange">
            {site.email}
          </ArrowLink>
        </p>
        <p className="mt-6 text-ui font-retina text-ink-2">{site.location}</p>
      </div>

      <FooterColumn title="Seiten" className="md:col-start-7">
        {footerPages.map((item) => (
          <Link key={item.href} href={item.href} className="u">
            {item.label}
          </Link>
        ))}
      </FooterColumn>

      <FooterColumn title="Kontakt">
        <a href={site.linkedin} className="u" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`} className="u">
          E-Mail
        </a>
      </FooterColumn>

      <FooterColumn title="Rechtliches">
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href} className="u">
            {item.label}
          </Link>
        ))}
      </FooterColumn>

      <div className="col-span-12 flex flex-col gap-2 pt-6 text-ui font-retina text-ink-2 md:flex-row md:justify-between">
        <span className="tnum">
          © {site.copyrightYear} {site.name}
        </span>
        <span>
          {site.photoCredit}
          {fontCredit ? ` · ${fontCredit}` : ""}
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`col-span-6 grid content-start gap-1.5 leading-list md:col-span-2 ${className}`}>
      <p className="mb-1.5 text-ui font-medium text-ink-2">{title}</p>
      {children}
    </div>
  );
}
