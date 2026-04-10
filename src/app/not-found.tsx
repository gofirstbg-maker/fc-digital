import { Container, SectionContainer, SectionHeading } from "@/components";
import React from "react";

export default function NotFound() {
  return (
    <main>
      <SectionContainer border className='mt-10'>
        <SectionHeading title='404 Page Not Found' />
        <Container className='flex items-center justify-center'>
          <h2 className='text-orange-50 xs:Heading-24-mono sm:Heading-32-mono mid:Heading-48-mono'>
            Sorry, route you try to access was not found...
          </h2>
        </Container>
      </SectionContainer>
    </main>
  );
}
