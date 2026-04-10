import { SbBlokData } from "@/types";
import { ISbProjectCard, mapProjectCard } from "../blocks";
import { JoinOurTeamProps } from "@/sections";

export interface ISbJoinOurTeam extends SbBlokData {
  component: "joinOurTeam";
  title: string;
  cards: ISbProjectCard[];
}

export interface MappedJoinOurTeam extends SbBlokData, JoinOurTeamProps {}

export const mapJoinOurTeam = ({ title, cards, ...props }: ISbJoinOurTeam): MappedJoinOurTeam => {
  return {
    title,
    cards: cards.map(card => mapProjectCard(card)),
    ...props
  };
};
