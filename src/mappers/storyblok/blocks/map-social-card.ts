import { type SbBlokData } from "@/types";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type Icon } from "@/components";
import { SocialsCardProps } from "@/collections";

export interface ISbSocialCard extends SbBlokData {
  component: "socialCard";
  title: string;
  description: string;
  linkBtn: ISbLinkButton[];
  icon: Icon;
}

export interface MappedSocialCard extends SbBlokData, SocialsCardProps {}

export const mapSocialCard = ({
  title,
  icon,
  description,
  linkBtn,
  ...props
}: ISbSocialCard): MappedSocialCard => {
  return {
    title,
    icon,
    description,
    linkBtn: mapLinkButton(linkBtn[0]),
    ...props
  };
};
