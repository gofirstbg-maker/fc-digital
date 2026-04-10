import { InputCaptions } from "@/collections";
import { type SbBlokData } from "@/types";

export interface ISbInputCaptions extends SbBlokData {
  components: "inputCaptions";
  label?: string;
  placeholder: string;
}

export interface MappedInputCaptions extends SbBlokData, InputCaptions {}

export const mapInputCaptions = ({
  placeholder,
  label,
  ...props
}: ISbInputCaptions): MappedInputCaptions => {
  return { label, placeholder, ...props };
};
