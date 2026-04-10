import { TestimonialsCard, TestimonialsCardProps } from "@/collections/Cards/TestimonialsCard";
import { LinkButtonProps, SectionContainer, SectionHeading } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";

export interface TestimonialsProps {
  title: string;
  linkBtn: LinkButtonProps;
  testimonials: TestimonialsCardProps[];
}

export const Testimonials = ({
  linkBtn,
  title,
  testimonials,
  className,
  ...props
}: TestimonialsProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SectionContainer border className={cn("", className)} {...props}>
      <SectionHeading title={title} linkBtn={linkBtn} className='xs:mb-2.5 2xl:mb-5' />
      <div className='grid w-full grid-cols-4 items-stretch xs:gap-2.5 2xl:gap-5'>
        {testimonials.map((testimonial, i) => (
          <div key={i} className=' !h-full xs:col-span-4 md:col-span-2 xl:col-span-1'>
            <TestimonialsCard className='!h-full max-h-full ' {...testimonial} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
