import { ICustomSbResult } from "@/types";
import {
  AboutPage,
  ArticlePage,
  BlogPage,
  CareersPage,
  HomePage,
  ProjectsPage,
  ServicesPage
} from "@/views";

// export type MappedPagesTypes = MappedHomePageStory;
export type MappedPagesTypes = any;

const pagesTypes = {
  homePage: HomePage,
  servicesPage: ServicesPage,
  projectsPage: ProjectsPage,
  aboutPage: AboutPage,
  careersPage: CareersPage,
  blogPage: BlogPage,
  article: ArticlePage
};

export const SbStory: React.FC<ICustomSbResult<MappedPagesTypes>["data"]> = ({ story }) => {
  const { content } = story;
  const { component, ...pageProps } = content;

  // @ts-expect-error Will fix
  const Page = pagesTypes[component || ""];

  if (!Page) {
    return <div>Page {component} does not exist yet!</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useStoryblokState(story);

  return (
    <>
      <Page {...pageProps} />
      {/* <NextSeo {...content.seo} /> */}
    </>
  );
};
