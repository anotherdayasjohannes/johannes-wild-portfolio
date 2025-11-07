import { CardProps } from './types';

export const Card = ({
  variant = 'default',
  children,
  hover = false,
  padding = 'md',
  className = '',
  ...props
}: CardProps) => {
  // Variant styles using Adobe Color palette
  const variants = {
    default: `
      bg-[#1A2A40]
      border 
      border-[#253B59]
    `,
    elevated: `
      bg-[#1A2A40]
      shadow-lg 
      shadow-black/40
    `,
    outlined: `
      bg-transparent 
      border-2 
      border-[#253B59]
    `,
    glass: `
      bg-[#1A2A40]/50
      backdrop-blur-sm 
      border 
      border-[#253B59]/50
    `,
  };

  // Padding styles
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl hover:border-[#42628C]/50'
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

