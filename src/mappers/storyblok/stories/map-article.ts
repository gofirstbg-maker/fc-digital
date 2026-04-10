import { SbBlokData } from "@/types";
import { ISbImageAsset, mapImage } from "../generic";
import {
  ISbBadge,
  ISbBlogCard,
  ISbLinkButton,
  mapBadge,
  mapBlogCard,
  mapLinkButton
} from "../blocks";
import { ISbAuthor, mapAuthor } from "./map-author";
import { ArticleHeroProps, ArticleProps, RelatedArticlesProps } from "@/sections";
import { BlogCardProps } from "@/collections/Cards/BlogCard";
import { StoryblokRichtext } from "storyblok-rich-text-react-renderer";
import { StoryblokService } from "@/services/storyblok";

export interface ISbArticle extends SbBlokData {
  component: "article";
  title: string;
  heroLink: ISbLinkButton[];
  image: ISbImageAsset;
  summary: string;
  badges: ISbBadge[];
  publishedDate: ISbBadge[];
  contentTrigger: string;
  relatedArticleSectionTitle: string;
  relatedArticleTitleLinkBtn: ISbLinkButton[];
  relatedArticles: string[];
  author: { content: ISbAuthor }[];
  content: StoryblokRichtext & string;
  relatedArticleLinkButtonLabel: string;
}

interface ArticleDataProps
  extends ArticleProps,
    RelatedArticlesProps,
    Omit<ArticleHeroProps, "subtitle">,
    Omit<BlogCardProps, "variant" | "linkBtn"> {}

export interface MappedArticle extends SbBlokData, ArticleDataProps {}

export const mapArticle = async ({
  title,
  image,
  summary,
  badges,
  publishedDate,
  heroLink,
  contentTrigger,
  relatedArticleLinkButtonLabel,
  relatedArticles,
  relatedArticleSectionTitle,
  relatedArticleTitleLinkBtn,
  content,
  author,
  ...props
}: ISbArticle): Promise<MappedArticle> => {
  // console.log("_____________RELATED_ARTICLES___________________", relatedArticles);
  const storyblokService = new StoryblokService();

  const { stories: allArticles } = await storyblokService.getStories<ISbBlogCard>(
    "blog/articles/",
    {
      version: "draft"
    }
  );

  const mapRelatedArticles = (articlesID: string[]): ISbBlogCard[] => {
    const articles: ISbBlogCard[] = [];

    articlesID.forEach(id => {
      const articleMatches = allArticles.filter(article => article.uuid === id);
      articleMatches.forEach(article => {
        articles.push({
          image: article.content.image,
          contentTrigger: article.content.contentTrigger,
          summary: article.content.summary,
          title: article.content.title,
          linkBtn: {
            link: {
              url: `blog/${article.slug}`,
              cached_url: `blog/${article.slug}`,
              target: "_blank",
              linktype: "url",
              fieldtype: "multilink",
              id: `/blog/${article.slug}`
            },
            label: relatedArticleLinkButtonLabel,
            component: "linkButton"
          },
          slug: article.slug,
          badges: article.content.badges,
          publishedDate: article.content.publishedDate
        });
      });
    });

    return articles;
  };

  const mappedRelatedArticles = mapRelatedArticles(relatedArticles);

  // console.log("_____________RELATED_ARTICLES___________________", mappedRelatedArticles);

  const detailBadges = badges.map(badge => mapBadge(badge));
  const dateBadge = mapBadge(publishedDate[0]);
  const allBadges = [...detailBadges, dateBadge];

  return {
    title,
    image: mapImage(image),
    summary,
    relatedArticleSectionTitle,
    relatedArticleTitleLinkBtn: mapLinkButton(relatedArticleTitleLinkBtn[0]),
    heroLink: mapLinkButton(heroLink[0]),
    badges: allBadges,
    publishedDate: dateBadge,
    contentTrigger,
    relatedArticles: mappedRelatedArticles.map(article => mapBlogCard(article)),
    author: mapAuthor(author[0].content),
    content,
    ...props
  };
};
