import { type SbBlokData } from "@/types";
import { mapProjectCard, type ISbProjectCard } from "./map-project-card";
import { mapImage, type ISbImageAsset } from "../generic";
import {
  mapUsedTechnologiesCard,
  type ISbUsedTechnologiesCard
} from "./map-used-technologies-card";
import { mapTeamMemberCard, type ISbTeamMemberCard } from "./map-team-member-card";
import { mapLinkButton, type ISbLinkButton } from "./map-link-button";
import { type OurWorkCard } from "@/sections";

export interface ISbOurWorkCard extends SbBlokData {
  component: "ourWorkCard";
  projectCard: ISbProjectCard[];
  image: ISbImageAsset;
  usedTechnologiesCard: ISbUsedTechnologiesCard[];
  teamMembersCard: ISbTeamMemberCard[];
  linkBtn: ISbLinkButton[];
  contentTrigger?: string;
}

export interface MappedOurWorkCard extends SbBlokData, OurWorkCard {}

export const mapOurWorkCard = ({
  projectCard,
  image,
  usedTechnologiesCard,
  teamMembersCard,
  contentTrigger,
  linkBtn,
  ...props
}: ISbOurWorkCard): MappedOurWorkCard => {
  return {
    projectCard: mapProjectCard(projectCard[0]),
    image: mapImage(image),
    usedTechnologiesCard: mapUsedTechnologiesCard(usedTechnologiesCard[0]),
    teamMembersCard: mapTeamMemberCard(teamMembersCard[0]),
    linkBtn: mapLinkButton(linkBtn[0]),
    contentTrigger,
    ...props
  };
};
