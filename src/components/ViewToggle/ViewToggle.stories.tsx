import type { Meta, StoryObj } from '@storybook/react';
import ViewToggle from './ViewToggle';
import React, { useState } from 'react';
import DummyWebsite from './DummyWebsite';
import SimpleViewWebsite from './SimpleViewWebsite';

const meta: Meta<typeof ViewToggle> = {
  title: 'Components/ViewToggle',
  component: ViewToggle,
  argTypes: {
    isDark: {
      control: 'boolean',
      description: 'Whether the toggle is in dark mode',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback when toggle is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ViewToggle>;

export const Light: Story = {
  args: {
    isDark: false,
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
  },
};

export const LiteOriginalWebsiteSwitcher: Story = {
  render: () => {
    const [isLiteView, setIsLiteView] = useState(false);
    const buttonText = isLiteView ? 'Show Original Heavy Website' : 'Show Lite Website';

    return (
      <>
        <button
          onClick={() => setIsLiteView(!isLiteView)}
          style={{
            marginBottom: '20px',
            padding: '12px 24px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            outline: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'}
          onBlur={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'}
        >
          {buttonText}
        </button>
        {isLiteView ? <SimpleViewWebsite /> : <DummyWebsite />}
      </>
    );
  },
};

