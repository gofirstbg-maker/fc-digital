import { type SbBlokData } from "@/types";
import { mapAchievementCard, type ISbAchievementCard } from "../blocks";
import { type HowToApplyProps } from "@/sections/HowToApply";

export interface ISbHowToApply extends SbBlokData {
  component: "howToApply";
  title: string;
  cards: ISbAchievementCard[];
}

export interface MappedHowToApply extends SbBlokData, HowToApplyProps {}

export const mapHowToApply = ({ title, cards, ...props }: ISbHowToApply): MappedHowToApply => {
  return {
    title,
    cards: cards.map(card => mapAchievementCard(card)),
    ...props
  };
};
