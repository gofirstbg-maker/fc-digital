import { Container, TextSwiper } from "@/components";
import React from "react";

export interface FooterMarqueeProps {
  textSwiperWords: string[];
}

export const FooterMarquee = ({ textSwiperWords }: FooterMarqueeProps) => {
  return (
    <Container className='bg-secondary'>
      <TextSwiper className='bg-secondary' items={textSwiperWords} />
    </Container>
  );
};
