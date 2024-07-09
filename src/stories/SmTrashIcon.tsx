import React from 'react';

interface ButtonProps {
  color?: string;
}

export const SmTrashIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.91675L5 16.5001C5 17.0524 5.44772 17.5001 6 17.5001H14C14.5523 17.5001 15 17.0524 15 16.5001V10.0001" stroke={color} stroke-width="1.4"/>
      <path d="M6.6665 3.33333V3.33333C6.6665 2.8731 7.0396 2.5 7.49984 2.5H12.3332C12.8855 2.5 13.3332 2.94772 13.3332 3.5V5" stroke={color} stroke-width="1.4" stroke-linejoin="round"/>
      <line x1="8.2" y1="9.86675" x2="8.2" y2="15.1334" stroke={color} stroke-width="1.4" stroke-linecap="square"/>
      <line x1="11.5335" y1="9.86675" x2="11.5335" y2="15.1334" stroke={color} stroke-width="1.4" stroke-linecap="square"/>
      <rect x="3.3335" y="5" width="13.3333" height="2.5" rx="1.25" stroke={color} stroke-width="1.4" stroke-linejoin="round"/>
    </svg>
  );
};
