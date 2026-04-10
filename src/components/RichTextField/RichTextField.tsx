import React from "react";
import {
  MARK_LINK,
  NODE_HEADING,
  NODE_IMAGE,
  NODE_LI,
  NODE_PARAGRAPH,
  NODE_UL,
  StoryblokRichtext,
  render
} from "storyblok-rich-text-react-renderer";

import Link from "next/link";
import Image from "next/image";

export interface RichTextFieldProps {
  content: StoryblokRichtext;
}

export const RichTextField = ({ content }: RichTextFieldProps) => {
  return (
    <>
      {render(content, {
        markResolvers: {
          [MARK_LINK]: (children, props) => {
            const { linktype, href } = props;
            if (linktype === "email") {
              return (
                <Link
                  className=' text-inherit-size inline xs:p-0 xs:px-0  xs:py-0 md:px-0 md:py-0'
                  href={`mailto:${href}`}
                >
                  {children}
                </Link>
              );
            }
            return (
              <Link
                className='text-inherit-size inline xs:p-0  xs:px-0  xs:py-0 md:px-0 md:py-0'
                href={href!}
              >
                {children}
              </Link>
            );
          }
        },
        nodeResolvers: {
          [NODE_IMAGE]: (children, props) => {
            const { alt, src, title } = props;

            if (!src) {
              throw new Error("StoryBlok Image Asset missing");
            }

            const [width, height] = src.split("/")[5]?.split("x");

            return (
              <Image
                src={src}
                alt={alt || "StoryBlok Image Asset"}
                title={title || "StoryBlok Image Asset Title"}
                height={Number(height)}
                width={Number(width)}
                className='m-auto'
              />
            );
          },
          [NODE_HEADING]: (children, props) => {
            const { level } = props;
            if (level === 1) {
              return (
                <h1 className='mb-4 text-left text-orange-95 xs:text-[31px] md:text-[38px]'>
                  {children}
                </h1>
              );
            } else if (level === 2) {
              return (
                <h2 className='mb-4 text-left text-orange-95 xs:text-[28px] md:text-[34px]'>
                  {children}
                </h2>
              );
            } else if (level === 3) {
              return (
                <h3 className='mb-4 text-left text-orange-95 xs:text-[25px] md:text-[28px]'>
                  {children}
                </h3>
              );
            } else if (level === 4) {
              return (
                <h4 className=' mb-4 text-left font-semibold text-orange-95 md:text-[1.5rem]'>
                  {children}
                </h4>
              );
            } else if (level === 5) {
              return <h5 className='mb-4 text-left text-xl text-orange-95'>{children}</h5>;
            } else {
              return <h6 className='mb-4 text-left text-lg text-orange-95'>{children}</h6>;
            }
          },
          [NODE_PARAGRAPH]: children => {
            return (
              <p className='mb-4 text-base font-normal text-grey-70 xs:pl-5 md:pl-10 2xl:pl-[50px]'>
                {children}
              </p>
            );
          },
          [NODE_UL]: children => {
            return <ul className='pl-6'>{children}</ul>;
          },
          [NODE_LI]: children => {
            return <li className='list-disc'>{children}</li>;
          }
        }
      })}
    </>
  );
};
