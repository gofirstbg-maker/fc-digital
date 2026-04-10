import { SbBlokData } from "@/types";
import { ISbTabsTriggers, mapTabsTrigger } from "../blocks";
import { BlogProps } from "@/sections";

export interface ISbBlog extends SbBlokData {
  component: "blog";
  title: string;
  defaultValue: string;
  tabsTriggers: ISbTabsTriggers[];
}

export interface MappedBlog extends SbBlokData, BlogProps {}

export const mapBlog = async ({
  title,
  defaultValue,
  tabsTriggers,
  ...props
}: ISbBlog): Promise<MappedBlog> => {
  return {
    title,
    defaultValue,
    tabsTriggers: tabsTriggers.map(trigger => mapTabsTrigger(trigger)),
    tabsContent: [],
    ...props
  };
};
