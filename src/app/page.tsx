import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";

//FETCH DATA FROM SB
async function fetchHomePage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const homePage = await storyblokService.getStory("home-page", { version: "draft" });
  const mappedStory = await mapStory(homePage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function Home() {
  const mappedStory = await fetchHomePage();
  return (
    <main className='w-full'>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const storyblokService = new StoryblokService();
    const homePage = await storyblokService.getStory("home-page", { version: "draft" });
    const heroSectionData = homePage.story.content.sections[0];
    const img = heroSectionData.heroImageCart[0].image.filename;

    if (!homePage) {
      return {
        title: "Home",
        description: "FC digital home page",
        openGraph: {}
      };
    }

    return {
      title: "FC Digital",
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
      title: "FC Digital",
      description: "FC Digital",
      openGraph: {}
    };
  }
}
