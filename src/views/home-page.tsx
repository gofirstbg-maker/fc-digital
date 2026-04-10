import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";

import React from "react";

export interface HomePageProps {
  sections: MappedSbSection[];
}

export const HomePage = ({ sections }: HomePageProps) => {
  return (
    <>
      <SbSections sections={sections} />;
    </>
  );
};
