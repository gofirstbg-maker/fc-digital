import { cn } from "@/lib/utils";
import React from "react";
import { LinkButton, LinkButtonProps } from "../Buttons";

export interface SectionHeadingProps {
  title: string;
  linkBtn?: LinkButtonProps;
}

export const SectionHeading = ({
  title,
  linkBtn,
  className,
  ...props
}: SectionHeadingProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={cn(
        "flex w-full flex-row items-center justify-between rounded-2xl bg-secondary xs:p-6 md:p-10",
        className
      )}
      {...props}
    >
      <h2 className='uppercase text-orange-95 xs:Heading-28 md:Heading-38  2xl:Heading-48'>
        {title}
      </h2>
      {linkBtn && (
        <LinkButton
          {...linkBtn}
          icon='ArrowTopRight'
          size='light-md'
          variant='filledLight'
          className='xs:hidden md:flex'
        />
      )}
    </header>
  );
};
