import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdFilterIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2392_1463)">
      <mask id="mask0_2392_1463" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M24 0H0V24H24V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2392_1463)">
      <path d="M12 8C14.21 8 16 6.21 16 4C16 1.79 14.21 0 12 0C10.14 0 8.59 1.28 8.14 3H1V5H8.14C8.59 6.72 10.14 8 12 8ZM12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill={color}/>
      <path d="M19 16C21.21 16 23 14.21 23 12C23 9.79 21.21 8 19 8C17.14 8 15.59 9.28 15.14 11H1V13H15.14C15.59 14.72 17.14 16 19 16ZM19 10C20.1 10 21 10.9 21 12C21 13.1 20.1 14 19 14C17.9 14 17 13.1 17 12C17 10.9 17.9 10 19 10Z" fill={color}/>
      <path d="M5 16C2.79 16 1 17.79 1 20C1 22.21 2.79 24 5 24C6.86 24 8.41 22.72 8.86 21H23V19H8.86C8.41 17.28 6.86 16 5 16ZM5 22C3.9 22 3 21.1 3 20C3 18.9 3.9 18 5 18C6.1 18 7 18.9 7 20C7 21.1 6.1 22 5 22Z" fill={color}/>
      <path d="M23 3H15V5H23V3Z" fill={color}/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_2392_1463">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};
