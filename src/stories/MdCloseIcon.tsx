import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdCloseIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L21 21" stroke={color} strokeWidth="1.8"/>
      <path d="M21 3L3 21" stroke={color} strokeWidth="1.8"/>
    </svg>
  );
};
