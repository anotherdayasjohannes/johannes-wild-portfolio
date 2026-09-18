import Link from "next/link";

type PillProps = {
  href: string;
  children: string;
  tone?: "fg" | "photo";
  className?: string;
  /** Opens in a new tab; use for URLs outside this site. */
  external?: boolean;
};

/** Pill link with "↓" arrow, background wipe on hover. */
export function Pill({ href, children, tone = "fg", className = "", external }: PillProps) {
  const toneClass = tone === "photo" ? "pill-on-photo text-on-photo" : "pill-on-fg text-fg";
  const classes = `pill ${toneClass} text-caption font-medium ${className}`;
  const inner = (
    <>
      <span className="pill-arrow" aria-hidden>
        ↓
      </span>
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
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
