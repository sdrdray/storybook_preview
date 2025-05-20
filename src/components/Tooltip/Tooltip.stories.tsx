import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: 'Hover me',
    tooltip: 'This is a tooltip',
  },
};

export const WithInfoIcon: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      gap: '20px',
      padding: '20px',
      background: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <div style={{ 
        background: 'white',
        borderRadius: '12px', 
        padding: '25px',
        maxWidth: '300px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '24px', color: '#2c3e50' }}>
          Product Information
          <Tooltip 
            text=" ⓘ" 
            tooltip="Click to learn more about this product"
            position="right"
            tooltipClassName="tooltip-info"
          />
        </h3>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>
          This is a sample product description with an information icon.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Feature 1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Feature 2</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Feature 3</span>
          </div>
        </div>
        <button style={{ 
          padding: '12px 24px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          width: '100%'
        }}>
          Learn More
        </button>
      </div>

      <div style={{ 
        background: 'white',
        borderRadius: '12px', 
        padding: '25px',
        maxWidth: '300px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '24px', color: '#2c3e50' }}>
          Service Details
          <Tooltip 
            text=" ⓘ" 
            tooltip="View detailed service information"
            position="right"
            tooltipClassName="tooltip-success"
          />
        </h3>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>
          Comprehensive service package with detailed information.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Service 1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Service 2</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#2c3e50' }}>•</span>
            <span style={{ color: '#666' }}>Service 3</span>
          </div>
        </div>
        <button style={{ 
          padding: '12px 24px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          width: '100%'
        }}>
          View Details
        </button>
      </div>
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '400px', 
      padding: '30px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Registration Form</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px',
          color: '#2c3e50',
          fontWeight: '500'
        }}>
          Username
          <Tooltip 
            text=" ⓘ" 
            tooltip="Username must be between 3-20 characters"
            position="right"
            tooltipClassName="tooltip-info"
          />
        </label>
        <input 
          type="text" 
          style={{ 
            width: '100%', 
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px',
          color: '#2c3e50',
          fontWeight: '500'
        }}>
          Password
          <Tooltip 
            text=" ⓘ" 
            tooltip="Password must contain at least 8 characters, including numbers and special characters"
            position="right"
            tooltipClassName="tooltip-warning"
          />
        </label>
        <input 
          type="password" 
          style={{ 
            width: '100%', 
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      gap: '20px',
      padding: '20px',
      background: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px', 
        padding: '25px',
        maxWidth: '300px',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '24px' }}>
          Premium Plan
          <Tooltip 
            text=" ⓘ" 
            tooltip="Includes all features plus priority support"
            position="right"
            tooltipClassName="tooltip-info"
          />
        </h3>
        <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>
          Get access to all premium features
        </p>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Unlimited access</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Priority support</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Advanced features</span>
          </div>
        </div>
        <button style={{ 
          padding: '12px 24px',
          backgroundColor: 'white',
          color: '#764ba2',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          width: '100%'
        }}>
          Subscribe Now
        </button>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        borderRadius: '12px', 
        padding: '25px',
        maxWidth: '300px',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '24px' }}>
          Basic Plan
          <Tooltip 
            text=" ⓘ" 
            tooltip="Perfect for getting started"
            position="right"
            tooltipClassName="tooltip-success"
          />
        </h3>
        <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>
          Essential features for beginners
        </p>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Basic access</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Email support</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            <span>Core features</span>
          </div>
        </div>
        <button style={{ 
          padding: '12px 24px',
          backgroundColor: 'white',
          color: '#ff9a9e',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          width: '100%'
        }}>
          Get Started
        </button>
      </div>
    </div>
  ),
};
