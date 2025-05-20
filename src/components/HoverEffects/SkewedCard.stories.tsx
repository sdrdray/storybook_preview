import type { Meta, StoryObj } from '@storybook/react';
import { Home, Star, Zap, Heart } from 'lucide-react';
import SkewedCard from './SkewedCard';

const meta: Meta<typeof SkewedCard> = {
  title: 'Components/HoverEffects/SkewedCard/Modern',
  component: SkewedCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        padding: '40px',
        background: '#1d061a',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkewedCard>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    description: 'A clean and modern card with a subtle skew effect.',
    icon: <Home size={32} />,
    variant: 'default',
  },
};

export const Glass: Story = {
  args: {
    title: 'Glass Card',
    description: 'A modern glassmorphism effect with blur and transparency.',
    icon: <Star size={32} />,
    variant: 'glass',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        padding: '40px',
        borderRadius: '12px',
      }}>
        <Story />
      </div>
    ),
  ],
};

export const Neon: Story = {
  args: {
    title: 'Neon Card',
    description: 'A futuristic card with glowing neon effects.',
    icon: <Zap size={32} />,
    variant: 'neon',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        background: '#000000',
        padding: '40px',
        borderRadius: '12px',
      }}>
        <Story />
      </div>
    ),
  ],
};

export const Gradient: Story = {
  args: {
    title: 'Gradient Card',
    description: 'A beautiful card with gradient transitions.',
    icon: <Heart size={32} />,
    variant: 'gradient',
  },
};

export const Floating: Story = {
  args: {
    title: 'Floating Card',
    description: 'An elegant card with a floating animation effect.',
    icon: <Star size={32} />,
    variant: 'floating',
  },
}; 