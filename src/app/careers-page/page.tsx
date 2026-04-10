import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";
import React from "react";

//FETCH DATA FROM SB
async function fetchCareersPage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const careersPage = await storyblokService.getStory("careers-page", { version: "draft" });

  const mappedStory = await mapStory(careersPage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function CareersPage() {
  const mappedStory = await fetchCareersPage();
  return (
    <main>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const storyblokService = new StoryblokService();
    const careersPage = await storyblokService.getStory("careers-page", { version: "draft" });
    const heroSectionData = careersPage.story.content.sections[0];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // const img = heroSectionData.heroImageCart[0].image.filename;

    if (!careersPage) {
      return {
        title: "FC Careers",
        description: "FC Digital Careers Page",
        openGraph: {}
      };
    }

    return {
      title: "FC Careers",
      description: `${heroSectionData.heroCardDescription}`,
      robots: "index, follow",
      openGraph: {
        title: `${heroSectionData.title} ${heroSectionData.subtitle}`,
        description: `${heroSectionData.heroCardDescription}`,
        images: `${baseUrl}//web-design-img-3.png`
      }
    };
  } catch (err: any) {
    return {
      title: "FC Careers",
      description: "FC Careers",
      openGraph: {}
    };
  }
}
