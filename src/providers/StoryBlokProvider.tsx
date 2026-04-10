import { apiPlugin, storyblokInit } from "@storyblok/react";
import { PropsWithChildren } from "react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_API_KEY,
  use: [apiPlugin]
});

export const StoryBlokProvider = ({ children }: PropsWithChildren) => {
  return children;
};
