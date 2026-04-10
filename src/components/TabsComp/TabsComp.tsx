import React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export interface TabsCompProps {
  tabsTriggers: { value: string; label: string }[];
  tabsContent: { description: string }[];
  defaultValue: string;
}

export const TabsComp = ({
  tabsTriggers,
  tabsContent,
  defaultValue,
  className
}: TabsCompProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Tabs defaultValue={defaultValue} className={cn("", className)}>
      <TabsList className='flex  text-white xs:mb-2.5 xs:gap-2.5 2xl:mb-5 2xl:gap-3'>
        {tabsTriggers.map(({ label, value }, i) => (
          <TabsTrigger
            key={i}
            value={value}
            className='rounded-xl uppercase xs:Body-14 md:Body-16 2xl:Body-18 data-[state=active]:bg-primary data-[state=inactive]:bg-secondary data-[state=active]:text-dark-06 data-[state=inactive]:text-grey-70 xs:w-full xs:px-3.5 xs:py-3 md:w-fit md:px-5 md:py-3.5 2xl:px-6 2xl:py-[18px]'
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsContent.map(({ description }, i) => (
        <TabsContent
          key={i}
          value={tabsTriggers[i].value}
          className='!w-full rounded-[14px] bg-secondary  xs:p-6 md:p-[30px] 2xl:p-10 '
        >
          <h4 className='uppercase text-orange-95 xs:Heading-24-mono md:Heading-32-mono 2xl:Heading-48-mono xs:mb-2 md:mb-2.5 2xl:mb-3.5'>
            {tabsTriggers[i].value}
          </h4>
          <p className=' text-grey-70 xs:Body-14 md:Body-16 2xl:Body-18'>{description}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};
