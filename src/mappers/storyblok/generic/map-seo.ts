// import { NextSeoProps } from "next-seo";

// export interface SbSeoFields {
//   description?: string;
//   title?: string;
//   ogTitle?: string;
//   ogDescription?: string;
//   ogImage?: string;
//   twitterTitle?: string;
//   twitterDescription?: string;
//   twitterImage?: string;
// }

// export const mapSeo = ({
//   title,
//   ogTitle,
//   description,
//   ogDescription,
//   ogImage
// }: SbSeoFields): NextSeoProps => {
//   return {
//     title: title || "Craftberry",
//     description: description || "Craftberry",
//     openGraph: {
//       title: ogTitle || title || "Craftberry",
//       description: ogDescription || description || "Craftberry",
//       ...(ogImage && {
//         images: [
//           {
//             url: ogImage
//           }
//         ]
//       })
//     }
//   };
// };
