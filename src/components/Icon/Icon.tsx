import { cn } from "@/lib/utils";
import React, { type FunctionComponent, type SVGProps } from "react";
import { ArrowRight } from "./icons/ArrowRight";
import { ArrowTopRight } from "./icons/ArrowTopRight";
import { Minus } from "./icons/Minus";
import { Plus } from "./icons/Plus";
import { Bars } from "./icons/Bars";
import { Facebook } from "./icons/Facebook";
import { LinkedIn } from "./icons/LinkedIn";
import { Twitter } from "./icons/Twitter";
import { Instagram } from "./icons/Instagram";
import { WebAppDev } from "./icons/WebAppDev";
import { MobileAppDev } from "./icons/MobileAppDev";
import { WebDesign } from "./icons/WebDesign";
import { DigitalMarketing } from "./icons/DigitalMarketing";
import { MagicStick } from "./icons/MagicStick";
import { Balloon } from "./icons/Balloon";
import { Ghost } from "./icons/Ghost";
import { HandHeart } from "./icons/HandHeart";
import { RulerPen } from "./icons/RulerPen";
import { ShieldUser } from "./icons/ShieldUser";
import { Star } from "./icons/Star";
import { Stopwatch } from "./icons/Stopwatch";
import { ArrowDown } from "./icons/ArrowDown";
import { MedalStar } from "./icons/MedalStar";
import { Suitcase } from "./icons/Suitcase";
import { EyeDrop } from "./icons/EyeDrop";

export const iconMap = {
  ArrowRight,
  ArrowTopRight,
  ArrowDown,
  Minus,
  Plus,
  Bars,
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
  WebAppDev,
  MobileAppDev,
  WebDesign,
  DigitalMarketing,
  MagicStick,
  Balloon,
  Ghost,
  HandHeart,
  RulerPen,
  ShieldUser,
  Star,
  Stopwatch,
  MedalStar,
  Suitcase,
  EyeDrop
};

export type SVGIconComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface IconProps {
  name: Icon;
  width?: number;
  height?: number;
  fill?: string;
}

export type Icon = keyof typeof iconMap;

export const Icon = ({
  name,
  className,
  ...props
}: IconProps & React.SVGAttributes<SVGElement>) => {
  const SvgIcon: SVGIconComponent = iconMap[name];

  return <SvgIcon className={cn("inline text-secondary", className)} {...props} />;
};
