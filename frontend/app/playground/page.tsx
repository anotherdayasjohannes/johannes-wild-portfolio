'use client';

import { useState } from 'react';
import {
  Button,
  Heading,
  Text,
  Container,
  Link,
  Card,
  SkillBar,
  SocialLink,
  Section,
  Logo,
  GlassCard,
} from '@/components';
import {
  FadeIn,
  SlideUp,
  SlideDown,
  SlideInLeft,
  SlideInRight,
  Scale,
  Stagger,
  AutoAnimate,
} from '@/lib/animations';

export default function PlaygroundPage() {
  // State for AutoAnimate demo
  const [skills, setSkills] = useState([
    { id: 1, name: 'React & Next.js', level: 6, color: '#42628C' as const },
    { id: 2, name: 'TypeScript', level: 5, color: '#5A7FB8' as const },
    { id: 3, name: 'Tailwind CSS', level: 6, color: '#3A5374' as const },
    { id: 4, name: 'Motion One', level: 5, color: '#6B8CAF' as const },
  ]);

  const addSkill = () => {
    const newSkills = [
      'Node.js',
      'GraphQL',
      'PostgreSQL',
      'Docker',
      'AWS',
    ];
    const randomSkill = newSkills[Math.floor(Math.random() * newSkills.length)];
    const randomLevel = Math.floor(Math.random() * 3) + 4;
    const colors = ['#42628C', '#5A7FB8', '#3A5374', '#6B8CAF'] as const;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setSkills([...skills, {
      id: Date.now(),
      name: randomSkill,
      level: randomLevel,
      color: randomColor,
    }]);
  };

  const removeSkill = () => {
    if (skills.length > 0) {
      setSkills(skills.slice(0, -1));
    }
  };

  const shuffleSkills = () => {
    setSkills([...skills].sort(() => Math.random() - 0.5));
  };
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <Section spacing="md" background="secondary">
        <div className="text-center">
          {/* Logo Showcase */}
          <div className="flex justify-center mb-8">
            <Logo width={240} height={74} href="#" />
          </div>
          
          <Heading level="h1" gradient>
            Component Playground
          </Heading>
          <Text color="secondary" className="mt-4">
            Interactive showcase of all design system components
          </Text>
        </div>
      </Section>

      {/* Animations */}
      <Section spacing="lg">
        <Heading level="h2" className="mb-8">
          🎬 Animations (Motion One)
        </Heading>

        <Card variant="glass" padding="lg" className="mb-8">
          <Heading level="h4" className="mb-4">
            What Are These?
          </Heading>
          <Text color="secondary" className="mb-4">
            Modern, lightweight animations using Motion One (5KB). Scroll down to see each animation trigger as it enters the viewport. 
            All animations are smooth 60fps and work great on mobile!
          </Text>
          <div className="flex gap-2">
            <Text variant="small" color="tertiary">Bundle: Motion One (5KB) + Auto-Animate (2KB) = 7KB total</Text>
          </div>
        </Card>

        <div className="space-y-12">
          {/* FadeIn */}
          <div>
            <Text weight="semibold" className="mb-6">
              FadeIn Animation
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn>
                <Card variant="elevated" padding="lg">
                  <Heading level="h5" className="mb-2">Fade In 1</Heading>
                  <Text color="secondary" variant="small">
                    Smoothly fades in when scrolled into view
                  </Text>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card variant="elevated" padding="lg">
                  <Heading level="h5" className="mb-2">Fade In 2</Heading>
                  <Text color="secondary" variant="small">
                    With 0.2s delay
                  </Text>
                </Card>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Card variant="elevated" padding="lg">
                  <Heading level="h5" className="mb-2">Fade In 3</Heading>
                  <Text color="secondary" variant="small">
                    With 0.4s delay
                  </Text>
                </Card>
              </FadeIn>
            </div>
          </div>

          {/* SlideUp */}
          <div>
            <Text weight="semibold" className="mb-6">
              SlideUp Animation
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SlideUp>
                <GlassCard intensity="medium" padding="lg">
                  <Heading level="h5" className="mb-2">Slide Up</Heading>
                  <Text color="secondary" variant="small">
                    Slides up while fading in
                  </Text>
                </GlassCard>
              </SlideUp>
              <SlideUp delay={0.2}>
                <GlassCard intensity="medium" padding="lg">
                  <Heading level="h5" className="mb-2">Slide Up (Delayed)</Heading>
                  <Text color="secondary" variant="small">
                    Perfect for sequential reveals
                  </Text>
                </GlassCard>
              </SlideUp>
            </div>
          </div>

          {/* SlideInLeft & SlideInRight */}
          <div>
            <Text weight="semibold" className="mb-6">
              SlideIn Animations (Left/Right)
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SlideInLeft>
                <Card variant="outlined" padding="lg">
                  <Heading level="h5" className="mb-2">← Slide In Left</Heading>
                  <Text color="secondary" variant="small">
                    Slides in from the left side
                  </Text>
                </Card>
              </SlideInLeft>
              <SlideInRight>
                <Card variant="outlined" padding="lg">
                  <Heading level="h5" className="mb-2">Slide In Right →</Heading>
                  <Text color="secondary" variant="small">
                    Slides in from the right side
                  </Text>
                </Card>
              </SlideInRight>
            </div>
          </div>

          {/* Scale */}
          <div>
            <Text weight="semibold" className="mb-6">
              Scale Animation
            </Text>
            <Scale>
              <GlassCard intensity="strong" padding="lg" className="max-w-2xl mx-auto">
                <div className="text-center">
                  <Heading level="h4" className="mb-3">Scale Effect</Heading>
                  <Text color="secondary" className="mb-4">
                    Scales up from 90% to 100% while fading in. Great for feature cards!
                  </Text>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="primary">Learn More</Button>
                    <Button size="sm" variant="ghost">View Demo</Button>
                  </div>
                </div>
              </GlassCard>
            </Scale>
          </div>

          {/* Stagger */}
          <div>
            <Text weight="semibold" className="mb-6">
              Stagger Animation (Children Animate in Sequence)
            </Text>
            <Stagger staggerDelay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card variant="elevated" padding="md">
                  <div className="text-center">
                    <Heading level="h4" className="text-3xl mb-2">🎨</Heading>
                    <Text variant="small">Item 1</Text>
                  </div>
                </Card>
                <Card variant="elevated" padding="md">
                  <div className="text-center">
                    <Heading level="h4" className="text-3xl mb-2">⚡</Heading>
                    <Text variant="small">Item 2</Text>
                  </div>
                </Card>
                <Card variant="elevated" padding="md">
                  <div className="text-center">
                    <Heading level="h4" className="text-3xl mb-2">🚀</Heading>
                    <Text variant="small">Item 3</Text>
                  </div>
                </Card>
                <Card variant="elevated" padding="md">
                  <div className="text-center">
                    <Heading level="h4" className="text-3xl mb-2">✨</Heading>
                    <Text variant="small">Item 4</Text>
                  </div>
                </Card>
              </div>
            </Stagger>
          </div>

          {/* AutoAnimate (Dynamic List) */}
          <div>
            <Text weight="semibold" className="mb-6">
              AutoAnimate (Dynamic Lists - Zero Config!)
            </Text>
            <Card variant="glass" padding="lg" className="max-w-2xl mx-auto">
              <Heading level="h5" className="mb-4">Skill Bars with Auto Animation</Heading>
              <Text color="secondary" variant="small" className="mb-6">
                Click the buttons to add, remove, or shuffle. Watch the <strong>double animation</strong>: items slide in/out (AutoAnimate) + bars fill up (SkillBar animation)!
              </Text>
              
              {/* Control Buttons */}
              <div className="flex gap-3 mb-6 flex-wrap">
                <Button variant="primary" size="sm" onClick={addSkill}>
                  ➕ Add Skill
                </Button>
                <Button variant="secondary" size="sm" onClick={removeSkill} disabled={skills.length === 0}>
                  ➖ Remove Last
                </Button>
                <Button variant="ghost" size="sm" onClick={shuffleSkills}>
                  🔀 Shuffle
                </Button>
              </div>

              {/* AutoAnimated List */}
              <AutoAnimate className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar 
                    key={skill.id}
                    name={skill.name} 
                    level={skill.level} 
                    maxLevel={6} 
                    color={skill.color}
                    animated={true}
                  />
                ))}
              </AutoAnimate>
              
              {skills.length === 0 && (
                <Text color="secondary" className="text-center py-8">
                  No skills yet. Click "Add Skill" to see the animation!
                </Text>
              )}
            </Card>
          </div>

          {/* Combined Example */}
          <div>
            <Text weight="semibold" className="mb-6">
              Combined Example (Multiple Animations)
            </Text>
            <SlideUp>
              <GlassCard hover intensity="medium" padding="lg" className="max-w-3xl mx-auto">
                <FadeIn delay={0.2}>
                  <Heading level="h3" className="mb-4 text-center">
                    Build Something Amazing
                  </Heading>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <Text color="secondary" className="mb-6 text-center">
                    Combine animations for sophisticated effects. This card slides up, then the heading and text fade in sequentially.
                  </Text>
                </FadeIn>
                <Stagger staggerDelay={0.1}>
                  <div className="flex justify-center gap-3">
                    <Button variant="primary">Get Started</Button>
                    <Button variant="ghost">Learn More</Button>
                    <Button variant="outline">View Docs</Button>
                  </div>
                </Stagger>
              </GlassCard>
            </SlideUp>
          </div>
        </div>

        <Card variant="outlined" padding="lg" className="mt-12">
          <Heading level="h5" className="mb-4">
            💡 Usage Tips
          </Heading>
          <div className="space-y-2 text-sm">
            <Text color="secondary">• Use <code className="px-2 py-1 bg-[#1A2A40] rounded">FadeIn</code> for simple, subtle reveals</Text>
            <Text color="secondary">• Use <code className="px-2 py-1 bg-[#1A2A40] rounded">SlideUp</code> for content that needs more impact</Text>
            <Text color="secondary">• Use <code className="px-2 py-1 bg-[#1A2A40] rounded">Stagger</code> for grids and lists</Text>
            <Text color="secondary">• Use <code className="px-2 py-1 bg-[#1A2A40] rounded">AutoAnimate</code> for dynamic content (zero config!)</Text>
            <Text color="secondary">• Add <code className="px-2 py-1 bg-[#1A2A40] rounded">delay</code> prop to create sequences</Text>
            <Text color="secondary">• All animations are 60fps, GPU-accelerated, and mobile-friendly</Text>
          </div>
        </Card>
      </Section>

      {/* Buttons */}
      <Section spacing="lg" background="secondary">
        <Heading level="h2" className="mb-8">
          Buttons
        </Heading>
        
        <div className="space-y-8">
          {/* Button Variants */}
          <div>
            <Text weight="semibold" className="mb-4">
              Variants
            </Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <Text weight="semibold" className="mb-4">
              Sizes
            </Text>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <Text weight="semibold" className="mb-4">
              States
            </Text>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button fullWidth>Full Width</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section spacing="lg" background="secondary">
        <Heading level="h2" className="mb-8">
          Typography
        </Heading>

        <div className="space-y-8">
          {/* Headings */}
          <div>
            <Text weight="semibold" className="mb-4">
              Headings
            </Text>
            <div className="space-y-4">
              <Heading level="h1">Heading 1 - The Quick Brown Fox</Heading>
              <Heading level="h2">Heading 2 - The Quick Brown Fox</Heading>
              <Heading level="h3">Heading 3 - The Quick Brown Fox</Heading>
              <Heading level="h4">Heading 4 - The Quick Brown Fox</Heading>
              <Heading level="h5">Heading 5 - The Quick Brown Fox</Heading>
              <Heading level="h6">Heading 6 - The Quick Brown Fox</Heading>
              <Heading level="h2" gradient>
                Gradient Heading - The Quick Brown Fox
              </Heading>
            </div>
          </div>

          {/* Text Variants */}
          <div>
            <Text weight="semibold" className="mb-4">
              Text Variants
            </Text>
            <div className="space-y-2">
              <Text variant="caption">
                Caption text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="body">
                Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="label">
                Label text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="small">
                Small text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <Text weight="semibold" className="mb-4">
              Text Colors
            </Text>
            <div className="space-y-2">
              <Text color="primary">Primary color text</Text>
              <Text color="secondary">Secondary color text</Text>
              <Text color="tertiary">Tertiary color text</Text>
              <Text color="accent">Accent color text</Text>
              <Text color="success">Success color text</Text>
              <Text color="warning">Warning color text</Text>
              <Text color="error">Error color text</Text>
            </div>
          </div>

          {/* Text Weights */}
          <div>
            <Text weight="semibold" className="mb-4">
              Text Weights
            </Text>
            <div className="space-y-2">
              <Text weight="light">Light weight</Text>
              <Text weight="normal">Normal weight</Text>
              <Text weight="medium">Medium weight</Text>
              <Text weight="semibold">Semibold weight</Text>
              <Text weight="bold">Bold weight</Text>
            </div>
          </div>
        </div>
      </Section>

      {/* Glass Cards (Apple-style) */}
      <Section spacing="lg">
        <Heading level="h2" className="mb-8">
          Glass Cards (Apple-style Effect) ✨
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard intensity="subtle" padding="lg">
            <Heading level="h4" className="mb-2">
              Subtle Glass
            </Heading>
            <Text color="secondary" variant="label">
              Light frosted effect
            </Text>
          </GlassCard>

          <GlassCard intensity="medium" padding="lg">
            <Heading level="h4" className="mb-2">
              Medium Glass
            </Heading>
            <Text color="secondary" variant="label">
              Balanced blur (default)
            </Text>
          </GlassCard>

          <GlassCard intensity="strong" padding="lg">
            <Heading level="h4" className="mb-2">
              Strong Glass
            </Heading>
            <Text color="secondary" variant="label">
              Heavy frosted blur
            </Text>
          </GlassCard>
        </div>

        <div className="mb-8">
          <Text weight="semibold" className="mb-4">
            Interactive Glass Cards (with hover)
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard hover intensity="medium" padding="lg" className="group">
              <Heading level="h4" className="mb-3">
                Hover Me! 🎨
              </Heading>
              <Text color="secondary" className="mb-4">
                Watch the glass effect intensify and the card lift on hover.
              </Text>
              <div className="flex gap-2">
                <Button size="sm" variant="primary">Primary</Button>
                <Button size="sm" variant="ghost">Ghost</Button>
              </div>
            </GlassCard>

            <GlassCard hover intensity="medium" padding="lg" className="group">
              <Heading level="h4" className="mb-3">
                Skills Preview 📊
              </Heading>
              <div className="space-y-3">
                <SkillBar name="Analytisches Denken" level={6} maxLevel={6} color="blue" animated={false} />
                <SkillBar name="Teamfähigkeit" level={6} maxLevel={6} color="green" animated={false} />
                <SkillBar name="Kreativität" level={5} maxLevel={6} color="purple" animated={false} />
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Regular Cards */}
      <Section spacing="lg" background="secondary">
        <Heading level="h2" className="mb-8">
          Regular Cards
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="default">
            <Heading level="h4" className="mb-2">
              Default Card
            </Heading>
            <Text color="secondary" variant="label">
              Standard card with border
            </Text>
          </Card>

          <Card variant="elevated">
            <Heading level="h4" className="mb-2">
              Elevated Card
            </Heading>
            <Text color="secondary" variant="label">
              Card with shadow effect
            </Text>
          </Card>

          <Card variant="outlined">
            <Heading level="h4" className="mb-2">
              Outlined Card
            </Heading>
            <Text color="secondary" variant="label">
              Card with thick border
            </Text>
          </Card>

          <Card variant="glass">
            <Heading level="h4" className="mb-2">
              Glass Card
            </Heading>
            <Text color="secondary" variant="label">
              Card with blur effect
            </Text>
          </Card>
        </div>

        <div className="mt-8">
          <Text weight="semibold" className="mb-4">
            Interactive Cards (with hover)
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" hover padding="lg">
              <Heading level="h4" className="mb-2">
                Hover Me!
              </Heading>
              <Text color="secondary" variant="label">
                This card has hover effects
              </Text>
            </Card>
            <Card variant="glass" hover padding="lg">
              <Heading level="h4" className="mb-2">
                Hover Me Too!
              </Heading>
              <Text color="secondary" variant="label">
                Glass variant with hover
              </Text>
            </Card>
            <Card variant="outlined" hover padding="sm">
              <Heading level="h5" className="mb-2">
                Small Padding
              </Heading>
              <Text color="secondary" variant="label">
                Outlined with less space
              </Text>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skill Bars */}
      <Section spacing="lg" background="secondary">
        <Heading level="h2" className="mb-8">
          Skill Bars
        </Heading>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card variant="glass" padding="lg">
            <Heading level="h4" className="mb-6">
              Technical Skills
            </Heading>
            <div className="space-y-4">
              <SkillBar name="Analytisches Denken" level={6} maxLevel={6} color="blue" />
              <SkillBar name="Kreativität" level={5} maxLevel={6} color="purple" />
              <SkillBar name="Teamfähigkeit" level={6} maxLevel={6} color="green" />
              <SkillBar name="Kommunikation" level={5} maxLevel={6} color="pink" />
              <SkillBar name="Durchsetzungsfähigkeit" level={4} maxLevel={6} color="blue" />
              <SkillBar name="Zielstrebigkeit" level={6} maxLevel={6} color="green" />
            </div>
          </Card>

          <Card variant="outlined" padding="lg">
            <Heading level="h4" className="mb-6">
              Languages (Percentage Mode)
            </Heading>
            <div className="space-y-4">
              <SkillBar 
                name="Deutsch" 
                level={100} 
                maxLevel={100} 
                color="blue" 
                showPercentage={false}
              />
              <SkillBar 
                name="Englisch" 
                level={80} 
                maxLevel={100} 
                color="purple"
                showPercentage={false}
              />
              <SkillBar 
                name="Spanisch" 
                level={70} 
                maxLevel={100} 
                color="green"
                showPercentage={false}
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* Social Links */}
      <Section spacing="lg">
        <Heading level="h2" className="mb-8">
          Social Links
        </Heading>

        <div className="space-y-8">
          <div>
            <Text weight="semibold" className="mb-4">
              Icon Only
            </Text>
            <div className="flex flex-wrap gap-6">
              <SocialLink platform="github" url="https://github.com" />
              <SocialLink platform="linkedin" url="https://linkedin.com" />
              <SocialLink platform="twitter" url="https://twitter.com" />
              <SocialLink platform="email" url="mailto:test@example.com" />
              <SocialLink platform="website" url="https://example.com" />
              <SocialLink platform="phone" url="tel:+491234567890" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              With Labels
            </Text>
            <div className="flex flex-wrap gap-6">
              <SocialLink 
                platform="github" 
                url="https://github.com/anotherdayasjohannes" 
                showLabel 
              />
              <SocialLink 
                platform="linkedin" 
                url="https://linkedin.com" 
                showLabel 
              />
              <SocialLink 
                platform="email" 
                url="mailto:johannes.wild@me.com" 
                showLabel 
                label="Email Me"
              />
              <SocialLink 
                platform="phone" 
                url="tel:+4917193193446" 
                showLabel 
                label="+49 171 9319346"
              />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              Different Sizes
            </Text>
            <div className="flex flex-wrap items-center gap-6">
              <SocialLink platform="github" url="#" size="sm" showLabel />
              <SocialLink platform="linkedin" url="#" size="md" showLabel />
              <SocialLink platform="twitter" url="#" size="lg" showLabel />
            </div>
          </div>
        </div>
      </Section>

      {/* Logo */}
      <Section spacing="lg" background="secondary">
        <Heading level="h2" className="mb-8">
          Logo
        </Heading>

        <div className="space-y-8">
          <div>
            <Text weight="semibold" className="mb-4">
              Default Size
            </Text>
            <div className="flex justify-center p-8 bg-[#1A2A40] rounded-xl">
              <Logo />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              Different Sizes
            </Text>
            <div className="flex flex-col items-center gap-6 p-8 bg-[#1A2A40] rounded-xl">
              <Logo width={160} height={49} />
              <Logo width={240} height={74} />
              <Logo width={320} height={99} />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              With Link (clickable)
            </Text>
            <div className="flex justify-center p-8 bg-[#1A2A40] rounded-xl">
              <Logo href="/" />
            </div>
          </div>
        </div>
      </Section>

      {/* Links */}
      <Section spacing="lg">
        <Heading level="h2" className="mb-8">
          Links
        </Heading>

        <div className="space-y-6">
          <div>
            <Text weight="semibold" className="mb-4">
              Link Variants
            </Text>
            <div className="space-y-4">
              <div>
                <Link href="#" variant="default">
                  Default link style
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline">
                  Underlined link style
                </Link>
              </div>
              <div>
                <Link href="#" variant="button">
                  Button link style
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              External Links
            </Text>
            <div className="space-y-4">
              <div>
                <Link href="https://github.com" external>
                  External link with icon
                </Link>
              </div>
              <div>
                <Link href="https://github.com" external variant="underline">
                  External underlined link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Container & Section Examples */}
      <Section spacing="lg">
        <Heading level="h2" className="mb-8">
          Layout Components
        </Heading>

        <div className="space-y-8">
          <Card variant="outlined" padding="lg">
            <Heading level="h4" className="mb-4">
              Container Sizes
            </Heading>
            <Text color="secondary" className="mb-4">
              Containers control max-width and center content
            </Text>
            <div className="space-y-4 text-sm text-gray-400">
              <div>• sm: max-w-3xl (~768px)</div>
              <div>• md: max-w-5xl (~1024px)</div>
              <div>• lg: max-w-7xl (~1280px) - Default</div>
              <div>• xl: max-w-[1400px]</div>
              <div>• full: max-w-full</div>
            </div>
          </Card>

          <Card variant="outlined" padding="lg">
            <Heading level="h4" className="mb-4">
              Section Spacing
            </Heading>
            <Text color="secondary" className="mb-4">
              Sections provide consistent vertical spacing
            </Text>
            <div className="space-y-4 text-sm text-gray-400">
              <div>• sm: py-8 md:py-12</div>
              <div>• md: py-12 md:py-16</div>
              <div>• lg: py-16 md:py-24 - Default</div>
              <div>• xl: py-24 md:py-32</div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <Section spacing="md" background="secondary">
        <div className="text-center">
          <Text color="secondary">
            Design System built with Atomic Design methodology
          </Text>
          <Text color="tertiary" variant="small" className="mt-2">
            View full documentation in /docs
          </Text>
        </div>
      </Section>
    </div>
  );
}

