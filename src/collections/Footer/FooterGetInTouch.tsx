import { Button, Container, Icon, LinkButtonProps } from "@/components";
import Link from "next/link";
import React from "react";

export interface FooterGetInTouchProps {
  title: string;
  description: string;
  linkBtn: LinkButtonProps;
}

export const FooterGetInTouch = ({
  title,
  description,
  linkBtn
}: FooterGetInTouchProps & React.HTMLAttributes<HTMLDivElement>) => {
  const isExternalLink = linkBtn?.link && String(linkBtn.link.href).startsWith("https");

  return (
    <Container className='flex items-end bg-primary xs:flex-col xs:gap-4 xs:p-[30px] md:flex-row md:justify-between md:p-[60px] 2xl:p-20'>
      <div className='w-full md:max-w-[817px] 2xl:max-w-[1087px]'>
        <h2 className='md:Heading-32 mb-1 uppercase text-dark-06 xs:Heading-28-line-42 2xl:Heading-42'>
          {title}
        </h2>
        <p className='Body-16 w-full text-dark-15 2xl:max-w-[1180px]'>{description}</p>
      </div>
      <Button
        variant='filled'
        className='flex-shrink-0 bg-dark-06 uppercase text-orange-90 xs:Body-14 md:Body-16 xs:h-12 xs:w-full md:w-fit 2xl:h-[54px]'
        asChild
      >
        <Link href={isExternalLink ? linkBtn.link.href : `/${linkBtn.link.href}`}>
          {linkBtn.label}{" "}
          <span>
            <Icon name='ArrowTopRight' className='2x:w-7 text-primary xs:h-5 xs:w-5 2xl:h-7' />
          </span>
        </Link>
      </Button>
    </Container>
  );
};
