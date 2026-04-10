import { type SbBlokData } from "@/types";
import {
  mapLinkButton,
  mapTeamMemberSocialCard,
  type ISbLinkButton,
  type ISbTeamMemberSocialsCard
} from "../blocks";
import { type MeetOurTeamProps } from "@/sections";

export interface ISbMeetOurTeam extends SbBlokData {
  component: "meetOurTeam";
  title: string;
  linkBtn: ISbLinkButton[];
  cards: ISbTeamMemberSocialsCard[];
}

export interface MappedMeetOurTeam extends SbBlokData, MeetOurTeamProps {}

export const mapMeetOurTeam = ({
  title,
  linkBtn,
  cards,
  ...props
}: ISbMeetOurTeam): MappedMeetOurTeam => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    cards: cards.map(card => mapTeamMemberSocialCard(card)),
    ...props
  };
};
