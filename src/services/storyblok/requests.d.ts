import { ISbStoriesParams } from '@storyblok/react';
import { MappedBundleData, MappedProductData } from 'mappers';
export type SortBy = 'content.price:asc:int' | 'content.price:desc:int' | 'created_at:desc' | 'created_at:asc';

export interface GetInvitationSbSearchParams {
  req: {
    occasionToSearch?: string;
    slugs?: string[];
    page?: number;
    per_page?: number;
    filters?: string[];
    sort_by?: SortBy;
  };
  res: ISbStoriesParams;
}

export interface GetInvitations {
  req: GetInvitationSbSearchParams['req'];
  res: {
    invitations: (MappedProductData | MappedBundleData)[];
    page: number;
  };
}
