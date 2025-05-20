import React from 'react';
import './LinkHover.css';

interface LinkHoverProps {
  text: string;
  href: string;
  variant?: 'underline' | 'slide' | 'glow';
  className?: string;
}

const LinkHover: React.FC<LinkHoverProps> = ({
  text,
  href,
  variant = 'underline',
  className = ''
}) => {
  return (
    <a 
      href={href} 
      className={`link-hover ${variant} ${className}`}
    >
      <span className="link-text">{text}</span>
      <span className="link-effect"></span>
    </a>
  );
};

export default LinkHover; 