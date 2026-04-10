import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbStory } from "@/sbComponents";
import { StoryblokService } from "@/services/storyblok";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export interface ArticlePageProps {
  params: { slug: string };
}

async function fetchArticle(slug: string): Promise<MappedSbStory> {
  try {
    const storyblokService = new StoryblokService();
    const article = await storyblokService.getStory(`blog/articles/${slug}`, { version: "draft" });
    return mapStory(article);
  } catch (error) {
    notFound();
  }
}

export const revalidate = 1;

export default async function ArticlePage({ params }: ArticlePageProps) {
  const slug = params.slug;
  const article = await fetchArticle(slug);

  return (
    <main>
      <SbStory {...article} />
    </main>
  );
}

export async function generateStaticParams() {
  const storyblokService = new StoryblokService();
  const articles = await storyblokService.getStories("blog/articles", { version: "draft" });
  const paths = articles?.stories.map(article => `blog/articles/${article.slug}`) || [];

  return paths;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const slug = params.slug;

  try {
    const storyblokService = new StoryblokService();
    const article = await storyblokService.getStory(`blog/articles/${slug}`, { version: "draft" });
    const data = article.story.content;
    const img = data.image.filename;

    if (!article) {
      return {
        title: "FC Blog Article",
        description: "FC Blog Article",
        openGraph: {}
      };
    }

    return {
      title: data.title,
      description: data.summary,
      robots: "index, follow",
      openGraph: {
        title: data.title,
        description: data.summary,
        images: img
      }
    };
  } catch (err: any) {
    return {
      title: "FC Blog Article",
      description: "FC Blog Article",
      openGraph: {}
    };
  }
}
