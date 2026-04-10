import { SbBlokData } from "@/types";
import { ISbImageAsset, mapImage } from "../generic";
import { ISbLinkButton, mapLinkButton } from "../blocks";
import { AuthorCardProps } from "@/collections/Cards/AuthorCard";

export interface ISbAuthor extends SbBlokData {
  component: "author";
  name: string;
  job: string;
  description: string;
  image: ISbImageAsset;
  linkBtn: ISbLinkButton[];
}

export interface MappedAuthor extends SbBlokData, AuthorCardProps {}

export const mapAuthor = ({
  name,
  job,
  description,
  image,
  linkBtn,
  ...props
}: ISbAuthor): MappedAuthor => {
  return {
    name,
    job,
    description,
    image: mapImage(image),
    linkBtn: mapLinkButton(linkBtn[0]),
    ...props
  };
};
