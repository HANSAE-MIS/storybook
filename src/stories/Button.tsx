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
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook--primary--button' : 'storybook--secondary--button';
  const sizeClass =  size === 'medium' ? 'storybook--secondary--medium' : size === 'small' ? 'storybook--secondary--small' : size === 'large' ? 'storybook--secondary--large ' : 'storybook--secondary--medium';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`storybook--button ${mode} ${sizeClass}`}
      {...props}
    >
      {label}
    </button>
  );
};
