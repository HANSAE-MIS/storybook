import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdEmailIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1447)">
    <mask id="mask0_2392_1447" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <path d="M24 0H0V24H24V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2392_1447)">
    <path d="M21 3H5C3.35 3 2 4.35 2 6V14H4V6C4 5.45 4.45 5 5 5H21C21.55 5 22 5.45 22 6V18C22 18.55 21.55 19 21 19H0V21H21C22.65 21 24 19.65 24 18V6C24 4.35 22.65 3 21 3Z" fill={color}/>
    <path d="M20.5799 7.80994L19.4199 6.18994L12.9999 10.7699L6.57992 6.18994L5.41992 7.80994L12.9999 13.2299L20.5799 7.80994Z" fill={color}/>
    <path d="M9 15H2V17H9V15Z" fill={color}/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2392_1447">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
