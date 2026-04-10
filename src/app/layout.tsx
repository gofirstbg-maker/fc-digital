import type { Metadata } from "next";
import "./globals.css";
import { apiPlugin, RichTextSchema, storyblokInit } from "@storyblok/react";
import { robotoFlex, robotoMono } from "./font";
import { StoryBlokProvider } from "@/providers";
import { StoryblokService } from "@/services/storyblok";
import { MappedSbStory, mapStory } from "@/mappers/storyblok";
import { SbGlobal } from "@/sbComponents";
import { QueryCliProvider } from "@/providers/QueryClientProvider";

export const metadata: Metadata = {
  title: "FC Digital",
  description: "FC Digital"
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_API_KEY,
  richText: {
    schema: RichTextSchema
  },
  use: [apiPlugin]
});

async function fetchStoryHeader(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const header = await storyblokService.getStory("global/header", { version: "draft" });

  return mapStory(header);
}

async function fetchStoryFooter(): Promise<MappedSbStory> {
  const storyblokService = new StoryblokService();
  const footer = await storyblokService.getStory("global/footer", { version: "draft" });

  return mapStory(footer);
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mappedHeaderStory = await fetchStoryHeader();
  const mappedFooterStory = await fetchStoryFooter();

  return (
    <html lang='en' className={`${robotoFlex.variable} ${robotoMono.variable}`}>
      <body className='bg-dark-06 xs:px-4 xs:pb-5 xs:pt-10 md:px-10 md:pb-10 md:pt-[30px] 2xl:px-[50px] 2xl:pb-[50px] '>
        <StoryBlokProvider>
          <QueryCliProvider>
            <SbGlobal {...mappedHeaderStory} />
            {children}
            <SbGlobal {...mappedFooterStory} />
          </QueryCliProvider>
        </StoryBlokProvider>
      </body>
    </html>
  );
}
