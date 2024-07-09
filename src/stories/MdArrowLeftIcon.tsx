import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdArrowLeftIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3002 19.69L7.7002 12.69L7.7202 11.3L14.7202 4.30005L16.1302 5.71005L9.8202 12.03L15.7502 18.32L14.3002 19.69Z" fill={color}/>
    </svg>
  );
};
