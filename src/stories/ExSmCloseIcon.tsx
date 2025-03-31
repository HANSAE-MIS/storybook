import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmCloseIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L14 14" stroke={color} strokeWidth="1.5"/>
      <path d="M14 2L2 14" stroke={color} strokeWidth="1.5"/>
    </svg>

  );
};
