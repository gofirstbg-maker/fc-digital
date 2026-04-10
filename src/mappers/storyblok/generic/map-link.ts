import { LinkProps } from "next/link";

export interface ISbLink {
  cached_url: string;
  fieldtype: "multilink";
  id: string;
  linktype: "story" | "url" | "asset" | "email";
  url: string;
  target: "_self" | "_blank";
}

type MapLinkReturnType<T extends { required: boolean } = { required: true }> =
  T["required"] extends false ? LinkProps | null : LinkProps;

export const mapLink = <T extends { required: boolean } = { required: true }>({
  cached_url,
  url,
  target,
  linktype
}: ISbLink) => {
  if (!cached_url && !url) return null as MapLinkReturnType<T>;

  let href = url;

  if (linktype === "story") href = cached_url === "home" ? "/" : cached_url;

  if (linktype === "email") href = `mailto:${url}`;

  return {
    href,
    target: target || "_self"
  } as MapLinkReturnType<T>;
};
