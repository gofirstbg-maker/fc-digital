import { mapHomePageHero, type MappedHomePageHero } from "./map-home-page-hero";
import { MappedWhyUs, mapWhyUs } from "./map-why-us";
import { mapOurService, MappedOurService } from "./map-our-services";
import { mapOurWork, MappedOurWorks } from "./map-our-works";
import { MappedTestimonials, mapTestimonials } from "./map-testimonials";
import { mapFAQ, MappedFAQ } from "./map-FAQ";
import { MappedServiceHero, mapServiceHero } from "./map-services-hero";
import {
  mapOurServicesServicePage,
  MappedOurServicesServicePage
} from "./map-our-services-service-page";
import { MappedSuccessStories, mapSuccessStories } from "./map-success-stories";
import { MappedProjectHero, mapProjectHero } from "./map-project-hero";
import { mapKeyFeatures, MappedKeyFeatures } from "./map-key-features";
import { MappedProjectsShowcase, mapProjectsShowcase } from "./map-projects-showcase";
import { mapAboutHero, MappedAboutHero } from "./map-about-hero";
import { mapMeetOurTeam, MappedMeetOurTeam } from "./map-meet-our-team";
import { mapAchievements, MappedAchievements } from "./map-achievements";
import { mapAwards, MappedAwards } from "./map-awards";
import { mapCareerHero, MappedCareersHero } from "./map-careers-hero";
import { mapJoinOurTeam, MappedJoinOurTeam } from "./map-join-our-team";
import { mapHowToApply, MappedHowToApply } from "./map-how-to-apply";

export type ISbSection = any;

export type SbComponentName = ISbSection["component"];

export type SbSectionsKeys = ISbSection["component"];

// export type MappedSbSection = MappedHomePageHero | MappedAboutSection | MappedContact;
export type MappedSbSection =
  | MappedHomePageHero
  | MappedWhyUs
  | MappedOurService
  | MappedOurWorks
  | MappedTestimonials
  | MappedFAQ
  | MappedServiceHero
  | MappedOurServicesServicePage
  | MappedSuccessStories
  | MappedProjectHero
  | MappedKeyFeatures
  | MappedProjectsShowcase
  | MappedAboutHero
  | MappedMeetOurTeam
  | MappedAchievements
  | MappedAwards
  | MappedCareersHero
  | MappedJoinOurTeam
  | MappedHowToApply;
// props is ISbSection for the particular section
const mappers: Record<SbComponentName, (props: any) => MappedSbSection | Promise<MappedSbSection>> =
  {
    homePageHero: mapHomePageHero,
    whyUs: mapWhyUs,
    ourServices: mapOurService,
    ourWorks: mapOurWork,
    testimonials: mapTestimonials,
    FAQ: mapFAQ,
    servicesHero: mapServiceHero,
    ourServicesServicePage: mapOurServicesServicePage,
    SuccessStories: mapSuccessStories,
    projectsHero: mapProjectHero,
    keyFeatures: mapKeyFeatures,
    projectsShowcase: mapProjectsShowcase,
    aboutHero: mapAboutHero,
    meetOurTeam: mapMeetOurTeam,
    achievements: mapAchievements,
    awards: mapAwards,
    careersHero: mapCareerHero,
    joinOurTeam: mapJoinOurTeam,
    howToApply: mapHowToApply
  };

export const mapSection = async (section: ISbSection): Promise<MappedSbSection> => {
  const { component } = section;
  const mapper = mappers[component || ""];

  if (mapper) {
    const result = mapper(section as ISbSection);

    if (result instanceof Promise) {
      return result;
    }
    return result as MappedSbSection;
  }

  // throw new Error(`Unknown section component: ${component}`);
  return section as unknown as MappedSbSection;
};
