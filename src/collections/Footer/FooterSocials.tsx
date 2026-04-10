import React from "react";
import { SocialsCard, SocialsCardProps } from "../Cards";
import { cn } from "@/lib/utils";

export interface FooterSocialsProps {
  cards: SocialsCardProps[];
}

export const FooterSocials = ({
  cards,
  className,
  ...props
}: FooterSocialsProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-12  xs:gap-2.5  mid:max-w-[1190px] xl:max-w-[554px] 2xl:max-w-[748px] 2xl:gap-5",
        className
      )}
      {...props}
    >
      {cards.map((card, index) => (
        <SocialsCard
          key={index}
          className='w-full xs:col-span-3 md:col-span-6 lg:col-span-3 xl:col-span-6'
          {...card}
        />
      ))}
    </div>
  );
};

//flex w-full flex-wrap  xs:justify-between xs:gap-2.5 md:justify-normal mid:max-w-[1190px] xl:max-w-[554px] 2xl:max-w-[748px] 2xl:gap-5
