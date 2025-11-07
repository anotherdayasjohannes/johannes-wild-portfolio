import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from './types';

export const Logo = ({
  width = 200,
  height = 60,
  href = '/',
  className = '',
  ...props
}: LogoProps) => {
  const logoImage = (
    <Image
      src="/images/logo.svg"
      alt="Johannes Wild"
      width={width}
      height={height}
      priority
      className={`transition-opacity duration-200 hover:opacity-80 ${className}`}
    />
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} {...props}>
        {logoImage}
      </Link>
    );
  }

  // Otherwise just return the image
  return <div {...props}>{logoImage}</div>;
};

