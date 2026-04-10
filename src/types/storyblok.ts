import { ISbResult, ISbStory } from "@storyblok/react";

export interface ISbDataSourceEntry {
  id: number;
  name: string;
  value: string;
  dimension_value: string | null;
}

export interface ICustomSbResult<T>
  extends Omit<ISbResult, "data">,
    Omit<ISbStory, "headers" | "data"> {
  data: Omit<ISbStory["data"], "story"> & {
    story: Omit<ISbStory["data"]["story"], "content"> & {
      uuid: ISbStory["data"]["story"]["uuid"];
      content: ISbStory["data"]["story"]["content"] & T;
    };
  };
}
export interface ICustomSbResults<T>
  extends Omit<ISbResult, "data">,
    Omit<ISbStory, "headers" | "data"> {
  data: Omit<ISbStory["data"], "story"> & {
    stories: Omit<ISbStory["data"]["story"], "content"> &
      {
        uuid: ISbStory["data"]["story"]["uuid"];
        slug: ISbStory["data"]["story"]["slug"];
        content: ISbStory["data"]["story"]["content"] & T;
      }[];
  };
}

export interface ISbLink {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  parent_id: number | null;
  published: boolean;
  path: string | null;
  position: number;
  uuid: string;
  is_startpage: boolean;
  real_path: string;
}

export interface SbBlokData<T extends string = string> {
  _uid?: string;
  component?: T;
  _editable?: string;
}

export interface ICustomSbAssetsResult {
  data: {
    assets: {
      filename: string;
      alt: string;
      title: string;
      content_type: string;
    }[];
  };
}

export interface ICustomSbContentData<T> {
  story: {
    content: T;
  };
}
