import { FooterLinkList, FooterLinkListProps } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface FooterNavProps {
  linksColumn: FooterLinkListProps[];
}

export const FooterNav = ({
  linksColumn,
  className,
  ...props
}: FooterNavProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav
      className={cn(
        "2xl:p-[60px ] flex rounded-[14px] bg-secondary xs:flex-wrap xs:gap-[30px] xs:p-6 md:flex-nowrap md:gap-10 md:p-10 2xl:gap-[60px]",
        className
      )}
      {...props}
    >
      {linksColumn.map((linksCol, index) => (
        <FooterLinkList key={index} {...linksCol} />
      ))}
    </nav>
  );
};
