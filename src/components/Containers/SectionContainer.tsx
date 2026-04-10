import { cn } from "@/lib/utils";
import React from "react";

export interface SectionContainerProps {
  border?: boolean;
}

export const SectionContainer = ({
  border = false,
  className,
  children,
  ...props
}: SectionContainerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn(
        "m-auto w-full xs:mb-[50px] xs:max-w-[1360px] xs:p-2.5 md:mb-20 2xl:mb-[120px] 2xl:max-w-[1820px] 2xl:p-5",
        { "rounded-xl border-2 border-dark-12": border },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
