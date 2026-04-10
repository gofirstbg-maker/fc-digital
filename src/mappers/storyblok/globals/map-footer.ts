import { type SbBlokData } from "@/types";
import {
  mapFooterLinkList,
  mapInputCaptions,
  mapLinkButton,
  mapSocialCard,
  mapTextSwiperWord,
  type ISbTextSwiperWord,
  type ISbFooterLinkList,
  type ISbInputCaptions,
  type ISbLinkButton,
  type ISbSocialCard
} from "../blocks";
import { FooterProps } from "@/collections/Footer";

export interface ISbFooter extends SbBlokData {
  getInTouchDescription: string;
  getInTouchTitle: string;
  getInTouchLinkBtn: ISbLinkButton[];
  textSwiperWords: ISbTextSwiperWord[];
  cards: ISbSocialCard[];
  linksColumn: ISbFooterLinkList[];
  subscriptionLabel: string;
  subscriptionTitle: string;
  emailInputCaptions: ISbInputCaptions[];
  termsAndPoliciesLinks: ISbLinkButton[];
  copyrightsText: string;
}

export interface MappedFooter extends SbBlokData, FooterProps {}

export const mapFooter = ({
  getInTouchDescription,
  cards,
  copyrightsText,
  emailInputCaptions,
  getInTouchLinkBtn,
  getInTouchTitle,
  linksColumn,
  subscriptionLabel,
  subscriptionTitle,
  termsAndPoliciesLinks,
  textSwiperWords,
  ...props
}: ISbFooter): MappedFooter => {
  return {
    getInTouchDescription,
    getInTouchTitle,
    getInTouchLinkBtn: mapLinkButton(getInTouchLinkBtn[0]),
    cards: cards.map(card => mapSocialCard(card)),
    copyrightsText,
    emailInputCaptions: mapInputCaptions(emailInputCaptions[0]),
    linksColumn: linksColumn.map(links => mapFooterLinkList(links)),
    subscriptionLabel,
    subscriptionTitle,
    termsAndPoliciesLinks: termsAndPoliciesLinks.map(btn => mapLinkButton(btn)),
    textSwiperWords: textSwiperWords.map(word => mapTextSwiperWord(word)),
    ...props
  };
};
