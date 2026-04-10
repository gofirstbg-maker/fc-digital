import {
  Avatar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  LinkButton
} from "@/components";
import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";
import { LinkProps } from "next/link";
import React from "react";

export interface TestimonialsCardProps {
  title: string;
  description: string;
  customerName: string;
  customerJobTitle: string;
  customerImg: ImageProps;
  link: LinkProps;
}

export const TestimonialsCard = ({
  title,
  description,
  link,
  customerImg,
  customerJobTitle,
  customerName,
  className,
  ...props
}: TestimonialsCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const padding = "2xl:px-10 2xl:pt-10 2xl:pb-0 md:pb-0 md:px-[30px]  md:pt-[30px] xs:p-6";

  return (
    <Card className={cn("flex h-full flex-col overflow-hidden bg-secondary", className)} {...props}>
      <CardHeader className={cn(" md:mb-5 2xl:mb-6", padding)}>
        <h3 className='text-orange-95 xs:Heading-20-md md:Heading-22 2xl:Heading-24'> {title}</h3>
      </CardHeader>
      <CardContent
        className={cn(
          "mt-auto xs:px-6 xs:pb-6 md:mb-[30px] md:px-[30px] md:pb-0 2xl:mb-10 2xl:px-10"
        )}
      >
        <CardDescription className="className=' 2xl:Body-18' text-grey-70 xs:Body-14 md:Body-16">
          <p>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter
        className={cn(
          "flex w-full flex-row items-center justify-between bg-dark-12 ",
          padding,
          "md:pb-6 2xl:pb-[30px]"
        )}
      >
        <div className='flex items-center gap-1'>
          <Avatar img={customerImg} />
          <div>
            <p className='text-orange-90 xs:Body-16 md:Body-18 2xl:Body-20'>{customerName}</p>
            <p className='single-lines-ellipsis text-gray-50 xs:Body-14 md:Body-16 2xl:Body-18'>
              {customerJobTitle}
            </p>
          </div>
        </div>
        <LinkButton
          link={link}
          icon='ArrowRight'
          size='light-md'
          variant='filledLight'
          className='bg-transparent !p-0'
        />
      </CardFooter>
    </Card>
  );
};
