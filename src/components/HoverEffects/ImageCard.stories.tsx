import type { Meta, StoryObj } from '@storybook/react';
import ImageCard from './ImageCard';

const meta: Meta<typeof ImageCard> = {
  title: 'Components/HoverEffects/ImageCard',
  component: ImageCard,
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
        justifyContent: 'center'
      }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const DefaultCard: Story = {
  args: {
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500',
    backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=500',
    name: 'John Doe',
    job: 'UI/UX Designer',
    bio: 'Passionate about creating beautiful and functional user interfaces. Always learning and exploring new design trends.',
    date: '2024',
    category: 'Design',
    effect: 'default',
  },
};

export const BlurEffect: Story = {
  args: {
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500',
    backgroundImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500',
    name: 'Jane Smith',
    job: 'Photographer',
    bio: 'Capturing moments and creating memories through the lens. Specializing in portrait and landscape photography.',
    date: '2024',
    category: 'Photography',
    effect: 'blur',
  },
};

export const ColorEffect: Story = {
  args: {
    profileImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500',
    backgroundImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500',
    name: 'Mike Johnson',
    job: 'Developer',
    bio: 'Full-stack developer with a passion for creating innovative solutions. Always exploring new technologies.',
    date: '2024',
    category: 'Development',
    effect: 'color',
  },
}; 