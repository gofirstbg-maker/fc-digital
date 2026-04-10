import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { HomePageProps } from "@/views";

export interface ISbHomePage extends SbBlokData {
  component: "homePage";
  sections: ISbSection[];
}

export interface MappedHomePageStory extends SbBlokData, HomePageProps {}

export const mapHomePage = async ({
  sections,
  ...props
}: ISbHomePage): Promise<MappedHomePageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));
  return { sections: mappedSections, ...props };
};
