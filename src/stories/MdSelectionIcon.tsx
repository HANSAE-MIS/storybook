import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdSelectionIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1455)">
    <path d="M21 7H18V9H21C21.55 9 22 9.45 22 10V21C22 21.55 21.55 22 21 22H10C9.45 22 9 21.55 9 21V18H7V21C7 22.65 8.35 24 10 24H21C22.65 24 24 22.65 24 21V10C24 8.35 22.65 7 21 7Z" fill={color}/>
    <path d="M17 14V1L15.29 0.29L7.12 8.43L4.71 5.24L3.11 6.45L6.21 10.55L7.71 10.66L15 3.41V14C15 14.55 14.55 15 14 15H3C2.45 15 2 14.55 2 14V3C2 2.45 2.45 2 3 2H9V0H3C1.35 0 0 1.35 0 3V14C0 15.65 1.35 17 3 17H14C15.65 17 17 15.65 17 14Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_2392_1455">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
