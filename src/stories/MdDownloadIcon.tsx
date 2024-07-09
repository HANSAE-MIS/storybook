import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdDownloadIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.69 16.98L18.69 11.32L17.31 9.87004L12.02 14.86L6.71004 9.54004L5.29004 10.96L11.29 16.96L12.69 16.98Z" fill={color}/>
      <path d="M13 1H11V12H13V1Z" fill={color}/>
      <path d="M22 14V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V14H0V20C0 21.65 1.35 23 3 23H21C22.65 23 24 21.65 24 20V14H22Z" fill={color}/>
    </svg>
  );
};
