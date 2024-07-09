import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdArrowDownIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.6198 7.69997L3.2998 9.19997L11.2998 16.2L12.5898 16.22L20.5898 9.61997L19.3198 8.07997L11.9798 14.14L4.6198 7.69997Z" fill={color}/>
    </svg>
  );
};
