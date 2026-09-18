import Link from "next/link";

type PillProps = {
  href: string;
  children: string;
  tone?: "fg" | "photo";
  className?: string;
};

/** Pill link with "↓" arrow, background wipe on hover. */
export function Pill({ href, children, tone = "fg", className = "" }: PillProps) {
  const toneClass = tone === "photo" ? "pill-on-photo text-on-photo" : "pill-on-fg text-fg";
  return (
    <Link href={href} className={`pill ${toneClass} text-caption font-medium ${className}`}>
      <span className="pill-arrow" aria-hidden>
        ↓
      </span>
      {children}
    </Link>
  );
}
