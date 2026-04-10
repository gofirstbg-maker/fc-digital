"use client";
import { SectionContainer } from "@/components";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { BlogCard, BlogCardProps } from "@/collections/Cards/BlogCard";
import { useWindowDimensions } from "@/hooks";

export interface BlogProps {
  tabsTriggers: { value: string; label: string }[];
  tabsContent: Omit<BlogCardProps, "variant">[];
  defaultValue: string;
  title: string;
}

export const Blog = ({ defaultValue, title, tabsContent, tabsTriggers }: BlogProps) => {
  const { width } = useWindowDimensions();
  const isDesktop = width ? (width > 1024 ? true : false) : true;

  // Track first occurrences of each contentTrigger
  const renderedTriggers = new Set<string>();

  return (
    <SectionContainer
      border
      className='2xL:gap-5 flex flex-col  xs:mb-[50px] xs:mt-5 xs:gap-4 md:mb-20 md:mt-10 2xl:mb-[120px] 2xl:mt-5'
    >
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
        <div className='grid w-full grid-cols-12 xs:gap-2.5 2xl:gap-5'>
          {tabsContent.map(({ contentTrigger, ...blogCard }, i) => {
            const isFirstOccurrence = !renderedTriggers.has(contentTrigger);

            if (isFirstOccurrence) {
              renderedTriggers.add(contentTrigger);
            }

            return (
              <TabsContent
                key={i}
                value={contentTrigger as string}
                className={cn(
                  "!w-full rounded-[14px]",
                  {
                    "col-span-12": isFirstOccurrence && isDesktop
                  },
                  {
                    "xs:col-span-12 md:col-span-6 mid:col-span-4": !isFirstOccurrence || !isDesktop
                  }
                )}
              >
                <BlogCard
                  variant={isFirstOccurrence && isDesktop ? "large" : "normal"}
                  {...blogCard}
                  contentTrigger={contentTrigger}
                />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </SectionContainer>
  );
};
