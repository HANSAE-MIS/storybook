import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdBigThumbnail = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 23H4C2.35 23 1 21.65 1 20V4C1 2.35 2.35 1 4 1H20C21.65 1 23 2.35 23 4V20C23 21.65 21.65 23 20 23ZM4 3C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3H4Z" fill={color}/>
    </svg>
  );
};
