import { SbBlokData } from "@/types";
import { ISbAvatar, mapAvatar } from "./map-avatar";
import { TeamMembersCardProps } from "@/collections";

export interface ISbTeamMemberCard extends SbBlokData {
  component: "teamMemberCard";
  title: string;
  members: ISbAvatar[];
}

export interface MappedTeamMemberCard extends SbBlokData, TeamMembersCardProps {}

export const mapTeamMemberCard = ({
  members,
  title,
  ...props
}: ISbTeamMemberCard): MappedTeamMemberCard => {
  return {
    title,
    members: members.map(member => mapAvatar(member)),
    ...props
  };
};
