import { type MappedSbSection } from "@/mappers/storyblok";
import { SbSections } from "@/sbComponents";

import React from "react";

export interface ServicesPageProps {
  sections: MappedSbSection[];
}

export const ServicesPage = ({ sections }: ServicesPageProps) => {
  return (
    <>
      <SbSections sections={sections} />;
    </>
  );
};
