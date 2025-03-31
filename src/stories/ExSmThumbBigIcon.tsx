import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmThumbBigIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1521)">
    <path d="M13.3332 15.3334H2.6665C1.5665 15.3334 0.666504 14.4334 0.666504 13.3334V2.66675C0.666504 1.56675 1.5665 0.666748 2.6665 0.666748H13.3332C14.4332 0.666748 15.3332 1.56675 15.3332 2.66675V13.3334C15.3332 14.4334 14.4332 15.3334 13.3332 15.3334ZM2.6665 2.00008C2.29984 2.00008 1.99984 2.30008 1.99984 2.66675V13.3334C1.99984 13.7001 2.29984 14.0001 2.6665 14.0001H13.3332C13.6998 14.0001 13.9998 13.7001 13.9998 13.3334V2.66675C13.9998 2.30008 13.6998 2.00008 13.3332 2.00008H2.6665Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_2392_1521">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
