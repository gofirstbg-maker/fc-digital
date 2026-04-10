import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";

import React from "react";

export interface ProjectsPageProps {
  sections: MappedSbSection[];
}

export const ProjectsPage = ({ sections }: ProjectsPageProps) => {
  return (
    <>
      <SbSections sections={sections} />;
    </>
  );
};
