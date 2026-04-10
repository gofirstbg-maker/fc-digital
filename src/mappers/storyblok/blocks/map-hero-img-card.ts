import { SbBlokData } from "@/types";
import { mapImage, type ISbImageAsset } from "../generic";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type HeroImgCardProps } from "@/collections";

export interface ISbHeroImgCard extends SbBlokData {
  component: "heroImgCard";
  image: ISbImageAsset;
  linkBtn?: ISbLinkButton[];
  footerTitle?: string;
  footerCategory: string;
  footerLink?: ISbLinkButton[];
}

export interface MappedHeroImgCard extends SbBlokData, Omit<HeroImgCardProps, "footerVariant"> {}

export const mapHeroImgCard = ({
  footerCategory,
  footerTitle,
  image,
  linkBtn,
  footerLink,
  ...props
}: ISbHeroImgCard): MappedHeroImgCard => {
  const isLinkButton = linkBtn && linkBtn.length > 0;
  const mappedLinkBtn = isLinkButton ? mapLinkButton(linkBtn[0]) : undefined;

  return {
    footerCategory,
    footerTitle,
    image: mapImage(image),
    linkBtn: mappedLinkBtn,
    footerLink: footerLink ? mapLinkButton(footerLink[0]) : undefined,
    ...props
  };
};
