export interface ISbMusicAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: {
    alt: string;
    title: string;
    source: string;
    copyright: string;
  };
  is_private: boolean;
}

export interface MappedMusicAsset {
  title: string;
  url: string;
  alt: string;
}

export const mapMusicAsset = (sbMusic: ISbMusicAsset): MappedMusicAsset => {
  return {
    title: sbMusic?.title || sbMusic?.meta_data?.title,
    url: sbMusic.filename,
    alt: sbMusic.alt
  };
};
