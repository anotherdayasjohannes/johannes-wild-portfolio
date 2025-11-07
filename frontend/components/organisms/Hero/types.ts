export interface HeroProps {
  headline: string;
  tagline: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  imageUrl?: string;
  imageAlt?: string;
  showScrollIndicator?: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
  className?: string;
}

