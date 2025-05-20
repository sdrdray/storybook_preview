import type { Meta, StoryObj } from '@storybook/react';
import LinkHover from './LinkHover';

const meta: Meta<typeof LinkHover> = {
  title: 'Components/HoverEffects/LinkHover',
  component: LinkHover,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        background: '#f5f5f5',
        padding: '20px'
      }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkHover>;

export const Underline: Story = {
  args: {
    text: 'Underline Effect',
    href: '#',
    variant: 'underline',
  },
};

export const Slide: Story = {
  args: {
    text: 'Slide Effect',
    href: '#',
    variant: 'slide',
  },
};

export const Glow: Story = {
  args: {
    text: 'Glow Effect',
    href: '#',
    variant: 'glow',
  },
};

// Example with multiple links
export const MultipleLinks: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <LinkHover text="Underline Link" href="#" variant="underline" />
      <LinkHover text="Slide Link" href="#" variant="slide" />
      <LinkHover text="Glow Link" href="#" variant="glow" />
    </div>
  ),
}; 