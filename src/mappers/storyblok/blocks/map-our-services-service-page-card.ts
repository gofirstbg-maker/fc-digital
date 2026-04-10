import { type SbBlokData } from "@/types";
import { mapLargeTextCard, type ISbLargeTextCard } from "./map-large-text-card";
import { mapServiceImageCard, type ISbServiceImagesCard } from "./map-service-images-card";
import { type OurServiceServicePageCardProps } from "@/sections";

export interface ISbOurServiceServicePageCard extends SbBlokData {
  component: "ourServiceServicePageCard";
  largeTextCard: ISbLargeTextCard[];
  serviceImageCard: ISbServiceImagesCard[];
}

export interface MappedOurServiceServicePageCard
  extends SbBlokData,
    OurServiceServicePageCardProps {}

export const mapOurServiceServicePageCard = ({
  largeTextCard,
  serviceImageCard,
  ...props
}: ISbOurServiceServicePageCard): MappedOurServiceServicePageCard => {
  return {
    largeTextCard: mapLargeTextCard(largeTextCard[0]),
    serviceImageCard: mapServiceImageCard(serviceImageCard[0]),
    ...props
  };
};
