import { type SbBlokData } from "@/types";
import { mapNavItem, type ISbNavItem } from "./map-nav-item";
import { FooterLinkListProps } from "@/components";

export interface ISbFooterLinkList extends SbBlokData {
  component: "footerLinkList";
  title: string;
  linkItems: ISbNavItem[];
}

export interface MappedFooterLinkList extends SbBlokData, FooterLinkListProps {}

export const mapFooterLinkList = ({
  title,
  linkItems,
  ...props
}: ISbFooterLinkList): MappedFooterLinkList => {
  return {
    title,
    linkItems: linkItems.map(linkItem => mapNavItem(linkItem)),
    ...props
  };
};
