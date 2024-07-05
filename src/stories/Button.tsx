import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-[#FFDF34]' : 'bg-white border-solid border-[1px] border-[#000]';
  const sizeClass =  size === 'medium' ? 'px-[16px] py-[10px] h-[34px] text-[14px]' : size === 'small' ? 'px-[16px] py-[6px] h-[26px] text-[14px]' : size === 'large' ? 'px-[80px] py-[16px] h-[50px]' : 'px-[16px] py-[10px] h-[34px] text-[18px]';

  return (
    <button
      type="button"
      className={`box-border flex items-center justify-center rounded-[3px] ${mode} ${sizeClass}`}
      {...props}
    >
      {label}
    </button>
  );
};
