import { type SbBlokData } from "@/types";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type MediumTextCardProps } from "@/collections";

export interface ISbMediumTextCard extends SbBlokData {
  component: "mediumTextCard";
  title: string;
  description: string;
  linkBtn: ISbLinkButton[];
}

export interface MappedMediumTextCard extends SbBlokData, MediumTextCardProps {}

export const mapMediumTextCard = ({
  description,
  title,
  linkBtn,
  ...props
}: ISbMediumTextCard): MappedMediumTextCard => {
  return {
    title,
    description,
    linkBtn: mapLinkButton(linkBtn[0]),
    ...props
  };
};
