import { CtaButton, type LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface HeroCaptionsProps {
  title: string;
  subtitle: string;
  linkBtn?: LinkButtonProps;
  description?: string;
}

export const HeroCaptions = ({
  description,
  linkBtn,
  subtitle,
  title,
  className,
  ...props
}: HeroCaptionsProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("w-full xs:pt-5 md:px-[44px] md:pt-[63px] 2xl:px-[60px] 2xl:pt-20", className)}
      {...props}
    >
      <div className='flex flex-row items-center gap-1 xs:mb-1 2xl:mb-5'>
        <h1 className='  uppercase text-orange-95 xs:Heading-28 md:Heading-48 2xl:Heading-58 '>
          {title}
        </h1>
        {linkBtn && (
          <CtaButton label={linkBtn.label} link={linkBtn.link} className='xs:hidden md:flex' />
        )}
      </div>
      <h2 className='mb-5 w-full uppercase text-orange-95 xs:Heading-28 md:Heading-48 2xl:Heading-58 2xl:max-w-[680px]'>
        {subtitle}
      </h2>
      {linkBtn && (
        <CtaButton
          label={linkBtn.label}
          link={linkBtn.link}
          className='mb-5 flex-shrink-0 pl-2.5 xs:flex md:hidden'
        />
      )}
      {description && (
        <p className='2xl:mb-90 w-full text-grey-40 xs:Body-14 md:Body-16 2xl:Body-18 xs:mb-8 md:mb-[78px] md:max-w-[692px] 2xl:max-w-[807px]'>
          {description}
        </p>
      )}
    </div>
  );
};
