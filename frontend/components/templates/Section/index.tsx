import { Container } from '@/components/atoms';
import { SectionProps } from './types';

export const Section = ({
  children,
  spacing = 'lg',
  fullWidth = false,
  background = 'transparent',
  className = '',
  ...props
}: SectionProps) => {
  // Spacing (padding) styles
  const spacings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  // Background styles
  const backgrounds = {
    primary: 'bg-[#0A0A0A]',
    secondary: 'bg-gray-900',
    transparent: 'bg-transparent',
  };

  const content = fullWidth ? (
    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
  ) : (
    <Container>{children}</Container>
  );

  return (
    <section
      className={`
        ${spacings[spacing]}
        ${backgrounds[background]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {content}
    </section>
  );
};








