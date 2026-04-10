"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between gap-5 text-orange-95 transition-all xs:Body-18-md  md:Heading-20-md  2xl:Heading-22 data-[state=open]:xs:mb-5 data-[state=open]:md:mb-6 data-[state=open]:2xl:mb-[30px] [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <div className='flex flex-shrink-0 items-center justify-center rounded-full border border-dark-20 bg-dark-12 xs:h-10 xs:w-10 2xl:h-[52px] 2xl:w-[52px]'>
          <Icon
            name={isOpen ? "Minus" : "Plus"}
            className='[& shrink-0 text-orange-80 transition-transform duration-200 xs:h-3.5 xs:w-3.5  md:h-4 md:w-4 2xl:h-5 2xl:w-5'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden border-t-dark-15 text-grey-70 transition-all xs:Body-14 md:Body-16 2xl:Body-18 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:border-t data-[state=open]:xs:pt-5 data-[state=open]:md:pt-6 data-[state=open]:2xl:pt-[30px]'
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
