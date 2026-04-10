import { SbBlokData } from "@/types";
import { ISbMediumTextCard, mapMediumTextCard } from "../blocks";
import { WhyUsProps } from "@/sections";

export interface ISbWhyUs extends SbBlokData {
  component: "whyUs";
  title: string;
  cards: ISbMediumTextCard[];
}

export interface MappedWhyUs extends SbBlokData, WhyUsProps {}

export const mapWhyUs = ({ title, cards, ...props }: ISbWhyUs): MappedWhyUs => {
  return { title, cards: cards.map(card => mapMediumTextCard(card)), ...props };
};
