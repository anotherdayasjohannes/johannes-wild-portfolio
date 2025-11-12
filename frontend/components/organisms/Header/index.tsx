'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Logo, Link, Button } from '@/components/atoms';
import { LanguageSwitcher } from '@/components/molecules';
import { HeaderProps } from './types';

export const Header = ({
  logo = { href: '/', width: 180, height: 50 },
  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Get in Touch',
  sticky = true,
  transparent = false,
  showLanguageSwitcher = true,
  className = '',
}: HeaderProps) => {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClasses = `
    ${sticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}
    transition-all duration-300
    ${isScrolled 
      ? 'bg-[#1A2A40]/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
      : transparent 
        ? 'bg-transparent' 
        : 'bg-[#1A2A40]/80 backdrop-blur-md'
    }
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo 
              href={logo.href} 
              width={logo.width} 
              height={logo.height}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant="default"
                className="text-[#F2F2F2] hover:text-[#5A7FB8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" href="#contact">
              {ctaLabel}
            </Button>
            {showLanguageSwitcher && (
              <LanguageSwitcher currentLocale={locale} />
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F2F2F2] hover:text-[#5A7FB8] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="default"
                  onClick={handleLinkClick}
                  className="text-[#F2F2F2] hover:text-[#5A7FB8] transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" size="md" href="#contact" className="w-full">
                {ctaLabel}
              </Button>
              {showLanguageSwitcher && (
                <div className="pt-4 border-t border-white/10">
                  <LanguageSwitcher currentLocale={locale} />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};



