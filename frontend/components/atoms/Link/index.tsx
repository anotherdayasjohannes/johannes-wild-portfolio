import NextLink from 'next/link';
import { LinkProps } from './types';

export const Link = ({
  href,
  variant = 'default',
  external = false,
  children,
  className = '',
  ...props
}: LinkProps) => {
  // Variant styles using Adobe Color palette
  const variants = {
    default: `
      text-[#42628C]
      hover:text-[#5A7FB8]
      transition-colors 
      duration-200
    `,
    underline: `
      text-[#F2F2F2]
      underline 
      decoration-[#42628C]
      decoration-2 
      underline-offset-4
      hover:decoration-[#5A7FB8]
      transition-colors 
      duration-200
    `,
    button: `
      inline-flex 
      items-center 
      gap-2 
      px-4 
      py-2 
      bg-[#42628C]
      text-[#F2F2F2]
      rounded-lg 
      hover:bg-[#5A7FB8]
      transition-colors 
      duration-200
    `,
  };

  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const combinedClassName = `
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // If external or has protocol, use regular <a> tag
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...externalProps}
        {...props}
      >
        {children}
        {external && variant !== 'button' && (
          <svg
            className="inline-block w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  }

  // Use Next.js Link for internal links
  return (
    <NextLink href={href} className={combinedClassName} {...props}>
      {children}
    </NextLink>
  );
};

