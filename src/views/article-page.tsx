import {
  Article,
  ArticleHero,
  ArticleHeroProps,
  ArticleProps,
  RelatedArticles,
  RelatedArticlesProps
} from "@/sections";
import { splitTitleAndSubtitle } from "@/utils/helpers";
import React from "react";

export interface ArticlePageProps
  extends ArticleProps,
    Omit<ArticleHeroProps, "subtitle">,
    RelatedArticlesProps {}

export const ArticlePage = async ({
  author,
  content,
  image,
  title,
  relatedArticleSectionTitle,
  relatedArticleTitleLinkBtn,
  relatedArticles,
  badges,
  heroLink
}: ArticlePageProps) => {
  const { subtitle: mappedSubtitle, title: mappedTitle } = splitTitleAndSubtitle(title);
  return (
    <>
      <ArticleHero
        badges={badges}
        title={mappedTitle}
        subtitle={mappedSubtitle}
        heroLink={heroLink}
      />
      <Article author={author} content={content} image={image} />
      <RelatedArticles
        relatedArticleSectionTitle={relatedArticleSectionTitle}
        relatedArticleTitleLinkBtn={relatedArticleTitleLinkBtn}
        relatedArticles={relatedArticles}
      />
    </>
  );
};
