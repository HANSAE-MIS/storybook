import React from 'react';

interface ButtonProps {
  color?: string;
}

export const LgExpandViewIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1423)">
    <mask id="mask0_2392_1423" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
    <path d="M30 0H0V30H30V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_2392_1423)">
    <path d="M27.1875 30H2.8125C1.26562 30 0 28.7344 0 27.1875V2.8125C0 1.26562 1.26562 0 2.8125 0H27.1875C28.7344 0 30 1.26562 30 2.8125V27.1875C30 28.7344 28.7344 30 27.1875 30ZM2.8125 1.875C2.29688 1.875 1.875 2.29688 1.875 2.8125V27.1875C1.875 27.7031 2.29688 28.125 2.8125 28.125H27.1875C27.7031 28.125 28.125 27.7031 28.125 27.1875V2.8125C28.125 2.29688 27.7031 1.875 27.1875 1.875H2.8125Z" fill={color}/>
    <path d="M6.5625 12.1875H4.6875V4.6875H12.1875V6.5625H6.5625V12.1875Z" fill={color}/>
    <path d="M25.3125 25.3125H17.8125V23.4375H23.4375V17.8125H25.3125V25.3125Z" fill={color}/>
    <path d="M17.5382 16.2101L16.2124 17.5359L23.7099 25.0334L25.0358 23.7076L17.5382 16.2101Z" fill={color}/>
    <path d="M6.28774 4.96006L4.96191 6.28589L12.4595 13.7834L13.7853 12.4576L6.28774 4.96006Z" fill={color}/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2392_1423">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
