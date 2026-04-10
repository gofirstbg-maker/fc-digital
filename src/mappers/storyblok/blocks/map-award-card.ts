import { AwardCardProps } from "@/collections";
import { SbBlokData } from "@/types";
import { ISbBadge, mapBadge } from "./map-badge";

export interface ISbAwardCard extends SbBlokData {
  component: "awardCard";
  title: string;
  description: string;
  badge: ISbBadge[];
}

export interface MappedAwardCard extends SbBlokData, AwardCardProps {}

export const mapAwardCard = ({
  badge,
  title,
  description,
  ...props
}: ISbAwardCard): MappedAwardCard => {
  return {
    title,
    description,
    badge: mapBadge(badge[0]),
    ...props
  };
};
