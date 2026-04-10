import { ISbSection, MappedSbSection } from "@/mappers/storyblok";
import {
  HomeHero,
  OurWorks,
  WhyUs,
  OurServices,
  Testimonials,
  FAQ,
  ServicesHero,
  OurServicesServicePage,
  ProjectsHero,
  KeyFeatures,
  ProjectsShowcase,
  AboutHero,
  MeetOurTeam,
  Achievements,
  Awards,
  CareersHero,
  JoinOurTeam,
  HowToApply
} from "@/sections";
import { SuccessStories } from "@/sections/SuccessStories";
import { storyblokEditable } from "@storyblok/react";
import { Fragment } from "react";

interface SbSectionsProps {
  sections: MappedSbSection[];
}

const dynamicSections: Record<ISbSection["component"], any> = {
  homePageHero: HomeHero,
  whyUs: WhyUs,
  ourServices: OurServices,
  ourWorks: OurWorks,
  testimonials: Testimonials,
  FAQ: FAQ,
  servicesHero: ServicesHero,
  ourServicesServicePage: OurServicesServicePage,
  SuccessStories: SuccessStories,
  projectsHero: ProjectsHero,
  keyFeatures: KeyFeatures,
  projectsShowcase: ProjectsShowcase,
  aboutHero: AboutHero,
  meetOurTeam: MeetOurTeam,
  achievements: Achievements,
  awards: Awards,
  careersHero: CareersHero,
  joinOurTeam: JoinOurTeam,
  howToApply: HowToApply
};

export const SbSections: React.FC<SbSectionsProps> = ({ sections, ...props }: SbSectionsProps) => {
  return (
    <>
      {sections.map(async ({ component, _editable, _uid, ...sectionProps }, i) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const Section = await dynamicSections[component || ""];

        return (
          <Fragment key={`section_${i}`}>
            {Section ? (
              <Section
                {...props}
                {...sectionProps}
                {...storyblokEditable({ _editable, _uid, component })}
              />
            ) : (
              <section>
                Section <span style={{ color: "red" }}>{component}</span> does not exist yet!
              </section>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
