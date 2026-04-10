import { SbBlokData } from "@/types";
import { ISbTabsTriggers, mapTabsTrigger } from "./map-tabs-triggers";
import { ISbTabsContent, mapTabsContent } from "./map-tabs-content";
import { TabsCompProps } from "@/components";

export interface ISbTabs extends SbBlokData {
  component: "tabs";
  defaultValue: string;
  tabsTriggers: ISbTabsTriggers[];
  tabsContent: ISbTabsContent[];
}

export interface MappedTabs extends SbBlokData, TabsCompProps {}

export const mapTabs = ({
  defaultValue,
  tabsContent,
  tabsTriggers,
  ...props
}: ISbTabs): MappedTabs => {
  return {
    defaultValue,
    tabsContent: tabsContent.map(tab => mapTabsContent(tab)),
    tabsTriggers: tabsTriggers.map(tab => mapTabsTrigger(tab)),
    ...props
  };
};
