import { type SbBlokData } from "@/types";
import { mapImage, type ISbImageAsset } from "../generic";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type ImageWithLinkBtnProps } from "@/collections/Cards/ServiceImagesCard";

export interface ISbImageWithLinkBtn extends SbBlokData {
  component: "imageWithLinkBtn";
  image: ISbImageAsset;
  linkBtn: ISbLinkButton[];
}

export interface MappedImageWithLinkBtn extends SbBlokData, ImageWithLinkBtnProps {}

export const mapImageWithLinkBtn = ({
  image,
  linkBtn,
  ...props
}: ISbImageWithLinkBtn): MappedImageWithLinkBtn => {
  return {
    image: mapImage(image),
    linkBtn: mapLinkButton(linkBtn[0]),
    ...props
  };
};
