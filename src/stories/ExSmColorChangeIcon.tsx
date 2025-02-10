import React from 'react';
import image from '../../public/colorchange.png';

interface ButtonProps {
  // color?: string;
}

export const ExSmColorChangeIcon = ({
  ...props
}: ButtonProps) => {


  return (
    <img src={image} alt="color change icon" />
  );
};
