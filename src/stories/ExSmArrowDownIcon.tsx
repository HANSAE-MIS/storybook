import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmArrowDownIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.0802 5.13323L2.2002 6.13323L7.53353 10.7999L8.39353 10.8132L13.7269 6.41323L12.8802 5.38657L7.98686 9.42657L3.0802 5.13323Z" fill={color}/>
    </svg>
  );
};
