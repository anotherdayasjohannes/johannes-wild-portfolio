import { HTMLAttributes } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export type HeadingColor = 'primary' | 'secondary' | 'accent';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  color?: HeadingColor;
  weight?: HeadingWeight;
  gradient?: boolean;
  children: React.ReactNode;
}



