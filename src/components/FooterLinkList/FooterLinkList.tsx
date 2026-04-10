import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

export type FooterLinkItem = {
  label: string;
  link: LinkProps;
};

export interface FooterLinkListProps {
  title: string;
  linkItems: FooterLinkItem[];
}

export const FooterLinkList = ({
  title,
  linkItems,
  className,
  ...props
}: FooterLinkListProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("w-full xs:max-w-[138px] md:max-w-none", className)} {...props}>
      <h4 className='Heading-22-mono text-orange-90 xs:mb-4 md:mb-5 2xl:mb-[30px]'>{title}</h4>
      <ul className='flex list-none flex-col xs:gap-2.5 md:gap-3.5 2xl:gap-[18px]'>
        {linkItems.map((item, index) => (
          <li key={index}>
            <Link
              {...item.link}
              href={`/${item.link.href}`}
              className='text-grey-50 xs:Body-14 md:Body-16 2xl:Body-18'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
