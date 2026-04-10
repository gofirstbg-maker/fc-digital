import { type SbBlokData } from "@storyblok/react";
import { mapSection, type ISbSection } from "../sections/map-section";
import { type BlogPageProps } from "@/views";
import { ISbBlogCard, ISbTabsTriggers, mapBlogCard, mapTabsTrigger } from "../blocks";
import { StoryblokService } from "@/services/storyblok";

export interface ISbBlogPage extends SbBlokData {
  component: "blogPage";
  sections: ISbSection[];
  title: string;
  defaultValue: string;
  tabsTriggers: ISbTabsTriggers[];
}

export interface MappedBlogPageStory extends SbBlokData, BlogPageProps {}

export const mapBlogPage = async ({
  sections,
  title,
  defaultValue,
  tabsTriggers,
  ...props
}: ISbBlogPage): Promise<MappedBlogPageStory> => {
  const mappedSections = await Promise.all(sections.map(section => mapSection(section)));

  const storyblokService = new StoryblokService();
  const { stories: allArticles } = await storyblokService.getStories<
    ISbBlogCard & { relatedArticleSectionTitle: string }
  >("blog/articles/", {
    version: "draft"
  });

  // console.log("____________________ALL ARTICLES______________________", allArticles);
  return {
    sections: mappedSections,
    title,
    defaultValue,
    tabsTriggers: tabsTriggers.map(trigger => mapTabsTrigger(trigger)),
    tabsContent: allArticles.map(article =>
      mapBlogCard({
        ...article.content,
        linkBtn: {
          link: {
            url: `blog/${article.slug}`,
            cached_url: `blog/${article.slug}`,
            target: "_blank",
            linktype: "url",
            fieldtype: "multilink",
            id: `/blog/${article.slug}`
          },
          label: article.content.relatedArticleSectionTitle,
          component: "linkButton"
        }
      })
    ),
    ...props
  };
};
