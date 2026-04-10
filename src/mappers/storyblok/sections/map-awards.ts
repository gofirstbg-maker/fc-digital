import { SbBlokData } from "@/types";
import { ISbAwardCard, mapAwardCard } from "../blocks";
import { AwardsProps } from "@/sections";

export interface ISbAwards extends SbBlokData {
  component: "awards";
  title: string;
  cards: ISbAwardCard[];
}

export interface MappedAwards extends SbBlokData, AwardsProps {}

export const mapAwards = ({ title, cards, ...props }: ISbAwards): MappedAwards => {
  return {
    title,
    cards: cards.map(card => mapAwardCard(card)),
    ...props
  };
};
