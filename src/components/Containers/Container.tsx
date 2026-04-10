import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps {
  border?: boolean;
}

export const Container = ({
  border = false,
  className,
  children,
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "m-auto w-full rounded-[14px] xs:max-w-[1360px] xs:p-2.5 2xl:max-w-[1820px] 2xl:p-5",
        { "border-2 border-dark-12": border },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
