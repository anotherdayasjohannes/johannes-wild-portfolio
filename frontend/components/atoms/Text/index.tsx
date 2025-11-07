import { TextProps } from './types';
import { tokens } from '@/lib/design-tokens';

export const Text = ({
  variant = 'body',
  color = 'primary',
  align = 'left',
  weight = 'normal',
  children,
  as: Component = 'p',
  className = '',
  ...props
}: TextProps) => {
  // Variant styles (size)
  const variants = {
    body: 'text-base leading-relaxed',
    caption: 'text-lg leading-relaxed',
    label: 'text-sm leading-snug',
    small: 'text-xs leading-tight',
  };

  // Color styles using Adobe Color palette
  const colors = {
    primary: 'text-[#F2F2F2]',      // UI/UX-4
    secondary: 'text-[#D1D5DB]',    // Light gray
    tertiary: 'text-[#9CA3AF]',     // Muted gray
    accent: 'text-[#42628C]',       // Brand blue
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400',
  };

  // Text align
  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Font weight
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Component
      className={`
        ${variants[variant]}
        ${colors[color]}
        ${aligns[align]}
        ${weights[weight]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </Component>
  );
};

