import { SbBlokData } from "@/types";
import { ISbLinkButton, ISbOurWorkCard, mapLinkButton, mapOurWorkCard } from "../blocks";
import { OurWorksProps } from "@/sections";

export interface ISbOurWorks extends SbBlokData {
  component: "ourWorks";
  title: string;
  linkBtn: ISbLinkButton[];
  cards: ISbOurWorkCard[];
}

export interface MappedOurWorks extends SbBlokData, OurWorksProps {}

export const mapOurWork = ({ title, linkBtn, cards, ...props }: ISbOurWorks): MappedOurWorks => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    cards: cards.map(card => mapOurWorkCard(card)),
    ...props
  };
};
