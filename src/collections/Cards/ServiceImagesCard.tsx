import { Card, CardContent, CardHeader, LinkButton, LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export type ImageWithLinkBtnProps = { image: ImageProps; linkBtn: LinkButtonProps };

export interface ServiceImagesCardProps {
  title: string;
  linkBtn: LinkButtonProps;
  images: ImageWithLinkBtnProps[];
}

export const ServiceImagesCard = ({
  title,
  linkBtn,
  images,
  className,
  ...props
}: ServiceImagesCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("xs:p-5 md:p-[30px] 2xl:p-10 ", className)} {...props}>
      <CardHeader className='flex flex-row items-center justify-between xs:mb-5 2xl:mb-6 '>
        <h4 className='Body-20 uppercase text-orange-95'>{title}</h4>
        <LinkButton
          {...linkBtn}
          icon='ArrowTopRight'
          variant='filledLight'
          size='light-lg'
          className='!p-0 uppercase xs:hidden md:flex'
        />
      </CardHeader>
      <CardContent className='grid grid-cols-2 md:gap-2.5 2xl:gap-5'>
        {images.map(({ image, linkBtn }, i) => (
          <div
            className='relative overflow-hidden rounded-[20px] border border-dark-20 md:h-[220px] 2xl:h-[251px]'
            key={i}
          >
            <Image {...image} className='absolute h-full w-full object-cover' />
            <LinkButton
              {...linkBtn}
              icon='ArrowTopRight'
              variant='filledWhite'
              className='2xl:left-{30px} absolute bg-transparent !p-0 uppercase  text-white md:Body-14 2xl:Body-16 md:bottom-5 md:left-5 2xl:bottom-[30px] [&_svg]:text-black'
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
