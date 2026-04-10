import React from "react";
import { Icon } from "../Icon";
import { CardTitle } from "../ui";

export interface CardHeaderWithIconProps {
  icon: Icon;
  title: string;
}

export const CardHeaderWithIcon = ({
  icon,
  title
}: CardHeaderWithIconProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <CardTitle className='flex flex-row items-center xs:gap-3.5 md:gap-2.5'>
      <div className='flex flex-shrink-0  items-center justify-center rounded-xl border border-dark-20 bg-dark-12 xs:h-[52px] xs:w-[52px]  md:h-[56px] md:w-[56px]  2xl:h-[66px] 2xl:w-[66px]'>
        <Icon name={icon} className='h-7 w-7 text-primary' />
      </div>
      <h4 className='Body-20 uppercase text-orange-95'>{title}</h4>
    </CardTitle>
  );
};
