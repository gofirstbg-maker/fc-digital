import { ISbStoriesParams, StoryblokClient, getStoryblokApi } from "@storyblok/react";
import {
  ISbDataSourceEntry,
  ICustomSbResult,
  ISbLink,
  ICustomSbResults,
  ICustomSbAssetsResult
} from "../../types";
import { GetInvitationSbSearchParams } from "./requests";

import axios from "axios";

const relations = ["article.author", "article.relatedArticle"];

export class StoryblokService {
  private api: StoryblokClient;

  constructor() {
    this.api = getStoryblokApi();
  }

  public getStory = async <T>(
    slug: string,
    sbContentParams: ISbStoriesParams
  ): Promise<ICustomSbResult<T>["data"]> => {
    const result = (await this.api.get(`cdn/stories/${slug}`, {
      resolve_relations: relations.join(","),
      ...sbContentParams
    })) as ICustomSbResult<T>;

    return result.data;
  };

  public getDataSource = async (
    sbContentParams: ISbStoriesParams
  ): Promise<ISbDataSourceEntry[]> => {
    const result = await this.api.get(`cdn/datasource_entries`, {
      ...sbContentParams,
      resolve_relations: relations.join(",")
    });

    return result.data.datasource_entries;
  };

  public getLinks = async (): Promise<{
    links: { [key in string]: ISbLink };
  }> => {
    const result = await this.api.get(`cdn/links`);

    return { links: result.data.links };
  };

  public getStories = async <T>(
    slug: string,
    sbContentParams: ISbStoriesParams
  ): Promise<ICustomSbResults<T>["data"]> => {
    const result = await this.api.get(`cdn/stories`, {
      starts_with: slug,
      resolve_relations: relations.join(","),
      ...sbContentParams
    });

    return result.data;
  };

  getProductQueryParams = ({
    page,
    per_page,
    filters,
    sort_by,
    ...params
  }: GetInvitationSbSearchParams["req"]): GetInvitationSbSearchParams["res"] => {
    const sbParams: ISbStoriesParams = {
      starts_with: "data/products",
      page,
      fallback_lang: "en",
      version: "draft",
      cv: Date.now(),

      ...params,
      per_page: per_page || 100,
      sort_by: sort_by || "created_at:desc"
    };

    if (filters?.length) {
      sbParams.filter_query = {
        ...sbParams.filter_query,
        applyingFilters: { all_in_array: filters.join(",") }
      };
    }

    return sbParams;
  };

  getInvitationTypesDatasources = async (): Promise<ISbDataSourceEntry[]> => {
    const [paperStyles, inkTypes] = await Promise.all([
      this.getDataSource({ datasource: "paperstyles" }),
      this.getDataSource({ datasource: "inktypes" })
    ]);

    return [...paperStyles, ...inkTypes];
  };

  //Get Image from Storyblok Assets by folder id
  public getImageAssets = async (
    folderId: string
  ): Promise<ICustomSbAssetsResult["data"]["assets"] | null> => {
    const spaceId = process.env.NEXT_PUBLIC_WEEKLY_STORYBLOK_SPACE_ID;
    const managementAPIToken = process.env.WEEKLY_STORYBLOK_MANAGEMENT_API_TOKEN;

    try {
      const res: ICustomSbAssetsResult = await axios.get(
        `https://api-us.storyblok.com/v1/spaces/${spaceId}/assets?in_folder=${folderId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: managementAPIToken
          }
        }
      );
      const mappedRes = res.data.assets.map(({ filename, title, alt, content_type }) => ({
        filename,
        title,
        alt,
        content_type
      }));

      return mappedRes;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
