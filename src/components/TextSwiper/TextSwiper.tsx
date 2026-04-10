import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";

export interface TextSwiperProps {
  items: string[];
}

export const TextSwiper = ({
  items,
  className
}: TextSwiperProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Marquee autoFill direction='right' className={cn("", className)}>
      {items.map((str, index) => (
        <div
          key={index}
          className='flex flex-row items-center xs:mr-2 xs:gap-2 md:mr-2.5 md:gap-2.5 2xl:mr-3 2xl:gap-3 '
        >
          <p className='uppercase text-grey-40 xs:Body-14 md:Body-16 2xl:Body-20'>{str}</p>
          <span className='h-1.5 w-1.5 rounded-full bg-primary 2xl:mt-[4px]' />
        </div>
      ))}
    </Marquee>
  );
};
