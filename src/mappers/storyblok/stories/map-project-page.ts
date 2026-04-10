import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { ProjectsPageProps } from "@/views";

export interface ISbProjectsPage extends SbBlokData {
  component: "projectsPage";
  sections: ISbSection[];
}

export interface MappedProjectsPageStory extends SbBlokData, ProjectsPageProps {}

export const mapProjectsPage = async ({
  sections,
  ...props
}: ISbProjectsPage): Promise<MappedProjectsPageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));
  return { sections: mappedSections, ...props };
};
