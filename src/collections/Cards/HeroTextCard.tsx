import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  LinkButton,
  LinkButtonProps
} from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface HeroTextCardProps {
  title: string;
  description: string;
  linkButton: LinkButtonProps;
}

export const HeroTextCard = ({
  title,
  description,
  linkButton,
  className,
  ...props
}: HeroTextCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("xs:p-[30px] md:p-10 2xl:p-[50px]", className)} {...props}>
      <CardHeader className='xs:mb-3 md:mb-4 2xl:mb-5 '>
        <h3 className='uppercase text-orange-95 xs:Heading-20 md:Heading-24 2xl:Heading-30'>
          {title}
        </h3>
      </CardHeader>
      <CardContent className='xs:mb-[30px] md:mb-10 2xl:mb-[50px]'>
        <CardDescription>
          <p className='text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18'>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <LinkButton
          {...linkButton}
          icon='ArrowDown'
          variant='filledLight'
          size='light-md'
          className='!p-0 uppercase'
        />
      </CardFooter>
    </Card>
  );
};
