import { Card, CardDescription, CardHeader, CardTitle } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface AchievementsCardProps {
  date: string;
  title: string;
  description: string;
  smallTitleContainer?: boolean;
}

export const AchievementsCard = ({
  date,
  title,
  smallTitleContainer = false,
  description,
  className,
  ...props
}: AchievementsCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn("grid grid-rows-7 overflow-hidden  bg-dark-12 md:grid-rows-6", className)}
      {...props}
    >
      <CardHeader className=' xs:px-5 xs:py-2.5 md:px-6 md:py-3 2xl:px-[30px] 2xl:py-4'>
        <p className='row-span-1 font-normal text-grey-50 xs:Body-14-mono md:Body-16-mono 2xl:Body-20 '>
          {date}
        </p>
      </CardHeader>
      <CardTitle
        className={cn(
          "bg-dark-15 xs:row-span-2 xs:px-5 xs:py-6 md:row-span-2 md:px-6 md:py-[30px] 2xl:px-[30px] 2xl:py-10",
          { "xs:row-span-2 md:row-span-2": smallTitleContainer }
        )}
      >
        <h4 className='uppercase text-orange-95 xs:Heading-18 md:Heading-20-md-flex 2xl:Heading-24 '>
          {title}
        </h4>
      </CardTitle>
      <CardDescription
        className={cn(" xs:row-span-4 xs:p-5 md:row-span-3 md:p-6 2xl:p-[30px]", {
          "xs:row-span-4 md:row-span-4": smallTitleContainer
        })}
      >
        <p className='text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18 '>{description}</p>
      </CardDescription>
    </Card>
  );
};
