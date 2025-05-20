import React from 'react';
import './DefaultCards.css';

interface DefaultCardsProps {
  title: string;
  description: string;
  gradientStart: string;
  gradientEnd: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
}

const DefaultCards: React.FC<DefaultCardsProps> = ({
  title,
  description,
  gradientStart,
  gradientEnd,
  linkText = 'Read More',
  linkUrl = '#',
  className = ''
}) => {
  return (
    <div 
      className={`default-card ${className}`}
      style={{
        '--gradient-start': gradientStart,
        '--gradient-end': gradientEnd,
      } as React.CSSProperties}
    >
      <div className="default-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkUrl}>{linkText}</a>
      </div>
      <span></span>
    </div>
  );
};

export default DefaultCards; 