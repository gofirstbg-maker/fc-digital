import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderWithIcon,
  Icon,
  LinkButton,
  LinkButtonProps
} from "@/components";
import { LabelValueBadge, LabelValueBadgeProps } from "@/components/Badges/LabelValueBadge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface ProjectsCardProps {
  icon: Icon;
  title: string;
  linkBtn: LinkButtonProps;
  badges: LabelValueBadgeProps[];
  description?: string;
  className?: string;
  subtitle?: string;
  applyNowBtn?: LinkButtonProps;
}

export const ProjectsCard = ({
  icon,
  title,
  linkBtn,
  badges,
  description,
  className,
  subtitle,
  applyNowBtn,
  ...props
}: ProjectsCardProps) => {
  return (
    <Card
      className={cn(
        "flex  h-full flex-col xs:gap-5 xs:px-5 xs:py-6 md:gap-[30px] md:px-[30px] md:py-[50px] 2xl:gap-10 2xl:px-10 2xl:py-[60px]",
        className
      )}
      {...props}
    >
      <CardHeader className='flex flex-row justify-between xs:mb-5 md:mb-10 2xl:mb-[50]'>
        <CardHeaderWithIcon icon={icon} title={title} />
        <LinkButton {...linkBtn} className='!p-0 uppercase xs:hidden md:flex' />
      </CardHeader>
      <CardContent
        className={cn("badge-container mt-auto flex flex-col xs:gap-2 md:gap-2.5 2xl:gap-3", {
          "flex-row flex-wrap": !description
        })}
      >
        {badges.map(({ label, value }, index) => (
          <LabelValueBadge value={value} label={label} key={index} />
        ))}
      </CardContent>
      <CardFooter>
        {subtitle && (
          <h5 className='uppercase text-orange-95 xs:Body-16-md md:Heading-20-md 2xl:Heading-24 xs:mb-2 md:mb-2.5 2xl:mb-3'>
            {subtitle}
          </h5>
        )}
        <p className='two-lines-ellipsis text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18 '>
          {description}
        </p>
        <LinkButton {...linkBtn} className='!p-0 uppercase xs:mt-5 xs:flex md:mt-0 md:hidden' />
        {applyNowBtn && (
          <Button
            asChild
            variant='filled'
            size='lg'
            className='bg-primary uppercase text-dark-06 xs:mt-6 md:mt-[30px] 2xl:mt-10 '
          >
            <Link href={`/${applyNowBtn.link.href}`}>{applyNowBtn.label}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
