import { type SbBlokData } from "@/types";
import { map_Badge, type ISb_Badge } from "./map-_badge";
import { type UsedTechnologiesCardProps } from "@/collections";

export interface ISbUsedTechnologiesCard extends SbBlokData {
  component: "usedTechnologiesCard";
  title: string;
  badges: ISb_Badge[];
}

export interface MappedUsedTechnologiesCard extends SbBlokData, UsedTechnologiesCardProps {}

export const mapUsedTechnologiesCard = ({
  title,
  badges,
  ...props
}: ISbUsedTechnologiesCard): MappedUsedTechnologiesCard => {
  return {
    title,
    badges: badges.map(badge => map_Badge(badge)),
    ...props
  };
};
