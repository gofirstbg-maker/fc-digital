import { type KeyFeaturesCardProps } from "@/collections";
import { type Icon } from "@/components";
import { type SbBlokData } from "@/types";

export interface ISbKeyFeaturesCard extends SbBlokData {
  component: "keyFeaturesCard";
  title: string;
  description: string;
  icon: Icon;
}

export interface MappedKeyFeaturesCard extends SbBlokData, KeyFeaturesCardProps {}

export const mapKeyFeaturesCard = ({
  title,
  description,
  icon,
  ...props
}: ISbKeyFeaturesCard): MappedKeyFeaturesCard => {
  return {
    title,
    description,
    icon,
    ...props
  };
};
