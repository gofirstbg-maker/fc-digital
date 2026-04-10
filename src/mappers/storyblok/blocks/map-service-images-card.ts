import { SbBlokData } from "@/types";
import { ISbLinkButton, mapLinkButton } from "./map-link-button";
import { ServiceImagesCardProps } from "@/collections/Cards/ServiceImagesCard";
import { ISbImageWithLinkBtn, mapImageWithLinkBtn } from "./map-image-with-link-button";

export interface ISbServiceImagesCard extends SbBlokData {
  component: "serviceImagesCard";
  title: string;
  linkBtn: ISbLinkButton[];
  images: ISbImageWithLinkBtn[];
}

export interface MappedServiceImagesCard extends SbBlokData, ServiceImagesCardProps {}

export const mapServiceImageCard = ({
  images,
  linkBtn,
  title,
  ...props
}: ISbServiceImagesCard): MappedServiceImagesCard => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    images: images.map(img => mapImageWithLinkBtn(img)),
    ...props
  };
};
