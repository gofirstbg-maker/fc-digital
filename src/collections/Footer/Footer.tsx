import React from "react";
import { FooterGetInTouch } from "./FooterGetInTouch";
import { FooterLinkListProps, LinkButtonProps } from "@/components";
import { cn } from "@/lib/utils";
import { FooterMarquee } from "./FooterMarquee";
import { FooterLinks } from "./FooterLinks";
import { SocialsCardProps } from "../Cards";
import { InputCaptions } from "../Forms";

export interface FooterProps {
  getInTouchDescription: string;
  getInTouchTitle: string;
  getInTouchLinkBtn: LinkButtonProps;
  textSwiperWords: string[];
  cards: SocialsCardProps[];
  linksColumn: FooterLinkListProps[];
  subscriptionLabel: string;
  subscriptionTitle: string;
  emailInputCaptions: InputCaptions;
  termsAndPoliciesLinks: LinkButtonProps[];
  copyrightsText: string;
}

export const Footer = ({
  getInTouchDescription,
  getInTouchTitle,
  getInTouchLinkBtn,
  textSwiperWords,
  cards,
  copyrightsText,
  emailInputCaptions,
  linksColumn,
  subscriptionLabel,
  subscriptionTitle,
  termsAndPoliciesLinks,
  className,
  ...props
}: FooterProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={cn("flex flex-col xs:gap-2.5 2xl:gap-5", className)} {...props}>
      <FooterGetInTouch
        description={getInTouchDescription}
        linkBtn={getInTouchLinkBtn}
        title={getInTouchTitle}
      />
      <FooterMarquee textSwiperWords={textSwiperWords} />
      <FooterLinks
        cards={cards}
        copyrightsText={copyrightsText}
        emailInputCaptions={emailInputCaptions}
        linksColumn={linksColumn}
        subscriptionLabel={subscriptionLabel}
        subscriptionTitle={subscriptionTitle}
        termsAndPoliciesLinks={termsAndPoliciesLinks}
      />
    </footer>
  );
};
