import { Avatar, Card, CardContent } from "@/components";
import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";
import React from "react";

export interface TeamMembersCardProps {
  title: string;
  members: ImageProps[];
}

export const TeamMembersCard = ({
  title,
  members,
  className,
  ...props
}: TeamMembersCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("xs:px-5 xs:py-4 2xl:px-10 2xl:py-5", className)} {...props}>
      <CardContent className='flex flex-row items-center xs:gap-5 md:gap-[30px] 2xl:gap-10'>
        <h4 className='uppercase text-white xs:Body-14-md md:Body-16-md 2xl:Body-18-md'>{title}</h4>
        <div className='flex flex-row xs:flex-wrap xs:gap-1.5  md:gap-2 2xl:gap-2.5'>
          {members.map((memberImg, index) => (
            <Avatar img={memberImg} key={index} grayscale />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
