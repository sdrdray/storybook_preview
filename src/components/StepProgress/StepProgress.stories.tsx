import React, { useState, useEffect, useRef } from 'react';
import StepProgress from './StepProgress';

export default {
  title: 'Components/StepProgress',
  component: StepProgress,
};

// Scroll-based Minimalist Progress
export const Minimalist = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercentage)));
      }
    };

    return (
      <div style={{ padding: '20px' }}>
        <h3>Scroll-based Minimalist Progress</h3>
        <StepProgress
          variant="minimalist"
          percentage={progress}
          steps={steps}
          currentStep={Math.floor(progress / 25)}
        />
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Current Step: {steps[Math.floor(progress / 25)]} ({Math.round(progress)}%)
        </div>
        <div
          ref={containerRef}
          style={{
            height: '200px',
            overflow: 'auto',
            marginTop: '20px',
            border: '1px solid #ccc',
            padding: '20px'
          }}
          onScroll={handleScroll}
        >
          <div style={{ height: '1000px' }}>
            <h4>Scroll this content to see progress</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    );
  }
};

// Form-based Simple Progress
export const Simple = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const calculateProgress = () => {
      let filled = 0;
      if (formData.name) filled++;
      if (formData.email) filled++;
      if (formData.message) filled++;
      return (filled / 3) * 100;
    };

    useEffect(() => {
      setProgress(calculateProgress());
    }, [formData]);

    return (
      <div style={{ padding: '20px' }}>
        <h3>Form-based Simple Progress</h3>
        <StepProgress
          variant="simple"
          percentage={progress}
          steps={steps}
          currentStep={Math.floor(progress / 25)}
        />
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Current Step: {steps[Math.floor(progress / 25)]} ({Math.round(progress)}%)
        </div>
        <div style={{ marginTop: '20px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ padding: '8px' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ padding: '8px' }}
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ padding: '8px', height: '100px' }}
            />
          </form>
        </div>
      </div>
    );
  }
};

// Mouse-based Loading Progress
export const Loading = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault();
      setProgress((prevProgress) => {
        const delta = e.deltaY > 0 ? 5 : -5; // Increase/decrease by 5% per scroll
        return Math.min(100, Math.max(0, prevProgress + delta));
      });
    };

    return (
      <div style={{ padding: '20px' }}>
        <h3>Scroll-based Loading Progress</h3>
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '100px',
            border: '1px solid #ccc',
            marginTop: '20px',
            position: 'relative',
            cursor: 'pointer'
          }}
          onWheel={handleWheel}
        >
          <StepProgress
            variant="loading"
            steps={steps}
            currentStep={Math.floor((progress / 100) * 15)} // Scale to 15 segments
            animated={true}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>
            Scroll up/down to adjust progress
            <br />
            Current Step: {steps[Math.floor(progress / 25)]} ({Math.round(progress)}%)
          </div>
        </div>
      </div>
    );
  }
};

// Multi-step Form with Horizontal Progress
export const Horizontal = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Personal Info', 'Contact Details', 'Preferences', 'Review', 'Submit'];
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      preferences: '',
      comments: ''
    });

    const renderStepContent = () => {
      switch (currentStep) {
        case 0:
          return (
            <div>
              <h4>Personal Information</h4>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
              />
            </div>
          );
        case 1:
          return (
            <div>
              <h4>Contact Details</h4>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          );
        case 2:
          return (
            <div>
              <h4>Preferences</h4>
              <textarea
                placeholder="Your preferences..."
                value={formData.preferences}
                onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                style={{ width: '100%', padding: '8px', height: '100px' }}
              />
            </div>
          );
        case 3:
          return (
            <div>
              <h4>Review Information</h4>
              <div style={{ marginBottom: '10px' }}>
                <strong>Name:</strong> {formData.name}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Email:</strong> {formData.email}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Phone:</strong> {formData.phone}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Preferences:</strong> {formData.preferences}
              </div>
            </div>
          );
        case 4:
          return (
            <div>
              <h4>Submit</h4>
              <textarea
                placeholder="Additional comments..."
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                style={{ width: '100%', padding: '8px', height: '100px' }}
              />
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Multi-step Form with Progress</h3>
        <StepProgress
          variant="horizontal"
          steps={steps}
          currentStep={currentStep}
        />
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
          {renderStepContent()}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              style={{
                padding: '8px 16px',
                backgroundColor: currentStep === 0 ? '#ccc' : '#666',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              style={{
                padding: '8px 16px',
                backgroundColor: currentStep === steps.length - 1 ? '#ccc' : '#4db6ac',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  }
};
