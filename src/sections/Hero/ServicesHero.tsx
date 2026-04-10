import { HeroCaptions, HeroImgCard } from "@/collections";
import { Container, SectionContainer, TextSwiper } from "@/components";
import React from "react";
import { type HomeHeroProps } from "./HomeHero";

export interface ServicesHeroProps extends Omit<HomeHeroProps, "cards"> {}

export const ServicesHero = ({
  description,
  heroImageCart,
  linkBtn,
  subtitle,
  textSwiperWords,
  title
}: ServicesHeroProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer className='2xL:gap-5 flex flex-col !p-0 xs:mb-[50px] xs:mt-5 xs:gap-4 md:mb-20 md:mt-10 2xl:mb-[120px] 2xl:mt-5'>
      <div className=' grid grid-cols-12 xs:gap-4 2xl:gap-5 '>
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
          className='xs:col-span-12  xs:h-[464px] lg:col-span-4 lg:h-auto'
          {...heroImageCart}
          footerVariant='ghost'
        />
      </div>
    </SectionContainer>
  );
};
