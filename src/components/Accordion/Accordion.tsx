import React from "react";
import { cn } from "@/lib/utils";
import { Accordion } from "../ui/accordion";
import { AccordionItem, AccordionItemProps } from "./AccordionItem";

export interface AccordionProps {
  items: Omit<AccordionItemProps, "value">[];
}

export const _Accordion = ({ items }: AccordionProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Accordion type='single' collapsible className={cn("flex flex-col xs:gap-2.5 2xl:gap-5")}>
      {items.map(({ content, trigger }, index) => (
        <AccordionItem
          key={index}
          content={content}
          trigger={trigger}
          value={`item-${index + 1}`}
        />
      ))}
    </Accordion>
  );
};
