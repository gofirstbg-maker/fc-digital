import { type SbBlokData } from "@/types";
import { mapImage, type ISbImageAsset } from "../generic";
import { type ImageProps } from "next/image";

export interface ISbAvatar extends SbBlokData {
  component: "avatar";
  avatar: ISbImageAsset;
}

export interface MappedAvatar extends SbBlokData, ImageProps {}

export const mapAvatar = ({ avatar }: ISbAvatar): MappedAvatar => {
  return mapImage(avatar);
};
