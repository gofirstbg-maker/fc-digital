import { ImageProps } from "next/image";

export interface ISbImageAsset {
  alt: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  focus?: string;
  id?: number;
  is_external_url?: boolean;
  name?: string;
  title?: string;
  meta_data?: {
    quality?: number;
    maxWidth?: number;
  };
}

export const mapImage = (sbImage: ISbImageAsset): ImageProps => {
  const [width, height] = sbImage.filename?.split("/")[5]?.split("x");

  // const meta_data = sbImage?.meta_data;

  return {
    src: sbImage.filename,
    width: width ? Number(width) : 0,
    height: height ? Number(height) : 0,
    alt: sbImage.alt
    // meta_data: {
    //   quality: meta_data?.quality || 75,
    //   maxWidth: meta_data?.maxWidth || 2000,
    // },
  };
};
