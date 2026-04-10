import {
  Card,
  CardContent,
  LabelValueBadge,
  LabelValueBadgeProps,
  LinkButton,
  LinkButtonProps
} from "@/components";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface BlogCardProps {
  variant: "large" | "normal";
  image: ImageProps;
  title: string;
  badges: LabelValueBadgeProps[];
  summary: string;
  linkBtn: LinkButtonProps;
  publishedDate: { label: string; value: string };
  contentTrigger: string;
}

export const BlogCard = ({
  variant,
  image,
  title,
  badges,
  summary,
  linkBtn,
  publishedDate
}: BlogCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn("flex flex-col bg-secondary xs:p-3.5 md:p-4 2xl:p-5", {
        "flex-row gap-5 bg-transparent p-0 xs:hidden md:flex md:p-0 2xl:p-0": variant === "large"
      })}
    >
      <div
        className={cn("relative h-[329px]   overflow-hidden rounded-2xl", {
          "h-[454px] w-full max-w-[573px]": variant === "large",
          "xs:mb-5 md:mb-6 2xl:mb-[30px] ": variant === "normal"
        })}
      >
        <Image {...image} className='absolute h-full w-full object-cover' />
      </div>
      <CardContent
        className={cn("w-full rounded-2xl", {
          "bg-secondary  md:p-[50px] 2xl:p-[60px]": variant === "large"
        })}
      >
        <h3
          className={cn(
            "uppercase text-orange-95  xs:Heading-18 md:Heading-20 2xl:Heading-24 xs:mb-2 md:mb-2.5 2xl:mb-3",
            {
              "xs:Heading-24   2xl:Heading-30 xs:mb-4  2xl:mb-5": variant === "large"
            }
          )}
        >
          {title}
        </h3>
        {variant === "large" && (
          <div className='badge-container mt-auto flex flex-row flex-wrap xs:gap-2 md:mb-10 md:gap-2.5 2xl:mb-[50px] 2xl:gap-3'>
            {badges.map(({ label, value }, index) => (
              <LabelValueBadge value={value} label={label} key={index} />
            ))}
          </div>
        )}
        <p
          className={cn(
            "text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18 xs:mb-6 md:mb-[30px] 2xl:mb-10",
            {
              "md:mb-10 2xl:mb-[50px]": variant === "large"
            }
          )}
        >
          {summary}
        </p>
        <div className='flex justify-between'>
          <LinkButton
            {...linkBtn}
            label='READ FULL BLOG'
            icon='ArrowTopRight'
            className={cn(" !p-0 uppercase")}
            size='light-md'
          />
          {variant === "large" && (
            <p className='uppercase text-orange-95 md:Heading-20 2xl:Heading-24 xs:invisible md:visible'>
              <span className='normal-case text-grey-70 md:Body-16 2xl:Body-18'>
                {publishedDate.label}
              </span>{" "}
              {publishedDate.value}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
