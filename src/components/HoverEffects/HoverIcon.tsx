import React from 'react';
import './HoverIcon.css';

interface HoverIconProps {
  icon: React.ReactNode;
  label: string;
  gradientStart: string;
  gradientEnd: string;
  onClick?: () => void;
}

const HoverIcon: React.FC<HoverIconProps> = ({
  icon,
  label,
  gradientStart,
  gradientEnd,
  onClick
}) => {
  return (
    <div 
      className="hover-icon"
      onClick={onClick}
      style={{
        '--gradient-start': gradientStart,
        '--gradient-end': gradientEnd,
      } as React.CSSProperties}
    >
      <div className="hover-icon-content">
        <div className="hover-icon-icon">{icon}</div>
        <div className="hover-icon-label">{label}</div>
      </div>
      <div className="hover-icon-blur"></div>
    </div>
  );
};

export default HoverIcon; 