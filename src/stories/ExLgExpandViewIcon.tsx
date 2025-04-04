import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExLgExpandViewIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1402)">
    <mask id="mask0_2392_1402" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
    <path d="M36 0H0V36H36V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2392_1402)">
    <path d="M32.625 36H3.375C1.51875 36 0 34.4813 0 32.625V3.375C0 1.51875 1.51875 0 3.375 0H32.625C34.4813 0 36 1.51875 36 3.375V32.625C36 34.4813 34.4813 36 32.625 36ZM3.375 2.25C2.75625 2.25 2.25 2.75625 2.25 3.375V32.625C2.25 33.2438 2.75625 33.75 3.375 33.75H32.625C33.2438 33.75 33.75 33.2438 33.75 32.625V3.375C33.75 2.75625 33.2438 2.25 32.625 2.25H3.375Z" fill={color}/>
    <path d="M7.875 14.625H5.625V5.625H14.625V7.875H7.875V14.625Z" fill={color}/>
    <path d="M30.375 30.375H21.375V28.125H28.125V21.375H30.375V30.375Z" fill={color}/>
    <path d="M21.0461 19.452L19.4551 21.043L28.4521 30.04L30.0431 28.449L21.0461 19.452Z" fill={color}/>
    <path d="M7.54558 5.95198L5.95459 7.54297L14.9516 16.54L16.5426 14.949L7.54558 5.95198Z" fill={color}/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2392_1402">
    <rect width="36" height="36" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
