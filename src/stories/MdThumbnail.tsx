import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdThumbnail = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1H4C2.35 1 1 2.35 1 4V8C1 9.65 2.35 11 4 11H8C9.65 11 11 9.65 11 8V4C11 2.35 9.65 1 8 1ZM9 8C9 8.55 8.55 9 8 9H4C3.45 9 3 8.55 3 8V4C3 3.45 3.45 3 4 3H8C8.55 3 9 3.45 9 4V8Z" fill={color}/>
    <path d="M20 1H16C14.35 1 13 2.35 13 4V8C13 9.65 14.35 11 16 11H20C21.65 11 23 9.65 23 8V4C23 2.35 21.65 1 20 1ZM21 8C21 8.55 20.55 9 20 9H16C15.45 9 15 8.55 15 8V4C15 3.45 15.45 3 16 3H20C20.55 3 21 3.45 21 4V8Z" fill={color}/>
    <path d="M8 13H4C2.35 13 1 14.35 1 16V20H3V16C3 15.45 3.45 15 4 15H8C8.55 15 9 15.45 9 16V20C9 20.55 8.55 21 8 21H2V23H8C9.65 23 11 21.65 11 20V16C11 14.35 9.65 13 8 13Z" fill={color}/>
    <path d="M20 13H16C14.35 13 13 14.35 13 16V20C13 21.65 14.35 23 16 23H20C21.65 23 23 21.65 23 20V16C23 14.35 21.65 13 20 13ZM21 20C21 20.55 20.55 21 20 21H16C15.45 21 15 20.55 15 20V16C15 15.45 15.45 15 16 15H20C20.55 15 21 15.45 21 16V20Z" fill={color}/>
    </svg>
  );
};
