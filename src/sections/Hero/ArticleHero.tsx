import { HeroCaptions } from "@/collections";
import { ArticleDetailsCard } from "@/collections/Cards/ArticleDetailsCard";
import { Container, LabelValueBadgeProps, LinkButtonProps, SectionContainer } from "@/components";
import React from "react";

export interface ArticleHeroProps {
  title: string;
  subtitle: string;
  heroLink: LinkButtonProps;
  badges: LabelValueBadgeProps[];
}

export const ArticleHero = ({
  title,
  subtitle,
  heroLink,
  badges,
  ...props
}: ArticleHeroProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer
      className='grid grid-cols-12 !p-0 xs:mt-5 xs:gap-2.5 md:mt-10 md:gap-4 2xl:mt-[50px] 2xl:gap-5'
      {...props}
    >
      <Container className='flex h-full  items-center bg-secondary xs:col-span-12 lg:col-span-8'>
        <HeroCaptions className='md:!pt-0' linkBtn={heroLink} subtitle={subtitle} title={title} />
      </Container>
      <ArticleDetailsCard className='xs:col-span-12 lg:col-span-4' badges={badges} />
    </SectionContainer>
  );
};
