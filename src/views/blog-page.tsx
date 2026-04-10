import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";
import { Blog, BlogProps } from "@/sections";

import React from "react";

export interface BlogPageProps extends BlogProps {
  sections: MappedSbSection[];
}

export const BlogPage = ({
  sections,
  defaultValue,
  tabsContent,
  tabsTriggers,
  title
}: BlogPageProps) => {
  return (
    <>
      <Blog
        defaultValue={defaultValue}
        tabsContent={tabsContent}
        tabsTriggers={tabsTriggers}
        title={title}
      />
      <SbSections sections={sections} />;
    </>
  );
};
