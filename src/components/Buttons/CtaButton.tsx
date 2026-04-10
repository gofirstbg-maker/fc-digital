import React from "react";
import { Button } from "../ui";
import { Icon } from "../Icon";
import Link from "next/link";
import { LinkButtonProps } from "./LinkButton";
import { cn } from "@/lib/utils";

export interface CtaButtonProps extends LinkButtonProps {}

export const CtaButton = ({ link, icon, label, className }: CtaButtonProps) => {
  return (
    <Button variant={"ghost"} className={cn("", className)} asChild>
      <div className='flex items-center'>
        <span className='relative flex flex-shrink-0 items-center justify-center rounded-full bg-primary xs:h-8 xs:w-8 2xl:h-10 2xl:w-10 '>
          <Icon
            name={icon || "ArrowRight"}
            className='text-secondary xs:h-4 xs:w-4 2xl:!h-5 2xl:!w-5'
          />
          <span className='polygon-clipPath absolute rounded-full  border-4 border-primary xs:h-[56px] xs:w-[56px] 2xl:h-[66px] 2xl:w-[66px]'></span>
        </span>
        <Link
          target='_blank'
          {...link}
          href={link.href}
          className='w-fit uppercase text-primary md:!Body-18 2xl:!Body-20'
        >
          {label}
        </Link>
      </div>
    </Button>
  );
};
