import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdSearchIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2392_1437)">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.600098 9.6001C0.600098 4.6301 4.6301 0.600098 9.6001 0.600098C14.5701 0.600098 18.6001 4.6301 18.6001 9.6001C18.6001 14.5701 14.5701 18.6001 9.6001 18.6001C4.6301 18.6001 0.600098 14.5701 0.600098 9.6001ZM2.6001 9.6001C2.6001 13.4601 5.7401 16.6001 9.6001 16.6001C13.4601 16.6001 16.6001 13.4601 16.6001 9.6001C16.6001 5.7401 13.4601 2.6001 9.6001 2.6001C5.7401 2.6001 2.6001 5.7401 2.6001 9.6001ZM16.887 18.3041L18.3012 16.8899L23.3005 21.8891L21.8862 23.3033L16.887 18.3041Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_2392_1437">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
  </svg>
  );
};
