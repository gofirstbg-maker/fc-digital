import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";
import React from "react";

//FETCH DATA FROM SB
async function fetchServicePage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const servicesPage = await storyblokService.getStory("services-page", { version: "draft" });
  const mappedStory = await mapStory(servicesPage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function ServicePage() {
  const mappedStory = await fetchServicePage();
  return (
    <main>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const storyblokService = new StoryblokService();
    const servicesPage = await storyblokService.getStory("services-page", { version: "draft" });
    const heroSectionData = servicesPage.story.content.sections[0];
    const img = heroSectionData.heroImageCard[0].image.filename;

    if (!servicesPage) {
      return {
        title: "FC Services",
        description: "FC Digital Services Page",
        openGraph: {}
      };
    }

    return {
      title: "FC Services",
      description: `${heroSectionData.description}`,
      robots: "index, follow",
      openGraph: {
        title: `${heroSectionData.title} ${heroSectionData.subtitle}`,
        description: `${heroSectionData.description}`,
        images: img
      }
    };
  } catch (err: any) {
    return {
      title: "FC Services",
      description: "FC Services",
      openGraph: {}
    };
  }
}
