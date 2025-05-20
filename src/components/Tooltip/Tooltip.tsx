import React from 'react';
import './Tooltip.css';

type Position = 'top' | 'bottom' | 'left' | 'right';

type Props = {
  text: string;
  tooltip: string;
  position?: Position;
  className?: string;
  tooltipClassName?: string;
};

const Tooltip = ({ 
  text, 
  tooltip, 
  position = 'top',
  className = '',
  tooltipClassName = ''
}: Props) => (
  <div className={`tooltip-container ${className}`}>
    {text}
    <span className={`tooltip-text tooltip-${position} ${tooltipClassName}`}>
      {tooltip}
    </span>
  </div>
);

export default Tooltip;
