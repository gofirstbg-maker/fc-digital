import { type LabelValueBadgeProps } from "@/components";
import { type SbBlokData } from "@/types";

export interface ISbBadge extends SbBlokData {
  component: "badge";
  label: string;
  value: string;
}

export interface MappedBadge extends SbBlokData, LabelValueBadgeProps {}

export const mapBadge = ({ value, label, ...props }: ISbBadge): MappedBadge => {
  return { value, label, ...props };
};
