import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Underline colour on hover; defaults to currentColor. */
  tone?: "orange" | "pink" | "ink";
};

const toneVar: Record<NonNullable<ArrowLinkProps["tone"]>, string> = {
  orange: "[--u-color:var(--orange)]",
  pink: "[--u-color:var(--pink)]",
  ink: "",
};

/** Text link with a cap-height arrow and a fading underline. */
export function ArrowLink({ href, children, className = "", external, tone = "ink" }: ArrowLinkProps) {
  const classes = `u case inline-block ${toneVar[tone]} ${className}`;
  const inner = (
    <>
      {children} <span aria-hidden>→</span>
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    const ext = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
