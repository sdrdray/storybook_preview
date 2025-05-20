import React from 'react';
import './stepprogress.css';

type StepProgressVariant = 
  | 'minimalist'
  | 'simple'
  | 'loading'
  | 'horizontal';

type Props = {
  steps: string[];
  currentStep: number;
  variant?: StepProgressVariant;
  percentage?: number;
  animated?: boolean;
};

const StepProgress = ({ 
  steps, 
  currentStep, 
  variant = 'minimalist',
  percentage,
  animated = false
}: Props) => {
  const renderMinimalist = () => (
    <div className="progress-bar minimalist">
      <div className="progress-fill" style={{ width: `${percentage || (currentStep / steps.length) * 100}%` }} />
    </div>
  );

  const renderSimple = () => (
    <div className="progress-simple">
      <span className="simple-label">COMPLETENESS</span>
      <div className="simple-bar">
        <div className="simple-fill" style={{ width: `${percentage || (currentStep / steps.length) * 100}%` }} />
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className={`progress-loading ${animated ? 'animated' : ''}`}>
      <div className="loading-bar">
        {Array(15).fill(0).map((_, idx) => (
          <div key={idx} className={`loading-segment ${idx < currentStep ? 'active' : ''}`} />
        ))}
      </div>
      <span className="loading-text">LOADING...</span>
    </div>
  );

  const renderHorizontal = () => (
    <div className="progress-horizontal">
      <span className="horizontal-label">COMPLETENESS</span>
      <div className="horizontal-container">
        {steps.map((_, idx) => (
          <div key={idx} className="horizontal-step">
            <div className={`horizontal-circle ${idx < currentStep ? 'completed' : idx === currentStep ? 'active' : ''}`}>
              {idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div className={`horizontal-line ${idx < currentStep ? 'completed' : ''}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProgress = () => {
    switch (variant) {
      case 'minimalist': return renderMinimalist();
      case 'simple': return renderSimple();
      case 'loading': return renderLoading();
      case 'horizontal': return renderHorizontal();
      default: return renderMinimalist();
    }
  };

  return (
    <div className={`step-progress ${variant}`}>
      {renderProgress()}
    </div>
  );
};

export default StepProgress;
