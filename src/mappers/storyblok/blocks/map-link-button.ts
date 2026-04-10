import type { SbBlokData } from "@/types";
import { mapLink, type ISbLink } from "../generic";
import { LinkButtonProps, type Icon } from "@/components";

export interface ISbLinkButton extends SbBlokData {
  component: "linkButton";
  label?: string;
  link: ISbLink;
  icon?: Icon;
}

export interface MappedLinkButton extends SbBlokData, Omit<LinkButtonProps, "className"> {}

export const mapLinkButton = ({ label, link, icon, ...props }: ISbLinkButton): MappedLinkButton => {
  return {
    label,
    link: mapLink(link),
    icon,
    ...props
  };
};
