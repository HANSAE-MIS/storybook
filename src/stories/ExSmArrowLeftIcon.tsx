import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmArrowLeftIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.5333 13.1267L5.1333 8.46003L5.14663 7.53337L9.8133 2.8667L10.7533 3.8067L6.54663 8.02003L10.5 12.2134L9.5333 13.1267Z" fill={color}/>
  </svg>
  );
};
