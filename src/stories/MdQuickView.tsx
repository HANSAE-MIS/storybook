import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdQuickView = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2392_1461)">
      <mask id="mask0_2392_1461" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M24 0H0V24H24V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2392_1461)">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill={color}/>
      <path d="M18.7052 17.2896L17.291 18.7039L22.2903 23.7031L23.7045 22.2889L18.7052 17.2896Z" fill={color}/>
      <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5Z" fill={color}/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_2392_1461">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};
