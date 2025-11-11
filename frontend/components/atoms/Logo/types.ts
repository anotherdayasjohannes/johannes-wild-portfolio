import { HTMLAttributes } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  href?: string; // Optional link (usually to homepage)
}



