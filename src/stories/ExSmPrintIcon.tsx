import React from 'react';

// 수정
interface ButtonProps {
  color?: string;
}

export const ExSmPrintIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 12C0.5 10.067 2.067 8.5 4 8.5H12C13.933 8.5 15.5 10.067 15.5 12V14.4565H0.5V12Z" stroke={color}/>
      <rect x="3.28271" y="1.5" width="9.43478" height="6.65217" stroke={color}/>
      <path d="M5.21729 4.13037H10.7825" stroke={color}/>
      <path d="M5.21729 5.86963H10.7825" stroke={color}/>
    </svg>
  );
};
