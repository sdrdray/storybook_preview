import React from 'react';
import './SkewedCard.css';

interface SkewedCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'glass' | 'neon' | 'gradient' | 'floating' | 'classic';
  gradientStart?: string;
  gradientEnd?: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
}

const SkewedCard: React.FC<SkewedCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  gradientStart = '#ffbc00',
  gradientEnd = '#ff0058',
  linkText = 'Read More',
  linkUrl = '#',
  className = ''
}) => {
  if (variant === 'classic') {
    return (
      <div 
        className={`box ${className}`}
        style={{
          '--gradient-start': gradientStart,
          '--gradient-end': gradientEnd,
        } as React.CSSProperties}
      >
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={linkUrl}>{linkText}</a>
        </div>
        <span></span>
      </div>
    );
  }

  return (
    <div className={`skewed-card ${variant} ${className}`}>
      <div className="skewed-card__content">
        {icon && <div className="skewed-card__icon">{icon}</div>}
        <h3 className="skewed-card__title">{title}</h3>
        <p className="skewed-card__description">{description}</p>
      </div>
      <div className="skewed-card__overlay"></div>
    </div>
  );
};

export default SkewedCard; 