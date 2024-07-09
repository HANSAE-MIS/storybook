import React from 'react';

interface ButtonProps {
  color?: string;
}

export const LgCloseIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 3.75L26.25 26.25" stroke={color} stroke-width="1.8"/>
      <path d="M26.25 3.75L3.75 26.25" stroke={color} stroke-width="1.8"/>
    </svg>
  );
};
