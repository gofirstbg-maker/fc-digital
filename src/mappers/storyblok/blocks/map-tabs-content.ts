import { SbBlokData } from "@storyblok/react";

export interface ISbTabsContent extends SbBlokData {
  component: "tabsContent";
  description: string;
}

type TabsContent = { description: string };

export interface MappedTabsContent extends SbBlokData, TabsContent {}

export const mapTabsContent = ({ description, ...props }: ISbTabsContent): MappedTabsContent => {
  return { description, ...props };
};
