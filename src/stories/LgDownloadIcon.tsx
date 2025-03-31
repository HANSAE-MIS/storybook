import React from 'react';

interface ButtonProps {
  color?: string;
}

export const LgDownloadIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8623 21.225L23.3623 14.15L21.6373 12.3375L15.0248 18.575L8.3873 11.925L6.6123 13.7L14.1123 21.2L15.8623 21.225Z" fill={color}/>
      <path d="M16.25 1.25H13.75V15H16.25V1.25Z" fill={color}/>
      <path d="M27.5 17.5V25C27.5 25.6875 26.9375 26.25 26.25 26.25H3.75C3.0625 26.25 2.5 25.6875 2.5 25V17.5H0V25C0 27.0625 1.6875 28.75 3.75 28.75H26.25C28.3125 28.75 30 27.0625 30 25V17.5H27.5Z" fill={color}/>
    </svg>
  );
};
