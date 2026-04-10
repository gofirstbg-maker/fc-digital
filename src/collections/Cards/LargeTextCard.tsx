import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderWithIcon,
  Icon,
  LinkButton,
  LinkButtonProps
} from "@/components";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface LargeTextCardProps {
  icon: Icon;
  title: string;
  linkBtn: LinkButtonProps;
  description: string;
  price?: string;
}

export const LargeTextCard = ({
  icon,
  title,
  linkBtn,
  description,
  price,
  className,
  ...props
}: LargeTextCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(" xs:p-6 md:p-[60px] 2xl:p-20 ", className)} {...props}>
      <CardHeader className='flex flex-row justify-between xs:mb-5 md:mb-10 2xl:mb-[50]'>
        <CardHeaderWithIcon icon={icon} title={title} />
        <LinkButton
          {...linkBtn}
          variant='filledLight'
          size='light-md'
          icon='ArrowTopRight'
          className='uppercase xs:hidden md:flex'
        />
      </CardHeader>
      <CardContent>
        <h4 className='Body-18 uppercase text-orange-95  xs:inline md:hidden'>{price}</h4>
        <p className='text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18'>{description}</p>
      </CardContent>
      <CardFooter className='flex flex-row justify-end xs:mt-5 md:mt-4 2xl:mt-5'>
        <h4 className='uppercase text-orange-95 md:Heading-22 2xl:Heading-30  xs:hidden md:inline-block'>
          {price}
        </h4>
        <Button
          asChild
          className='bg-primary text-gray-500 xs:flex md:hidden'
          variant='filled'
          size='lg'
        >
          <Link className=' !text-dark-06' href={`/${linkBtn.link.href}`}>
            {linkBtn.label}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
