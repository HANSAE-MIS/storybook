import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdUserIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5 7C18.5 10.59 15.59 13.5 12 13.5C8.41 13.5 5.5 10.59 5.5 7C5.5 3.41 8.41 0.5 12 0.5C15.59 0.5 18.5 3.41 18.5 7ZM16.5 7C16.5 4.52 14.48 2.5 12 2.5C9.52 2.5 7.5 4.52 7.5 7C7.5 9.48 9.52 11.5 12 11.5C14.48 11.5 16.5 9.48 16.5 7ZM4.03 21.5H21.97C21.99 21.82 22 22.15 22 22.5V23.5H2V22.5C2 16.89 4.99 14.5 12 14.5C17.6 14.5 20.62 16.03 21.62 19.5H19.55C18.81 17.74 16.89 16.5 12 16.5C5.4 16.5 4.21 18.76 4.03 21.5Z" fill={color}/>
    </svg>
  );
};
