import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmArrowUpIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.0802 10.8133L2.2002 9.8133L7.53353 5.14663L8.39353 5.1333L13.7269 9.5333L12.8802 10.56L7.98686 6.51997L3.0802 10.8133Z" fill={color}/>
    </svg>
  );
};
