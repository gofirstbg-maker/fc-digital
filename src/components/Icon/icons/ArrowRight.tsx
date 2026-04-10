import React from "react";

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='20'
      height='17'
      viewBox='0 0 20 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.5 1L19 8.5M19 8.5L11.5 16M19 8.5H1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
