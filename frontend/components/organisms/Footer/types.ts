import { SocialPlatform } from '@/components/molecules/SocialLink/types';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface FooterProps {
  companyName?: string;
  tagline?: string;
  quickLinksLabel?: string;
  socialLinks?: FooterSocial[];
  footerLinks?: FooterLink[];
  showNewsletter?: boolean;
  className?: string;
  copyright?: string;
}



