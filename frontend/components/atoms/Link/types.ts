import { AnchorHTMLAttributes } from 'react';

export type LinkVariant = 'default' | 'underline' | 'button';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: LinkVariant;
  external?: boolean;
  children: React.ReactNode;
}

