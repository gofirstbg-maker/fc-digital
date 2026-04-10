import { BlogCard, BlogCardProps } from "@/collections/Cards/BlogCard";
import { LinkButtonProps, SectionContainer, SectionHeading } from "@/components";
import React from "react";

export interface RelatedArticlesProps {
  relatedArticleSectionTitle: string;
  relatedArticleTitleLinkBtn: LinkButtonProps;
  relatedArticles: Omit<BlogCardProps, "variant">[];
}

export const RelatedArticles = ({
  relatedArticleSectionTitle,
  relatedArticleTitleLinkBtn,
  relatedArticles,
  ...props
}: RelatedArticlesProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border {...props}>
      <SectionHeading
        title={relatedArticleSectionTitle}
        linkBtn={{
          ...relatedArticleTitleLinkBtn,
          icon: "ArrowTopRight",
          size: "light-lg",
          variant: "filledLight"
        }}
        className='xs:mb-2.5 2xl:mb-5'
      />
      <div className='grid grid-cols-12 xs:gap-2.5 2xl:gap-5'>
        {relatedArticles.map((article, i) => (
          <div key={i} className='xs:col-span-12 lg:col-span-4'>
            <BlogCard {...article} variant='normal' />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
