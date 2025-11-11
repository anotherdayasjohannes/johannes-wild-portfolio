'use client';

import { Header, Hero, Footer } from '@/components';

export default function DemoPage() {
  return (
    <>
      {/* Header - Transparent over Hero, solid on scroll */}
      <Header 
        sticky={true}
        transparent={true}
      />

      {/* Hero - Full screen */}
      <Hero
        name="Johannes Wild"
        rotatingTitles={['Strategic Thinker', 'Digital Leader', 'Brand Builder', 'Innovation Driver']}
        tagline="Helping brands stand out in the digital era through analytical thinking and structured execution."
        primaryCTA={{ label: "Let's work together", href: '#contact' }}
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
        imageAlt="Professional Portrait"
        stats={[
          { value: '15+', label: 'Years Leadership' },
          { value: '50+', label: 'Projects Delivered' },
          { value: 'Global', label: 'Experience' },
        ]}
      />

      {/* Your other sections would go here */}
      <section className="min-h-screen bg-[#1A2A40] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Section</h2>
          <p className="text-gray-400">More content here...</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}



