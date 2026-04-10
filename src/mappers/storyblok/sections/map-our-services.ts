import { type SbBlokData } from "@/types";
import { mapLargeTextCard, type ISbLargeTextCard } from "../blocks";
import { type OurServicesProps } from "@/sections/OurServices";

export interface ISbOurServices extends SbBlokData {
  component: "ourServices";
  title: string;
  cards: ISbLargeTextCard[];
}

export interface MappedOurService extends SbBlokData, OurServicesProps {}

export const mapOurService = ({ cards, title, ...props }: ISbOurServices): MappedOurService => {
  return {
    title,
    cards: cards.map(card => mapLargeTextCard(card)),
    ...props
  };
};
