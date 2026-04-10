import { Container, FooterLinkListProps, LinkButtonProps } from "@/components";
import React from "react";
import { FooterSocials } from "./FooterSocials";
import { SocialsCardProps } from "../Cards";
import { cn } from "@/lib/utils";
import { FooterNav } from "./FooterNav";
import { FooterSubscription } from "./FooterSubscription";
import { FooterCopyRights } from "./FooterCopyRights";
import { InputCaptions } from "../Forms";

export interface FooterLinksProps {
  cards: SocialsCardProps[];
  linksColumn: FooterLinkListProps[];
  subscriptionLabel: string;
  subscriptionTitle: string;
  emailInputCaptions: InputCaptions;
  termsAndPoliciesLinks: LinkButtonProps[];
  copyrightsText: string;
}

export const FooterLinks = ({
  cards,
  linksColumn,
  emailInputCaptions,
  subscriptionLabel,
  subscriptionTitle,
  copyrightsText,
  termsAndPoliciesLinks,
  className,
  ...props
}: FooterLinksProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container
      className={cn("flex !p-0 xs:flex-col xs:gap-2.5 xl:flex-row  2xl:gap-5", className)}
      {...props}
    >
      <FooterSocials cards={cards} className='xl:flex-shrink-0' />
      <div className='flex w-full flex-col xs:gap-2.5 2xl:gap-5'>
        <FooterNav linksColumn={linksColumn} />
        <FooterSubscription
          label={subscriptionLabel}
          title={subscriptionTitle}
          emailInputCaptions={emailInputCaptions}
        />
        <FooterCopyRights copyrightsText={copyrightsText} links={termsAndPoliciesLinks} />
      </div>
    </Container>
  );
};
