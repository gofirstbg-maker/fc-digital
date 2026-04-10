import { AchievementsCard, AchievementsCardProps } from "@/collections/Cards/AchievementsCard";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface AchievementsProps {
  title: string;
  cards: AchievementsCardProps[];
}

export const Achievements = ({
  title,
  cards,
  ...props
}: AchievementsProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border {...props}>
      <SectionHeading title={title} className=' xs:mb-2.5 2xl:mb-5' />
      <div className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <AchievementsCard
            key={i}
            {...card}
            className='xs:col-span-12 md:col-span-6 lg:col-span-3'
          />
        ))}
      </div>
    </SectionContainer>
  );
};
