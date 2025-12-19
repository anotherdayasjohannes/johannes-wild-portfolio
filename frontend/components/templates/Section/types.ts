import { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  background?: 'primary' | 'secondary' | 'transparent';
}








