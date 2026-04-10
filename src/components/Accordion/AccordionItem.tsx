import React from "react";
import {
  AccordionItem as _AccordionItem,
  AccordionContent,
  AccordionTrigger
} from "../ui/accordion";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  value: string;
  trigger: string;
  content: string;
}

export const AccordionItem = ({
  value,
  trigger,
  content,
  className,
  ...props
}: AccordionItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <_AccordionItem
      value={value}
      {...props}
      className={cn(
        " rounded-[16px] bg-secondary xs:px-[30px] xs:py-6 md:p-[30px] 2xl:px-[60px] 2xl:py-10",
        className
      )}
    >
      <AccordionTrigger>{trigger}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </_AccordionItem>
  );
};
