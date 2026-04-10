import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui";
import { LinkButton, LinkButtonProps } from "../../components/Buttons";

export interface MediumTextCardProps {
  title: string;
  description: string;
  linkBtn: LinkButtonProps;
}

export const MediumTextCard = ({
  title,
  description,
  linkBtn
}: MediumTextCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className='flex h-full flex-col xs:p-6 md:p-[30px] 2xl:p-10'>
      <CardHeader className='xs:mb-2 md:mb-2.5 2xl:mb-3'>
        <CardTitle className='uppercase text-orange-95 xs:Heading-20 md:Heading-22 2xl:Heading-30'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=' mt-auto md:mb-7 2xl:mb-10'>
        <CardDescription className='text-grey-70  xs:Body-14 md:Body-16 2xl:Body-18 '>
          <p className='multiline-ellipsis'>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <LinkButton
          {...linkBtn}
          variant={"filledDark"}
          size={"dark-lg"}
          icon='ArrowTopRight'
          className='!p-0'
        />
      </CardFooter>
    </Card>
  );
};
