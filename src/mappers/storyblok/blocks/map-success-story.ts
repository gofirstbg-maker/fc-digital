import { type SbBlokData } from "@/types";
import { mapProjectCard, type ISbProjectCard } from "./map-project-card";
import { mapTabs, type ISbTabs } from "./map-tabs";
import { type SuccessStory } from "@/sections/SuccessStories";

export interface ISbSuccessStory extends SbBlokData {
  component: "successStory";
  projectCard: ISbProjectCard[];
  tabs: ISbTabs[];
}

export interface MappedSuccessStory extends SbBlokData, SuccessStory {}

export const mapSuccessStory = ({
  projectCard,
  tabs,
  ...props
}: ISbSuccessStory): MappedSuccessStory => {
  return {
    projectCard: mapProjectCard(projectCard[0]),
    tabs: mapTabs(tabs[0]),
    ...props
  };
};
