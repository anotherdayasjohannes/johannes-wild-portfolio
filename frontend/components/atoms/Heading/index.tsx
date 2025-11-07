import { HeadingProps } from './types';

export const Heading = ({
  level = 'h2',
  size,
  color = 'primary',
  weight = 'bold',
  gradient = false,
  children,
  className = '',
  ...props
}: HeadingProps) => {
  const Component = level;

  // Default size based on level if not specified
  const defaultSizes = {
    h1: '5xl',
    h2: '4xl',
    h3: '3xl',
    h4: '2xl',
    h5: 'xl',
    h6: 'lg',
  };

  const actualSize = size || defaultSizes[level];

  // Size styles
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl md:text-5xl',
    '5xl': 'text-5xl md:text-6xl',
    '6xl': 'text-6xl md:text-7xl',
    '7xl': 'text-7xl md:text-8xl',
  };

  // Color styles using Adobe Color palette
  const colors = {
    primary: 'text-[#F2F2F2]',   // UI/UX-4
    secondary: 'text-[#D1D5DB]',
    accent: 'text-[#42628C]',    // Brand blue
  };

  // Weight styles
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const gradientStyle = gradient
    ? 'bg-gradient-to-r from-[#5A7FB8] via-[#42628C] to-[#253B59] bg-clip-text text-transparent'
    : '';

  return (
    <Component
      className={`
        ${sizes[actualSize]}
        ${!gradient ? colors[color] : ''}
        ${weights[weight]}
        ${gradientStyle}
        leading-tight
        tracking-tight
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </Component>
  );
};

