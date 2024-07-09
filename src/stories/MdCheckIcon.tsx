import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdCheckIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.77 19.13L3 12.21L4.43 10.81L9.78 16.28L19.01 7L20.42 8.41L9.77 19.13Z" fill={color}/>
    </svg>
  );
};
