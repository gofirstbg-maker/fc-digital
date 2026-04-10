import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { ServicesPageProps } from "@/views";

export interface ISbHomePage extends SbBlokData {
  component: "servicesPage";
  sections: ISbSection[];
}

export interface MappedHomePageStory extends SbBlokData, ServicesPageProps {}

export const mapServicesPage = async ({
  sections,
  ...props
}: ISbHomePage): Promise<MappedHomePageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));
  return { sections: mappedSections, ...props };
};
