import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";

//FETCH DATA FROM SB
async function fetchProjectsPage(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const projectsPage = await storyblokService.getStory("projects-page", { version: "draft" });

  const mappedStory = await mapStory(projectsPage);

  return mappedStory;
}

//REVALIDATE
export const revalidate = 60 * 5;

export default async function ServicePage() {
  const mappedStory = await fetchProjectsPage();

  return (
    <main>
      <SbStory {...mappedStory} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const storyblokService = new StoryblokService();
    const projectsPage = await storyblokService.getStory("projects-page", { version: "draft" });
    const heroSectionData = projectsPage.story.content.sections[0];
    const img = heroSectionData.heroImageCart[0].image.filename;

    if (!projectsPage) {
      return {
        title: "FC Projects",
        description: "FC Digital Projects Page",
        openGraph: {}
      };
    }

    return {
      title: "FC Projects",
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
      title: "FC Projects",
      description: "FC Projects",
      openGraph: {}
    };
  }
}
