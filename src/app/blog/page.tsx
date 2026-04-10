import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";
import React from "react";

//FETCH DATA FROM SB
async function fetchBlogPage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const blogPage = await storyblokService.getStory("blog", { version: "draft" });

  const mappedStory = await mapStory(blogPage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function BlogPage() {
  const mappedStory = await fetchBlogPage();
  return (
    <main>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // const img = heroSectionData.heroImageCart[0].image.filename;

  return {
    title: "FC Blog",
    description: "Discovery our blog",
    robots: "index, follow",
    openGraph: {
      title: "FC Blog",
      description: "Discovery our blog",
      images: `${baseUrl}//web-design-img-1.png`
    }
  };
}
