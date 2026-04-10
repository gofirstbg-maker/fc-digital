import React from "react";
import { SocialsCardProps } from "./SocialsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icon
} from "@/components";
import { cn } from "@/lib/utils";

export interface KeyFeaturesCardProps extends Omit<SocialsCardProps, "linkBtn"> {}

export const KeyFeaturesCard = ({
  description,
  icon,
  title,
  className,
  ...props
}: KeyFeaturesCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("xs:p-5 md:p-[30px] 2xl:p-10", className)} {...props}>
      <CardHeader className='xs:mb-[30px] 2xl:mb-10'>
        <div className='flex items-center  md:h-[56px] 2xl:h-[66px]'>
          <div className='rounded-lg border border-dark-20 bg-dark-12 xs:p-3.5 2xl:p-4'>
            <Icon
              name={icon}
              className='text-primary xs:!h-6 xs:!w-6 md:!h-7 md:!w-7 2xl:!h-8 2xl:!w-8'
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='md:mb-2.5 md:inline 2xl:mb-3'>
          <h4 className='md:Heading-22: uppercase text-orange-95  2xl:Heading-30'>{title}</h4>
        </CardTitle>
      </CardContent>
      <CardFooter className='flex h-full'>
        <CardDescription>
          <p className='md:Body-16 2xl:Body-18'>{description}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
