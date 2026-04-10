import { type SbBlokData } from "@/types";
import { mapKeyFeaturesCard, type ISbKeyFeaturesCard } from "../blocks";
import { type KeyFeaturesProps } from "@/sections/KeyFeatures";

export interface ISbKeyFeatures extends SbBlokData {
  component: "keyFeatures";
  title: string;
  cards: ISbKeyFeaturesCard[];
}

export interface MappedKeyFeatures extends SbBlokData, KeyFeaturesProps {}

export const mapKeyFeatures = ({ title, cards, ...props }: ISbKeyFeatures): MappedKeyFeatures => {
  return {
    title,
    cards: cards.map(card => mapKeyFeaturesCard(card)),
    ...props
  };
};
