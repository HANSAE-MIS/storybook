import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmQuickViewIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1522)">
    <mask id="mask0_2392_1522" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
    <path d="M16 0H0V16H16V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2392_1522)">
    <path d="M6.66667 0C2.98667 0 0 2.98667 0 6.66667C0 10.3467 2.98667 13.3333 6.66667 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66667 0ZM6.66667 12C3.72667 12 1.33333 9.60667 1.33333 6.66667C1.33333 3.72667 3.72667 1.33333 6.66667 1.33333C9.60667 1.33333 12 3.72667 12 6.66667C12 9.60667 9.60667 12 6.66667 12Z" fill={color}/>
    <path d="M12.4702 11.5264L11.5273 12.4692L14.8602 15.8021L15.803 14.8593L12.4702 11.5264Z" fill={color}/>
    <path d="M7.3335 3.33325H6.00016V5.99992H3.3335V7.33325H6.00016V9.99992H7.3335V7.33325H10.0002V5.99992H7.3335V3.33325Z" fill={color}/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2392_1522">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
