import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";

//FETCH DATA FROM SB
async function fetchAboutPage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const aboutPage = await storyblokService.getStory("about-page", { version: "draft" });

  const mappedStory = await mapStory(aboutPage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function AboutPage() {
  const mappedStory = await fetchAboutPage();

  return (
    <main>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const storyblokService = new StoryblokService();
    const aboutPage = await storyblokService.getStory("about-page", { version: "draft" });
    const heroSectionData = aboutPage.story.content.sections[0];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!aboutPage) {
      return {
        title: "FC About",
        description: "FC Digital About Page",
        openGraph: {}
      };
    }

    return {
      title: "FC About",
      description: `${heroSectionData.description}`,
      robots: "index, follow",
      openGraph: {
        title: `${heroSectionData.title} ${heroSectionData.subtitle}`,
        description: `${heroSectionData.description}`,
        images: `${baseUrl}/web-design-img-5.png`
      }
    };
  } catch (err: any) {
    return {
      title: "FC About",
      description: "FC About",
      openGraph: {}
    };
  }
}
