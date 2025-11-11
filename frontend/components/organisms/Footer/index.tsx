'use client';

import { Text, Heading, Link } from '@/components/atoms';
import { SocialLink } from '@/components/molecules';
import { FooterProps } from './types';

export const Footer = ({
  companyName = 'Johannes Wild',
  tagline = 'Building digital experiences with passion and precision',
  socialLinks = [
    { platform: 'github', href: 'https://github.com/yourusername', label: 'GitHub' },
    { platform: 'linkedin', href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { platform: 'twitter', href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { platform: 'email', href: 'mailto:hello@example.com', label: 'Email' },
  ],
  footerLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Imprint', href: '/imprint' },
  ],
  showNewsletter = false,
  className = '',
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#1A2A40] border-t border-white/10 ${className}`}>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Column */}
          <div>
            <Heading level="h4" className="mb-4">
              {companyName}
            </Heading>
            <Text color="secondary" className="mb-6">
              {tagline}
            </Text>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                  label={social.label}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Heading level="h5" className="mb-4">
              Quick Links
            </Heading>
            <div className="flex flex-col space-y-3">
              <Link href="#about" variant="default" className="text-[#D1D5DB] hover:text-[#5A7FB8]">
                About Me
              </Link>
              <Link href="#projects" variant="default" className="text-[#D1D5DB] hover:text-[#5A7FB8]">
                Projects
              </Link>
              <Link href="#skills" variant="default" className="text-[#D1D5DB] hover:text-[#5A7FB8]">
                Skills
              </Link>
              <Link href="#contact" variant="default" className="text-[#D1D5DB] hover:text-[#5A7FB8]">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter (Optional) */}
          {showNewsletter && (
            <div>
              <Heading level="h5" className="mb-4">
                Stay Updated
              </Heading>
              <Text color="secondary" className="mb-4">
                Get notified about new projects and blog posts.
              </Text>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-[#253B59] border border-white/10 rounded-lg text-[#F2F2F2] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A7FB8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#42628C] text-white rounded-lg hover:bg-[#5A7FB8] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}

          {/* Contact Info (if no newsletter) */}
          {!showNewsletter && (
            <div>
              <Heading level="h5" className="mb-4">
                Get in Touch
              </Heading>
              <Text color="secondary" className="mb-3">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </Text>
              <Link 
                href="mailto:hello@example.com" 
                variant="underline"
                className="text-[#5A7FB8] hover:text-[#6B8CAF]"
              >
                hello@example.com
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <Text variant="small" color="secondary">
              © {currentYear} {companyName}. All rights reserved.
            </Text>

            {/* Footer Links */}
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="default"
                  className="text-[#9CA3AF] hover:text-[#F2F2F2] text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



