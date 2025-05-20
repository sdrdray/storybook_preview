import React from 'react';
import './MenuHover.css';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuHoverProps {
  items: MenuItem[];
  variant?: 'default' | 'gradient' | 'minimal';
  className?: string;
}

const MenuHover: React.FC<MenuHoverProps> = ({
  items,
  variant = 'default',
  className = ''
}) => {
  return (
    <nav className={`menu-hover ${variant} ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <span className="menu-text">{item.label}</span>
              <span className="menu-line"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHover; 