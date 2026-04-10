import { AccordionItemProps } from "@/components/Accordion/AccordionItem";
import { type SbBlokData } from "@/types";

export interface ISbAccordionItem extends SbBlokData {
  component: "accordionItem";
  content: string;
  trigger: string;
}

export interface MappedAccordionItem extends SbBlokData, Omit<AccordionItemProps, "value"> {}

export const mapAccordionItem = ({
  content,
  trigger,
  ...props
}: ISbAccordionItem): MappedAccordionItem => {
  return { content, trigger, ...props };
};
