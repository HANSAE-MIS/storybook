import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmCheckIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0002 11.5199L3.2002 7.7199L4.6102 6.3099L7.0102 8.6999L11.3802 4.3999L12.7902 5.8199L7.0002 11.5199Z" fill={color}/>
    </svg>
  );
};
