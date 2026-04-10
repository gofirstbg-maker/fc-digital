import { SbBlokData } from "@/types";
import { ISbHeroImgCard, ISbLinkButton, mapHeroImgCard, mapLinkButton } from "../blocks";
import { ProjectsHeroProps } from "@/sections";

export interface ISbProjectHero extends SbBlokData {
  component: "projectsHero";
  title: string;
  subtitle: string;
  description: string;
  linkBtn: ISbLinkButton[];
  heroImageCart: ISbHeroImgCard[];
}

export interface MappedProjectHero extends SbBlokData, ProjectsHeroProps {}

export const mapProjectHero = ({
  description,
  heroImageCart,
  linkBtn,
  subtitle,
  title,
  ...props
}: ISbProjectHero): MappedProjectHero => {
  return {
    title,
    subtitle,
    description,
    linkBtn: mapLinkButton(linkBtn[0]),
    heroImageCart: mapHeroImgCard(heroImageCart[0]),
    ...props
  };
};
