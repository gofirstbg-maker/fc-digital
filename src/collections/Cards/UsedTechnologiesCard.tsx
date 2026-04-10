import { Badge, Card, CardContent, CardHeader } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface UsedTechnologiesCardProps {
  title: string;
  badges: string[];
}

export const UsedTechnologiesCard = ({
  badges,
  title,
  className,
  ...props
}: UsedTechnologiesCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("md:p-[30], w-full xs:p-6 2xl:p-10", className)} {...props}>
      <CardHeader className='xs:mb-3.5 md:mb-4 2xl:mb-5'>
        <h4 className='uppercase text-white xs:Body-14-md md:Body-16-md 2xl:Body-18-md'>{title}</h4>
      </CardHeader>
      <CardContent className='flex flex-row flex-wrap xs:gap-2 2xl:gap-2.5'>
        {badges.map((badge, index) => (
          <Badge key={index}>{badge}</Badge>
        ))}
      </CardContent>
    </Card>
  );
};
