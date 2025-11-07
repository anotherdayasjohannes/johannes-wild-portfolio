'use client';

import { ButtonProps } from './types';
import { tokens } from '@/lib/design-tokens';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  // Variant styles
  const variants = {
    primary: `
      bg-[${tokens.colors.brand.primary}] 
      text-white 
      hover:opacity-90
      active:opacity-80
    `,
    secondary: `
      bg-[${tokens.colors.background.tertiary}] 
      text-[${tokens.colors.text.primary}]
      hover:bg-[${tokens.colors.neutral[700]}]
    `,
    ghost: `
      bg-transparent 
      text-[${tokens.colors.text.primary}]
      hover:bg-[${tokens.colors.background.secondary}]
    `,
    outline: `
      bg-transparent 
      border 
      border-[${tokens.colors.border.default}]
      text-[${tokens.colors.text.primary}]
      hover:border-[${tokens.colors.brand.primary}]
      hover:text-[${tokens.colors.brand.primary}]
    `,
  };

  // Size styles
  const sizes = {
    sm: `px-3 py-1.5 text-sm`,
    md: `px-4 py-2 text-base`,
    lg: `px-6 py-3 text-lg`,
  };

  const baseStyles = `
    inline-flex 
    items-center 
    justify-center 
    gap-2
    font-medium 
    rounded-lg
    transition-all 
    duration-200
    disabled:opacity-50 
    disabled:cursor-not-allowed
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-[${tokens.colors.brand.primary}]
    focus:ring-offset-[${tokens.colors.background.primary}]
  `;

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && leftIcon}
      {children}
      {!isLoading && rightIcon && rightIcon}
    </button>
  );
};

