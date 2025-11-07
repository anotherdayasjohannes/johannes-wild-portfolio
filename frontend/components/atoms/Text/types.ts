import { HTMLAttributes } from 'react';

export type TextVariant = 'body' | 'caption' | 'label' | 'small';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'success' | 'warning' | 'error';
export type TextAlign = 'left' | 'center' | 'right';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  weight?: TextWeight;
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
}

