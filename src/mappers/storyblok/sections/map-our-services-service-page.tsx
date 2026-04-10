import { type SbBlokData } from "@/types";
import { type ISbOurServiceServicePageCard, mapOurServiceServicePageCard } from "../blocks";
import { type OurServicesServicePageProps } from "@/sections";

export interface ISbOurServicesServicePage extends SbBlokData {
  component: "ourServicesServicePage";
  title: string;
  cards: ISbOurServiceServicePageCard[];
}

export interface MappedOurServicesServicePage extends SbBlokData, OurServicesServicePageProps {}

export const mapOurServicesServicePage = ({
  title,
  cards,
  ...props
}: ISbOurServicesServicePage): MappedOurServicesServicePage => {
  return {
    title,
    cards: cards.map(card => mapOurServiceServicePageCard(card)),
    ...props
  };
};
