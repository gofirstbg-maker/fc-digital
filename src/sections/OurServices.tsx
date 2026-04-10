import { LargeTextCard, LargeTextCardProps } from "@/collections";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface OurServicesProps {
  title: string;
  cards: LargeTextCardProps[];
}

export const OurServices = ({
  cards,
  title,
  ...props
}: OurServicesProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border {...props}>
      <SectionHeading title={title} className='xs:mb-2.5 2xl:mb-5' />
      <div className='grid w-full grid-cols-2 items-stretch xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <div key={i} className=' !h-full xs:col-span-2 xl:col-span-1 '>
            <LargeTextCard className='!h-full max-h-full' {...card} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
