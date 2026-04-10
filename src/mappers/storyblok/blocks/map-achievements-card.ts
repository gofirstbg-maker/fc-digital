import { type AchievementsCardProps } from "@/collections/Cards/AchievementsCard";
import { type SbBlokData } from "@storyblok/react";

export interface ISbAchievementCard extends SbBlokData {
  component: "achievementsCard";
  date: string;
  title: string;
  description: string;
}

export interface MappedAchievementCard extends SbBlokData, AchievementsCardProps {}

export const mapAchievementCard = ({
  date,
  title,
  description,
  ...props
}: ISbAchievementCard): MappedAchievementCard => {
  return {
    date,
    title,
    description,
    ...props
  };
};
