import { AuthorCard, AuthorCardProps } from "@/collections/Cards/AuthorCard";
import { RichTextField, SectionContainer } from "@/components";
import { ShareButtons } from "@/components/ShareButtons/ShareButtons";
import Image, { ImageProps } from "next/image";
import React from "react";
import { type StoryblokRichtext } from "storyblok-rich-text-react-renderer";

export interface ArticleProps {
  image: ImageProps;
  content: StoryblokRichtext & string;
  author: AuthorCardProps;
}

export const Article = ({
  image,
  content,
  author
}: ArticleProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer className='!p-0'>
      <article>
        <div className='relative w-full overflow-hidden rounded-2xl xs:mb-5 xs:h-[240px] md:mb-[30px] md:h-[600px] 2xl:mb-[50px]   '>
          <Image {...image} className='absolute h-full w-full rounded-2xl object-cover' />
        </div>
        <div className='grid grid-cols-12 md:gap-2.5 2xl:gap-5'>
          <div className='relative flex h-full xs:col-span-12  xs:justify-center lg:col-span-2 lg:justify-end'>
            <ShareButtons className='xs:flex-row lg:sticky lg:top-10 lg:h-fit lg:flex-col' />
          </div>
          <div className='rounded-xl bg-secondary xs:col-span-12 xs:p-6 md:p-10 lg:col-span-7  2xl:p-[50px]'>
            <RichTextField content={content} />
          </div>
          <div className='h-full xs:col-span-12 lg:col-span-3 '>
            <AuthorCard {...author} className='lg:sticky lg:top-10 lg:h-fit' />
          </div>
        </div>
      </article>
    </SectionContainer>
  );
};
