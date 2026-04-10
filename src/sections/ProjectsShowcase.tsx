import { Button, Container, SectionContainer } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import { OurWorkCard } from "./OurWorks";
import { ProjectsCard, TeamMembersCard, UsedTechnologiesCard } from "@/collections";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProjectsShowcaseProps {
  tabsTriggers: { value: string; label: string }[];
  tabsContent: OurWorkCard[];
  defaultValue: string;
  title: string;
}

export const ProjectsShowcase = ({
  tabsTriggers,
  defaultValue,
  tabsContent,
  title
}: ProjectsShowcaseProps) => {
  return (
    <SectionContainer className='!p-0'>
      <Tabs defaultValue={defaultValue}>
        <TabsList className='flex w-full items-center justify-between rounded-2xl bg-secondary xs:mb-2.5 xs:flex-col xs:gap-5 xs:p-6 md:p-10 lg:flex-row lg:gap-0 2xl:mb-5'>
          <h2 className='uppercase text-orange-95 xs:Heading-28 md:Heading-38  2xl:Heading-48'>
            {title}
          </h2>
          <div className=''>
            {tabsTriggers.map(({ label, value }, i) => (
              <TabsTrigger
                key={i}
                value={value}
                className='rounded-xl uppercase xs:Body-14 md:Body-16 2xl:Body-18 data-[state=active]:bg-primary data-[state=inactive]:bg-secondary data-[state=active]:text-dark-06 data-[state=inactive]:text-grey-70 xs:w-full xs:px-3.5 xs:py-3 md:w-fit md:px-5 md:py-3.5 2xl:px-6 2xl:py-[18px]'
              >
                {label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {tabsContent.map(
          (
            { image, projectCard, teamMembersCard, contentTrigger, usedTechnologiesCard, linkBtn },
            i
          ) => (
            <TabsContent
              key={i}
              value={contentTrigger as string}
              className='!w-full rounded-[14px] '
            >
              <Container
                border
                key={i}
                className={cn("grid grid-cols-12 xs:gap-2.5 2xl:gap-5", {
                  "xs:mb-2.5 2xl:mb-5": tabsContent.length - 1 !== i
                })}
              >
                <ProjectsCard
                  className='xs:order-2 xs:col-span-12 lg:order-1 lg:col-span-4 '
                  {...projectCard}
                  linkBtn={{
                    ...projectCard.linkBtn,
                    icon: "ArrowTopRight",
                    size: "light-md",
                    variant: "filledLight"
                  }}
                />
                <div className='relative w-full overflow-hidden rounded-xl xs:order-1 xs:col-span-12 xs:h-[300px] lg:order-2 lg:col-span-4 lg:h-auto lg:max-w-[580px]'>
                  <Image
                    {...image}
                    className='absolute h-full w-full object-cover'
                    width={580}
                    height={426}
                  />
                </div>
                <div className='order-3 flex-col xs:hidden xs:gap-2.5 lg:col-span-4 lg:flex 2xl:gap-5'>
                  <UsedTechnologiesCard {...usedTechnologiesCard} />
                  <TeamMembersCard {...teamMembersCard} />
                  <Button
                    asChild
                    size={"lg"}
                    variant='filled'
                    className='bg-primary uppercase text-dark-06'
                  >
                    <Link href={`/${linkBtn.link.href}`}>{linkBtn.label}</Link>
                  </Button>
                </div>
              </Container>
            </TabsContent>
          )
        )}
      </Tabs>
    </SectionContainer>
  );
};
