import { LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface FooterCopyRightsProps {
  copyrightsText: string;
  links: LinkButtonProps[];
}

export const FooterCopyRights = ({
  links,
  copyrightsText,
  className,
  ...props
}: FooterCopyRightsProps & React.HTMLAttributes<HTMLDivElement>) => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <div
      className={cn(
        "flex w-full items-center rounded-[14px] bg-secondary xs:flex-col xs:gap-5 xs:p-6 md:flex-row md:justify-between md:gap-20 md:p-10 2xl:p-[50px]",
        className
      )}
      {...props}
    >
      <p className='text-grey-70 xs:Body-14-mono 2xl:Body-18-mono xs:text-center md:text-start'>
        &copy; {currentYear}. {copyrightsText}
      </p>
      <div className='f  flex gap-4 xs:flex-col xs:items-center md:flex-row md:items-start 2xl:gap-[22px]'>
        {links.map((link, index) => (
          <Link
            className='text-grey-70 xs:Body-14-mono 2xl:Body-18-mono '
            key={index}
            href={`/${link.link.href}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
