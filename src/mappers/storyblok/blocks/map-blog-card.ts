import { SbBlokData } from "@/types";
import { ISbLinkButton, mapLinkButton } from "./map-link-button";
import { ISbImageAsset, mapImage } from "../generic";
import { BlogCardProps } from "@/collections/Cards/BlogCard";
import { ISbBadge, mapBadge } from "./map-badge";

export interface ISbBlogCard extends SbBlokData {
  //No Storyblok item so no component key;
  image: ISbImageAsset;
  title: string;
  summary: string;
  linkBtn: ISbLinkButton;
  contentTrigger: string;
  slug: string;
  badges: ISbBadge[];
  publishedDate: ISbBadge[];
}

type BlogCardData = Omit<BlogCardProps, "variant">;

export interface MappedBlogCard extends SbBlokData, BlogCardData {}

export const mapBlogCard = ({
  image,
  title,
  summary,
  linkBtn,
  badges,
  publishedDate,
  contentTrigger
}: ISbBlogCard): MappedBlogCard => {
  return {
    title,
    summary,
    contentTrigger,
    image: mapImage(image),
    linkBtn: mapLinkButton(linkBtn),
    badges: badges.map(badge => mapBadge(badge)),
    publishedDate: mapBadge(publishedDate[0])
  };
};
