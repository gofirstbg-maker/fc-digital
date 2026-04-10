import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { type AboutPageProps } from "@/views";

export interface ISbAboutPage extends SbBlokData {
  component: "aboutPage";
  sections: ISbSection[];
}

export interface MappedAboutPageStory extends SbBlokData, AboutPageProps {}

export const mapAboutPage = async ({
  sections,
  ...props
}: ISbAboutPage): Promise<MappedAboutPageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));
  return { sections: mappedSections, ...props };
};
