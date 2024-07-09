import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdHistoryIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 11.95C3 7.33 6.51 3.51 11 3.01V1C5.4 1.51 1 6.22 1 11.95C1 17.68 5.4 22.39 11 22.9V20.89C6.51 20.39 3 16.57 3 11.95Z" fill={color}/>
  <path d="M13 1V3.01C17.49 3.51 21 7.33 21 11.95C21 16.57 17.49 20.39 13 20.89V22.9C18.6 22.39 23 17.68 23 11.95C23 6.22 18.6 1.51 13 1Z" fill={color}/>
  <path d="M17.6198 15.17L12.9198 11.41L11.9898 5.78003L10.0098 6.11003L11.0798 12.49L16.3798 16.73L17.6198 15.17Z" fill={color}/>
  </svg>
  );
};
