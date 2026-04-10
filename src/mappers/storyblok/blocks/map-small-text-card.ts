import { type SbBlokData } from "@/types";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type SmallTextCardProps } from "@/collections";

export interface ISbSmallTextCard extends SbBlokData {
  component: "smallTextCard";
  label?: string;
  value?: string;
  linkBtn?: ISbLinkButton[];
}

export interface MappedSmallTextCard extends SbBlokData, SmallTextCardProps {}

export const mapSmallTextCard = ({
  label,
  value,
  linkBtn,
  ...props
}: ISbSmallTextCard): MappedSmallTextCard => {
  const isLinkButton = linkBtn && linkBtn.length > 0;
  const mappedLinkBtn = isLinkButton ? mapLinkButton(linkBtn[0]) : undefined;

  return {
    label,
    value,
    linkBtn: mappedLinkBtn,
    ...props
  };
};
