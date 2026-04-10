import { ProjectsCard, ProjectsCardProps } from "@/collections";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface JoinOurTeamProps {
  title: string;
  cards: ProjectsCardProps[];
}

export const JoinOurTeam = ({ title, cards }: JoinOurTeamProps) => {
  return (
    <SectionContainer border>
      <SectionHeading title={title} className='xs:mb-2.5 2xl:mb-5' />
      <div className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <ProjectsCard
            key={i}
            {...card}
            linkBtn={{
              ...card.linkBtn,
              icon: "ArrowTopRight",
              variant: "filledLight",
              size: "light-lg",
              link: { href: `/${card.linkBtn.link.href}` }
            }}
            className='xs:col-span-12 mid:col-span-6 [&_.badge-container]:flex-row [&_.badge-container]:flex-wrap'
          />
        ))}
      </div>
    </SectionContainer>
  );
};
