import { TeamMemberCard, TeamMemberCardProps } from "@/collections";
import { LinkButtonProps, SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface MeetOurTeamProps {
  title: string;
  linkBtn: LinkButtonProps;
  cards: TeamMemberCardProps[];
}

export const MeetOurTeam = ({
  title,
  linkBtn,
  cards
}: MeetOurTeamProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border>
      <SectionHeading
        title={title}
        linkBtn={{ ...linkBtn, icon: "ArrowTopRight", variant: "filledLight", size: "light-md" }}
        className='uppercase xs:mb-2.5 2xl:mb-5'
      />
      <div className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
        {cards.map((card, i) => (
          <TeamMemberCard
            key={i}
            {...card}
            className='xs:col-span-12 md:col-span-6 lg:col-span-3'
          />
        ))}
      </div>
    </SectionContainer>
  );
};
