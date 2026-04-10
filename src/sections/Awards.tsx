import { AwardCard, AwardCardProps } from "@/collections";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface AwardsProps {
  title: string;
  cards: AwardCardProps[];
}

export const Awards = ({ title, cards }: AwardsProps) => {
  return (
    <SectionContainer border>
      <SectionHeading title={title} className='xs:mb-2.5 2xl:mb-5' />
      <div className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <AwardCard key={i} {...card} className='xs:col-span-12 md:col-span-6 xl:col-span-3' />
        ))}
      </div>
    </SectionContainer>
  );
};
