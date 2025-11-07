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
  // Variant styles using Adobe Color palette
  const variants = {
    primary: `
      bg-[#42628C]
      text-[#F2F2F2]
      hover:bg-[#5A7FB8]
      active:bg-[#253B59]
    `,
    secondary: `
      bg-[#253B59]
      text-[#F2F2F2]
      hover:bg-[#1A2A40]
    `,
    ghost: `
      bg-transparent 
      text-[#F2F2F2]
      hover:bg-[#1A2A40]
    `,
    outline: `
      bg-transparent 
      border 
      border-[#253B59]
      text-[#F2F2F2]
      hover:border-[#42628C]
      hover:text-[#42628C]
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
    focus:ring-[#42628C]
    focus:ring-offset-[#0D0D0D]
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

