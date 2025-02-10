import React from 'react';

interface ButtonProps {
  color?: string;
}

export const ExSmSearchIcon = ({
  color = '#000000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2392_1518)">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.399902 6.3999C0.399902 3.08657 3.08657 0.399902 6.3999 0.399902C9.71324 0.399902 12.3999 3.08657 12.3999 6.3999C12.3999 9.71324 9.71324 12.3999 6.3999 12.3999C3.08657 12.3999 0.399902 9.71324 0.399902 6.3999ZM1.73324 6.3999C1.73324 8.97324 3.82657 11.0666 6.3999 11.0666C8.97324 11.0666 11.0666 8.97324 11.0666 6.3999C11.0666 3.82657 8.97324 1.73324 6.3999 1.73324C3.82657 1.73324 1.73324 3.82657 1.73324 6.3999ZM11.2578 12.2026L12.2006 11.2597L15.5335 14.5926L14.5907 15.5354L11.2578 12.2026Z" fill={color} />
    </g>
    <defs>
    <clipPath id="clip0_2392_1518">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
