import { HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}








