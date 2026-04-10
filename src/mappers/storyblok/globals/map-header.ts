import { type SbBlokData } from "@/types";
import { mapImage, type ISbImageAsset } from "../generic";
import { HeaderProps } from "@/collections";
import { type ISbNavItem, mapNavItem } from "../blocks";

export interface ISbHeader extends SbBlokData {
  component: "header";
  logo: ISbImageAsset;
  navItems: ISbNavItem[];
}

export interface MappedHeader extends SbBlokData, HeaderProps {}

export const mapHeader = ({ logo, navItems, ...props }: ISbHeader): MappedHeader => {
  return {
    logo: mapImage(logo),
    navItems: navItems.map(navItem => mapNavItem(navItem)),
    ...props
  };
};
