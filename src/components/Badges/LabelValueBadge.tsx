import React from "react";

export interface LabelValueBadgeProps {
  label: string;
  value: string;
}

export const LabelValueBadge = ({
  label,
  value
}: LabelValueBadgeProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='flex w-fit flex-row items-center gap-2 rounded-[45px] bg-dark-12 xs:px-2.5 xs:py-1.5 md:px-3.5 md:py-2 2xl:px-4 2xl:py-2.5'>
      <p className='xs:Body-12 text-grey-70 md:Body-14 2xl:Body-18'>{label}</p>
      <span className='h-1 w-1 rounded-full bg-primary' />
      <p className='xs:Body-12 text-grey-90 md:Body-14 2xl:Body-18'>{value}</p>
    </div>
  );
};
