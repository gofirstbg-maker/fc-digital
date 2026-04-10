import { type SbBlokData } from "@/types";
import {
  mapAccordionItem,
  mapContactFormCaptions,
  mapLinkButton,
  type ISbAccordionItem,
  type ISbContactFormCaptions,
  type ISbLinkButton
} from "../blocks";
import { type FAQProps } from "@/sections/FAQ";

export interface ISbFAQ extends SbBlokData {
  component: "FAQ";
  title: string;
  linkBtn: ISbLinkButton[];
  accordionItems: ISbAccordionItem[];
  formCaptions: ISbContactFormCaptions[];
}

export interface MappedFAQ extends SbBlokData, FAQProps {}

export const mapFAQ = ({
  title,
  linkBtn,
  accordionItems,
  formCaptions,
  ...props
}: ISbFAQ): MappedFAQ => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    accordionItems: accordionItems.map(item => mapAccordionItem(item)),
    formCaptions: mapContactFormCaptions(formCaptions[0]),
    ...props
  };
};
