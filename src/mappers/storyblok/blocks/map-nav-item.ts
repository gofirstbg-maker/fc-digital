import { type SbBlokData } from "@/types";
import { mapLink, type ISbLink } from "../generic";
import { type NavItemProps } from "@/components";

export interface ISbNavItem extends SbBlokData {
  component: "navItem";
  label: string;
  link: ISbLink;
}

export interface MappedNavItem extends SbBlokData, NavItemProps {}

export const mapNavItem = ({ label, link, ...props }: ISbNavItem): MappedNavItem => {
  return {
    label,
    link: mapLink(link),
    ...props
  };
};
