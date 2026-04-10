import { HeroCaptions, HeroTextCard } from "@/collections";
import { Container, LinkButtonProps, SectionContainer } from "@/components";
import React from "react";

export interface CareersHeroProps {
  title: string;
  subtitle: string;
  linkBtn: LinkButtonProps;
  heroCardTitle: string;
  heroCardDescription: string;
  heroCardLinkBtn: LinkButtonProps;
}

export const CareersHero = ({
  title,
  subtitle,
  linkBtn,
  heroCardTitle,
  heroCardDescription,
  heroCardLinkBtn,
  ...props
}: CareersHeroProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer
      className='grid grid-cols-12 !p-0 xs:mt-5 xs:gap-2.5 md:mt-10 md:gap-4 2xl:mt-[50px] 2xl:gap-5'
      {...props}
    >
      <Container className='flex h-full  items-center bg-secondary xs:col-span-12 lg:col-span-8'>
        <HeroCaptions className='md:!pt-0' linkBtn={linkBtn} subtitle={subtitle} title={title} />
      </Container>
      <HeroTextCard
        title={heroCardTitle}
        description={heroCardDescription}
        linkButton={heroCardLinkBtn}
        className='xs:col-span-12 lg:col-span-4'
      />
    </SectionContainer>
  );
};
