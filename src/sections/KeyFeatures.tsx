import { KeyFeaturesCard, KeyFeaturesCardProps } from "@/collections";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface KeyFeaturesProps {
  title: string;
  cards: KeyFeaturesCardProps[];
}

export const KeyFeatures = ({
  title,
  cards
}: KeyFeaturesProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border>
      <SectionHeading title={title} className='xs:mb-2.5 2xl:mb-5' />
      <div className='grid grid-cols-4 xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <KeyFeaturesCard
            key={i}
            {...card}
            className='xs:col-span-4 md:col-span-2 xl:col-span-1'
          />
        ))}
      </div>
    </SectionContainer>
  );
};
