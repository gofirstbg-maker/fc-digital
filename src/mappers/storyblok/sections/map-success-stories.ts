import { type SbBlokData } from "@/types";
import {
  mapLinkButton,
  mapSuccessStory,
  type ISbLinkButton,
  type ISbSuccessStory
} from "../blocks";
import { type SuccessStoriesProps } from "@/sections/SuccessStories";

export interface ISbSuccessStories extends SbBlokData {
  component: "SuccessStories";
  title: string;
  linkBtn: ISbLinkButton[];
  stories: ISbSuccessStory[];
}

export interface MappedSuccessStories extends SbBlokData, SuccessStoriesProps {}

export const mapSuccessStories = ({
  title,
  linkBtn,
  stories,
  ...props
}: ISbSuccessStories): MappedSuccessStories => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    stories: stories.map(story => mapSuccessStory(story)),
    ...props
  };
};
