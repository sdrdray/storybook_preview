import type { Meta, StoryObj } from '@storybook/react';
import MenuHover from './MenuHover';

const meta: Meta<typeof MenuHover> = {
  title: 'Components/HoverEffects/MenuHover',
  component: MenuHover,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
type Story = StoryObj<typeof MenuHover>;

const defaultItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Portfolio', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
  },
};

export const Gradient: Story = {
  args: {
    items: defaultItems,
    variant: 'gradient',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a1a',
        padding: '20px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const Minimal: Story = {
  args: {
    items: defaultItems,
    variant: 'minimal',
  },
}; 