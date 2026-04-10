import { SbBlokData } from "@/types";
import { ISbLinkButton, mapLinkButton } from "../blocks";
import { CareersHeroProps } from "@/sections";

export interface ISbCareersHero extends SbBlokData {
  component: "careersHero";
  title: string;
  subtitle: string;
  linkBtns: ISbLinkButton[];
  heroCardTitle: string;
  heroCardDescription: string;
}

export interface MappedCareersHero extends SbBlokData, CareersHeroProps {}

export const mapCareerHero = ({
  title,
  subtitle,
  heroCardTitle,
  heroCardDescription,
  linkBtns,
  ...props
}: ISbCareersHero): MappedCareersHero => {
  const [linkBtn, heroCardLinkBtn] = linkBtns;

  return {
    title,
    subtitle,
    heroCardDescription,
    heroCardTitle,
    linkBtn: mapLinkButton(linkBtn),
    heroCardLinkBtn: mapLinkButton(heroCardLinkBtn),
    ...props
  };
};
