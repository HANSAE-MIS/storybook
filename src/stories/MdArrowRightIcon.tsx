import React from 'react';

interface ButtonProps {
  color?: string;
}

export const MdArrowRightIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.52988 19.69L16.1299 12.69L16.1099 11.3L9.10988 4.30005L7.69988 5.71005L14.0099 12.03L8.07988 18.32L9.52988 19.69Z" fill={color}/>
      </svg>
  );
};
