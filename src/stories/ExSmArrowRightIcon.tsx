import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmArrowRightIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.35342 13.1267L10.7534 8.46003L10.7401 7.53337L6.07342 2.8667L5.13342 3.8067L9.34008 8.02003L5.38675 12.2134L6.35342 13.1267Z" fill={color}/>
    </svg>
  );
};
