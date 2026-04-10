import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex  w-full rounded-md border border-none bg-dark-06 text-base text-orange-90  xs:Body-14  md:Body-16  2xl:Body-18 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 xs:min-h-[101px] xs:p-4 md:min-h-[114px] md:p-5 xl:p-6 2xl:min-h-[172px] ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
