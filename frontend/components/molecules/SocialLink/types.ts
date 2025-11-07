export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'phone';

export interface SocialLinkProps {
  platform: SocialPlatform;
  url: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

