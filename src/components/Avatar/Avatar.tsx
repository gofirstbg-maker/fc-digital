import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface AvatarProps {
  img: ImageProps;
  grayscale?: boolean;
}

export const Avatar = ({
  img,
  grayscale = false,
  className,
  ...props
}: AvatarProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-full bg-primary xs:h-10 xs:w-10 2xl:h-[50px] 2xl:w-[50px]",
        className,
        {
          "bg-orange-80": grayscale
        }
      )}
      {...props}
    >
      <Image
        {...img}
        width={90}
        className={cn("items-center object-cover", { grayscale: grayscale })}
      />
    </div>
  );
};
