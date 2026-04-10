import React from "react";

export const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='18'
      height='20'
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.5 11.5L9 19M9 19L1.5 11.5M9 19L9 1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
