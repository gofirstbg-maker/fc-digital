import { type SbBlokData } from "@/types";
import { ISbLinkButton, ISbTestimonialCard, mapLinkButton, mapTestimonialCard } from "../blocks";
import { TestimonialsProps } from "@/sections/Testimonials";

export interface ISbTestimonials extends SbBlokData {
  component: "testimonials";
  title: string;
  linkBtn: ISbLinkButton[];
  testimonials: ISbTestimonialCard[];
}

export interface MappedTestimonials extends SbBlokData, TestimonialsProps {}

export const mapTestimonials = ({
  title,
  linkBtn,
  testimonials,
  ...props
}: ISbTestimonials): MappedTestimonials => {
  return {
    title,
    linkBtn: mapLinkButton(linkBtn[0]),
    testimonials: testimonials.map(testimonial => mapTestimonialCard(testimonial)),
    ...props
  };
};
