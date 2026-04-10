import { SbBlokData } from "@storyblok/react";
import { ISbImageAsset, mapImage } from "../generic";
import { ISbLinkButton, mapLinkButton } from "./map-link-button";
import { TeamMemberCardProps } from "@/collections";

export interface ISbTeamMemberSocialsCard extends SbBlokData {
  component: "teamMemberSocialsCard";
  name: string;
  job: string;
  image: ISbImageAsset;
  socials: ISbLinkButton[];
}

export interface MappedTeamMemberSocialsCard extends SbBlokData, TeamMemberCardProps {}

export const mapTeamMemberSocialCard = ({
  name,
  job,
  image,
  socials,
  ...props
}: ISbTeamMemberSocialsCard): MappedTeamMemberSocialsCard => {
  return {
    name,
    job,
    image: mapImage(image),
    socials: socials.map(social => mapLinkButton(social)),
    ...props
  };
};
