import { SbBlokData } from "@/types";
import { ISbImageAsset, ISbLink, mapImage, mapLink } from "../generic";
import { TestimonialsCardProps } from "@/collections/Cards/TestimonialsCard";

export interface ISbTestimonialCard extends SbBlokData {
  component: "testimonialsCard";
  title: string;
  description: string;
  customerName: string;
  customerJobTitle: string;
  customerImg: ISbImageAsset;
  link: ISbLink;
}

export interface MappedTestimonialCard extends SbBlokData, TestimonialsCardProps {}

export const mapTestimonialCard = ({
  title,
  description,
  customerName,
  customerImg,
  customerJobTitle,
  link,
  ...props
}: ISbTestimonialCard) => {
  // const hasImage = customerImg.title;
  return {
    title,
    description,
    customerJobTitle,
    customerName,
    customerImg: mapImage(customerImg),
    link: mapLink(link),
    ...props
  };
};
