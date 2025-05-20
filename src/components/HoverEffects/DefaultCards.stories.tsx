import type { Meta, StoryObj } from '@storybook/react';
import DefaultCards from './DefaultCards';

const meta: Meta<typeof DefaultCards> = {
  title: 'Components/HoverEffects/DefaultCards',
  component: DefaultCards,
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
type Story = StoryObj<typeof DefaultCards>;

export const ClassicOrange: Story = {
  args: {
    title: 'Classic Orange',
    description: 'The original skewed card with orange gradient.',
    gradientStart: '#ffbc00',
    gradientEnd: '#ff0058',
    linkText: 'Read More',
    linkUrl: '#',
  },
};

export const ClassicBlue: Story = {
  args: {
    title: 'Classic Blue',
    description: 'The original skewed card with blue gradient.',
    gradientStart: '#03a9f4',
    gradientEnd: '#ff0058',
    linkText: 'Learn More',
    linkUrl: '#',
  },
};

export const ClassicGreen: Story = {
  args: {
    title: 'Classic Green',
    description: 'The original skewed card with green gradient.',
    gradientStart: '#4dff03',
    gradientEnd: '#00d0ff',
    linkText: 'Explore',
    linkUrl: '#',
  },
}; 