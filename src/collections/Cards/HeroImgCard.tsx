import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Icon,
  LinkButton,
  type LinkButtonProps
} from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export interface HeroImgCardProps {
  linkBtn?: LinkButtonProps;
  image: ImageProps;
  footerVariant: "filled" | "ghost";
  footerTitle?: string;
  footerLink?: LinkButtonProps;
  footerCategory: string;
}

export const HeroImgCard = ({
  linkBtn,
  image,
  footerCategory,
  footerLink,
  footerTitle,
  footerVariant,
  className,
  ...props
}: HeroImgCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn(
        "relative  w-full overflow-hidden lg:max-w-[452px] 2xl:max-w-[593px]",
        className
      )}
      {...props}
    >
      <CardHeader>
        {linkBtn && (
          <div className=' 2x:-right-10 absolute z-50 flex items-center justify-center rounded-full bg-black lg:-right-5 lg:-top-5 lg:h-[121px] lg:w-[121px] 2xl:-top-10 2xl:h-[191px] 2xl:w-[191px]'>
            <span className='decorative-shape absolute rounded-full  border-4 border-primary lg:h-[89px] lg:w-[89px] 2xl:h-[136px] 2xl:w-[136px]'></span>
            <Link
              {...linkBtn.link}
              href={`/${linkBtn.link.href}`}
              className='items-center justify-center rounded-full bg-primary xs:hidden lg:flex lg:h-[60px] lg:w-[60px] 2xl:h-[88px] 2xl:w-[88px]'
            >
              <Icon name='ArrowTopRight' className='h-10 w-10' />
            </Link>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <Image {...image} className={cn(" absolute z-20 h-full w-full object-cover")} />
      </CardContent>
      {footerVariant === "filled" ? (
        <HeroImgCardFilledFooter title={footerTitle} category={footerCategory} />
      ) : (
        <HeroImgCardGhostFooter
          footerLink={footerLink}
          title={footerTitle}
          category={footerCategory}
        />
      )}
    </Card>
  );
};

type HeroImgCardFilledFooterProps = {
  title?: string;
  category: string;
};

const HeroImgCardFilledFooter = ({ title, category }: HeroImgCardFilledFooterProps) => {
  return (
    <CardFooter className=' absolute bottom-0 left-0 right-0 z-20 bg-dark-12 md:p-6 2xl:p-[30px] '>
      <h3 className='uppercase text-orange-95 md:Heading-20-md 2xl:Heading-24 '>{title}</h3>
      <p className='text-grey-70 md:Body-16'>{category}</p>
    </CardFooter>
  );
};

type HeroImgCardGhostFooter = HeroImgCardFilledFooterProps & {
  footerLink?: LinkButtonProps;
};

const HeroImgCardGhostFooter = ({ title, category, footerLink }: HeroImgCardGhostFooter) => {
  return (
    <CardFooter className='card-footer absolute bottom-0 left-0 right-0 z-20 flex w-full items-center justify-between bg-transparent xs:p-6 2xl:p-[30px]'>
      {footerLink && (
        <LinkButton
          className='bg-transparent !p-0 uppercase text-white md:Body-14 2xl:Body-16 [&_svg]:text-black'
          {...footerLink}
          variant='filledWhite'
          size='light-md'
          icon='ArrowTopRight'
        />
      )}
      <div>
        <h3 className='uppercase text-orange-95 md:Heading-20-md 2xl:Heading-24 '>{title}</h3>
        <p
          className={cn("text-grey-70 md:Body-16", {
            "xs:Body-12 md:px3.5 rounded-xl bg-white/20 uppercase text-white backdrop-blur-sm md:Body-14 2xl:Body-16 xs:px-2.5 xs:py-2 md:py-2.5":
              !!footerLink
          })}
        >
          {category}
        </p>
      </div>
    </CardFooter>
  );
};
