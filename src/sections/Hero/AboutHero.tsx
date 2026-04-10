import { HeroCaptions, SmallTextCard, SmallTextCardProps } from "@/collections";
import { Container, LinkButtonProps, SectionContainer } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface AboutHeroProps {
  title: string;
  subtitle: string;
  linkBtn: LinkButtonProps;
  cards: SmallTextCardProps[];
}

export const AboutHero = ({
  cards,
  linkBtn,
  subtitle,
  title
}: AboutHeroProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer className='2xL:gap-5 flex flex-col !p-0 xs:mb-[50px] xs:mt-5 xs:gap-4 md:mb-20 md:mt-10 2xl:mb-[120px] 2xl:mt-5'>
      <div className=' grid grid-cols-12 xs:gap-4 2xl:gap-5 '>
        <Container className='!m-0 flex items-center bg-secondary xs:col-span-12 mid:col-span-8 2xl:max-w-[1207px]'>
          <HeroCaptions className='md:!pt-0' linkBtn={linkBtn} subtitle={subtitle} title={title} />
        </Container>
        <Container
          border
          className='grid bg-secondary xs:col-span-12 xs:grid-cols-2  xs:gap-2.5  mid:col-span-4 2xl:gap-5'
        >
          {cards.map((card, index) => (
            <SmallTextCard
              key={index}
              {...card}
              className={cn("bg-dark-12 xs:col-span-1", {
                "!w-full bg-secondary xs:col-span-2 ": index > 3
              })}
            />
          ))}
        </Container>
      </div>
    </SectionContainer>
  );
};
