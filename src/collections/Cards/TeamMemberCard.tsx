import { Card, CardContent, CardHeader, LinkButton, LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface TeamMemberCardProps {
  name: string;
  job: string;
  image: ImageProps;
  socials: LinkButtonProps[];
}

export const TeamMemberCard = ({
  name,
  job,
  image,
  socials,
  className,
  ...props
}: TeamMemberCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("flex flex-col overflow-hidden", className)} {...props}>
      <CardHeader className='basis-full bg-dark-15 xs:px-[30px] xs:pb-[100px] xs:pt-6 md:pb-[105px] md:pt-10 2xl:px-[30px] 2xl:pt-[50px]'>
        <h4 className='text-center uppercase text-orange-95 xs:Body-18-md md:Heading-20-md-flex 2xl:Heading-24'>
          {name}
        </h4>
        <p className='mt-1 text-center text-grey-70 xs:Body-14 2xl:Body-18'>{job}</p>
      </CardHeader>
      <CardContent className='flex basis-full flex-col items-center pb-[30px] xs:gap-6 xs:px-6 2xl:gap-[30px] 2xl:px-[30px]'>
        <div className=' -mt-24 w-full max-w-[300px] rounded-xl bg-orange-80'>
          <Image {...image} className='grayscale' />
        </div>
        <div className=' xl:gap2.5 flex flex-row items-center justify-center xs:gap-2  '>
          {socials.map((link, i) => (
            <LinkButton className='!p-0 [&_svg]:text-orange-80' key={i} {...link} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
