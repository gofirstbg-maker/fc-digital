import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";

import React from "react";

export interface AboutPageProps {
  sections: MappedSbSection[];
}

export const AboutPage = ({ sections }: AboutPageProps) => {
  return (
    <>
      <SbSections sections={sections} />;
    </>
  );
};
