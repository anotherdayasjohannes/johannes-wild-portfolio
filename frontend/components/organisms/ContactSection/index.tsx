'use client';

import { useState, FormEvent } from 'react';
import { Button, Heading, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { FadeIn, SlideUp } from '@/lib/animations';
import { ContactSectionProps } from './types';

export const ContactSection = ({
  title,
  subtitle,
  contactInfo,
  formLabels = {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
  },
  infoLabels = {
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
  },
  className = '',
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Implement actual form submission
    // For now, just simulate a delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className={`relative py-24 bg-dark-surface ${className}`}>
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <Heading level="h2" size="4xl" className="mb-4">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="large" color="secondary">
                {subtitle}
              </Text>
            )}
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7">
            <SlideUp>
              <Card variant="elevated" padding="lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      <Text variant="body" color="primary" className="font-medium">
                        {formLabels.name}
                      </Text>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text-primary focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      <Text variant="body" color="primary" className="font-medium">
                        {formLabels.email}
                      </Text>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text-primary focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      <Text variant="body" color="primary" className="font-medium">
                        {formLabels.message}
                      </Text>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text-primary focus:border-brand-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === 'sending'}
                      className="w-full"
                    >
                      {status === 'sending' ? formLabels.sending : formLabels.submit}
                    </Button>
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <Text variant="body" className="text-green-400">
                        {formLabels.success}
                      </Text>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <Text variant="body" className="text-red-400">
                        {formLabels.error}
                      </Text>
                    </div>
                  )}
                </form>
              </Card>
            </SlideUp>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <SlideUp delay={0.2}>
              <Card variant="elevated" padding="lg">
                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <Text variant="caption" color="tertiary" className="uppercase tracking-wider mb-2 block">
                      {infoLabels.phone}
                    </Text>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="group"
                    >
                      <Text variant="body" color="primary" className="group-hover:text-brand-primary transition-colors">
                        {contactInfo.phone}
                      </Text>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <Text variant="caption" color="tertiary" className="uppercase tracking-wider mb-2 block">
                      {infoLabels.email}
                    </Text>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="group"
                    >
                      <Text variant="body" color="primary" className="group-hover:text-brand-primary transition-colors break-all">
                        {contactInfo.email}
                      </Text>
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <Text variant="caption" color="tertiary" className="uppercase tracking-wider mb-2 block">
                      {infoLabels.address}
                    </Text>
                    <Text variant="body" color="secondary" className="whitespace-pre-line">
                      {contactInfo.address}
                    </Text>
                  </div>
                </div>
              </Card>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

