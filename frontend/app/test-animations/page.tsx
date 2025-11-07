'use client';

import { FadeIn, SlideUp } from '@/lib/animations';
import { Card, Heading, Text } from '@/components';

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] p-8">
      <Heading level="h1" className="mb-8">Animation Test</Heading>
      
      <div className="space-y-8">
        <Card variant="elevated" padding="lg">
          <Heading level="h3">No Animation (Control)</Heading>
          <Text>This card should always be visible immediately</Text>
        </Card>

        <FadeIn>
          <Card variant="elevated" padding="lg">
            <Heading level="h3">FadeIn Test</Heading>
            <Text>This should fade in when scrolled into view</Text>
          </Card>
        </FadeIn>

        <SlideUp>
          <Card variant="glass" padding="lg">
            <Heading level="h3">SlideUp Test</Heading>
            <Text>This should slide up when scrolled into view</Text>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}

