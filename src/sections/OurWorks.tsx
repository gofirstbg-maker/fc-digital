import {
  ProjectsCard,
  ProjectsCardProps,
  TeamMembersCard,
  TeamMembersCardProps,
  UsedTechnologiesCard,
  UsedTechnologiesCardProps
} from "@/collections";
import { Button, Container, LinkButtonProps, SectionContainer, SectionHeading } from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export type OurWorkCard = {
  projectCard: ProjectsCardProps;
  image: ImageProps;
  usedTechnologiesCard: UsedTechnologiesCardProps;
  teamMembersCard: TeamMembersCardProps;
  linkBtn: LinkButtonProps;
  contentTrigger?: string;
};

export interface OurWorksProps {
  title: string;
  linkBtn: LinkButtonProps;
  cards: OurWorkCard[];
}

export const OurWorks = ({
  title,
  linkBtn,
  cards,
  className,
  ...props
}: OurWorksProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer
      className={cn("flex flex-col !p-0 xs:gap-2.5 2xl:gap-5", className)}
      {...props}
    >
      <SectionHeading
        title={title}
        linkBtn={{ ...linkBtn, size: "light-md", icon: "ArrowTopRight", variant: "filledLight" }}
      />
      {cards.map(({ image, projectCard, teamMembersCard, usedTechnologiesCard, linkBtn }, i) => (
        <Container border key={i} className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
          <ProjectsCard
            className='xs:order-2 xs:col-span-12 lg:order-1 lg:col-span-4 '
            {...projectCard}
            linkBtn={{
              ...projectCard.linkBtn,
              icon: "ArrowTopRight",
              size: "light-md",
              variant: "filledLight"
            }}
          />
          <div className='relative w-full overflow-hidden rounded-xl xs:order-1 xs:col-span-12 xs:h-[300px] lg:order-2 lg:col-span-4 lg:h-auto lg:max-w-[580px]'>
            <Image
              {...image}
              className='absolute h-full w-full object-cover'
              width={580}
              height={426}
            />
          </div>
          <div className='order-3 flex-col xs:hidden xs:gap-2.5 lg:col-span-4 lg:flex 2xl:gap-5'>
            <UsedTechnologiesCard {...usedTechnologiesCard} />
            <TeamMembersCard {...teamMembersCard} />
            <Button
              asChild
              size={"lg"}
              variant='filled'
              className='bg-primary uppercase text-dark-06'
            >
              <Link href={`/${linkBtn.link.href}`}>{linkBtn.label}</Link>
            </Button>
          </div>
        </Container>
      ))}
    </SectionContainer>
  );
};
