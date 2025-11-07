import { CardProps } from './types';

export const Card = ({
  variant = 'default',
  children,
  hover = false,
  padding = 'md',
  className = '',
  ...props
}: CardProps) => {
  // Variant styles
  const variants = {
    default: `
      bg-gray-800 
      border 
      border-gray-700
    `,
    elevated: `
      bg-gray-800 
      shadow-lg 
      shadow-black/20
    `,
    outlined: `
      bg-transparent 
      border-2 
      border-gray-700
    `,
    glass: `
      bg-gray-800/50 
      backdrop-blur-sm 
      border 
      border-gray-700/50
    `,
  };

  // Padding styles
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50'
    : '';

  return (
    <div
      className={`
        ${variants[variant]}
        ${paddings[padding]}
        ${hoverStyles}
        rounded-xl
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  );
};

