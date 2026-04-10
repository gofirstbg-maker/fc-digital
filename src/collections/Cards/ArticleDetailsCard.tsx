import { Card, CardContent, LabelValueBadgeProps } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface ArticleDetailsCardProps {
  badges: LabelValueBadgeProps[];
}

export const ArticleDetailsCard = ({
  badges,
  className,
  ...props
}: ArticleDetailsCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("", className)} {...props}>
      <CardContent className='2x:gap-5  flex  flex-col xs:gap-2.5 xs:p-2.5 2xl:p-[30px]'>
        {badges.map(({ label, value }, i) => (
          <div
            key={i}
            className='flex w-full   items-center justify-between  rounded-xl bg-dark-12 xs:p-5 2xl:p-[30px]'
          >
            <p className=' text-grey-70 xs:Body-14 2xl:Body-18'>{label}</p>
            <p className=' uppercase text-white xs:Body-16-md md:Heading-18 2xl:Heading-22'>
              {value}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
