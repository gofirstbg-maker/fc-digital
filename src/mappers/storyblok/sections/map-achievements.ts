import { type SbBlokData } from "@/types";
import { type ISbAchievementCard, mapAchievementCard } from "../blocks";
import { type AchievementsProps } from "@/sections";

export interface ISbAchievements extends SbBlokData {
  component: "achievements";
  title: string;
  cards: ISbAchievementCard[];
}

export interface MappedAchievements extends SbBlokData, AchievementsProps {}

export const mapAchievements = ({
  title,
  cards,
  ...props
}: ISbAchievements): MappedAchievements => {
  return {
    title,
    cards: cards.map(card => mapAchievementCard(card)),
    ...props
  };
};
