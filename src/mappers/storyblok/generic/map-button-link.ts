// import { SbBlokData } from '@/types';
// import { ISbLink, mapLink } from './map-link';

// import { type VariantProps } from 'class-variance-authority';
// import { buttonVariants } from '@/components';

// export interface ISbButtonLink extends SbBlokData {
//   component: 'buttonLink';
//   label: string;
//   link: ISbLink;
//   variant?: VariantProps<typeof buttonVariants>['variant'];
// }

// export interface MappedButtonLink extends SbBlokData, ISbButtonLink {}

// export const mapButtonLink = ({ label, link, variant, ...props }: ISbButtonLink): MappedButtonLink => {
//   return variant ? { label, link: mapLink(link), variant, ...props } : { label, link: mapLink(link), ...props };
// };
