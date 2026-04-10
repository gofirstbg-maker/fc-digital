import { type SbBlokData } from "@/types";
import {
  mapLinkButton,
  mapSmallTextCard,
  type ISbLinkButton,
  type ISbSmallTextCard
} from "../blocks";
import { type AboutHeroProps } from "@/sections";

export interface ISbAboutHero extends SbBlokData {
  component: "aboutHero";
  title: string;
  subtitle: string;
  linkBtn: ISbLinkButton[];
  cards: ISbSmallTextCard[];
}

export interface MappedAboutHero extends SbBlokData, AboutHeroProps {}

export const mapAboutHero = ({
  title,
  subtitle,
  linkBtn,
  cards,
  ...props
}: ISbAboutHero): MappedAboutHero => {
  return {
    title,
    subtitle,
    linkBtn: mapLinkButton(linkBtn[0]),
    cards: cards.map(card => mapSmallTextCard(card)),
    ...props
  };
};
