import React from 'react';
import image from '../../public/fabric _spec.png';

interface ButtonProps {
  // color?: string;
}

export const MdFabricIcon = ({
  ...props
}: ButtonProps) => {


  return (
    <img src={image} alt="" />
  );
};
