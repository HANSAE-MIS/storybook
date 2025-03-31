import React from 'react';

interface ButtonProps {
  color?: string;
}

export const SmGalleryIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 17.4999L12.075 10.3484C12.3739 10.0767 12.5233 9.94087 12.6938 9.88549C12.8441 9.83669 13.0051 9.8316 13.1582 9.87084C13.3318 9.91536 13.4895 10.0415 13.8049 10.2938L16.1359 12.1586C16.451 12.4107 16.6085 12.5368 16.7277 12.6886M8.33333 7.49992C8.33333 8.42039 7.58714 9.16659 6.66667 9.16659C5.74619 9.16659 5 8.42039 5 7.49992C5 6.57944 5.74619 5.83325 6.66667 5.83325C7.58714 5.83325 8.33333 6.57944 8.33333 7.49992Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.0835" y="2.91675" width="15" height="15" rx="1" stroke={color} strokeWidth="1.4"/>
    </svg>
  );
};
