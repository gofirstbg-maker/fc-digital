// import { mapSeo } from "../generic/map-seo";
import { mapFooter } from "../globals";
import { mapHeader } from "../globals/map-header";
import { ICustomSbResult } from "@/types";
import { mapHomePage } from "./map-home-page";
import { mapServicesPage } from "./map-service-page";
import { mapProjectsPage } from "./map-project-page";
import { mapAboutPage } from "./map-about-page";
import { mapCareersPage } from "./map-careers-page";
import { mapBlogPage } from "./map-blog-page";
import { mapArticle } from "./map-article";
import { mapAuthor } from "./map-author";

export type MappedSbStory = any;

const mappers = {
  header: mapHeader,
  footer: mapFooter,
  homePage: mapHomePage,
  servicesPage: mapServicesPage,
  projectsPage: mapProjectsPage,
  aboutPage: mapAboutPage,
  careersPage: mapCareersPage,
  blogPage: mapBlogPage,
  article: mapArticle,
  author: mapAuthor
};

export const mapStory = async <T>(
  storyData: ICustomSbResult<T>["data"]
): Promise<ICustomSbResult<MappedSbStory>["data"]> => {
  const {
    story: { content }
  } = storyData;

  //@ts-expect-error Will fix
  const mapper = content?.component ? mappers[content.component] : null;

  if (!mapper) {
    throw new Error(`Component ${content.component} not found`);
  }

  const mappedContent = await mapper(content);

  return {
    ...storyData,
    story: {
      ...storyData.story,
      content: {
        ...mappedContent
        // ...(content?.metadata && { seo: mapSeo(content.metadata) })
      }
    }
  };
};
