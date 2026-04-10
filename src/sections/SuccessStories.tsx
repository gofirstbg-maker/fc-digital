import { ProjectsCard, ProjectsCardProps } from "@/collections";
import {
  Container,
  LinkButtonProps,
  SectionContainer,
  SectionHeading,
  TabsComp,
  TabsCompProps
} from "@/components";
import { cn } from "@/lib/utils";

import React from "react";

export type SuccessStory = {
  projectCard: ProjectsCardProps;
  tabs: TabsCompProps;
};

export interface SuccessStoriesProps {
  title: string;
  linkBtn: LinkButtonProps;
  stories: SuccessStory[];
}

export const SuccessStories = ({
  title,
  linkBtn,
  className,
  stories,
  ...props
}: SuccessStoriesProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer
      className={cn("flex flex-col !p-0 xs:gap-2.5 2xl:gap-5", className)}
      {...props}
    >
      <SectionHeading
        title={title}
        linkBtn={{ ...linkBtn, size: "light-md", icon: "ArrowTopRight", variant: "filledLight" }}
      />
      {stories.map(({ projectCard, tabs }, i) => (
        <Container
          key={i}
          border
          className='md:p-30px xs-col-span-12 grid grid-cols-12 xs:gap-2.5 xs:p-2.5 2xl:gap-5 2xl:p-[50px]'
        >
          <ProjectsCard
            {...projectCard}
            linkBtn={{
              ...projectCard.linkBtn,
              icon: "ArrowTopRight",
              size: "light-md",
              variant: "filledLight",
              className: "uppercase"
            }}
            className='xs:col-span-12 mid:col-span-6'
          />
          <TabsComp {...tabs} className='xs:col-span-12 mid:col-span-6' />
        </Container>
      ))}
    </SectionContainer>
  );
};
