import {
  Card,
  CardContent,
  CardHeader,
  Icon,
  LabelValueBadge,
  LabelValueBadgeProps
} from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface AwardCardProps {
  badge: LabelValueBadgeProps;
  title: string;
  description: string;
}

export const AwardCard = ({
  badge,
  title,
  description,
  className,
  ...props
}: AwardCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("w-full xs:p-6 md:p-[30px] 2xl:p-10", className)} {...props}>
      <CardHeader className='flex flex-row items-center justify-between xs:mb-[30px] md:mb-10 2xl:mb-[50px]'>
        <LabelValueBadge {...badge} />
        <div className='flex items-center justify-center rounded-xl border border-dark-20 bg-dark-12 xs:h-[52px] xs:w-[52px]  md:h-[56px] md:w-[56px]  2xl:h-[66px] 2xl:w-[66px]'>
          <Icon name='MedalStar' className='h-7 w-7 text-primary' />
        </div>
      </CardHeader>
      <CardContent>
        <h4 className='xs:Heading-18 text-orange-95 md:Heading-22 2xl:Heading-30 xs:mb-1.5 md:mb-3'>
          {title}
        </h4>
        <p className='text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18'>{description}</p>
      </CardContent>
    </Card>
  );
};
