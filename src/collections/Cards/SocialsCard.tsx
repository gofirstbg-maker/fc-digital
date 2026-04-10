import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icon,
  LinkButton,
  type LinkButtonProps
} from "@/components";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface SocialsCardProps {
  icon: Icon;
  linkBtn: LinkButtonProps;
  title: string;
  description: string;
}

export const SocialsCard = ({
  description,
  icon,
  linkBtn,
  title,
  className,
  ...props
}: SocialsCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("md:p-[30px] 2xl:p-10", className)} {...props}>
      <CardHeader className='md:mb-[30px] 2xl:mb-10'>
        <div className='flex items-center xs:justify-center md:h-[56px] md:justify-between 2xl:h-[66px]'>
          <Button asChild>
            <Link
              href={`/${linkBtn.link.href}`}
              className='bg-dark-12 xs:p-0 xs:px-[26px] xs:py-3.5 md:border md:border-dark-20 md:p-3.5 2xl:p-4'
            >
              <Icon
                name={icon}
                className='text-primary xs:!h-6 xs:!w-6 md:!h-7 md:!w-7 2xl:!h-8 2xl:!w-8'
              />
            </Link>
          </Button>
          <LinkButton
            {...linkBtn}
            variant='filledLight'
            size='light-md'
            icon='ArrowTopRight'
            className='!p-0 xs:hidden md:flex'
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='xs:hidden md:mb-2.5 md:inline 2xl:mb-3'>
          <h4 className='md:Heading-22: uppercase text-orange-95  2xl:Heading-30'>{title}</h4>
        </CardTitle>
      </CardContent>
      <CardFooter>
        <CardDescription className='xs:hidden  md:inline '>
          <p className='md:Body-16 2xl:Body-18'>{description}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
