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

  // Color styles
  const colors = {
    primary: 'text-gray-50',
    secondary: 'text-gray-300',
    tertiary: 'text-gray-400',
    accent: 'text-blue-400',
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

