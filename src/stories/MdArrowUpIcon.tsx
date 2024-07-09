import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdArrowUpIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.6198 16.22L3.2998 14.72L11.2998 7.71995L12.5898 7.69995L20.5898 14.3L19.3198 15.84L11.9798 9.77995L4.6198 16.22Z" fill={color}/>
    </svg>
  );
};
