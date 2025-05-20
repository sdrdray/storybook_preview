import type { Meta, StoryObj } from '@storybook/react';
import DummyWebsite from './DummyWebsite';

const meta: Meta<typeof DummyWebsite> = {
  title: 'Components/ViewToggle/DummyWebsite',
  component: DummyWebsite,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    initialMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The initial theme mode of the website',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DummyWebsite>;

export const LightMode: Story = {
  args: {
    initialMode: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    initialMode: 'dark',
  },
}; 