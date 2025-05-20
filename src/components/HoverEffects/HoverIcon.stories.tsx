import type { Meta, StoryObj } from '@storybook/react';
import HoverIcon from './HoverIcon';
import { Home, User, Settings, Plus } from 'lucide-react';

const meta: Meta<typeof HoverIcon> = {
  title: 'Components/HoverEffects/HoverIcon',
  component: HoverIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverIcon>;

export const HomeButton: Story = {
  args: {
    icon: <Home size={24} color="#666" />,
    label: 'HOME',
    gradientStart: '#4F46E5',
    gradientEnd: '#7C3AED',
  },
};

export const ProfileButton: Story = {
  args: {
    icon: <User size={24} color="#666" />,
    label: 'PROFILE',
    gradientStart: '#EC4899',
    gradientEnd: '#8B5CF6',
  },
};

export const SettingsButton: Story = {
  args: {
    icon: <Settings size={24} color="#666" />,
    label: 'SETTINGS',
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
  },
};

export const AddButton: Story = {
  args: {
    icon: <Plus size={24} color="#666" />,
    label: 'ADD',
    gradientStart: '#F59E0B',
    gradientEnd: '#EF4444',
  },
}; 