import { Roboto_Flex, Roboto_Mono } from "next/font/google";

export const robotoFlex = Roboto_Flex({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-flex",
  weight: ["400", "500", "600", "700"]
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
  weight: ["400", "500", "600", "700"]
});
