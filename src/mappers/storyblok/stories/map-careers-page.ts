import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { type CareersPageProps } from "@/views";

export interface ISbCareersPage extends SbBlokData {
  component: "careersPage";
  sections: ISbSection[];
}

export interface MappedCareersPageStory extends SbBlokData, CareersPageProps {}

export const mapCareersPage = async ({
  sections,
  ...props
}: ISbCareersPage): Promise<MappedCareersPageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));
  return { sections: mappedSections, ...props };
};
