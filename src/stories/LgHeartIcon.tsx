import React from 'react';

interface ButtonProps {
  color?: string;
}

export const LgHeartIcon = ({
  color = '#000',
  ...props
}: ButtonProps) => {


  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.8233 4.84883L27.6232 4.64893C26.1726 3.22464 24.2717 2.5 22.3709 2.5C20.47 2.5 18.5692 3.21214 17.106 4.64893L15.0051 6.72289L12.9042 4.64893C11.4535 3.22464 9.55267 2.5 7.63932 2.5C5.72596 2.5 3.82511 3.22464 2.37446 4.66142L2.17437 4.86132C-0.639384 7.64743 -0.739429 12.1327 1.97428 15.0312L14.9926 27.5L16.6308 25.9383L3.75008 13.2696C2.0118 11.3581 2.08683 8.45952 3.92516 6.63543L4.12525 6.43553C5.06316 5.51099 6.30122 4.99875 7.63932 4.99875C8.96491 4.99875 10.2155 5.51099 11.1534 6.43553L13.2543 8.5095L15.0051 10.2461L16.7684 8.5095L18.8693 6.43553C19.8073 5.51099 21.0453 5.01124 22.3709 5.01124C23.6965 5.01124 24.9345 5.52349 25.8725 6.43553L26.0726 6.63543C27.9234 8.45952 27.9984 11.3706 26.2476 13.2946L18.1315 21.0282L19.8948 22.7899L28.0234 15.0437C29.374 13.6069 30.0243 11.7829 29.9993 9.95877V9.87131C29.9493 8.04723 29.224 6.23563 27.8233 4.84883Z" fill={color}/>
    </svg>

  );
};
