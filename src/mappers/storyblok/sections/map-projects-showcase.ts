import { SbBlokData } from "@/types";
import { ISbOurWorkCard, ISbTabsTriggers, mapOurWorkCard, mapTabsTrigger } from "../blocks";
import { ProjectsShowcaseProps } from "@/sections";

export interface ISbProjectsShowcase extends SbBlokData {
  component: "projectsShowcase";
  title: string;
  defaultValue: string;
  tabsTriggers: ISbTabsTriggers[];
  tabsContent: ISbOurWorkCard[];
}

export interface MappedProjectsShowcase extends SbBlokData, ProjectsShowcaseProps {}

export const mapProjectsShowcase = ({
  title,
  defaultValue,
  tabsContent,
  tabsTriggers,
  ...props
}: ISbProjectsShowcase): MappedProjectsShowcase => {
  return {
    title,
    defaultValue,
    tabsContent: tabsContent.map(tab => mapOurWorkCard(tab)),
    tabsTriggers: tabsTriggers.map(trigger => mapTabsTrigger(trigger)),
    ...props
  };
};
