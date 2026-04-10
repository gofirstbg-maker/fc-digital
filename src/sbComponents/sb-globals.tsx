import { Footer, Header } from "@/collections";
import { ICustomSbResult } from "@/types";
import { storyblokEditable } from "@storyblok/react";

// import { Footer, Header } from 'collections';
// import { MappedHeader } from 'mappers/storyblok/stories/map-header';

// export type MappedGlobalsTypes = MappedHeader;
export type MappedGlobalsTypes = any;

const globalsTypes = {
  header: Header,
  footer: Footer
};

export const SbGlobal: React.FC<ICustomSbResult<MappedGlobalsTypes>["data"]> = ({ story }) => {
  const { content } = story;

  const { _uid, _editable, component, ...globalProps } = content;

  //@ts-expect-error Will fix
  const Global = globalsTypes[component || ""];

  if (!Global) {
    return <div>Global {component} does not exist yet!</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useStoryblokState(story);

  return <Global {...globalProps} {...storyblokEditable({ _editable, _uid, component })} />;
};
