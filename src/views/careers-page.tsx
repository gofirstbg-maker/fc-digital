import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";

import React from "react";

export interface CareersPageProps {
  sections: MappedSbSection[];
}

export const CareersPage = ({ sections }: CareersPageProps) => {
  return (
    <>
      <SbSections sections={sections} />;
    </>
  );
};
