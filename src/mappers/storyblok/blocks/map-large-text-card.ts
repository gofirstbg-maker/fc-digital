import { type Icon } from "@/components";
import { type SbBlokData } from "@/types";
import { type ISbLinkButton, mapLinkButton } from "./map-link-button";
import { type LargeTextCardProps } from "@/collections";

export interface ISbLargeTextCard extends SbBlokData {
  component: "largeTextCard";
  title: string;
  description: string;
  price: string;
  icon: Icon;
  linkBtn: ISbLinkButton[];
}

export interface MappedLargeTextCard extends SbBlokData, LargeTextCardProps {}

export const mapLargeTextCard = ({
  description,
  icon,
  linkBtn,
  price,
  title,
  ...props
}: ISbLargeTextCard): MappedLargeTextCard => {
  return { description, icon, title, price, linkBtn: mapLinkButton(linkBtn[0]), ...props };
};
