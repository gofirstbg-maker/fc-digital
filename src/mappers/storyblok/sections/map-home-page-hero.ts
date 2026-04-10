import { type SbBlokData } from "@/types";
import {
  mapHeroImgCard,
  mapLinkButton,
  mapSmallTextCard,
  mapTextSwiperWord,
  type ISbHeroImgCard,
  type ISbLinkButton,
  type ISbSmallTextCard,
  type ISbTextSwiperWord
} from "../blocks";
import { type HomeHeroProps } from "@/sections";

export interface ISbHomePageHero extends SbBlokData {
  component: "homePageHero";
  title: string;
  subtitle: string;
  linkBtn: ISbLinkButton[];
  description: string;
  cards: ISbSmallTextCard[];
  textSwiperWords: ISbTextSwiperWord[];
  heroImageCart: ISbHeroImgCard[];
}

export interface MappedHomePageHero extends SbBlokData, HomeHeroProps {}

export const mapHomePageHero = ({
  cards,
  description,
  heroImageCart,
  linkBtn,
  subtitle,
  textSwiperWords,
  title,
  ...props
}: ISbHomePageHero): MappedHomePageHero => {
  return {
    cards: cards.map(card => mapSmallTextCard(card)),
    description,
    subtitle,
    linkBtn: mapLinkButton(linkBtn[0]),
    heroImageCart: mapHeroImgCard(heroImageCart[0]),
    title,
    textSwiperWords: textSwiperWords.map(word => mapTextSwiperWord(word)),
    ...props
  };
};
