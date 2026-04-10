import { type SbBlokData } from "@/types";

export interface ISbTabsTriggers extends SbBlokData {
  component: "tabsTriggers";
  value: string;
  label: string;
}

type TabsTrigger = { value: string; label: string };

export interface MappedTabsTrigger extends SbBlokData, TabsTrigger {}

export const mapTabsTrigger = ({ value, label, ...props }: ISbTabsTriggers): MappedTabsTrigger => {
  return { value, label, ...props };
};
