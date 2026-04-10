import { Card, CardContent, CardFooter, Icon, LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export interface AuthorCardProps {
  image: ImageProps;
  name: string;
  job: string;
  description: string;
  linkBtn: LinkButtonProps;
}

export const AuthorCard = ({
  image,
  name,
  job,
  description,
  linkBtn,
  className,
  ...props
}: AuthorCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("", className)} {...props}>
      <CardContent className='xs:p-6 md:p-7 2xl:p-10'>
        <div className='flex flex-row items-center xs:mb-5 xs:gap-3 2xl:mb-6 2xl:gap-4'>
          <div className=' relative overflow-hidden rounded-full bg-[#FFB299] xs:h-[60px] xs:w-[60px] 2xl:h-20 2xl:w-20'>
            <Image {...image} width={200} height={200} className='h-full w-full object-cover ' />
          </div>
          <div>
            <h6 className='text-orange-90 xs:Body-18-md 2xl:Heading-20-md-flex'>{name}</h6>
            <p className='text-grey-50 xs:Body-16 2xl:Body-18'>{job}</p>
          </div>
        </div>
        <p className='text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18 '>{description}</p>
      </CardContent>
      <CardFooter className='xs:px-6 xs:pb-6 md:px-2.5 md:pb-2.5 2xl:px-5 2xl:pb-5'>
        <Link
          className='flex items-center justify-between rounded-xl bg-dark-12 xs:px-5 xs:py-3.5 2xl:px-6 2xl:py-[18px]'
          href={linkBtn.link.href}
        >
          <span className='flex flex-row gap-2 text-grey-80'>
            <Icon name='LinkedIn' className='h-5 w-5 !text-primary' />
            {linkBtn.label}
          </span>
          <span>
            <Icon name='ArrowTopRight' className='text-primary xs:h-6 xs:w-6 2xl:h-7 2xl:w-7' />
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};
