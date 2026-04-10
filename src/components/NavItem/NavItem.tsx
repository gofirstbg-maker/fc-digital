"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui";

export interface NavItemProps {
  label: string;
  link: LinkProps;
  onClickClose?: () => void;
}

export const NavItem = ({
  label,
  link,
  className,
  onClickClose
}: NavItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname();

  const isActive = pathname.includes(label) || (label.toLowerCase() === "home" && pathname === "/");

  return (
    <li>
      <Button
        asChild
        className={cn(
          "rounded-xl bg-dark-06 font-secondary uppercase text-grey-50 xs:Body-14-mono 2xl:Body-18-mono xs:w-full xs:px-5 xs:py-3.5 lg:w-fit 2xl:px-6 2xl:py-[18px]",
          { "text-orange-80": isActive },
          className
        )}
        onClick={onClickClose}
      >
        <Link {...link} href={`/${link.href}`}>
          {label}
        </Link>
      </Button>
    </li>
  );
};
