import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdTrendIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2392_1449)">
  <mask id="mask0_2392_1449" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <path d="M24 0H0V24H24V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2392_1449)">
  <path d="M20.3101 20H4.00008L3.02008 19.21L1.33008 11.4L3.22008 10.78C3.86008 12.23 5.24008 13.12 6.56008 12.95C8.46008 12.71 9.90008 10.48 10.5101 6.82999L11.5001 5.98999H12.8101L13.8001 6.82999C14.4101 10.48 15.8501 12.71 17.7501 12.95C19.0801 13.12 20.4501 12.22 21.0901 10.78L22.9801 11.4L21.2901 19.21L20.3101 20ZM4.81008 18H19.5101L20.2801 14.42C19.4201 14.86 18.4601 15.05 17.5001 14.93C16.2701 14.77 13.4601 13.85 12.1601 8.73999C10.8601 13.85 8.05008 14.78 6.82008 14.93C5.86008 15.05 4.90008 14.86 4.04008 14.42L4.81008 18Z" fill={color}/>
  <path d="M12 5C13.1046 5 14 4.10457 14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3C10 4.10457 10.8954 5 12 5Z" fill={color}/>
  <path d="M22 10C23.1046 10 24 9.10457 24 8C24 6.89543 23.1046 6 22 6C20.8954 6 20 6.89543 20 8C20 9.10457 20.8954 10 22 10Z" fill={color}/>
  <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill={color}/>
  <path d="M21 21H3V23H21V21Z" fill={color}/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0_2392_1449">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  );
};
