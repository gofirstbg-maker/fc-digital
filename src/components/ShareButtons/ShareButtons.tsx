"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { Icon } from "../Icon";
import { cn } from "@/lib/utils";

const iconWrapperStyling =
  "flex items-center  justify-center border border-dark-20 bg-dark-12 xs:p-3.5 2xl:p-4 md:max-w-[56px] 2xl:max-w-[60px] xs:max-w-10 rounded-xl";

export const ShareButtons = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const path = usePathname();
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  const url = base + path;

  return (
    <div className={cn("flex flex-col xs:gap-3  2xl:gap-4", className)} {...props}>
      <FacebookShareButton url={url} hashtag={url}>
        <div className={iconWrapperStyling}>
          <Icon
            name='Facebook'
            className='text-primary xs:h-6 xs:w-6 md:h-7 md:w-7 2xl:h-8 2xl:w-8'
          />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <div className={iconWrapperStyling}>
          <Icon
            name='LinkedIn'
            className='text-primary xs:h-6 xs:w-6 md:h-7 md:w-7 2xl:h-8 2xl:w-8'
          />
        </div>
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <div className={iconWrapperStyling}>
          <Icon
            name='Twitter'
            className='text-primary xs:h-6 xs:w-6 md:h-7 md:w-7 2xl:h-8 2xl:w-8'
          />
        </div>
      </TwitterShareButton>
    </div>
  );
};
