import { LargeTextCard, LargeTextCardProps } from "@/collections";
import { ServiceImagesCard, ServiceImagesCardProps } from "@/collections/Cards/ServiceImagesCard";
import { SectionContainer, SectionHeading } from "@/components";
import React from "react";

export type OurServiceServicePageCardProps = {
  largeTextCard: LargeTextCardProps;
  serviceImageCard: ServiceImagesCardProps;
};

export interface OurServicesServicePageProps {
  title: string;
  cards: OurServiceServicePageCardProps[];
}

export const OurServicesServicePage = ({
  title,
  cards,
  ...props
}: OurServicesServicePageProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border {...props}>
      <SectionHeading title={title} className='xs:mb-2.5 2xl:mb-5' />
      <div className='flex flex-col xs:gap-2.5 2xl:gap-5'>
        {cards.map(({ largeTextCard, serviceImageCard }, i) => (
          <div key={i} className='grid w-full grid-cols-2  xs:gap-2.5 2xl:gap-5'>
            <LargeTextCard {...largeTextCard} className='xs:col-span-2 mid:col-span-1' />
            <ServiceImagesCard
              {...serviceImageCard}
              className='xs:col-span-2 xs:hidden md:block mid:col-span-1'
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
