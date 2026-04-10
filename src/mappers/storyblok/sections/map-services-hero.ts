import { SbBlokData } from "@/types";
import {
  ISbHeroImgCard,
  ISbLinkButton,
  ISbTextSwiperWord,
  mapHeroImgCard,
  mapLinkButton,
  mapTextSwiperWord
} from "../blocks";
import { ServicesHeroProps } from "@/sections";

export interface ISbServiceHero extends SbBlokData {
  component: "servicesHero";
  title: string;
  subtitle: string;
  description: string;
  linkBtn: ISbLinkButton[];
  textSwiperWords: ISbTextSwiperWord[];
  heroImageCard: ISbHeroImgCard[];
}

export interface MappedServiceHero extends SbBlokData, ServicesHeroProps {}

export const mapServiceHero = ({
  description,
  heroImageCard,
  linkBtn,
  subtitle,
  textSwiperWords,
  title,
  ...props
}: ISbServiceHero): MappedServiceHero => {
  return {
    description,
    subtitle,
    linkBtn: mapLinkButton(linkBtn[0]),
    heroImageCart: mapHeroImgCard(heroImageCard[0]),
    title,
    textSwiperWords: textSwiperWords.map(word => mapTextSwiperWord(word)),
    ...props
  };
};
