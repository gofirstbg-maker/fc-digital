import { HeroImgCard, HeroImgCardProps, SmallTextCard, SmallTextCardProps } from "@/collections";
import { HeroCaptions } from "@/collections/HeroCaptions";
import { Container, LinkButtonProps, SectionContainer, TextSwiper } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface HomeHeroProps {
  title: string;
  subtitle: string;
  linkBtn: LinkButtonProps;
  description: string;
  cards: SmallTextCardProps[];
  textSwiperWords: string[];
  heroImageCart: Omit<HeroImgCardProps, "footerVariant">;
}

export const HomeHero = ({
  cards,
  textSwiperWords,
  heroImageCart,
  title,
  subtitle,
  description,
  linkBtn
}: HomeHeroProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer className='2xL:gap-5 flex flex-col !p-0 xs:mb-[50px] xs:mt-5 xs:gap-4 md:mb-20 md:mt-10 2xl:mb-[120px] 2xl:mt-5'>
      <div className=' grid grid-cols-12 md:gap-4 2xl:gap-5 '>
        <Container className='!m-0 bg-secondary xs:col-span-12 lg:col-span-8 2xl:max-w-[1207px]'>
          <HeroCaptions
            description={description}
            linkBtn={linkBtn}
            subtitle={subtitle}
            title={title}
          />

          <TextSwiper
            className=' !w-inherit rounded-xl bg-dark-06 xs:py-3.5 md:py-4 2xl:py-5'
            items={textSwiperWords}
          />
        </Container>
        <HeroImgCard
          className='xs:hidden  lg:col-span-4 lg:flex'
          {...heroImageCart}
          footerVariant='filled'
        />
      </div>
      <Container border className='grid xs:grid-cols-2 xs:gap-2.5 mid:grid-cols-6 2xl:gap-5'>
        {cards.map((card, index) => (
          <SmallTextCard
            key={index}
            {...card}
            className={cn("xs:col-span-1", {
              "xs:col-span-2 mid:col-span-1": index > 3
            })}
          />
        ))}
      </Container>
    </SectionContainer>
  );
};
