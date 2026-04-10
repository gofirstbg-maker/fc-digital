import { type SbBlokData } from "@/types";

export interface ISb_Badge extends SbBlokData {
  component: "_badge";
  string: string;
}

export const map_Badge = ({ string }: ISb_Badge): string => {
  return string;
};
