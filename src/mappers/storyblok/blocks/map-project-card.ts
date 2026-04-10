import { type SbBlokData } from "@/types";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { mapBadge, type ISbBadge } from "./map-badge";
import { type ProjectsCardProps } from "@/collections";
import { Icon } from "@/components";

export interface ISbProjectCard extends SbBlokData {
  component: "projectCard";
  title: string;
  linkBtn: ISbLinkButton[];
  badges: ISbBadge[];
  description: string;
  subtitle?: string;
  icon: Icon;
  applyNowBtn?: ISbLinkButton[];
}

export interface MappedProjectCard extends SbBlokData, ProjectsCardProps {}

export const mapProjectCard = ({
  badges,
  description,
  applyNowBtn,
  subtitle,
  icon,
  linkBtn,
  title,
  ...props
}: ISbProjectCard): MappedProjectCard => {
  const mappedApplyButton =
    applyNowBtn && applyNowBtn.length > 0 ? mapLinkButton(applyNowBtn[0]) : undefined;

  return {
    title,
    subtitle,
    description,
    icon,
    linkBtn: mapLinkButton(linkBtn[0]),
    badges: badges.map(badge => mapBadge(badge)),
    applyNowBtn: mappedApplyButton,
    ...props
  };
};
