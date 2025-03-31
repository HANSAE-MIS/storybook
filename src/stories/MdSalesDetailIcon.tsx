import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdSalesDetailIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1453)">
    <mask id="mask0_2392_1453" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <path d="M24 0H0V24H24V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2392_1453)">
    <path d="M21 0H4C2.35 0 1 1.35 1 3V13H3V3C3 2.45 3.45 2 4 2H21C21.55 2 22 2.45 22 3V22H7V4H5V23L6 24H23L24 23V3C24 1.35 22.65 0 21 0Z" fill={color}/>
    <path d="M15 7H10V9H15V7Z" fill={color} />
    <path d="M19 11H10V13H19V11Z" fill={color} />
    <path d="M19 15H10V17H19V15Z" fill={color} />
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2392_1453">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>

  );
};
