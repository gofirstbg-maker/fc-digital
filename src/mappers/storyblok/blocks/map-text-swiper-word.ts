import { type SbBlokData } from "@/types";

export interface ISbTextSwiperWord extends SbBlokData {
  component: "textSwiperWord";
  word: string;
}

export interface MappedTextSwiperWord extends SbBlokData {}

export const mapTextSwiperWord = ({ word }: ISbTextSwiperWord) => {
  return word;
};
