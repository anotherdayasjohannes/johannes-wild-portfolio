import { ContainerProps } from './types';

export const Container = ({
  size = 'lg',
  children,
  center = true,
  className = '',
  ...props
}: ContainerProps) => {
  // Size styles (max-width)
  const sizes = {
    sm: 'max-w-3xl',   // ~768px
    md: 'max-w-5xl',   // ~1024px
    lg: 'max-w-7xl',   // ~1280px
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const centerStyles = center ? 'mx-auto' : '';

  return (
    <div
      className={`
        ${sizes[size]}
        ${centerStyles}
        px-4 
        sm:px-6 
        lg:px-8
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  );
};



